const path = require('path');

const TEXT_EXTENSIONS = new Set(['.txt', '.md', '.csv', '.log']);

async function extractTextFromFile(file) {
  const extension = path.extname(file.originalname || '').toLowerCase();

  if (TEXT_EXTENSIONS.has(extension)) {
    return file.buffer.toString('utf8');
  }

  if (extension === '.pdf') {
    const { PDFParse } = require('pdf-parse');
    const parser = new PDFParse({ data: file.buffer });
    try {
      const parsed = await parser.getText();
      return parsed.text || '';
    } finally {
      await parser.destroy();
    }
  }

  if (extension === '.docx') {
    const mammoth = require('mammoth');
    const parsed = await mammoth.extractRawText({ buffer: file.buffer });
    return parsed.value || '';
  }

  throw new Error(`Chưa hỗ trợ định dạng ${extension || 'không rõ'} cho file ${file.originalname}.`);
}

function compactText(text, maxChars = 55000) {
  return String(text || '')
    .replace(/\u0000/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxChars);
}

module.exports = {
  compactText,
  extractTextFromFile
};
