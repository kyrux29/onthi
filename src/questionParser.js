const CHAPTER_PATTERN = /^##\s+(Chương\s+\d+\s+-\s+.+)$/;
const QUESTION_PATTERN = /^###\s+Câu\s+(\d+)\.\s+(.+)$/;
const OPTION_PATTERN = /^([A-D])\.\s+(.+)$/;

function stripMarkdown(value = '') {
  return value
    .replace(/<\/?details>/g, '')
    .replace(/<summary>.*?<\/summary>/gis, '')
    .replace(/\*\*/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseQuestionBlock(block, chapter) {
  const firstLine = block.split(/\r?\n/, 1)[0];
  const heading = firstLine.match(QUESTION_PATTERN);
  if (!heading) return null;

  const number = Number(heading[1]);
  const prompt = heading[2].trim();
  const lines = block.split(/\r?\n/);
  const options = {};
  let currentOption = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('###') || line.startsWith('<') || line.startsWith('**')) {
      continue;
    }

    const optionMatch = line.match(OPTION_PATTERN);
    if (optionMatch) {
      currentOption = optionMatch[1];
      options[currentOption] = optionMatch[2].trim();
      continue;
    }

    if (currentOption && !line.startsWith('**Đáp án') && !line.startsWith('**Giải thích')) {
      options[currentOption] = `${options[currentOption]} ${line}`.trim();
    }
  }

  const answerMatch = block.match(/\*\*Đáp án:\s*([A-D])\.\*\*\s*([\s\S]*?)(?=\n\s*\*\*Giải thích:|\n\s*<\/details>|$)/);
  const explanationMatch = block.match(/\*\*Giải thích:\*\*\s*([\s\S]*?)(?=\n\s*<\/details>|$)/);
  const answer = answerMatch ? answerMatch[1] : '';
  const answerText = stripMarkdown(answerMatch ? answerMatch[2] : options[answer] || '');
  const explanation = stripMarkdown(explanationMatch ? explanationMatch[1] : '');

  return {
    id: `q-${String(number).padStart(3, '0')}`,
    number,
    chapter,
    questionType: 'single',
    prompt,
    options,
    answer,
    answerText,
    explanation,
    topic: inferTopic({ prompt, chapter, answerText, explanation }),
    tips: buildTips({ prompt, chapter, answerText, explanation }),
    source: 'bo_400_cau_trac_nghiem_OS.md',
    generated: false
  };
}

function inferTopic(question) {
  const haystack = `${question.chapter} ${question.prompt} ${question.explanation} ${question.answerText}`.toLowerCase();

  if (/fcfs|sjf|srtf|round robin|rr|turnaround|waiting|response|cpu/.test(haystack)) {
    return 'Điều phối CPU';
  }

  if (/tiến trình|process|luồng|thread|ipc|ready|running|waiting|pcb/.test(haystack)) {
    return 'Tiến trình và luồng';
  }

  if (/semaphore|mutex|monitor|đoạn găng|critical|producer|consumer|đồng bộ/.test(haystack)) {
    return 'Đồng bộ tiến trình';
  }

  if (/deadlock|bế tắc|banker|available|need|safe/.test(haystack)) {
    return 'Bế tắc';
  }

  if (/page|frame|phân trang|tlb|fifo|lru|optimal|belady|bộ nhớ|địa chỉ/.test(haystack)) {
    return 'Quản lý bộ nhớ';
  }

  if (/fat|inode|cluster|file|thư mục|bitmap|directory/.test(haystack)) {
    return 'Hệ thống file';
  }

  if (/scan|look|c-look|c-scan|sstf|cylinder|đĩa|i\/o|vào ra|seek/.test(haystack)) {
    return 'Vào ra và đĩa';
  }

  if (/kernel|system call|lời gọi hệ thống|ngắt|trap|dma|driver|shell|hệ điều hành/.test(haystack)) {
    return 'Tổng quan hệ điều hành';
  }

  return question.chapter || 'Khác';
}

function parseQuestionBank(markdown) {
  const lines = markdown.split(/\r?\n/);
  const questions = [];
  let chapter = 'Chưa phân chương';
  let currentBlock = [];

  const flushBlock = () => {
    if (!currentBlock.length) return;
    const parsed = parseQuestionBlock(currentBlock.join('\n'), chapter);
    if (parsed) questions.push(parsed);
    currentBlock = [];
  };

  for (const line of lines) {
    const chapterMatch = line.match(CHAPTER_PATTERN);
    if (chapterMatch) {
      flushBlock();
      chapter = chapterMatch[1].trim();
      continue;
    }

    if (line.match(QUESTION_PATTERN)) {
      flushBlock();
      currentBlock = [line];
      continue;
    }

    if (line.startsWith('## Bảng đáp án nhanh')) {
      flushBlock();
      break;
    }

    if (currentBlock.length) currentBlock.push(line);
  }

  flushBlock();
  return questions;
}

function buildTips(question) {
  const haystack = `${question.prompt} ${question.explanation} ${question.answerText}`.toLowerCase();
  const tips = [];

  if (/đúng nhất|hiểu đúng nhất|mô tả đúng nhất|phát biểu nào/.test(haystack)) {
    tips.push('Với câu hỏi định nghĩa, chọn phương án khái quát đúng bản chất trước, không chọn ví dụ quá hẹp.');
  }

  if (/fcfs|sjf|srtf|round robin|rr|ưu tiên|turnaround|waiting|response/.test(haystack)) {
    tips.push('Bài điều phối CPU nên lập bảng arrival, burst, finish rồi tính turnaround = finish - arrival và waiting = turnaround - burst.');
  }

  if (/semaphore|mutex|critical|đoạn găng|monitor|producer|consumer|deadlock|bế tắc|banker|available|need/.test(haystack)) {
    tips.push('Bài đồng bộ/bế tắc cần tách rõ loại trừ lẫn nhau, giữ-và-chờ, không thu hồi, chờ vòng; với Banker luôn kiểm tra chuỗi an toàn.');
  }

  if (/page|frame|phân trang|trang|offset|tlb|fifo|lru|optimal|belady|địa chỉ/.test(haystack)) {
    tips.push('Bài bộ nhớ nên đổi địa chỉ bằng page = address // page_size và offset = address % page_size, sau đó mới tra bảng trang.');
  }

  if (/fat|cluster|inode|file|thư mục|bitmap|free space|date|time/.test(haystack)) {
    tips.push('Bài hệ thống file thường xoay quanh ánh xạ file -> block/cluster và cách quản lý vùng trống; chú ý đơn vị byte, sector, cluster.');
  }

  if (/scan|look|c-look|c-scan|sstf|cylinder|đầu đọc|seek|rotational|transfer|đĩa/.test(haystack)) {
    tips.push('Bài điều phối đĩa nên vẽ trục cylinder, đánh dấu vị trí đầu đọc và đi đúng chiều của thuật toán trước khi cộng quãng đường.');
  }

  if (/lời gọi hệ thống|kernel|ngắt|trap|dma|driver|shell|user mode|chế độ nhân/.test(haystack)) {
    tips.push('Nhóm tổng quan HĐH hay đánh lừa giữa cơ chế phần cứng, dịch vụ kernel và chương trình tiện ích; xác định tầng đang được hỏi trước.');
  }

  if (question.answerText) {
    tips.push(`Từ khóa neo của đáp án đúng: "${shortAnchor(question.answerText)}".`);
  }

  return [...new Set(tips)].slice(0, 3);
}

function shortAnchor(text) {
  const cleaned = stripMarkdown(text);
  if (cleaned.length <= 92) return cleaned;
  return `${cleaned.slice(0, 89).trim()}...`;
}

module.exports = {
  parseQuestionBank,
  buildTips,
  inferTopic,
  stripMarkdown
};
