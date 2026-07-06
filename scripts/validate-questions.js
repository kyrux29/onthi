const fs = require('fs');
const path = require('path');
const { parseQuestionBank } = require('../src/questionParser');

const markdownPath = path.join(__dirname, '..', 'bo_400_cau_trac_nghiem_OS.md');
const markdown = fs.readFileSync(markdownPath, 'utf8');
const questions = parseQuestionBank(markdown);

const invalid = questions.filter((question) => {
  const optionKeys = Object.keys(question.options).sort().join('');
  return (
    optionKeys !== 'ABCD' ||
    !question.answer ||
    !question.options[question.answer] ||
    !question.explanation ||
    !question.tips.length
  );
});

if (questions.length !== 400 || invalid.length) {
  console.error(`Parser lỗi: đọc được ${questions.length}/400 câu, ${invalid.length} câu không hợp lệ.`);
  for (const question of invalid.slice(0, 10)) {
    console.error(`${question.id}: options=${Object.keys(question.options).join(',')} answer=${question.answer}`);
  }
  process.exit(1);
}

const chapters = new Map();
for (const question of questions) {
  chapters.set(question.chapter, (chapters.get(question.chapter) || 0) + 1);
}

console.log(`OK: ${questions.length} câu, ${chapters.size} chương.`);
for (const [chapter, count] of chapters) {
  console.log(`- ${chapter}: ${count}`);
}
