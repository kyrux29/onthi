const fs = require('fs/promises');
const path = require('path');
const { parseQuestionBank } = require('./questionParser');

const DEFAULT_BANK_FILE = 'bo_400_cau_trac_nghiem_OS.md';

async function listQuestionBanks(rootDir) {
  const candidates = await findMarkdownBanks(rootDir);
  const banks = [];

  for (const filePath of candidates) {
    const markdown = await fs.readFile(filePath, 'utf8');
    const questions = parseQuestionBank(markdown);
    if (!questions.length) continue;

    const relativePath = path.relative(rootDir, filePath);
    const title = readTitle(markdown) || titleFromPath(filePath);
    const subject = subjectFromPath(rootDir, filePath, title);
    const id = slugify(relativePath);

    banks.push({
      id,
      title,
      subject,
      path: relativePath,
      total: questions.length,
      chapters: [...new Set(questions.map((question) => question.chapter))],
      topics: [...new Set(questions.map((question) => question.topic).filter(Boolean))]
    });
  }

  return banks.sort((a, b) => {
    if (a.path === DEFAULT_BANK_FILE) return -1;
    if (b.path === DEFAULT_BANK_FILE) return 1;
    return a.subject.localeCompare(b.subject, 'vi') || a.title.localeCompare(b.title, 'vi');
  });
}

async function loadQuestionBank(rootDir, id) {
  const banks = await listQuestionBanks(rootDir);
  const bank = id ? banks.find((item) => item.id === id) : banks[0];
  if (!bank) {
    const error = new Error('Không tìm thấy bộ câu hỏi.');
    error.status = 404;
    throw error;
  }

  const markdown = await fs.readFile(path.join(rootDir, bank.path), 'utf8');
  const questions = parseQuestionBank(markdown).map((question) => ({
    ...question,
    bankId: bank.id,
    subject: bank.subject,
    bankTitle: bank.title
  }));

  return {
    ...bank,
    questions
  };
}

async function findMarkdownBanks(rootDir) {
  const files = [];
  const roots = [rootDir, path.join(rootDir, 'subjects')];

  for (const searchRoot of roots) {
    if (!(await exists(searchRoot))) continue;
    await walk(searchRoot, files);
  }

  return [...new Set(files)]
    .filter((filePath) => !filePath.includes(`${path.sep}node_modules${path.sep}`))
    .filter((filePath) => path.basename(filePath).toLowerCase() !== 'readme.md');
}

async function walk(dir, files) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git'].includes(entry.name)) continue;
      await walk(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(fullPath);
    }
  }
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function readTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function titleFromPath(filePath) {
  return path.basename(filePath, path.extname(filePath)).replace(/[_-]+/g, ' ');
}

function subjectFromPath(rootDir, filePath, fallbackTitle) {
  const relativePath = path.relative(rootDir, filePath);
  const parts = relativePath.split(path.sep);
  if (parts[0] === 'subjects' && parts[1]) {
    return parts[1].replace(/[_-]+/g, ' ');
  }

  if (path.basename(filePath) === DEFAULT_BANK_FILE) {
    return 'Nguyên lý hệ điều hành';
  }

  return fallbackTitle;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  listQuestionBanks,
  loadQuestionBank
};
