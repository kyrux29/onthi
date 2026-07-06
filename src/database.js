const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const databaseUrl = process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING;
const pool = databaseUrl
  ? new Pool({
      connectionString: databaseUrl,
      ssl: shouldUseSSL() ? { rejectUnauthorized: false } : undefined
    })
  : null;
let ready = false;

async function initDatabase() {
  if (!pool) return false;

  await pool.query(`
    create table if not exists ai_runs (
      id text primary key,
      created_at timestamptz not null default now(),
      file_names jsonb not null default '[]'::jsonb,
      count_requested integer not null default 0,
      difficulty text not null default '',
      focus text not null default '',
      prompt_frame text not null default '',
      request_prompt text not null default '',
      summary text not null default '',
      topics jsonb not null default '[]'::jsonb,
      warning text,
      questions jsonb not null default '[]'::jsonb,
      schema_version integer not null default 1
    );

    create table if not exists ai_run_documents (
      id bigserial primary key,
      run_id text not null references ai_runs(id) on delete cascade,
      file_name text not null,
      extracted_text text not null default '',
      created_at timestamptz not null default now()
    );

    create table if not exists client_progress (
      client_id text primary key,
      progress jsonb not null default '{}'::jsonb,
      updated_at timestamptz not null default now()
    );

    create table if not exists users (
      id text primary key,
      username text not null unique,
      password_hash text not null,
      role text not null default 'user' check (role in ('admin', 'user')),
      created_at timestamptz not null default now()
    );

    create table if not exists user_progress (
      user_id text primary key references users(id) on delete cascade,
      progress jsonb not null default '{}'::jsonb,
      updated_at timestamptz not null default now()
    );
  `);

  await ensureDefaultAdmin();
  await migrateAIRunOwnership();
  ready = true;
  return true;
}

function isDatabaseConfigured() {
  return Boolean(pool);
}

function isDatabaseReady() {
  return ready;
}

async function saveAIRun({ extracted, result, params, ownerUserId, shared = false }) {
  requireDatabase();
  const id = randomUUID();
  const client = await pool.connect();

  try {
    await client.query('begin');
    const fileNames = extracted.map((item) => item.name);

    await client.query(
      `insert into ai_runs (
        id,
        file_names,
        count_requested,
        difficulty,
        focus,
        prompt_frame,
        request_prompt,
        summary,
        topics,
        warning,
        questions,
        schema_version,
        owner_user_id,
        shared
      ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
      [
        id,
        JSON.stringify(fileNames),
        Number(params.count) || result.questions?.length || 0,
        String(params.difficulty || ''),
        String(params.focus || ''),
        String(params.promptFrame || ''),
        String(result.requestPrompt || ''),
        String(result.summary || ''),
        JSON.stringify(result.topics || []),
        result.warning || null,
        JSON.stringify(result.questions || []),
        Number(result.schemaVersion) || 1,
        ownerUserId || null,
        Boolean(shared)
      ]
    );

    for (const item of extracted) {
      await client.query(
        `insert into ai_run_documents (run_id, file_name, extracted_text)
         values ($1, $2, $3)`,
        [id, item.name, item.text]
      );
    }

    await client.query('commit');
    return {
      id,
      createdAt: new Date().toISOString()
    };
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

async function listAIRuns({ limit = 30, user }) {
  requireDatabase();
  const safeLimit = Math.min(Math.max(Number(limit) || 30, 1), 100);
  const params = [safeLimit];
  const where = user?.role === 'admin'
    ? ''
    : 'where ai_runs.shared = true or ai_runs.owner_user_id = $2';
  if (where) params.push(user.id);

  const { rows } = await pool.query(
    `select
      ai_runs.id,
      ai_runs.created_at as "createdAt",
      ai_runs.file_names as "fileNames",
      ai_runs.count_requested as "countRequested",
      ai_runs.difficulty,
      ai_runs.focus,
      ai_runs.summary,
      ai_runs.topics,
      ai_runs.warning,
      ai_runs.owner_user_id as "ownerUserId",
      ai_runs.shared,
      users.username as "ownerUsername",
      jsonb_array_length(ai_runs.questions) as "questionCount"
    from ai_runs
    left join users on users.id = ai_runs.owner_user_id
    ${where}
    order by ai_runs.created_at desc
    limit $1`,
    params
  );

  return rows;
}

async function listSavedQuestionBanks({ limit = 100, user }) {
  requireDatabase();
  const safeLimit = Math.min(Math.max(Number(limit) || 100, 1), 300);
  const params = [safeLimit];
  const accessWhere = user?.role === 'admin'
    ? ''
    : 'and (ai_runs.shared = true or ai_runs.owner_user_id = $2)';
  if (accessWhere) params.push(user.id);

  const { rows } = await pool.query(
    `select
      ai_runs.id,
      ai_runs.created_at as "createdAt",
      ai_runs.focus,
      ai_runs.file_names as "fileNames",
      ai_runs.topics,
      ai_runs.owner_user_id as "ownerUserId",
      ai_runs.shared,
      users.username as "ownerUsername",
      jsonb_array_length(ai_runs.questions) as "total",
      coalesce(ai_runs.questions->0->>'subject', 'Bộ câu hỏi đã nạp') as subject,
      coalesce(nullif(ai_runs.focus, ''), ai_runs.file_names->>0, 'Bộ câu hỏi đã nạp') as title,
      (
        select coalesce(jsonb_agg(distinct q->>'chapter'), '[]'::jsonb)
        from jsonb_array_elements(ai_runs.questions) as q
        where coalesce(q->>'chapter', '') <> ''
      ) as chapters
    from ai_runs
    left join users on users.id = ai_runs.owner_user_id
    where jsonb_array_length(ai_runs.questions) > 0
    ${accessWhere}
    order by ai_runs.created_at desc
    limit $1`,
    params
  );

  return rows.map((row) => ({
    id: `run:${row.id}`,
    runId: row.id,
    title: row.title,
    subject: row.subject,
    path: `database:${row.id}`,
    total: Number(row.total) || 0,
    chapters: row.chapters || [],
    topics: row.topics || [],
    source: 'database',
    createdAt: row.createdAt,
    fileNames: row.fileNames || [],
    ownerUserId: row.ownerUserId,
    ownerUsername: row.ownerUsername,
    shared: Boolean(row.shared)
  }));
}

async function getAIRun(id, user) {
  requireDatabase();
  const { rows } = await pool.query(
    `select
      id,
      created_at as "createdAt",
      file_names as "fileNames",
      count_requested as "countRequested",
      difficulty,
      focus,
      prompt_frame as "promptFrame",
      request_prompt as "requestPrompt",
      summary,
      topics,
      warning,
      questions,
      schema_version as "schemaVersion",
      owner_user_id as "ownerUserId",
      shared
    from ai_runs
    where id = $1`,
    [id]
  );

  if (!rows[0]) return null;
  if (!canAccessAIRun(rows[0], user)) return null;

  const docs = await pool.query(
    `select
      file_name as "fileName",
      length(extracted_text) as "textLength",
      left(extracted_text, 600) as preview
    from ai_run_documents
    where run_id = $1
    order by id`,
    [id]
  );

  return {
    ...rows[0],
    runId: rows[0].id,
    documents: docs.rows
  };
}

async function getProgress(userId) {
  requireDatabase();
  const { rows } = await pool.query(
    `select progress, updated_at as "updatedAt"
     from user_progress
     where user_id = $1`,
    [userId]
  );

  if (!rows[0]) {
    return {
      found: false,
      progress: { answers: {}, bookmarks: [] }
    };
  }

  return {
    found: true,
    progress: normalizeProgress(rows[0].progress),
    updatedAt: rows[0].updatedAt
  };
}

async function saveProgress(userId, progress) {
  requireDatabase();
  const normalized = normalizeProgress(progress);

  await pool.query(
    `insert into user_progress (user_id, progress, updated_at)
     values ($1, $2, now())
     on conflict (user_id)
     do update set progress = excluded.progress, updated_at = now()`,
    [userId, JSON.stringify(normalized)]
  );

  return normalized;
}

async function setAIRunShared(id, shared) {
  requireDatabase();
  const { rows } = await pool.query(
    `update ai_runs
     set shared = $2
     where id = $1
     returning id, shared`,
    [id, Boolean(shared)]
  );
  return rows[0] || null;
}

async function ensureDefaultAdmin() {
  const { rows } = await pool.query('select id from users where username = $1 limit 1', ['kyrux']);
  if (rows[0]) return;

  await createUser({
    username: 'kyrux',
    password: 'admin',
    role: 'admin'
  });
}

async function migrateAIRunOwnership() {
  await pool.query(`
    alter table ai_runs add column if not exists owner_user_id text;
    alter table ai_runs add column if not exists shared boolean not null default false;
  `);

  const { rows } = await pool.query('select id from users where username = $1 limit 1', ['kyrux']);
  const adminId = rows[0]?.id;
  if (!adminId) return;

  await pool.query(
    `update ai_runs
     set owner_user_id = coalesce(owner_user_id, $1),
         shared = true
     where owner_user_id is null`,
    [adminId]
  );
}

async function createUser({ username, password, role = 'user' }) {
  requireDatabase({ allowDuringInit: true });
  const normalizedUsername = normalizeUsername(username);
  const normalizedRole = role === 'admin' ? 'admin' : 'user';

  if (!normalizedUsername) {
    const error = new Error('Username không hợp lệ.');
    error.status = 400;
    throw error;
  }

  if (!password || String(password).length < 4) {
    const error = new Error('Mật khẩu phải có ít nhất 4 ký tự.');
    error.status = 400;
    throw error;
  }

  const passwordHash = await bcrypt.hash(String(password), 12);
  const id = randomUUID();

  try {
    const { rows } = await pool.query(
      `insert into users (id, username, password_hash, role)
       values ($1, $2, $3, $4)
       returning id, username, role, created_at as "createdAt"`,
      [id, normalizedUsername, passwordHash, normalizedRole]
    );
    return rows[0];
  } catch (error) {
    if (error.code === '23505') {
      const duplicate = new Error('Username đã tồn tại.');
      duplicate.status = 409;
      throw duplicate;
    }
    throw error;
  }
}

async function findUserByUsername(username) {
  requireDatabase();
  const { rows } = await pool.query(
    `select id, username, password_hash as "passwordHash", role, created_at as "createdAt"
     from users
     where username = $1`,
    [normalizeUsername(username)]
  );
  return rows[0] || null;
}

async function findUserById(id) {
  requireDatabase();
  const { rows } = await pool.query(
    `select id, username, role, created_at as "createdAt"
     from users
     where id = $1`,
    [id]
  );
  return rows[0] || null;
}

async function listUsers() {
  requireDatabase();
  const { rows } = await pool.query(
    `select id, username, role, created_at as "createdAt"
     from users
     order by created_at desc`
  );
  return rows;
}

async function changeUserPassword({ userId, currentPassword, newPassword }) {
  requireDatabase();
  if (!newPassword || String(newPassword).length < 4) {
    const error = new Error('Mật khẩu mới phải có ít nhất 4 ký tự.');
    error.status = 400;
    throw error;
  }

  const { rows } = await pool.query(
    `select id, password_hash as "passwordHash"
     from users
     where id = $1`,
    [userId]
  );

  const user = rows[0];
  const passwordMatches = user
    ? await bcrypt.compare(String(currentPassword || ''), user.passwordHash)
    : false;

  if (!user || !passwordMatches) {
    const error = new Error('Mật khẩu hiện tại không đúng.');
    error.status = 401;
    throw error;
  }

  const passwordHash = await bcrypt.hash(String(newPassword), 12);
  await pool.query(
    `update users
     set password_hash = $2
     where id = $1`,
    [userId, passwordHash]
  );

  return { ok: true };
}

function normalizeProgress(progress) {
  return {
    answers: progress?.answers && typeof progress.answers === 'object' ? progress.answers : {},
    bookmarks: Array.isArray(progress?.bookmarks) ? progress.bookmarks : []
  };
}

function normalizeUsername(username) {
  return String(username || '').trim().toLowerCase();
}

function shouldUseSSL() {
  return process.env.DATABASE_SSL === 'true' ||
    process.env.PGSSLMODE === 'require' ||
    /sslmode=require/i.test(databaseUrl || '');
}

function canAccessAIRun(run, user) {
  return user?.role === 'admin' || run.shared || run.ownerUserId === user?.id;
}

function requireDatabase(options = {}) {
  if (!pool) {
    const error = new Error('Database chưa được cấu hình. Hãy chạy bằng Docker Compose hoặc đặt DATABASE_URL.');
    error.status = 503;
    throw error;
  }

  if (!ready && !options.allowDuringInit) {
    const error = new Error('Database chưa sẵn sàng, thử lại sau vài giây.');
    error.status = 503;
    throw error;
  }
}

async function closeDatabase() {
  if (pool) await pool.end();
}

module.exports = {
  closeDatabase,
  changeUserPassword,
  createUser,
  findUserById,
  findUserByUsername,
  getAIRun,
  getProgress,
  initDatabase,
  isDatabaseConfigured,
  isDatabaseReady,
  listUsers,
  listSavedQuestionBanks,
  listAIRuns,
  saveAIRun,
  saveProgress,
  setAIRunShared
};
