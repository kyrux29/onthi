require('dotenv').config();

const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const express = require('express');
const multer = require('multer');
const { listQuestionBanks, loadQuestionBank } = require('./src/questionBanks');
const { compactText, extractTextFromFile } = require('./src/documentText');
const { generateQuestionsWithAI } = require('./src/aiGenerator');
const { parseImportedQuestionSet } = require('./src/importParser');
const {
  addAIRunQuestion,
  closeDatabase,
  changeUserPassword,
  createUser,
  deleteAIRunQuestion,
  ensureDatabaseReady,
  findUserById,
  findUserByUsername,
  getAIRun,
  getDatabaseError,
  getProgress,
  initDatabase,
  isDatabaseConfigured,
  isDatabaseReady,
  listAIRuns,
  listRanking,
  listSavedQuestionBanks,
  listUsers,
  saveAIRun,
  saveProgress,
  setAIRunShared,
  updateAIRunQuestion,
  updateUserRole
} = require('./src/database');

const app = express();
const port = Number(process.env.PORT) || 3000;
const rootDir = __dirname;
const authCookieName = 'exam_auth';
const authSecret = process.env.AUTH_SECRET || process.env.SUPABASE_JWT_SECRET || 'dev-auth-secret-change-me';
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024,
    files: 6
  }
});

app.use(express.json({ limit: '12mb' }));
app.use(express.static(path.join(rootDir, 'public')));

app.post('/api/auth/login', async (req, res, next) => {
  try {
    await waitForDatabase();
    const user = await findUserByUsername(req.body.username);
    const passwordMatches = user
      ? await bcrypt.compare(String(req.body.password || ''), user.passwordHash)
      : false;

    if (!user || !passwordMatches) {
      res.status(401).json({ error: 'Sai username hoặc mật khẩu.' });
      return;
    }

    const publicUser = toPublicUser(user);
    setSessionCookie(res, publicUser);
    res.json({ user: publicUser });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/logout', (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true });
});

app.get('/api/auth/me', attachUser, (req, res) => {
  res.json({
    authenticated: Boolean(req.user),
    user: req.user || null
  });
});

app.get('/api/health', (req, res) => {
  const databaseError = getDatabaseError();
  res.json({
    ok: true,
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    model: process.env.OPENAI_MODEL || 'gpt-5.5',
    databaseConfigured: isDatabaseConfigured(),
    databaseReady: isDatabaseReady(),
    databaseError: databaseError ? sanitizeErrorMessage(databaseError.message) : ''
  });
});

app.use('/api', requireAuth);

app.get('/api/admin/users', requireAdmin, async (req, res, next) => {
  try {
    res.json({ users: await listUsers() });
  } catch (error) {
    next(error);
  }
});

app.post('/api/admin/users', requireAdmin, async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

app.patch('/api/admin/users/:id/role', requireAdmin, async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      res.status(400).json({ error: 'Không thể đổi quyền của tài khoản đang đăng nhập.' });
      return;
    }

    const user = await updateUserRole({
      userId: req.params.id,
      role: req.body.role
    });

    if (!user) {
      res.status(404).json({ error: 'Không tìm thấy tài khoản.' });
      return;
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
});

app.put('/api/account/password', async (req, res, next) => {
  try {
    await changeUserPassword({
      userId: req.user.id,
      currentPassword: req.body.currentPassword,
      newPassword: req.body.newPassword
    });
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get('/api/subjects', async (req, res, next) => {
  try {
    const banks = await listQuestionBanks(rootDir);
    const savedBanks = isDatabaseReady() ? await listSavedQuestionBanks({ limit: 200, user: req.user }) : [];
    res.json({
      total: banks.length + savedBanks.length,
      banks: [...savedBanks, ...banks]
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/questions', async (req, res, next) => {
  try {
    if (String(req.query.bankId || '').startsWith('run:')) {
      const runId = String(req.query.bankId).slice(4);
      const run = await getAIRun(runId, req.user);
      if (!run) {
        res.status(404).json({ error: 'Không tìm thấy bộ câu hỏi đã nạp.' });
        return;
      }

      const questions = (run.questions || []).map((question, index) => ({
        ...question,
        id: question.id || `run-${runId}-${index + 1}`,
        number: index + 1,
        bankId: `run:${runId}`,
        bankTitle: run.focus || run.fileNames?.[0] || 'Bộ câu hỏi đã nạp',
        subject: question.subject || 'Bộ câu hỏi đã nạp'
      }));
      const chapters = [...new Set(questions.map((question) => question.chapter).filter(Boolean))];
      const topics = [...new Set(questions.map((question) => question.topic).filter(Boolean))];

      res.json({
        total: questions.length,
        bank: {
          id: `run:${runId}`,
          title: run.focus || run.fileNames?.[0] || 'Bộ câu hỏi đã nạp',
          subject: questions[0]?.subject || 'Bộ câu hỏi đã nạp',
          path: `database:${runId}`,
          source: 'database',
          shared: Boolean(run.shared),
          ownerUserId: run.ownerUserId,
          runId
        },
        chapters,
        topics,
        questions
      });
      return;
    }

    const bank = await loadQuestionBank(rootDir, req.query.bankId);
    const questions = bank.questions;
    const chapters = [...new Set(questions.map((question) => question.chapter))];
    const topics = [...new Set(questions.map((question) => question.topic).filter(Boolean))];

    res.json({
      total: questions.length,
      bank: {
        id: bank.id,
        title: bank.title,
        subject: bank.subject,
        path: bank.path
      },
      chapters,
      topics,
      questions
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/question-banks/:id/questions', requireQuestionEditor, async (req, res, next) => {
  try {
    const question = parseQuestionPayload(req.body);
    const result = await addAIRunQuestion({
      id: req.params.id,
      question,
      user: req.user
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

app.put('/api/question-banks/:id/questions/:number', requireQuestionEditor, async (req, res, next) => {
  try {
    const question = parseQuestionPayload(req.body);
    const result = await updateAIRunQuestion({
      id: req.params.id,
      questionNumber: req.params.number,
      question,
      user: req.user
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/question-banks/:id/questions/:number', requireQuestionEditor, async (req, res, next) => {
  try {
    const result = await deleteAIRunQuestion({
      id: req.params.id,
      questionNumber: req.params.number,
      user: req.user
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post('/api/ai/generate', upload.array('documents', 6), async (req, res, next) => {
  try {
    if (!req.files?.length) {
      res.status(400).json({ error: 'Vui lòng chọn ít nhất một file tài liệu.' });
      return;
    }

    const extracted = await Promise.all(
      req.files.map(async (file) => {
        const text = await extractTextFromFile(file);
        return {
          name: file.originalname,
          text: compactText(text, 22000)
        };
      })
    );

    const mergedText = compactText(
      extracted.map((item) => `# ${item.name}\n${item.text}`).join('\n\n---\n\n'),
      65000
    );

    if (!mergedText) {
      res.status(422).json({ error: 'Không trích xuất được chữ từ tài liệu đã upload.' });
      return;
    }

    const apiKey = resolveAIKeyForRequest(req);
    const result = await generateQuestionsWithAI({
      text: mergedText,
      fileNames: extracted.map((item) => item.name),
      apiKey,
      count: req.body.count,
      difficulty: req.body.difficulty,
      focus: req.body.focus,
      promptFrame: req.body.promptFrame,
      subject: req.body.subject,
      chapter: req.body.chapter,
      topic: req.body.topic
    });

    if (isDatabaseConfigured()) {
      try {
        const run = await saveAIRun({
          extracted,
          result,
          ownerUserId: req.user.id,
          shared: req.user.role === 'admin' && parseBoolean(req.body.shared, true),
          params: {
            count: req.body.count,
            difficulty: req.body.difficulty,
            focus: req.body.focus,
            promptFrame: req.body.promptFrame,
            subject: req.body.subject,
            chapter: req.body.chapter,
            topic: req.body.topic
          }
        });
        result.runId = run.id;
        result.createdAt = run.createdAt;
      } catch (storageError) {
        result.storageWarning = `Không lưu được lịch sử vào database: ${storageError.message}`;
      }
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post('/api/import/questions', async (req, res, next) => {
  try {
    const result = parseImportedQuestionSet(req.body.raw || req.body);
    result.requestPrompt = '';
    result.warning = '';

    if (isDatabaseConfigured()) {
      try {
        const run = await saveAIRun({
          extracted: [{
            name: `${result.title}.json`,
            text: req.body.raw ? String(req.body.raw) : JSON.stringify(req.body, null, 2)
          }],
          result,
          ownerUserId: req.user.id,
          shared: req.user.role === 'admin' && parseBoolean(req.body.shared, true),
          params: {
            count: result.questions.length,
            difficulty: 'Import',
            focus: result.title,
            promptFrame: 'Manual JSON import'
          }
        });
        result.runId = run.id;
        result.createdAt = run.createdAt;
      } catch (storageError) {
        result.storageWarning = `Không lưu được import vào database: ${storageError.message}`;
      }
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/api/ai/runs', async (req, res, next) => {
  try {
    res.json({
      runs: await listAIRuns({ limit: req.query.limit, user: req.user })
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/ai/runs/:id', async (req, res, next) => {
  try {
    const run = await getAIRun(req.params.id, req.user);
    if (!run) {
      res.status(404).json({ error: 'Không tìm thấy lịch sử AI này.' });
      return;
    }

    res.json(run);
  } catch (error) {
    next(error);
  }
});

app.patch('/api/admin/ai/runs/:id/share', requireAdmin, async (req, res, next) => {
  try {
    const run = await setAIRunShared(req.params.id, req.body.shared);
    if (!run) {
      res.status(404).json({ error: 'Không tìm thấy bộ câu hỏi.' });
      return;
    }
    res.json({ run });
  } catch (error) {
    next(error);
  }
});

app.get('/api/progress', async (req, res, next) => {
  try {
    res.json(await getProgress(req.user.id));
  } catch (error) {
    next(error);
  }
});

app.put('/api/progress', async (req, res, next) => {
  try {
    const progress = await saveProgress(req.user.id, req.body.progress || req.body);
    res.json({
      ok: true,
      progress
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/ranking', async (req, res, next) => {
  try {
    res.json({ ranking: await listRanking({ limit: req.query.limit }) });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, _next) => {
  if (error.code?.startsWith?.('LIMIT_')) {
    res.status(400).json({ error: `Upload không hợp lệ: ${error.message}` });
    return;
  }

  const status = error.status || 500;
  res.status(status).json({
    error: error.message || 'Có lỗi xảy ra trên server.'
  });
});

async function attachUser(req, res, next) {
  try {
    await waitForDatabase();
    const token = parseCookies(req.headers.cookie)[authCookieName];
    const session = verifySessionToken(token);
    if (!session) {
      req.user = null;
      next();
      return;
    }

    const user = await findUserById(session.userId);
    req.user = user ? toPublicUser(user) : null;
    if (!req.user) clearSessionCookie(res);
    next();
  } catch (error) {
    next(error);
  }
}

async function waitForDatabase() {
  if (!isDatabaseConfigured() || isDatabaseReady()) return;
  await databaseReady;
  if (!isDatabaseReady()) await ensureDatabaseReady();
}

function sanitizeErrorMessage(message = '') {
  return String(message)
    .replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, 'postgres://***@')
    .replace(/password=[^&\s]+/gi, 'password=***')
    .replace(/:[^:@/\s]+@/g, ':***@');
}

function requireAuth(req, res, next) {
  attachUser(req, res, (error) => {
    if (error) {
      next(error);
      return;
    }

    if (!req.user) {
      res.status(401).json({ error: 'Vui lòng đăng nhập để sử dụng hệ thống.' });
      return;
    }

    next();
  });
}

function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    res.status(403).json({ error: 'Chỉ admin mới được thực hiện thao tác này.' });
    return;
  }
  next();
}

function requireQuestionEditor(req, res, next) {
  if (!['admin', 'editor'].includes(req.user?.role)) {
    res.status(403).json({ error: 'Chỉ admin hoặc editor mới được chỉnh sửa câu hỏi.' });
    return;
  }
  next();
}

function parseQuestionPayload(body = {}) {
  const question = body.question || body;
  return parseImportedQuestionSet({
    subject: question.subject || body.subject || 'Môn học import',
    title: body.title || question.source || 'Câu hỏi chỉnh sửa',
    questions: [question]
  }).questions[0];
}

function resolveAIKeyForRequest(req) {
  if (req.user?.role === 'admin') {
    if (!process.env.OPENAI_API_KEY) {
      const error = new Error('Admin chưa cấu hình OPENAI_API_KEY trên server.');
      error.status = 503;
      throw error;
    }
    return process.env.OPENAI_API_KEY;
  }

  const apiKey = String(req.body.apiKey || '').trim();
  if (!apiKey) {
    const error = new Error('User thường phải nhập API key cá nhân để dùng AI tài liệu.');
    error.status = 403;
    throw error;
  }
  return apiKey;
}

function parseBoolean(value, fallback = false) {
  if (value === undefined || value === null || value === '') return fallback;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

function setSessionCookie(res, user) {
  const maxAge = 7 * 24 * 60 * 60 * 1000;
  res.cookie(authCookieName, createSessionToken(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge
  });
}

function clearSessionCookie(res) {
  res.clearCookie(authCookieName, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false
  });
}

function createSessionToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000
  };
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = sign(body);
  return `${body}.${signature}`;
}

function verifySessionToken(token) {
  if (!token || !token.includes('.')) return null;
  const [body, signature] = token.split('.');
  if (!body || !signature || !timingSafeEqual(signature, sign(body))) return null;

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!payload.userId || Number(payload.exp) < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function sign(value) {
  return crypto.createHmac('sha256', authSecret).update(value).digest('base64url');
}

function timingSafeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((cookies, part) => {
    const [rawKey, ...rawValue] = part.trim().split('=');
    if (!rawKey) return cookies;
    cookies[rawKey] = decodeURIComponent(rawValue.join('=') || '');
    return cookies;
  }, {});
}

function toPublicUser(user) {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt
  };
}

const databaseReady = initDatabase()
  .then((enabled) => {
    console.log(enabled ? 'Database ready.' : 'Database disabled: DATABASE_URL is not set.');
    return enabled;
  })
  .catch((error) => {
    console.error(`Database unavailable: ${error.message}`);
    return false;
  });

if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`OS Exam Trainer running at http://localhost:${port}`);
  });

  server.on('error', (error) => {
    console.error(`Không khởi động được server: ${error.message}`);
    process.exitCode = 1;
  });

  process.on('SIGINT', () => {
    server.close(async () => {
      await closeDatabase();
      process.exit(0);
    });
  });
}

module.exports = app;
module.exports.databaseReady = databaseReady;
