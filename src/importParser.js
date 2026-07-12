function parseImportedQuestionSet(rawInput) {
  const parsed = typeof rawInput === 'string' ? parseJsonText(rawInput) : rawInput;
  const subject = String(parsed.subject || parsed.course || parsed.mon || 'Môn học import').trim();
  const title = String(parsed.title || parsed.name || `Bộ câu hỏi ${subject}`).trim();
  const questions = Array.isArray(parsed.questions) ? parsed.questions : [];

  if (!questions.length) {
    const error = new Error('JSON import phải có mảng questions và ít nhất 1 câu hỏi.');
    error.status = 400;
    throw error;
  }

  const normalizedQuestions = questions.map((question, index) => normalizeImportedQuestion({
    question,
    index,
    subject,
    title
  }));

  return {
    summary: `Đã nạp ${normalizedQuestions.length} câu hỏi cho ${subject}.`,
    subject,
    title,
    topics: [...new Set(normalizedQuestions.map((question) => question.topic).filter(Boolean))],
    questions: normalizedQuestions,
    schemaVersion: 4,
    source: 'manual-import'
  };
}

function parseJsonText(text) {
  const cleaned = String(text || '')
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    const wrapped = new Error(`JSON import không hợp lệ: ${error.message}`);
    wrapped.status = 400;
    throw wrapped;
  }
}

function normalizeImportedQuestion({ question, index, subject, title }) {
  const prompt = String(question.prompt || question.question || question.cau_hoi || '').trim();
  const options = normalizeOptions(question.options || question.choices || question.dap_an_trac_nghiem);
  const questionType = normalizeQuestionType(question.questionType || question.type || question.kieu_cau_hoi, options);
  const answer = normalizeAnswer(question.answer || question.correctAnswer || question.dap_an, questionType);
  const explanation = String(question.explanation || question.giai_thich || '').trim();
  const optionKeys = Object.keys(options);

  const invalidChoice = questionType !== 'fill' && (
    optionKeys.length < 2 ||
    normalizeAnswerList(answer).some((letter) => !optionKeys.includes(letter))
  );
  const invalidFill = questionType === 'fill' && !normalizeAnswerList(answer).length;

  if (!prompt || invalidChoice || invalidFill || !explanation) {
    const error = new Error(`Câu ${index + 1} thiếu prompt/options/answer/explanation hoặc answer không khớp options.`);
    error.status = 400;
    throw error;
  }

  const tips = Array.isArray(question.tips || question.meo)
    ? (question.tips || question.meo).map((tip) => String(tip).trim()).filter(Boolean)
    : [];

  const optionAnalysis = question.optionAnalysis || question.phan_tich_lua_chon || {};

  return {
    id: `import-${Date.now()}-${index + 1}`,
    number: index + 1,
    generated: true,
    imported: true,
    source: title,
    subject: String(question.subject || subject).trim(),
    chapter: String(question.chapter || question.chuong || 'Chưa phân chương').trim(),
    topic: String(question.topic || question.chu_de || 'Chưa phân chủ đề').trim(),
    difficulty: String(question.difficulty || question.do_kho || 'Trung bình').trim(),
    questionType,
    prompt,
    options,
    answer,
    answerText: answerTextFor(options, answer, questionType),
    explanation,
    example: String(question.example || question.vi_du || '').trim(),
    tips,
    optionAnalysis: normalizeOptionAnalysis(optionAnalysis, options, answer),
    table: normalizeTable(question.table || question.bang),
    tables: normalizeTables(question.tables || question.cac_bang),
    chart: normalizeChart(question.chart || question.do_thi || question.bieu_do),
    timeline: normalizeTimeline(question.timeline || question.gantt || question.bieu_do_gantt),
    sourceHint: String(question.sourceHint || question.nguon || title).trim()
  };
}

function normalizeOptions(options) {
  const normalized = {};
  if (Array.isArray(options)) {
    options.forEach((option, index) => {
      const letter = String.fromCharCode(65 + index);
      const value = typeof option === 'object' && option !== null
        ? option.text || option.label || option.value
        : option;
      if (index < 8 && String(value || '').trim()) normalized[letter] = String(value).trim();
    });
    return normalized;
  }

  for (const letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
    const value = options?.[letter] || options?.[letter.toLowerCase()];
    if (String(value || '').trim()) normalized[letter] = String(value).trim();
  }
  return normalized;
}

function normalizeQuestionType(value, options) {
  const raw = String(value || '').trim().toLowerCase();
  if (['multiple', 'multi', 'chon_nhieu', 'chọn nhiều', 'multiple_choice'].includes(raw)) return 'multiple';
  if (['fill', 'text', 'short_answer', 'dien_dap_an', 'điền đáp án'].includes(raw)) return 'fill';
  return Object.keys(options).length ? 'single' : 'fill';
}

function normalizeAnswer(answer, questionType) {
  if (questionType === 'multiple') return normalizeAnswerList(answer);
  if (questionType === 'fill') {
    const values = Array.isArray(answer) ? answer : [answer];
    return values.map((item) => String(item || '').trim()).filter(Boolean);
  }
  return String(Array.isArray(answer) ? answer[0] : answer || '').trim().toUpperCase();
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
    String(optionAnalysis?.[letter] || optionAnalysis?.[letter.toLowerCase()] || fallbackOptionAnalysis(answer, letter)).trim()
  ]));
}

function fallbackOptionAnalysis(answer, letter) {
  return normalizeAnswerList(answer).includes(letter)
    ? 'Đây là đáp án đúng theo giải thích.'
    : 'Đây là phương án nhiễu; đối chiếu giải thích để thấy điểm sai.';
}

function normalizeTables(tables) {
  if (!Array.isArray(tables)) return [];
  return tables.map(normalizeTable).filter(Boolean);
}

function normalizeTable(table) {
  if (!table || typeof table !== 'object') return null;
  const columns = Array.isArray(table.columns || table.headers)
    ? (table.columns || table.headers).map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  const rows = Array.isArray(table.rows)
    ? table.rows
      .filter((row) => Array.isArray(row))
      .map((row) => row.map((cell) => String(cell ?? '').trim()))
      .filter((row) => row.some(Boolean))
    : [];

  if (!columns.length || !rows.length) return null;
  return {
    caption: String(table.caption || table.title || '').trim(),
    columns,
    rows
  };
}

function normalizeChart(chart) {
  if (!chart || typeof chart !== 'object') return null;
  const data = Array.isArray(chart.data || chart.points)
    ? (chart.data || chart.points).map(normalizeChartPoint).filter(Boolean)
    : [];
  if (!data.length) return null;

  const type = String(chart.type || '').toLowerCase() === 'line' ? 'line' : 'bar';
  return {
    type,
    title: String(chart.title || chart.caption || '').trim(),
    xLabel: String(chart.xLabel || chart.x_label || '').trim(),
    yLabel: String(chart.yLabel || chart.y_label || '').trim(),
    data
  };
}

function normalizeChartPoint(point, index) {
  if (Array.isArray(point)) {
    const value = Number(point[1]);
    if (!Number.isFinite(value)) return null;
    return {
      label: String(point[0] ?? index + 1).trim(),
      value
    };
  }

  if (!point || typeof point !== 'object') return null;
  const value = Number(point.value ?? point.y ?? point.count);
  if (!Number.isFinite(value)) return null;
  return {
    label: String(point.label ?? point.x ?? index + 1).trim(),
    value
  };
}

function normalizeTimeline(timeline) {
  if (!timeline || typeof timeline !== 'object') return null;
  const segments = Array.isArray(timeline.segments || timeline.items)
    ? (timeline.segments || timeline.items).map(normalizeTimelineSegment).filter(Boolean)
    : [];
  if (!segments.length) return null;

  return {
    caption: String(timeline.caption || timeline.title || '').trim(),
    unit: String(timeline.unit || '').trim(),
    segments
  };
}

function normalizeTimelineSegment(segment, index) {
  if (!segment || typeof segment !== 'object') return null;
  const start = Number(segment.start);
  const end = Number(segment.end);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return null;
  return {
    label: String(segment.label || segment.name || `S${index + 1}`).trim(),
    start,
    end
  };
}

module.exports = {
  parseImportedQuestionSet
};
