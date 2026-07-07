const STORAGE_KEY_PREFIX = 'os-exam-trainer-progress-v2';

const state = {
  banks: [],
  activeBankId: '',
  activeBank: null,
  baseQuestions: [],
  generatedQuestions: [],
  filtered: [],
  currentIndex: 0,
  progress: { answers: {}, bookmarks: [] },
  ranking: [],
  aiResult: null,
  currentUser: null,
  appStarted: false,
  progressSyncTimer: null,
  studyTimer: null,
  questionEditMode: null,
  questionEditTargetId: null
};

const els = {
  authScreen: document.querySelector('#auth-screen'),
  appShell: document.querySelector('.app-shell'),
  loginForm: document.querySelector('#login-form'),
  loginMessage: document.querySelector('#login-message'),
  userStatus: document.querySelector('#user-status'),
  logout: document.querySelector('#logout-btn'),
  adminTabs: document.querySelectorAll('.admin-only'),
  userApiKeyFields: document.querySelectorAll('.user-api-key-field'),
  createUserForm: document.querySelector('#create-user-form'),
  adminMessage: document.querySelector('#admin-message'),
  userList: document.querySelector('#user-list'),
  refreshUsers: document.querySelector('#refresh-users-btn'),
  homeGreeting: document.querySelector('#home-greeting'),
  homeSummary: document.querySelector('#home-summary'),
  homeScore: document.querySelector('#home-score'),
  homeDone: document.querySelector('#home-done'),
  homeCorrect: document.querySelector('#home-correct'),
  homeBookmarks: document.querySelector('#home-bookmarks'),
  homeBanks: document.querySelector('#home-banks'),
  homeBankList: document.querySelector('#home-bank-list'),
  quickActions: document.querySelectorAll('#home-panel [data-action]'),
  settingsUsername: document.querySelector('#settings-username'),
  settingsRole: document.querySelector('#settings-role'),
  settingsCreated: document.querySelector('#settings-created'),
  passwordForm: document.querySelector('#password-form'),
  passwordMessage: document.querySelector('#password-message'),
  total: document.querySelector('#stat-total'),
  score: document.querySelector('#stat-score'),
  done: document.querySelector('#stat-done'),
  hours: document.querySelector('#stat-hours'),
  brandSubject: document.querySelector('#brand-subject'),
  brandTitle: document.querySelector('#brand-title'),
  bankSelect: document.querySelector('#bank-select'),
  bankCards: document.querySelector('#bank-cards'),
  subjectLanding: document.querySelector('#subject-landing'),
  search: document.querySelector('#search-input'),
  chapter: document.querySelector('#chapter-select'),
  topic: document.querySelector('#topic-select'),
  mode: document.querySelector('#mode-select'),
  list: document.querySelector('#question-list'),
  shuffle: document.querySelector('#shuffle-btn'),
  reset: document.querySelector('#reset-progress-btn'),
  tabs: document.querySelectorAll('.tab'),
  panels: document.querySelectorAll('.panel'),
  aiStatus: document.querySelector('#ai-status'),
  questionChapter: document.querySelector('#question-chapter'),
  questionPosition: document.querySelector('#question-position'),
  questionTitle: document.querySelector('#question-title'),
  bookmark: document.querySelector('#bookmark-btn'),
  questionTools: document.querySelector('#question-tools'),
  editQuestion: document.querySelector('#edit-question-btn'),
  addQuestion: document.querySelector('#add-question-btn'),
  deleteQuestion: document.querySelector('#delete-question-btn'),
  questionEditor: document.querySelector('#question-editor'),
  questionEditorTitle: document.querySelector('#question-editor-title'),
  questionEditorJson: document.querySelector('#question-editor-json'),
  questionEditorMessage: document.querySelector('#question-editor-message'),
  cancelQuestionEdit: document.querySelector('#cancel-question-edit-btn'),
  cancelQuestionEditSecondary: document.querySelector('#cancel-question-edit-secondary-btn'),
  options: document.querySelector('#options'),
  answerPanel: document.querySelector('#answer-panel'),
  answerBanner: document.querySelector('#answer-banner'),
  explanation: document.querySelector('#answer-explanation'),
  exampleSection: document.querySelector('#answer-example-section'),
  example: document.querySelector('#answer-example'),
  tips: document.querySelector('#answer-tips'),
  analysisSection: document.querySelector('#option-analysis-section'),
  analysisTitle: document.querySelector('#option-analysis-title'),
  analysis: document.querySelector('#option-analysis'),
  questionJump: document.querySelector('#question-jump'),
  jump: document.querySelector('#jump-btn'),
  nextUnanswered: document.querySelector('#next-unanswered-btn'),
  nextWrong: document.querySelector('#next-wrong-btn'),
  rankingList: document.querySelector('#ranking-list'),
  refreshRanking: document.querySelector('#refresh-ranking-btn'),
  prev: document.querySelector('#prev-btn'),
  next: document.querySelector('#next-btn'),
  aiForm: document.querySelector('#ai-form'),
  documentInput: document.querySelector('#document-input'),
  fileLabel: document.querySelector('#file-label'),
  aiSubject: document.querySelector('#ai-subject'),
  aiChapter: document.querySelector('#ai-chapter'),
  aiTopic: document.querySelector('#ai-topic'),
  promptFrame: document.querySelector('#prompt-frame'),
  aiApiKey: document.querySelector('#ai-api-key'),
  aiShared: document.querySelector('#ai-shared'),
  aiMessage: document.querySelector('#ai-message'),
  aiSummary: document.querySelector('#ai-summary'),
  requestPromptPreview: document.querySelector('#request-prompt-preview'),
  aiQuestions: document.querySelector('#ai-questions'),
  importAi: document.querySelector('#import-ai-btn'),
  refreshHistory: document.querySelector('#refresh-history-btn'),
  aiHistory: document.querySelector('#ai-history-list'),
  copyPrompt: document.querySelector('#copy-prompt-btn'),
  chatgptPrompt: document.querySelector('#chatgpt-prompt'),
  importForm: document.querySelector('#import-form'),
  importShared: document.querySelector('#import-shared'),
  importJson: document.querySelector('#import-json'),
  importMessage: document.querySelector('#import-message'),
  sampleImport: document.querySelector('#sample-import-btn')
};

init();

async function init() {
  bindAuthEvents();
  await loadCurrentUser();
  if (!state.currentUser) {
    showAuthScreen();
    return;
  }

  showAppShell();
  await startApp();
}

async function startApp() {
  if (state.appStarted) return;
  state.appStarted = true;
  bindEvents();
  await loadServerProgress();
  await Promise.all([
    loadSubjects(),
    loadHealth(),
    loadAIRuns(),
    loadRanking(),
    state.currentUser.role === 'admin' ? loadUsers() : Promise.resolve()
  ]);
  startStudyTimer();
}

function bindAuthEvents() {
  els.loginForm.addEventListener('submit', login);
  els.logout.addEventListener('click', logout);
  els.createUserForm.addEventListener('submit', createUser);
  els.refreshUsers.addEventListener('click', loadUsers);
  els.passwordForm.addEventListener('submit', changePassword);
}

function bindEvents() {
  els.search.addEventListener('input', () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.chapter.addEventListener('change', () => {
    state.currentIndex = 0;
    syncAIClassificationFields();
    applyFilters();
  });
  els.topic.addEventListener('change', () => {
    state.currentIndex = 0;
    syncAIClassificationFields();
    applyFilters();
  });
  els.bankSelect.addEventListener('change', () => selectBank(els.bankSelect.value));
  els.mode.addEventListener('change', () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.shuffle.addEventListener('click', shuffleCurrentSet);
  els.reset.addEventListener('click', resetProgress);
  els.prev.addEventListener('click', () => moveQuestion(-1));
  els.next.addEventListener('click', () => moveQuestion(1));
  els.jump.addEventListener('click', jumpToQuestion);
  els.questionJump.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      jumpToQuestion();
    }
  });
  els.nextUnanswered.addEventListener('click', () => moveToNextMatch((question) => !state.progress.answers[question.id]));
  els.nextWrong.addEventListener('click', () => moveToNextMatch((question) => {
    const answer = state.progress.answers[question.id];
    return answer && !answer.correct;
  }));
  els.editQuestion.addEventListener('click', () => openQuestionEditor('edit'));
  els.addQuestion.addEventListener('click', () => openQuestionEditor('add'));
  els.deleteQuestion.addEventListener('click', deleteCurrentQuestion);
  els.questionEditor.addEventListener('submit', saveQuestionEdit);
  els.cancelQuestionEdit.addEventListener('click', closeQuestionEditor);
  els.cancelQuestionEditSecondary.addEventListener('click', closeQuestionEditor);
  els.refreshRanking.addEventListener('click', loadRanking);
  els.userStatus.addEventListener('click', () => activatePanel('settings-panel'));
  els.bookmark.addEventListener('click', toggleBookmark);
  els.documentInput.addEventListener('change', updateFileLabel);
  els.aiForm.addEventListener('submit', generateFromDocuments);
  els.importAi.addEventListener('click', importGeneratedQuestions);
  els.refreshHistory.addEventListener('click', loadAIRuns);
  els.copyPrompt.addEventListener('click', copyPromptTemplate);
  els.importForm.addEventListener('submit', importQuestionsFromJson);
  els.sampleImport.addEventListener('click', insertSampleImportJson);

  for (const tab of els.tabs) {
    tab.addEventListener('click', () => activatePanel(tab.dataset.panel));
  }
  for (const action of els.quickActions) {
    action.addEventListener('click', () => runQuickAction(action.dataset.action));
  }
}

async function loadQuestions() {
  const query = state.activeBankId ? `?bankId=${encodeURIComponent(state.activeBankId)}` : '';
  const response = await fetch(`/api/questions${query}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Không tải được bộ câu hỏi.');

  state.activeBank = data.bank;
  state.activeBankId = data.bank.id;
  state.baseQuestions = data.questions;
  state.generatedQuestions = [];
  state.currentIndex = 0;

  renderBankChrome(data.bank);
  renderChapterOptions(data.chapters || []);
  renderTopicOptions(data.topics || []);
  syncAIClassificationFields();

  applyFilters();
}

async function loadCurrentUser() {
  try {
    const response = await fetch('/api/auth/me');
    const data = await response.json();
    state.currentUser = data.authenticated ? data.user : null;
  } catch {
    state.currentUser = null;
  }
}

async function login(event) {
  event.preventDefault();
  const formData = new FormData(els.loginForm);
  els.loginMessage.textContent = 'Đang đăng nhập...';
  els.loginMessage.classList.remove('error');

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password')
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không đăng nhập được.');

    state.currentUser = data.user;
    showAppShell();
    await startApp();
  } catch (error) {
    els.loginMessage.textContent = error.message;
    els.loginMessage.classList.add('error');
  }
}

async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
  window.location.reload();
}

function showAuthScreen() {
  els.authScreen.hidden = false;
  els.appShell.hidden = true;
}

function showAppShell() {
  els.authScreen.hidden = true;
  els.appShell.hidden = false;
  state.progress = loadProgress();
  renderUserChrome();
}

function renderUserChrome() {
  els.userStatus.textContent = `${state.currentUser.username} · ${roleLabel(state.currentUser.role)}`;
  els.settingsUsername.textContent = state.currentUser.username;
  els.settingsRole.textContent = roleLabel(state.currentUser.role);
  els.settingsCreated.textContent = state.currentUser.createdAt
    ? new Date(state.currentUser.createdAt).toLocaleString('vi-VN')
    : '-';
  for (const tab of els.adminTabs) {
    tab.hidden = state.currentUser.role !== 'admin';
  }
  for (const field of els.userApiKeyFields) {
    field.hidden = state.currentUser.role === 'admin';
  }
}

async function loadUsers() {
  if (state.currentUser?.role !== 'admin') return;

  try {
    const response = await fetch('/api/admin/users');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tải được danh sách user.');
    renderUsers(data.users || []);
  } catch (error) {
    els.userList.innerHTML = `<div class="history-empty">${escapeHtml(error.message)}</div>`;
  }
}

async function createUser(event) {
  event.preventDefault();
  if (state.currentUser?.role !== 'admin') return;

  const formData = new FormData(els.createUserForm);
  els.adminMessage.textContent = 'Đang tạo tài khoản...';
  els.adminMessage.classList.remove('error');

  try {
    const response = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password'),
        role: formData.get('role')
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tạo được tài khoản.');

    els.createUserForm.reset();
    els.adminMessage.textContent = `Đã tạo tài khoản ${data.user.username}.`;
    await loadUsers();
  } catch (error) {
    els.adminMessage.textContent = error.message;
    els.adminMessage.classList.add('error');
  }
}

async function changePassword(event) {
  event.preventDefault();
  const formData = new FormData(els.passwordForm);
  const currentPassword = String(formData.get('currentPassword') || '');
  const newPassword = String(formData.get('newPassword') || '');
  const confirmPassword = String(formData.get('confirmPassword') || '');

  els.passwordMessage.textContent = 'Đang cập nhật mật khẩu...';
  els.passwordMessage.classList.remove('error');

  if (newPassword !== confirmPassword) {
    els.passwordMessage.textContent = 'Mật khẩu mới nhập lại không khớp.';
    els.passwordMessage.classList.add('error');
    return;
  }

  try {
    const response = await fetch('/api/account/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không đổi được mật khẩu.');

    els.passwordForm.reset();
    els.passwordMessage.textContent = 'Đã cập nhật mật khẩu.';
  } catch (error) {
    els.passwordMessage.textContent = error.message;
    els.passwordMessage.classList.add('error');
  }
}

function renderUsers(users) {
  els.userList.innerHTML = '';

  if (!users.length) {
    els.userList.innerHTML = '<div class="history-empty">Chưa có tài khoản.</div>';
    return;
  }

  for (const user of users) {
    const item = document.createElement('article');
    item.className = 'user-item';
    const isSelf = user.id === state.currentUser?.id;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(user.username)}</strong>
        <span>${new Date(user.createdAt).toLocaleString('vi-VN')}${isSelf ? ' · bạn' : ''}</span>
      </div>
      <div class="user-role-control">
        <b class="role-badge ${roleClass(user.role)}">${escapeHtml(roleLabel(user.role))}</b>
        <select class="role-select" data-user-id="${escapeHtml(user.id)}" ${isSelf ? 'disabled' : ''} aria-label="Đổi quyền ${escapeHtml(user.username)}">
          ${roleOptions(user.role)}
        </select>
      </div>
    `;
    item.querySelector('.role-select')?.addEventListener('change', (event) => {
      changeUserRole(user.id, event.target.value, user.role, event.target);
    });
    els.userList.appendChild(item);
  }
}

async function changeUserRole(userId, role, previousRole, select) {
  if (state.currentUser?.role !== 'admin') return;
  select.disabled = true;
  els.adminMessage.textContent = 'Đang cập nhật quyền...';
  els.adminMessage.classList.remove('error');

  try {
    const response = await fetch(`/api/admin/users/${encodeURIComponent(userId)}/role`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không đổi được quyền tài khoản.');

    els.adminMessage.textContent = `Đã cập nhật ${data.user.username} thành ${roleLabel(data.user.role)}.`;
    await loadUsers();
  } catch (error) {
    select.value = previousRole;
    select.disabled = false;
    els.adminMessage.textContent = error.message;
    els.adminMessage.classList.add('error');
  }
}

async function loadRanking() {
  try {
    const response = await fetch('/api/ranking?limit=100');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tải được bảng xếp hạng.');
    state.ranking = data.ranking || [];
    renderRanking();
  } catch (error) {
    if (els.rankingList) {
      els.rankingList.innerHTML = `<div class="history-empty">${escapeHtml(error.message)}</div>`;
    }
  }
}

function renderRanking() {
  if (!els.rankingList) return;
  els.rankingList.innerHTML = '';

  if (!state.ranking.length) {
    els.rankingList.innerHTML = '<div class="history-empty">Chưa có dữ liệu xếp hạng.</div>';
    return;
  }

  for (const user of state.ranking) {
    const item = document.createElement('article');
    item.className = 'ranking-item';
    item.classList.toggle('current', user.id === state.currentUser?.id);
    item.innerHTML = `
      <strong class="ranking-rank">#${user.rank}</strong>
      <div class="ranking-user">
        <strong>${escapeHtml(user.username)}</strong>
        <span>${escapeHtml(roleLabel(user.role))}${user.id === state.currentUser?.id ? ' · bạn' : ''}</span>
      </div>
      <div><span>Đúng</span><strong>${user.correct}</strong></div>
      <div><span>Đã làm</span><strong>${user.done}</strong></div>
      <div><span>Chính xác</span><strong>${user.accuracy}%</strong></div>
      <div><span>Đã học</span><strong>${formatStudyTime(user.studySeconds)}</strong></div>
    `;
    els.rankingList.appendChild(item);
  }
}

async function loadSubjects() {
  const previousBankId = state.activeBankId;
  const response = await fetch('/api/subjects');
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Không tải được danh sách môn.');

  state.banks = data.banks || [];
  renderBankSelect();
  renderBankCards();
  renderHome();

  const nextBank = state.banks.find((bank) => bank.id === previousBankId) || state.banks[0];
  if (nextBank) {
    await selectBank(nextBank.id);
  }
}

function renderChapterOptions(chapters) {
  els.chapter.innerHTML = '<option value="">Tất cả chương</option>';
  for (const chapter of chapters) {
    const option = document.createElement('option');
    option.value = chapter;
    option.textContent = chapter;
    els.chapter.appendChild(option);
  }
}

function renderTopicOptions(topics) {
  els.topic.innerHTML = '<option value="">Tất cả chủ đề</option>';
  for (const topic of topics) {
    const option = document.createElement('option');
    option.value = topic;
    option.textContent = topic;
    els.topic.appendChild(option);
  }
}

function renderBankChrome(bank) {
  els.brandSubject.textContent = bank.subject || 'Kho câu hỏi';
  els.brandTitle.textContent = bank.title || 'Ôn thi trắc nghiệm';
  document.title = bank.subject ? `Ôn thi ${bank.subject}` : 'Ôn thi trắc nghiệm';
}

function renderBankSelect() {
  els.bankSelect.innerHTML = '';
  for (const bank of state.banks) {
    const option = document.createElement('option');
    option.value = bank.id;
    option.textContent = `${bank.source === 'database' ? 'Đã nạp · ' : ''}${bank.subject} · ${bank.title}`;
    els.bankSelect.appendChild(option);
  }
}

function renderBankCards() {
  els.bankCards.innerHTML = '';
  for (const bank of state.banks) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'bank-card';
    card.innerHTML = `
      <strong>${escapeHtml(bank.subject)}</strong>
      <span>${escapeHtml(bank.title)}</span>
      <small>${bank.source === 'database' ? `${bank.shared ? 'Đã share' : 'Riêng tư'} · ` : ''}${bank.total} câu · ${bank.chapters.length} chương · ${bank.topics.length} chủ đề</small>
    `;
    card.addEventListener('click', () => selectBank(bank.id));
    els.bankCards.appendChild(card);
  }
}

function renderHome() {
  if (!els.homeGreeting || !els.homeSummary) return;
  els.homeGreeting.textContent = `Chào ${state.currentUser.username}`;
  els.homeSummary.textContent = state.activeBank
    ? `Bạn đang có bộ đang chọn: ${state.activeBank.subject || 'Môn học'} · ${state.activeBank.title || 'Bộ câu hỏi'}. Vào Luyện tập để chọn bộ khác hoặc tiếp tục làm bài.`
    : 'Vào Luyện tập để chọn môn hoặc bộ câu hỏi, sau đó làm bài theo chương và chủ đề.';
}

function getProgressStats() {
  const questions = allQuestions();
  const knownIds = new Set(questions.map((question) => question.id));
  const answerEntries = Object.entries(state.progress.answers)
    .filter(([id]) => !knownIds.size || knownIds.has(id));
  const correct = answerEntries.filter(([, value]) => value.correct).length;
  const done = answerEntries.length;
  return {
    correct,
    done,
    score: done ? Math.round((correct / done) * 100) : 0
  };
}

function runQuickAction(action) {
  if (action === 'ai') {
    activatePanel('ai-panel');
    return;
  }

  if (action === 'wrong') {
    els.mode.value = 'wrong';
  } else if (action === 'bookmarked') {
    els.mode.value = 'bookmarked';
  } else {
    els.mode.value = 'study';
  }

  state.currentIndex = 0;
  applyFilters();
  activatePanel('practice-panel');
}

async function selectBank(bankId) {
  state.activeBankId = bankId;
  els.bankSelect.value = bankId;
  await loadQuestions();
  for (const card of els.bankCards.querySelectorAll('.bank-card')) {
    card.classList.toggle('active', state.banks[Array.from(els.bankCards.children).indexOf(card)]?.id === bankId);
  }
}

async function loadHealth() {
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    els.aiStatus.textContent = data.aiConfigured ? `AI: ${data.model}` : 'AI: chưa có API key';
    els.aiStatus.classList.toggle('ready', data.aiConfigured);
    els.aiStatus.classList.toggle('missing', !data.aiConfigured);
    if (data.databaseConfigured && !data.databaseReady) {
      els.aiStatus.textContent = `${els.aiStatus.textContent} · DB đang khởi động`;
      els.aiStatus.classList.add('missing');
    }
  } catch {
    els.aiStatus.textContent = 'AI: lỗi kết nối';
    els.aiStatus.classList.add('missing');
  }
}

function allQuestions() {
  return [...state.baseQuestions, ...state.generatedQuestions];
}

function applyFilters() {
  const keyword = normalize(els.search.value);
  const chapter = els.chapter.value;
  const topic = els.topic.value;
  const mode = els.mode.value;

  state.filtered = allQuestions().filter((question) => {
    const result = state.progress.answers[question.id];
    const matchesKeyword = !keyword || normalize([
      question.prompt,
      question.chapter,
      question.topic,
      question.explanation,
      ...Object.values(question.options || {})
    ].join(' ')).includes(keyword);
    const matchesChapter = !chapter || question.chapter === chapter;
    const matchesTopic = !topic || question.topic === topic;
    const matchesMode =
      mode === 'study' ||
      (mode === 'wrong' && result && !result.correct) ||
      (mode === 'bookmarked' && state.progress.bookmarks.includes(question.id)) ||
      (mode === 'generated' && question.generated);

    return matchesKeyword && matchesChapter && matchesTopic && matchesMode;
  });

  if (state.currentIndex >= state.filtered.length) {
    state.currentIndex = Math.max(0, state.filtered.length - 1);
  }

  renderList();
  renderQuestion();
  renderStats();
}

function renderList() {
  els.list.innerHTML = '';

  for (const [index, question] of state.filtered.entries()) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'question-chip';
    button.textContent = question.generated ? `AI${question.number}` : String(question.number).padStart(3, '0');
    button.title = question.prompt;
    button.addEventListener('click', () => {
      state.currentIndex = index;
      renderQuestion();
      renderList();
    });

    const answer = state.progress.answers[question.id];
    button.classList.toggle('active', index === state.currentIndex);
    button.classList.toggle('correct', Boolean(answer?.correct));
    button.classList.toggle('wrong', Boolean(answer && !answer.correct));
    els.list.appendChild(button);
  }

  requestAnimationFrame(() => {
    els.list.querySelector('.question-chip.active')?.scrollIntoView({
      block: 'nearest',
      inline: 'center'
    });
  });
}

function renderQuestion() {
  const question = state.filtered[state.currentIndex];
  els.options.innerHTML = '';
  els.analysis.innerHTML = '';
  els.tips.innerHTML = '';

  if (!question) {
    els.questionChapter.textContent = 'Không có câu phù hợp';
    els.questionPosition.textContent = '0 / 0';
    els.questionJump.value = '';
    els.questionJump.max = '1';
    els.questionTitle.textContent = 'Không tìm thấy câu hỏi theo bộ lọc hiện tại.';
    els.answerPanel.hidden = true;
    els.bookmark.classList.remove('active');
    renderQuestionTools(null);
    return;
  }

  const saved = state.progress.answers[question.id];
  els.questionChapter.textContent = [question.subject, question.chapter, question.topic].filter(Boolean).join(' · ');
  els.questionPosition.textContent = `${state.currentIndex + 1} / ${state.filtered.length}`;
  els.questionJump.max = String(state.filtered.length);
  els.questionJump.value = String(state.currentIndex + 1);
  els.questionTitle.textContent = `${question.generated ? 'AI' : `Câu ${String(question.number).padStart(3, '0')}`}. ${question.prompt}`;
  els.bookmark.classList.toggle('active', state.progress.bookmarks.includes(question.id));
  els.bookmark.textContent = state.progress.bookmarks.includes(question.id) ? '★' : '☆';
  renderQuestionTools(question);

  if (getQuestionType(question) === 'fill') {
    renderFillAnswer(question, saved);
  } else if (getQuestionType(question) === 'multiple') {
    renderMultipleChoice(question, saved);
  } else {
    renderSingleChoice(question, saved);
  }

  if (saved) {
    showAnswer(question, saved.selected);
  } else {
    els.answerPanel.hidden = true;
  }

  renderList();
}

function renderQuestionTools(question) {
  if (!els.questionTools) return;
  const canManage = Boolean(question) && canManageCurrentBank();
  els.questionTools.hidden = !canManage;

  if (!canManage) {
    closeQuestionEditor();
    return;
  }

  els.editQuestion.disabled = !question;
  els.deleteQuestion.disabled = !question;
  if (state.questionEditMode === 'edit' && state.questionEditTargetId !== question.id) {
    closeQuestionEditor();
  }
}

function canManageCurrentBank() {
  return state.activeBank?.source === 'database' &&
    ['admin', 'editor'].includes(state.currentUser?.role);
}

function openQuestionEditor(mode) {
  if (!canManageCurrentBank()) return;
  const question = state.filtered[state.currentIndex];
  if (mode === 'edit' && !question) return;

  state.questionEditMode = mode;
  state.questionEditTargetId = mode === 'edit' ? question.id : null;
  els.questionEditor.hidden = false;
  els.questionEditorTitle.textContent = mode === 'add' ? 'Thêm câu hỏi mới' : `Chỉnh sửa câu ${question.number}`;
  els.questionEditorJson.value = JSON.stringify(
    mode === 'add' ? buildQuestionTemplate(question) : serializeQuestionForEdit(question),
    null,
    2
  );
  els.questionEditorMessage.textContent = mode === 'add'
    ? 'Tạo câu theo đúng schema. Câu fill vẫn phải có explanation, example và tips.'
    : 'Chỉnh JSON rồi lưu. Hệ thống sẽ kiểm tra prompt, đáp án và giải thích trước khi ghi database.';
  els.questionEditorMessage.classList.remove('error');
  els.questionEditor.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function closeQuestionEditor() {
  if (!els.questionEditor) return;
  state.questionEditMode = null;
  state.questionEditTargetId = null;
  els.questionEditor.hidden = true;
  els.questionEditorMessage.textContent = '';
  els.questionEditorMessage.classList.remove('error');
}

async function saveQuestionEdit(event) {
  event.preventDefault();
  if (!canManageCurrentBank()) return;

  let question;
  try {
    question = JSON.parse(els.questionEditorJson.value);
    if (!question || Array.isArray(question) || typeof question !== 'object') {
      throw new Error('JSON phải là một object câu hỏi, không phải mảng.');
    }
  } catch (error) {
    els.questionEditorMessage.textContent = `JSON không hợp lệ: ${error.message}`;
    els.questionEditorMessage.classList.add('error');
    return;
  }

  const mode = state.questionEditMode;
  const currentQuestion = state.filtered[state.currentIndex];
  const runId = getActiveRunId();
  const endpoint = mode === 'add'
    ? `/api/question-banks/${encodeURIComponent(runId)}/questions`
    : `/api/question-banks/${encodeURIComponent(runId)}/questions/${encodeURIComponent(currentQuestion.number)}`;
  const method = mode === 'add' ? 'POST' : 'PUT';
  const previousBankId = state.activeBankId;
  const targetIndex = mode === 'add' ? state.baseQuestions.length : state.currentIndex;

  els.questionEditorMessage.textContent = 'Đang lưu câu hỏi...';
  els.questionEditorMessage.classList.remove('error');

  try {
    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không lưu được câu hỏi.');

    closeQuestionEditor();
    await loadSubjects();
    if (state.activeBankId === previousBankId) {
      state.currentIndex = Math.min(Math.max(targetIndex, 0), Math.max(state.filtered.length - 1, 0));
      applyFilters();
    }
  } catch (error) {
    els.questionEditorMessage.textContent = error.message;
    els.questionEditorMessage.classList.add('error');
  }
}

async function deleteCurrentQuestion() {
  if (!canManageCurrentBank()) return;
  const question = state.filtered[state.currentIndex];
  if (!question) return;

  const confirmed = window.confirm(`Xóa câu ${question.number}? Thao tác này sẽ xóa khỏi bộ câu hỏi đang lưu trong database.`);
  if (!confirmed) return;

  const previousBankId = state.activeBankId;
  const nextIndex = Math.max(0, state.currentIndex - (state.currentIndex === state.filtered.length - 1 ? 1 : 0));

  try {
    const response = await fetch(
      `/api/question-banks/${encodeURIComponent(getActiveRunId())}/questions/${encodeURIComponent(question.number)}`,
      { method: 'DELETE' }
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không xóa được câu hỏi.');

    delete state.progress.answers[question.id];
    state.progress.bookmarks = state.progress.bookmarks.filter((id) => id !== question.id);
    saveProgress();
    closeQuestionEditor();
    await loadSubjects();
    if (state.activeBankId === previousBankId) {
      state.currentIndex = Math.min(nextIndex, Math.max(state.filtered.length - 1, 0));
      applyFilters();
    }
  } catch (error) {
    els.questionEditor.hidden = false;
    els.questionEditorTitle.textContent = 'Không xóa được câu hỏi';
    els.questionEditorJson.value = JSON.stringify(serializeQuestionForEdit(question), null, 2);
    els.questionEditorMessage.textContent = error.message;
    els.questionEditorMessage.classList.add('error');
  }
}

function getActiveRunId() {
  return state.activeBank?.runId || String(state.activeBankId || '').replace(/^run:/, '');
}

function serializeQuestionForEdit(question) {
  return {
    subject: question.subject || state.activeBank?.subject || '',
    chapter: question.chapter || '',
    topic: question.topic || '',
    difficulty: question.difficulty || 'Trung bình',
    questionType: getQuestionType(question),
    prompt: question.prompt || '',
    options: question.options || {},
    answer: question.answer,
    explanation: question.explanation || '',
    example: question.example || '',
    tips: Array.isArray(question.tips) ? question.tips : [],
    optionAnalysis: question.optionAnalysis || {}
  };
}

function buildQuestionTemplate(referenceQuestion) {
  return {
    subject: referenceQuestion?.subject || state.activeBank?.subject || 'Tên môn học',
    chapter: referenceQuestion?.chapter || 'Tên chương',
    topic: referenceQuestion?.topic || 'Tên chủ đề',
    difficulty: 'Trung bình',
    questionType: 'single',
    prompt: 'Nội dung câu hỏi mới?',
    options: {
      A: 'Lựa chọn A',
      B: 'Lựa chọn B',
      C: 'Lựa chọn C',
      D: 'Lựa chọn D'
    },
    answer: 'A',
    explanation: 'Giải thích rõ vì sao đáp án đúng và vì sao các lựa chọn khác sai.',
    example: 'Ví dụ cụ thể trong môn học.',
    tips: ['Mẹo nhận dạng nhanh dạng bài này.', 'Mẹo loại trừ phương án nhiễu.'],
    optionAnalysis: {
      A: 'Đáp án đúng theo khái niệm hoặc công thức.',
      B: 'Phương án nhiễu, sai ở điểm...',
      C: 'Phương án nhiễu, dễ nhầm với...',
      D: 'Phương án nhiễu, không phù hợp ngữ cảnh câu hỏi.'
    }
  };
}

function renderSingleChoice(question, saved) {
  for (const letter of getOptionLetters(question)) {
    const option = document.createElement('div');
    option.className = 'option-btn';
    option.setAttribute('role', 'button');
    option.tabIndex = 0;
    option.innerHTML = `
      <div class="option-header">
        <span class="option-letter">${letter}.</span>
        <span class="option-text"></span>
      </div>
    `;
    option.querySelector('.option-text').textContent = question.options[letter];
    option.addEventListener('click', () => selectAnswer(question, letter));
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectAnswer(question, letter);
      }
    });

    if (saved) decorateOption(option, question, letter, saved.selected);
    els.options.appendChild(option);
  }
}

function renderMultipleChoice(question, saved) {
  const selected = new Set(Array.isArray(saved?.selected) ? saved.selected : []);
  const controls = document.createElement('div');
  controls.className = 'multi-submit-row';

  for (const letter of getOptionLetters(question)) {
    const option = document.createElement('div');
    option.className = 'option-btn';
    option.setAttribute('role', 'checkbox');
    option.setAttribute('aria-checked', selected.has(letter) ? 'true' : 'false');
    option.tabIndex = saved ? -1 : 0;
    option.innerHTML = `
      <div class="option-header">
        <span class="option-letter">${letter}.</span>
        <span class="option-text"></span>
      </div>
    `;
    option.querySelector('.option-text').textContent = question.options[letter];

    if (!saved) {
      option.addEventListener('click', () => {
        if (selected.has(letter)) selected.delete(letter);
        else selected.add(letter);
        option.classList.toggle('selected', selected.has(letter));
        option.setAttribute('aria-checked', selected.has(letter) ? 'true' : 'false');
      });
      option.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          option.click();
        }
      });
    } else {
      decorateOption(option, question, letter, saved.selected);
    }

    option.classList.toggle('selected', selected.has(letter));
    els.options.appendChild(option);
  }

  if (!saved) {
    const submit = document.createElement('button');
    submit.className = 'primary-btn';
    submit.type = 'button';
    submit.textContent = 'Chốt đáp án';
    submit.addEventListener('click', () => selectAnswer(question, [...selected].sort()));
    controls.appendChild(submit);
    els.options.appendChild(controls);
  }
}

function renderFillAnswer(question, saved) {
  const form = document.createElement('form');
  form.className = 'fill-answer-box';
  form.innerHTML = `
    <label>
      <span>Điền đáp án</span>
      <input name="answer" type="text" autocomplete="off" placeholder="Nhập đáp án ngắn">
    </label>
    <button class="primary-btn" type="submit">Kiểm tra</button>
  `;
  const input = form.querySelector('input');
  input.value = saved ? String(saved.selected || '') : '';
  input.disabled = Boolean(saved);
  form.querySelector('button').disabled = Boolean(saved);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    selectAnswer(question, input.value.trim());
  });
  els.options.appendChild(form);
}

function selectAnswer(question, selected) {
  const correct = isCorrectAnswer(question, selected);
  state.progress.answers[question.id] = {
    selected,
    correct,
    at: new Date().toISOString()
  };
  saveProgress();
  renderQuestion();
  renderStats();
}

function decorateOption(element, question, letter, selected) {
  const correctLetters = normalizeAnswerList(question.answer);
  const selectedLetters = normalizeAnswerList(selected);
  const isCorrectLetter = correctLetters.includes(letter);
  const isSelectedLetter = selectedLetters.includes(letter);
  element.classList.toggle('correct', isCorrectLetter);
  element.classList.toggle('wrong', isSelectedLetter && !isCorrectLetter);
  element.classList.toggle('dimmed', !isCorrectLetter && !isSelectedLetter);

  if (isSelectedLetter || isCorrectLetter) {
    const feedback = document.createElement('div');
    feedback.className = 'option-feedback';
    const isCorrect = isCorrectLetter;
    const isSelected = isSelectedLetter;
    const status = isCorrect ? '✓ Chính xác!' : '✕ Chưa đúng';
    const explanation = isCorrect
      ? question.explanation || buildOptionAnalysis(question, letter)
      : buildOptionAnalysis(question, letter);
    const tips = isSelected || isCorrect ? question.tips || [] : [];

    feedback.innerHTML = `
      <strong class="feedback-status">${status}</strong>
      <p></p>
      ${question.example && isCorrect ? `<p class="feedback-example"><strong>Ví dụ:</strong> ${escapeHtml(question.example)}</p>` : ''}
      ${tips.length && isCorrect ? `<div class="feedback-tips">${tips.map((tip) => `<span>${escapeHtml(tip)}</span>`).join('')}</div>` : ''}
    `;
    feedback.querySelector('p').textContent = explanation;
    element.appendChild(feedback);
  }
}

function showAnswer(question, selected) {
  const correct = isCorrectAnswer(question, selected);
  const questionType = getQuestionType(question);
  els.answerPanel.hidden = false;
  els.answerBanner.classList.toggle('wrong', !correct);
  els.answerBanner.textContent = correct
    ? `Đúng. Đáp án: ${formatAnswer(question)}`
    : `Sai. Bạn chọn ${formatSelected(selected)}; đáp án đúng là ${formatAnswer(question)}`;
  els.explanation.textContent = question.explanation || 'Chưa có giải thích.';
  els.exampleSection.hidden = !question.example;
  els.example.textContent = question.example || '';

  for (const tip of question.tips || []) {
    const item = document.createElement('li');
    item.textContent = tip;
    els.tips.appendChild(item);
  }

  if (questionType === 'fill') {
    els.analysisSection.hidden = false;
    els.analysisTitle.textContent = 'Đáp án chấp nhận';
    const item = document.createElement('div');
    item.className = `analysis-item fill-accepted ${correct ? 'correct' : 'wrong'}`;
    item.innerHTML = `
      <strong>Bạn đã nhập:</strong> <span class="selected-answer"></span>
      <strong>Đáp án có thể nhận:</strong> <span class="accepted-answer"></span>
    `;
    item.querySelector('.selected-answer').textContent = formatSelected(selected);
    item.querySelector('.accepted-answer').textContent = formatAnswer(question);
    els.analysis.appendChild(item);
    return;
  }

  const optionLetters = getOptionLetters(question);
  els.analysisSection.hidden = !optionLetters.length;
  els.analysisTitle.textContent = 'Phân tích lựa chọn';

  for (const letter of optionLetters) {
    const item = document.createElement('div');
    item.className = 'analysis-item';
    item.classList.toggle('correct', normalizeAnswerList(question.answer).includes(letter));
    const label = normalizeAnswerList(question.answer).includes(letter) ? 'Đáp án đúng' : 'Phương án nhiễu';
    item.innerHTML = `<strong>${letter}. ${label}:</strong> <span></span>`;
    item.querySelector('span').textContent = buildOptionAnalysis(question, letter);
    els.analysis.appendChild(item);
  }
}

function positionAnswerPanel(selected) {
  return selected;
}

function buildOptionAnalysis(question, letter) {
  if (question.optionAnalysis?.[letter]) {
    return question.optionAnalysis[letter];
  }

  if (normalizeAnswerList(question.answer).includes(letter)) {
    return `Khớp với ý chính trong giải thích: ${question.answerText || question.options[letter]}.`;
  }

  const prompt = question.prompt.toLowerCase();
  if (/tổng quãng đường|bao nhiêu|tính|địa chỉ|waiting|turnaround|cylinder/.test(prompt)) {
    return 'Không khớp kết quả tính theo công thức hoặc thứ tự thuật toán trong lời giải.';
  }

  if (/đúng nhất|mô tả|hiểu/.test(prompt)) {
    return 'Dễ bị nhầm vì có thể đúng ở ngữ cảnh khác, nhưng không phải định nghĩa sát nhất của khái niệm đang hỏi.';
  }

  return 'Không phải trọng tâm mà câu hỏi yêu cầu; dùng giải thích để đối chiếu từ khóa chính.';
}

function getQuestionType(question) {
  return question.questionType || (Object.keys(question.options || {}).length ? 'single' : 'fill');
}

function getOptionLetters(question) {
  return Object.keys(question.options || {}).sort();
}

function normalizeAnswerList(answer) {
  if (Array.isArray(answer)) return answer.map((item) => String(item || '').trim().toUpperCase()).filter(Boolean);
  return String(answer || '')
    .split(/[,\s;]+/)
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean);
}

function normalizeTextAnswer(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');
}

function isCorrectAnswer(question, selected) {
  if (getQuestionType(question) === 'fill') {
    const selectedText = normalizeTextAnswer(selected);
    return (Array.isArray(question.answer) ? question.answer : [question.answer])
      .some((answer) => normalizeTextAnswer(answer) === selectedText);
  }

  const correct = normalizeAnswerList(question.answer).sort().join(',');
  const chosen = normalizeAnswerList(selected).sort().join(',');
  return correct === chosen;
}

function formatAnswer(question) {
  if (getQuestionType(question) === 'fill') {
    return (Array.isArray(question.answer) ? question.answer : [question.answer]).join(' / ');
  }
  return normalizeAnswerList(question.answer)
    .map((letter) => `${letter}: ${question.options?.[letter] || ''}`)
    .join(' · ');
}

function formatSelected(selected) {
  return Array.isArray(selected) ? selected.join(', ') : String(selected || '-');
}

function formatStudyTime(seconds) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(safeSeconds / 60);
  if (minutes < 1) return '0 phút';
  if (minutes < 60) return `${minutes} phút`;
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;
  return restMinutes ? `${hours}g ${restMinutes}p` : `${hours} giờ`;
}

function renderStats() {
  const questions = allQuestions();
  const stats = getProgressStats();
  els.total.textContent = questions.length;
  els.done.textContent = stats.done;
  els.score.textContent = `${stats.score}%`;
  els.hours.textContent = formatStudyTime(state.progress.studySeconds || 0);
  renderHome();
}

function syncAIClassificationFields() {
  if (els.aiSubject) {
    els.aiSubject.value = state.activeBank?.subject || els.aiSubject.value || '';
  }
  if (els.aiChapter && els.chapter.value) {
    els.aiChapter.value = els.chapter.value;
  }
  if (els.aiTopic && els.topic.value) {
    els.aiTopic.value = els.topic.value;
  }
}

function moveQuestion(delta) {
  if (!state.filtered.length) return;
  state.currentIndex = (state.currentIndex + delta + state.filtered.length) % state.filtered.length;
  renderQuestion();
}

function jumpToQuestion() {
  if (!state.filtered.length) return;
  const requested = Number.parseInt(els.questionJump.value, 10);
  if (!Number.isFinite(requested)) return;
  const nextIndex = Math.min(Math.max(requested, 1), state.filtered.length) - 1;
  state.currentIndex = nextIndex;
  renderQuestion();
}

function moveToNextMatch(predicate) {
  if (!state.filtered.length) return;
  const total = state.filtered.length;
  for (let step = 1; step <= total; step += 1) {
    const nextIndex = (state.currentIndex + step) % total;
    if (predicate(state.filtered[nextIndex])) {
      state.currentIndex = nextIndex;
      renderQuestion();
      return;
    }
  }
}

function shuffleCurrentSet() {
  for (let index = state.filtered.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [state.filtered[index], state.filtered[swapIndex]] = [state.filtered[swapIndex], state.filtered[index]];
  }
  state.currentIndex = 0;
  renderList();
  renderQuestion();
}

function toggleBookmark() {
  const question = state.filtered[state.currentIndex];
  if (!question) return;
  const exists = state.progress.bookmarks.includes(question.id);
  state.progress.bookmarks = exists
    ? state.progress.bookmarks.filter((id) => id !== question.id)
    : [...state.progress.bookmarks, question.id];
  saveProgress();
  renderQuestion();
}

function resetProgress() {
  state.progress = { answers: {}, bookmarks: [], studySeconds: state.progress.studySeconds || 0 };
  saveProgress();
  applyFilters();
}

function activatePanel(panelId) {
  for (const tab of els.tabs) {
    tab.classList.toggle('active', tab.dataset.panel === panelId);
  }
  for (const panel of els.panels) {
    panel.classList.toggle('active', panel.id === panelId);
  }
  if (panelId === 'ranking-panel') {
    loadRanking();
  }
}

function updateFileLabel() {
  const names = [...els.documentInput.files].map((file) => file.name);
  els.fileLabel.textContent = names.length ? names.join(', ') : 'Chọn file PDF, DOCX, MD hoặc TXT';
}

async function generateFromDocuments(event) {
  event.preventDefault();
  const formData = new FormData(els.aiForm);
  const button = document.querySelector('#generate-btn');
  button.disabled = true;
  els.aiMessage.textContent = 'Đang gửi prompt và phân tích tài liệu...';
  els.aiMessage.classList.remove('error');

  try {
    const response = await fetch('/api/ai/generate', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tạo được câu hỏi.');

    state.aiResult = data;
    els.aiMessage.textContent = data.warning || `Đã tạo ${data.questions.length} câu.`;
    renderAIResult(data);
    await loadAIRuns();
  } catch (error) {
    els.aiMessage.textContent = error.message;
    els.aiMessage.classList.add('error');
  } finally {
    button.disabled = false;
  }
}

function renderAIResult(data) {
  els.aiSummary.textContent = `${data.warning ? `${data.warning}\n\n` : ''}${data.summary}\n\nChủ đề: ${(data.topics || []).join(', ')}`;
  els.requestPromptPreview.textContent = data.requestPrompt || 'Server không trả về bản xem trước request.';
  els.aiQuestions.innerHTML = '';
  els.importAi.disabled = !data.questions?.length;

  for (const [index, question] of data.questions.entries()) {
    const item = document.createElement('article');
    item.className = 'generated-item';
    item.innerHTML = `
      <div class="generated-meta">
        <span>${escapeHtml(question.subject || state.activeBank?.subject || 'Môn học')}</span>
        <span>${escapeHtml(question.chapter || 'AI tạo')}</span>
        <span>${escapeHtml(question.topic || 'Chủ đề')}</span>
        <span>${escapeHtml(question.difficulty || 'Trung bình')}</span>
      </div>
      <h3>${index + 1}. ${escapeHtml(question.prompt)}</h3>
      ${getOptionLetters(question).length ? `<div class="generated-options">
        ${getOptionLetters(question).map((letter) => `
          <div class="${normalizeAnswerList(question.answer).includes(letter) ? 'is-answer' : ''}">
            <strong>${letter}</strong>
            <span>${escapeHtml(question.options[letter] || '')}</span>
          </div>
        `).join('')}
      </div>` : ''}
      <p><strong>Kiểu câu:</strong> ${escapeHtml(getQuestionType(question))}</p>
      <p><strong>Đáp án:</strong> ${escapeHtml(formatAnswer(question))}</p>
      <p><strong>Giải thích:</strong> ${escapeHtml(question.explanation)}</p>
      <p><strong>Ví dụ trong môn:</strong> ${escapeHtml(question.example)}</p>
      <div class="generated-tips">
        ${(question.tips || []).map((tip) => `<span>${escapeHtml(tip)}</span>`).join('')}
      </div>
    `;
    els.aiQuestions.appendChild(item);
  }
}

async function copyPromptTemplate() {
  await navigator.clipboard.writeText(els.chatgptPrompt.textContent.trim());
  els.importMessage.textContent = 'Đã copy prompt mẫu.';
  els.importMessage.classList.remove('error');
}

function insertSampleImportJson() {
  els.importJson.value = JSON.stringify({
    subject: 'Mạng máy tính',
    title: 'Câu hỏi mẫu về cáp Ethernet',
    questions: [
      {
        chapter: 'Chương 1 - Hạ tầng mạng',
        topic: 'Cáp Ethernet',
        difficulty: 'Dễ',
        questionType: 'single',
        prompt: 'Loại cáp nào thường hỗ trợ tốc độ 10 Gbps trên toàn bộ chiều dài cáp tiêu chuẩn?',
        options: {
          A: 'Cat 5e',
          B: 'Cat 3',
          C: 'Cat 5',
          D: 'Cat 6a',
          E: 'Coaxial RG-58'
        },
        answer: 'D',
        explanation: 'Cat 6a được thiết kế với băng thông 500 MHz để hỗ trợ 10 Gbps trên chiều dài cáp tiêu chuẩn; các loại cũ hơn không ổn định hoặc không đạt tốc độ này ở cùng điều kiện.',
        example: 'Trong thiết kế mạng LAN văn phòng mới cần uplink 10 Gbps, Cat 6a là lựa chọn phổ biến hơn Cat 5e.',
        tips: ['Thấy 10 Gbps dài chuẩn thì nghĩ đến Cat 6a.', 'Cat 5e thường gắn với 1 Gbps.'],
        optionAnalysis: {
          A: 'Cat 5e thường hỗ trợ 1 Gbps, không phải lựa chọn chuẩn cho 10 Gbps toàn chiều dài.',
          B: 'Cat 3 rất cũ, tốc độ thấp.',
          C: 'Cat 5 hỗ trợ thấp hơn và đã lỗi thời.',
          D: 'Đúng vì Cat 6a hỗ trợ 10 Gbps tốt hơn trên chiều dài tiêu chuẩn.',
          E: 'Cáp đồng trục RG-58 không phải chuẩn Ethernet xoắn đôi hiện đại cho 10 Gbps.'
        }
      },
      {
        chapter: 'Chương 2 - Điều phối CPU',
        topic: 'Tiêu chí điều phối',
        difficulty: 'Trung bình',
        questionType: 'multiple',
        prompt: 'Những tiêu chí nào thường được dùng để đánh giá thuật toán điều phối CPU?',
        options: {
          A: 'CPU utilization',
          B: 'Throughput',
          C: 'Turnaround time',
          D: 'Màu sắc giao diện',
          E: 'Waiting time'
        },
        answer: ['A', 'B', 'C', 'E'],
        explanation: 'Các tiêu chí chuẩn gồm CPU utilization, throughput, turnaround time và waiting time. Màu sắc giao diện không phải tiêu chí điều phối CPU.',
        example: 'Khi so sánh FCFS và SJF, ta thường tính waiting time và turnaround time trung bình.',
        tips: ['Tiêu chí điều phối thường liên quan tài nguyên CPU hoặc thời gian của tiến trình.', 'Loại các lựa chọn thuộc UI hoặc lưu trữ nếu câu hỏi nói về CPU scheduling.'],
        optionAnalysis: {
          A: 'Đúng vì thuật toán tốt nên giữ CPU bận hợp lý.',
          B: 'Đúng vì throughput đo số tiến trình hoàn thành trong một đơn vị thời gian.',
          C: 'Đúng vì turnaround time đo thời gian từ lúc đến đến lúc hoàn thành.',
          D: 'Sai vì không liên quan điều phối CPU.',
          E: 'Đúng vì waiting time là tiêu chí rất hay dùng trong bài tính.'
        }
      },
      {
        chapter: 'Chương 4 - Quản lý bộ nhớ',
        topic: 'Phân trang',
        difficulty: 'Dễ',
        questionType: 'fill',
        prompt: 'Trong phân trang, phần địa chỉ dùng để xác định vị trí bên trong trang gọi là gì?',
        options: {},
        answer: ['offset', 'độ dời'],
        explanation: 'Địa chỉ logic trong phân trang thường tách thành page number và offset; offset cho biết vị trí cụ thể bên trong trang.',
        example: 'Với page size 4 KB, offset là phần dư khi chia địa chỉ cho 4096.',
        tips: ['Thấy “bên trong trang” thì nghĩ đến offset.', 'Page number dùng để tra bảng trang, offset được giữ lại để ghép địa chỉ vật lý.'],
        optionAnalysis: {}
      }
    ]
  }, null, 2);
}

async function importQuestionsFromJson(event) {
  event.preventDefault();
  const raw = els.importJson.value.trim();
  if (!raw) {
    els.importMessage.textContent = 'Vui lòng dán JSON câu hỏi.';
    els.importMessage.classList.add('error');
    return;
  }

  els.importMessage.textContent = 'Đang kiểm tra và nạp câu hỏi...';
  els.importMessage.classList.remove('error');

  try {
    const response = await fetch('/api/import/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        raw,
        shared: Boolean(els.importShared?.checked)
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không import được câu hỏi.');

    state.aiResult = data;
    renderAIResult(data);
    await loadSubjects();
    if (data.runId) {
      await selectBank(`run:${data.runId}`);
    }
    await loadAIRuns();
    els.importMessage.textContent = `Đã nạp ${data.questions.length} câu hỏi.`;
    activatePanel('practice-panel');
  } catch (error) {
    els.importMessage.textContent = error.message;
    els.importMessage.classList.add('error');
  }
}

async function loadAIRuns() {
  if (!els.aiHistory) return;

  try {
    const response = await fetch('/api/ai/runs?limit=20');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tải được lịch sử AI.');
    renderAIRuns(data.runs || []);
  } catch (error) {
    els.aiHistory.innerHTML = `<div class="history-empty">${escapeHtml(error.message)}</div>`;
  }
}

function renderAIRuns(runs) {
  els.aiHistory.innerHTML = '';

  if (!runs.length) {
    els.aiHistory.innerHTML = '<div class="history-empty">Chưa có lịch sử AI trong database.</div>';
    return;
  }

  for (const run of runs) {
    const item = document.createElement('article');
    item.className = 'history-item';
    const createdAt = new Date(run.createdAt).toLocaleString('vi-VN');
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(run.focus || 'Nguyên lý hệ điều hành')}</strong>
        <span>${escapeHtml((run.fileNames || []).join(', ') || 'Không rõ file')}</span>
        <small>${createdAt} · ${run.questionCount || 0} câu · ${escapeHtml(run.difficulty || 'Trung bình')} · ${escapeHtml(run.ownerUsername || 'Không rõ owner')} · ${run.shared ? 'Đã share' : 'Riêng tư'}</small>
      </div>
      <div class="history-actions">
        <button class="secondary-btn load-run-btn" type="button">Nạp lại</button>
        ${state.currentUser.role === 'admin' ? `<button class="ghost-btn share-run-btn" type="button">${run.shared ? 'Tắt share' : 'Share'}</button>` : ''}
      </div>
    `;
    item.querySelector('.load-run-btn').addEventListener('click', () => loadAIRun(run.id));
    item.querySelector('.share-run-btn')?.addEventListener('click', () => toggleRunShare(run));
    els.aiHistory.appendChild(item);
  }
}

async function toggleRunShare(run) {
  try {
    const response = await fetch(`/api/admin/ai/runs/${encodeURIComponent(run.id)}/share`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shared: !run.shared })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không đổi được trạng thái share.');
    await Promise.all([loadAIRuns(), loadSubjects()]);
  } catch (error) {
    els.aiMessage.textContent = error.message;
    els.aiMessage.classList.add('error');
  }
}

async function loadAIRun(id) {
  els.aiMessage.textContent = 'Đang nạp lịch sử từ database...';
  els.aiMessage.classList.remove('error');

  try {
    const response = await fetch(`/api/ai/runs/${encodeURIComponent(id)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không nạp được lịch sử AI.');

    state.aiResult = {
      ...data,
      runId: data.runId || data.id
    };
    renderAIResult(state.aiResult);
    importGeneratedQuestions();
    els.aiMessage.textContent = `Đã nạp lại ${state.aiResult.questions.length} câu từ database.`;
  } catch (error) {
    els.aiMessage.textContent = error.message;
    els.aiMessage.classList.add('error');
  }
}

function importGeneratedQuestions() {
  if (!state.aiResult?.questions?.length) return;
  if (state.aiResult.runId) {
    loadSubjects()
      .then(() => selectBank(`run:${state.aiResult.runId}`))
      .then(() => activatePanel('practice-panel'))
      .catch(() => importGeneratedQuestionsInMemory());
    return;
  }
  importGeneratedQuestionsInMemory();
}

function importGeneratedQuestionsInMemory() {
  if (!state.aiResult?.questions?.length) return;
  state.generatedQuestions = state.aiResult.questions.map((question, index) => ({
    ...question,
    id: question.id || `ai-${Date.now()}-${index}`,
    number: index + 1,
    generated: true,
    chapter: question.chapter || 'AI tạo từ tài liệu',
    topic: question.topic || 'AI tạo từ tài liệu',
    subject: question.subject || state.activeBank?.subject || 'Môn học từ tài liệu',
    answerText: question.options[question.answer]
      || (Array.isArray(question.answer) ? question.answer.join(' / ') : String(question.answer || ''))
  }));
  els.chapter.value = '';
  els.topic.value = '';
  els.mode.value = 'generated';
  state.currentIndex = 0;
  applyFilters();
  activatePanel('practice-panel');
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(getProgressStorageKey()));
    return {
      answers: parsed?.answers || {},
      bookmarks: parsed?.bookmarks || [],
      studySeconds: Math.max(0, Number.parseInt(parsed?.studySeconds, 10) || 0)
    };
  } catch {
    return { answers: {}, bookmarks: [], studySeconds: 0 };
  }
}

function saveProgress() {
  localStorage.setItem(getProgressStorageKey(), JSON.stringify(state.progress));
  queueProgressSync();
}

function startStudyTimer() {
  if (state.studyTimer) return;
  state.studyTimer = setInterval(() => {
    if (!state.currentUser || document.hidden) return;
    state.progress.studySeconds = Math.max(0, Number(state.progress.studySeconds) || 0) + 15;
    localStorage.setItem(getProgressStorageKey(), JSON.stringify(state.progress));
    renderStats();
    queueProgressSync(800);
  }, 15000);
}

function getProgressStorageKey() {
  return `${STORAGE_KEY_PREFIX}:${state.currentUser?.username || 'anonymous'}`;
}

async function loadServerProgress() {
  try {
    const response = await fetch('/api/progress');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Không tải được tiến độ.');

    if (data.found) {
      state.progress = normalizeProgress(data.progress);
      localStorage.setItem(getProgressStorageKey(), JSON.stringify(state.progress));
    } else {
      queueProgressSync(0);
    }
  } catch {
    state.progress = loadProgress();
  }
}

function queueProgressSync(delay = 350) {
  clearTimeout(state.progressSyncTimer);
  state.progressSyncTimer = setTimeout(syncProgress, delay);
}

async function syncProgress() {
  try {
    await fetch('/api/progress', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progress: state.progress })
    });
    if (document.querySelector('#ranking-panel')?.classList.contains('active')) {
      loadRanking();
    }
  } catch {
    // LocalStorage remains the offline fallback.
  }
}

function normalizeProgress(progress) {
  return {
    answers: progress?.answers && typeof progress.answers === 'object' ? progress.answers : {},
    bookmarks: Array.isArray(progress?.bookmarks) ? progress.bookmarks : [],
    studySeconds: Math.max(0, Number.parseInt(progress?.studySeconds, 10) || 0)
  };
}

function roleLabel(role) {
  return {
    admin: 'Admin',
    editor: 'Editor',
    user: 'User'
  }[role] || role || 'User';
}

function roleClass(role) {
  if (role === 'admin') return 'admin';
  if (role === 'editor') return 'editor';
  return '';
}

function roleOptions(activeRole) {
  return ['user', 'editor', 'admin']
    .map((role) => `<option value="${role}" ${role === activeRole ? 'selected' : ''}>${roleLabel(role)}</option>`)
    .join('');
}
