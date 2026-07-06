const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-5.4';
const DEFAULT_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const MAX_GENERATED_QUESTIONS = 200;
const BATCH_SIZE = 20;
const MIN_RETRY_QUESTIONS = 4;

const questionSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    summary: {
      type: 'string',
      description: 'Tóm tắt ngắn nội dung tài liệu theo hướng ôn thi.'
    },
    topics: {
      type: 'array',
      items: { type: 'string' },
      description: 'Các chủ đề hoặc khái niệm chính nên ôn.'
    },
    questions: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          prompt: { type: 'string' },
          questionType: { type: 'string', enum: ['single', 'multiple', 'fill'] },
          options: {
            type: 'object',
            additionalProperties: false,
            properties: {
              A: { type: 'string' },
              B: { type: 'string' },
              C: { type: 'string' },
              D: { type: 'string' },
              E: { type: 'string' },
              F: { type: 'string' },
              G: { type: 'string' },
              H: { type: 'string' }
            }
          },
          answer: {
            anyOf: [
              { type: 'string' },
              { type: 'array', items: { type: 'string' } }
            ]
          },
          explanation: {
            type: 'string',
            description: 'Giải thích rõ tại sao đáp án đúng, kèm lập luận loại trừ các ý dễ nhầm.'
          },
          example: {
            type: 'string',
            description: 'Ví dụ cụ thể trong môn Nguyên lý hệ điều hành hoặc bài toán OS liên quan.'
          },
          tips: {
            type: 'array',
            items: { type: 'string' },
            description: 'Mẹo nhận dạng dạng bài, công thức, hoặc cách loại trừ đáp án khi gặp lại.'
          },
          optionAnalysis: {
            type: 'object',
            additionalProperties: false,
            properties: {
              A: { type: 'string' },
              B: { type: 'string' },
              C: { type: 'string' },
              D: { type: 'string' },
              E: { type: 'string' },
              F: { type: 'string' },
              G: { type: 'string' },
              H: { type: 'string' }
            },
            description: 'Phân tích ngắn từng lựa chọn, nêu đúng/sai ở đâu.'
          },
          subject: { type: 'string' },
          chapter: { type: 'string' },
          topic: { type: 'string' },
          difficulty: { type: 'string', enum: ['Dễ', 'Trung bình', 'Khó'] },
          sourceHint: { type: 'string' }
        },
        required: [
          'prompt',
          'questionType',
          'options',
          'answer',
          'explanation',
          'example',
          'tips',
          'optionAnalysis',
          'subject',
          'chapter',
          'topic',
          'difficulty',
          'sourceHint'
        ]
      }
    }
  },
  required: ['summary', 'topics', 'questions']
};

async function generateQuestionsWithAI({
  text,
  fileNames,
  count,
  difficulty,
  focus,
  promptFrame,
  subject,
  chapter,
  topic,
  apiKey = process.env.OPENAI_API_KEY
}) {
  if (!apiKey) {
    throw new Error('Thiếu OPENAI_API_KEY. Tạo file .env từ .env.example rồi chạy lại server.');
  }

  const requestedCount = Math.min(Math.max(Number(count) || 8, 1), MAX_GENERATED_QUESTIONS);
  const selectedDifficulty = difficulty || 'Trung bình';
  const selectedSubject = subject || 'Môn học từ tài liệu';
  const selectedChapter = chapter || 'Tự xác định theo tài liệu';
  const selectedTopic = topic || focus || 'Tự xác định theo tài liệu';
  const selectedFocus = focus || selectedTopic;
  const batchCount = Math.ceil(requestedCount / BATCH_SIZE);
  const results = [];
  const warnings = [];

  for (let batchIndex = 0; batchIndex < batchCount; batchIndex += 1) {
    const remaining = requestedCount - results.length;
    const currentCount = Math.min(BATCH_SIZE, remaining);

    if (currentCount <= 0) break;

    try {
      const result = await requestQuestionGeneration({
        text,
        fileNames,
        apiKey,
        count: currentCount,
        difficulty: selectedDifficulty,
        focus: selectedFocus,
        promptFrame,
        subject: selectedSubject,
        chapter: selectedChapter,
        topic: selectedTopic,
        batchIndex,
        batchCount,
        existingPrompts: results.map((question) => question.prompt).slice(-40)
      });
      results.push(...result.questions);
      warnings.push(result.warning);
    } catch (error) {
      if (!error.retryable || currentCount <= MIN_RETRY_QUESTIONS) {
        throw error;
      }

      const retryCount = Math.max(MIN_RETRY_QUESTIONS, Math.ceil(currentCount * 0.6));
      const retryResult = await requestQuestionGeneration({
        text,
        fileNames,
        apiKey,
        count: retryCount,
        difficulty: selectedDifficulty,
        focus: selectedFocus,
        promptFrame,
        subject: selectedSubject,
        chapter: selectedChapter,
        topic: selectedTopic,
        batchIndex,
        batchCount,
        existingPrompts: results.map((question) => question.prompt).slice(-40),
        retryReason: error.message
      });
      results.push(...retryResult.questions);
      warnings.push(`Batch ${batchIndex + 1} bị lỗi JSON/incomplete nên tạo ${retryCount}/${currentCount} câu.`);
    }
  }

  const grouped = sortGeneratedQuestions(results.slice(0, requestedCount)).map((question, index) => ({
    ...question,
    number: index + 1
  }));

  return {
    summary: `Đã tạo ${grouped.length}/${requestedCount} câu cho ${selectedSubject}, sắp xếp theo chương và chủ đề.`,
    topics: [...new Set(grouped.map((question) => question.topic).filter(Boolean))],
    questions: grouped,
    requestPrompt: buildRequestPrompt({
      fileNames,
      count: requestedCount,
      difficulty: selectedDifficulty,
      focus: selectedFocus,
      promptFrame,
      subject: selectedSubject,
      chapter: selectedChapter,
      topic: selectedTopic,
      batchIndex: 0,
      batchCount,
      text: '[Tài liệu được gửi theo từng batch, ẩn trong bản xem trước]'
    }),
    warning: warnings.filter(Boolean).join(' '),
    schemaVersion: 3,
    batchSize: BATCH_SIZE,
    requestedCount
  };
}

async function requestQuestionGeneration({
  text,
  fileNames,
  apiKey,
  count,
  difficulty,
  focus,
  promptFrame,
  retryReason,
  subject,
  chapter,
  topic,
  batchIndex = 0,
  batchCount = 1,
  existingPrompts = []
}) {
  const requestPrompt = buildRequestPrompt({
    fileNames,
    count,
    difficulty,
    focus,
    promptFrame,
    retryReason,
    subject,
    chapter,
    topic,
    batchIndex,
    batchCount,
    existingPrompts,
    text
  });

  const payload = {
    model: DEFAULT_MODEL,
    input: [
      {
        role: 'system',
        content: [
          'Bạn là trợ lý tạo đề ôn thi trắc nghiệm bằng tiếng Việt.',
          'Hãy tạo câu hỏi sát tài liệu, có 4 lựa chọn A-D, một đáp án đúng, giải thích chi tiết, ví dụ trong môn và mẹo làm nhanh.',
          'Được phép tạo 3 kiểu câu: single, multiple, fill. Câu single có một đáp án; multiple có nhiều đáp án đúng; fill là câu điền đáp án ngắn.',
          'Không bịa ngoài tài liệu nếu không cần; nếu tài liệu thiếu ngữ cảnh thì tạo câu hỏi khái niệm dựa trên phần đã có.',
          'Mẹo làm nhanh phải ngắn, thực dụng, giúp loại trừ đáp án hoặc nhớ công thức.',
          'Mỗi câu phải có subject, chapter và topic rõ ràng để hệ thống sắp xếp theo môn, chương, chủ đề.',
          'Luôn trả đúng JSON schema; không thêm markdown, không thêm lời chào.'
        ].join(' ')
      },
      {
        role: 'user',
        content: requestPrompt
      }
    ],
    reasoning: { effort: 'high' },
    max_output_tokens: outputTokenBudget(count),
    text: {
      format: {
        type: 'json_schema',
        name: 'exam_question_generation',
        strict: true,
        schema: questionSchema
      }
    }
  };

  const response = await fetch(`${DEFAULT_BASE_URL.replace(/\/$/, '')}/responses`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || `OpenAI API lỗi HTTP ${response.status}`;
    throw new Error(message);
  }

  if (data.status === 'incomplete') {
    const reason = data.incomplete_details?.reason || 'không rõ nguyên nhân';
    const error = new Error(`OpenAI trả output chưa hoàn chỉnh (${reason}).`);
    error.retryable = true;
    throw error;
  }

  const textOutput = extractResponseText(data);
  if (!textOutput) {
    throw new Error('OpenAI API không trả về nội dung JSON.');
  }

  const parsed = parseStructuredJson(textOutput);
  validateGeneratedPayload(parsed);
  parsed.questions = parsed.questions.slice(0, count).map((question, index) => normalizeGeneratedQuestion({
    question,
    index,
    fileNames,
    batchIndex,
    subject,
    topic
  }));
  parsed.requestPrompt = redactDocumentBody(requestPrompt);
  parsed.schemaVersion = 2;
  return parsed;
}

function buildRequestPrompt({
  fileNames,
  count,
  difficulty,
  focus,
  promptFrame,
  retryReason,
  subject,
  chapter,
  topic,
  batchIndex = 0,
  batchCount = 1,
  existingPrompts = [],
  text
}) {
  const frame = String(promptFrame || '').trim() || defaultPromptFrame();

  return [
    '# Nhiệm vụ',
    frame,
    '',
    '# Tham số tạo đề',
    `- File nguồn: ${fileNames.join(', ')}`,
    `- Số câu cần tạo: ${count}`,
    `- Batch: ${batchIndex + 1}/${batchCount}`,
    `- Môn: ${subject || 'Tự xác định theo tài liệu'}`,
    `- Chương ưu tiên: ${chapter || 'Tự xác định theo tài liệu'}`,
    `- Chủ đề ưu tiên: ${topic || focus || 'Tự xác định theo tài liệu'}`,
    `- Độ khó ưu tiên: ${difficulty}`,
    `- Trọng tâm: ${focus}`,
    retryReason ? `- Ghi chú retry: Request trước lỗi "${retryReason}". Lần này ưu tiên câu ngắn hơn để JSON không bị cắt.` : '',
    existingPrompts.length ? `- Tránh tạo trùng các câu đã có: ${existingPrompts.join(' | ')}` : '',
    '',
    '# Khung bắt buộc cho từng câu',
    '- Câu hỏi: một câu rõ ràng, kiểm tra đúng khái niệm hoặc kỹ năng trong tài liệu.',
    '- Kiểu câu questionType: single, multiple hoặc fill.',
    '- Câu single: có 4-8 lựa chọn A-H, answer là một chữ cái.',
    '- Câu multiple: có 4-8 lựa chọn A-H, answer là mảng chữ cái đúng, ví dụ ["A","C"].',
    '- Câu fill: không cần lựa chọn; options là object rỗng {}, answer là mảng các đáp án text được chấp nhận; vẫn bắt buộc có explanation/example/tips đầy đủ.',
    '- Giải thích: giải thích vì sao đáp án đúng; với single/multiple chỉ ra điểm sai hoặc bẫy của các lựa chọn còn lại nếu có; với fill nêu vì sao đáp án ngắn đúng và các cách viết tương đương.',
    '- Ví dụ trong môn: đưa ví dụ cụ thể thuộc Nguyên lý hệ điều hành, như tiến trình, điều phối CPU, semaphore, deadlock, phân trang, FAT hoặc điều phối đĩa.',
    '- Mẹo khi gặp: nêu 2-4 mẹo nhận dạng dạng bài, công thức, cách vẽ bảng/trục hoặc cách loại trừ đáp án.',
    '- Phân loại: mỗi câu phải ghi đúng subject, chapter, topic; nếu tài liệu có chương thì giữ tên chương trong tài liệu.',
    '- Sắp xếp nội dung: ưu tiên tạo theo thứ tự chương trước, chủ đề sau, độ khó tăng dần nếu có thể.',
    '',
    '# Tài liệu',
    text
  ].filter((line) => line !== '').join('\n');
}

function defaultPromptFrame() {
  return [
    'Hãy phân tích tài liệu được upload và tạo bộ câu hỏi ôn thi trắc nghiệm cho môn học tương ứng.',
    'Ưu tiên câu hỏi có tính thi cử: định nghĩa, phân biệt khái niệm, bài tính ngắn, bẫy thường gặp.',
    'Mỗi câu phải có questionType. Tạo phối hợp câu một đáp án, chọn nhiều đáp án và điền đáp án khi tài liệu phù hợp. Câu fill vẫn phải có giải thích, ví dụ và mẹo làm bài. Câu trắc nghiệm có thể có 4-8 lựa chọn A-H.'
  ].join(' ');
}

function redactDocumentBody(prompt) {
  return prompt.replace(/# Tài liệu[\s\S]*$/u, '# Tài liệu\n[Đã gửi nội dung tài liệu upload, ẩn trong bản xem trước]');
}

function normalizeGeneratedQuestion({ question, index, fileNames, batchIndex = 0, subject, topic }) {
  const options = normalizeOptions(question.options);
  const questionType = normalizeQuestionType(question.questionType, options);
  const answer = normalizeAnswer(question.answer, questionType, options);
  const tips = Array.isArray(question.tips)
    ? question.tips.map((tip) => String(tip).trim()).filter(Boolean)
    : [String(question.tips || '').trim()].filter(Boolean);
  const optionAnalysis = question.optionAnalysis || {};

  return {
    id: `ai-${Date.now()}-${batchIndex + 1}-${index + 1}`,
    number: (batchIndex * BATCH_SIZE) + index + 1,
    generated: true,
    source: fileNames.join(', '),
    questionType,
    prompt: String(question.prompt || ''),
    options,
    answer,
    answerText: answerTextFor(options, answer, questionType),
    explanation: String(question.explanation || ''),
    example: String(question.example || ''),
    tips,
    optionAnalysis: normalizeOptionAnalysis(optionAnalysis, options, answer),
    subject: String(question.subject || subject || 'Môn học từ tài liệu'),
    chapter: String(question.chapter || 'AI tạo từ tài liệu'),
    topic: String(question.topic || topic || 'Tự xác định theo tài liệu'),
    difficulty: String(question.difficulty || 'Trung bình'),
    sourceHint: String(question.sourceHint || fileNames.join(', '))
  };
}

function extractResponseText(data) {
  if (typeof data.output_text === 'string') return data.output_text;

  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.parsed && typeof content.parsed === 'object') {
        chunks.push(JSON.stringify(content.parsed));
        continue;
      }
      if (typeof content.text === 'string') chunks.push(content.text);
    }
  }

  return chunks.join('').trim();
}

function parseStructuredJson(text) {
  try {
    return JSON.parse(text);
  } catch (firstError) {
    const cleaned = stripJsonDecorations(text);
    try {
      return JSON.parse(cleaned);
    } catch {
      const error = new Error(`OpenAI trả JSON không hợp lệ: ${firstError.message}. Hãy giảm số câu hoặc thử lại.`);
      error.retryable = true;
      throw error;
    }
  }
}

function stripJsonDecorations(text) {
  const withoutFence = String(text)
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
  const firstBrace = withoutFence.indexOf('{');
  const lastBrace = withoutFence.lastIndexOf('}');
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return withoutFence.slice(firstBrace, lastBrace + 1);
  }
  return withoutFence;
}

function validateGeneratedPayload(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('OpenAI không trả về object JSON.');
  }

  if (!Array.isArray(parsed.questions)) {
    throw new Error('JSON từ OpenAI thiếu mảng questions.');
  }

  if (!parsed.questions.length) {
    throw new Error('OpenAI không tạo được câu hỏi nào từ tài liệu.');
  }

  const invalid = parsed.questions.find((question) => (
    !question.prompt ||
    !isValidGeneratedQuestion(question) ||
    !question.explanation ||
    !question.example
  ));

  if (invalid) {
    throw new Error('JSON từ OpenAI thiếu trường bắt buộc trong một hoặc nhiều câu hỏi.');
  }
}

function outputTokenBudget(count) {
  return Math.min(24000, Math.max(12000, count * 1400));
}

function sortGeneratedQuestions(questions) {
  const difficultyOrder = new Map([
    ['Dễ', 1],
    ['Trung bình', 2],
    ['Khó', 3]
  ]);

  return [...questions].sort((a, b) => (
    String(a.subject || '').localeCompare(String(b.subject || ''), 'vi') ||
    String(a.chapter || '').localeCompare(String(b.chapter || ''), 'vi', { numeric: true }) ||
    String(a.topic || '').localeCompare(String(b.topic || ''), 'vi') ||
    (difficultyOrder.get(a.difficulty) || 9) - (difficultyOrder.get(b.difficulty) || 9) ||
    a.number - b.number
  ));
}

function fallbackOptionAnalysis(answer, letter) {
  return normalizeAnswerList(answer).includes(letter)
    ? 'Đây là lựa chọn đúng theo giải thích.'
    : 'Đây là lựa chọn nhiễu; đối chiếu với giải thích để thấy điểm sai.';
}

function normalizeOptions(options = {}) {
  const normalized = {};
  for (const letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
    const value = options?.[letter] || options?.[letter.toLowerCase()];
    if (String(value || '').trim()) normalized[letter] = String(value).trim();
  }
  return normalized;
}

function normalizeQuestionType(value, options) {
  const type = String(value || '').toLowerCase();
  if (type === 'multiple' || type === 'fill') return type;
  return Object.keys(options).length ? 'single' : 'fill';
}

function normalizeAnswer(answer, questionType, options) {
  if (questionType === 'fill') {
    const values = Array.isArray(answer) ? answer : [answer];
    return values.map((item) => String(item || '').trim()).filter(Boolean);
  }
  const valid = Object.keys(options);
  if (questionType === 'multiple') {
    return normalizeAnswerList(answer).filter((letter) => valid.includes(letter));
  }
  const letter = String(Array.isArray(answer) ? answer[0] : answer || '').trim().toUpperCase();
  return valid.includes(letter) ? letter : valid[0] || 'A';
}

function normalizeAnswerList(answer) {
  if (Array.isArray(answer)) {
    return answer.map((item) => String(item || '').trim().toUpperCase()).filter(Boolean);
  }
  return String(answer || '')
    .split(/[,\s;]+/)
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean);
}

function answerTextFor(options, answer, questionType) {
  if (questionType === 'fill') return (Array.isArray(answer) ? answer : [answer]).map((item) => String(item || '').trim()).filter(Boolean).join(' / ');
  return normalizeAnswerList(answer).map((letter) => options[letter]).filter(Boolean).join(' / ');
}

function normalizeOptionAnalysis(optionAnalysis, options, answer) {
  return Object.fromEntries(Object.keys(options).map((letter) => [
    letter,
    String(optionAnalysis?.[letter] || optionAnalysis?.[letter.toLowerCase()] || fallbackOptionAnalysis(answer, letter))
  ]));
}

function isValidGeneratedQuestion(question) {
  const options = normalizeOptions(question.options);
  const type = normalizeQuestionType(question.questionType, options);
  const answer = normalizeAnswer(question.answer, type, options);
  if (!question.prompt) return false;
  if (type === 'fill') return normalizeAnswerList(answer).length > 0;
  if (Object.keys(options).length < 2) return false;
  return normalizeAnswerList(answer).length > 0;
}

module.exports = {
  generateQuestionsWithAI,
  requestQuestionGeneration,
  buildRequestPrompt,
  defaultPromptFrame
};
