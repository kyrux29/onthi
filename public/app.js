const STORAGE_KEY_PREFIX = 'os-exam-trainer-progress-v2';
const QUESTION_NAV_PAGE_SIZE = 50;
const STUDY_IDLE_LIMIT_MS = 5 * 60 * 1000;
const PANEL_HASHES = {
  'home-panel': '#home',
  'practice-panel': '#practice',
  'ranking-panel': '#ranking',
  'ai-panel': '#ai',
  'import-panel': '#import',
  'about-panel': '#about',
  'settings-panel': '#settings',
  'admin-panel': '#admin'
};

const state = {
  banks: [],
  activeBankId: '',
  activeBank: null,
  baseQuestions: [],
  generatedQuestions: [],
  filtered: [],
  currentIndex: 0,
  progress: { answers: {}, bookmarks: [], attemptHistory: [] },
  ranking: [],
  aiResult: null,
  currentUser: null,
  appStarted: false,
  progressSyncTimer: null,
  studyTimer: null,
  lastStudyActivityAt: Date.now(),
  questionNavPage: 0,
  bankChooserOpen: false,
  questionEditMode: null,
  questionEditTargetId: null,
  questionEditInitialJson: ''
};

const els = {
  authScreen: document.querySelector('#auth-screen'),
  appShell: document.querySelector('.app-shell'),
  homeBrand: document.querySelector('#home-brand-btn'),
  filterToggle: document.querySelector('#filter-toggle-btn'),
  sideFilterToggle: document.querySelector('#side-filter-toggle-btn'),
  filterClose: document.querySelector('#filter-close-btn'),
  sidebarScrim: document.querySelector('#sidebar-scrim'),
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
  bankScore: document.querySelector('#bank-score'),
  brandSubject: document.querySelector('#brand-subject'),
  brandTitle: document.querySelector('#brand-title'),
  bankSelect: document.querySelector('#bank-select'),
  bankCards: document.querySelector('#bank-cards'),
  subjectLanding: document.querySelector('#subject-landing'),
  bankChooserTitle: document.querySelector('#bank-chooser-title'),
  bankChooserNote: document.querySelector('#bank-chooser-note'),
  toggleBankChooser: document.querySelector('#toggle-bank-chooser-btn'),
  closeBankChooser: document.querySelector('#close-bank-chooser-btn'),
  practiceBankSubject: document.querySelector('#practice-bank-subject'),
  practiceBankTitle: document.querySelector('#practice-bank-title'),
  search: document.querySelector('#search-input'),
  chapter: document.querySelector('#chapter-select'),
  topic: document.querySelector('#topic-select'),
  mode: document.querySelector('#mode-select'),
  list: document.querySelector('#question-list'),
  shuffle: document.querySelector('#shuffle-btn'),
  restart: document.querySelector('#restart-progress-btn'),
  attemptHistoryButton: document.querySelector('#attempt-history-btn'),
  tabs: document.querySelectorAll('.tab'),
  panels: document.querySelectorAll('.panel'),
  aiStatus: document.querySelector('#ai-status'),
  questionChapter: document.querySelector('#question-chapter'),
  questionPosition: document.querySelector('#question-position'),
  questionProgressBar: document.querySelector('#question-progress-bar'),
  questionTitle: document.querySelector('#question-title'),
  bookmark: document.querySelector('#bookmark-btn'),
  questionVisuals: document.querySelector('#question-visuals'),
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
  answerSummary: document.querySelector('#answer-summary'),
  answerBanner: document.querySelector('#answer-banner'),
  explanation: document.querySelector('#answer-explanation'),
  exampleSection: document.querySelector('#answer-example-section'),
  example: document.querySelector('#answer-example'),
  tips: document.querySelector('#answer-tips'),
  analysisSection: document.querySelector('#option-analysis-section'),
  analysisTitle: document.querySelector('#option-analysis-title'),
  analysis: document.querySelector('#option-analysis'),
  questionJump: document.querySelector('#question-jump'),
  questionPageSelect: document.querySelector('#question-page-select'),
  questionPageSummary: document.querySelector('#question-page-summary'),
  jump: document.querySelector('#jump-btn'),
  nextUnanswered: document.querySelector('#next-unanswered-btn'),
  nextWrong: document.querySelector('#next-wrong-btn'),
  completionDialog: document.querySelector('#completion-dialog'),
  completionBankName: document.querySelector('#completion-bank-name'),
  completionCorrect: document.querySelector('#completion-correct'),
  completionAccuracy: document.querySelector('#completion-accuracy'),
  completionWrong: document.querySelector('#completion-wrong'),
  reviewWrong: document.querySelector('#review-wrong-btn'),
  restartBank: document.querySelector('#restart-bank-btn'),
  attemptHistoryDialog: document.querySelector('#attempt-history-dialog'),
  attemptHistoryBankName: document.querySelector('#attempt-history-bank-name'),
  currentAttemptSummary: document.querySelector('#current-attempt-summary'),
  attemptHistoryList: document.querySelector('#attempt-history-list'),
  attemptHistoryEmpty: document.querySelector('#attempt-history-empty'),
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
  activatePanel(panelFromLocation(), { updateHistory: false });
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
    refreshTopicOptions();
    syncAIClassificationFields();
    applyFilters();
  });
  els.topic.addEventListener('change', () => {
    state.currentIndex = 0;
    syncAIClassificationFields();
    applyFilters();
  });
  els.bankSelect.addEventListener('change', () => selectBank(els.bankSelect.value, { closeChooser: true }));
  els.toggleBankChooser.addEventListener('click', () => {
    state.bankChooserOpen = true;
    renderBankChooser();
  });
  els.closeBankChooser.addEventListener('click', closeBankChooser);
  els.subjectLanding.addEventListener('close', () => {
    state.bankChooserOpen = false;
    renderBankChooser();
  });
  els.filterToggle.addEventListener('click', () => setFiltersOpen(!els.appShell.classList.contains('filters-open')));
  els.sideFilterToggle.addEventListener('click', () => setFiltersOpen(!els.appShell.classList.contains('filters-open')));
  els.filterClose.addEventListener('click', () => setFiltersOpen(false));
  els.sidebarScrim.addEventListener('click', () => setFiltersOpen(false));
  els.questionPageSelect.addEventListener('change', () => {
    const requestedPage = Number.parseInt(els.questionPageSelect.value, 10) || 0;
    state.questionNavPage = requestedPage;
    state.currentIndex = Math.min(requestedPage * QUESTION_NAV_PAGE_SIZE, Math.max(0, state.filtered.length - 1));
    renderQuestion();
    scrollCurrentQuestionIntoView();
  });
  els.mode.addEventListener('change', () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.shuffle.addEventListener('click', shuffleCurrentSet);
  els.restart.addEventListener('click', () => restartProgress());
  els.attemptHistoryButton.addEventListener('click', openAttemptHistory);
  els.prev.addEventListener('click', () => moveQuestion(-1));
  els.next.addEventListener('click', () => moveQuestion(1));
  els.jump.addEventListener('click', jumpToQuestion);
  els.questionJump.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      jumpToQuestion();
    }
  });
  els.nextUnanswered.addEventListener('click', () => moveToNextMatch((question) => !getSavedAnswer(question)));
  els.nextWrong.addEventListener('click', () => moveToNextMatch((question) => {
    const answer = getSavedAnswer(question);
    return answer && !answer.correct;
  }));
  els.reviewWrong.addEventListener('click', reviewWrongAnswers);
  els.restartBank.addEventListener('click', restartCurrentBank);
  els.editQuestion.addEventListener('click', () => openQuestionEditor('edit'));
  els.addQuestion.addEventListener('click', () => openQuestionEditor('add'));
  els.deleteQuestion.addEventListener('click', deleteCurrentQuestion);
  els.questionEditor.addEventListener('submit', saveQuestionEdit);
  els.cancelQuestionEdit.addEventListener('click', requestCloseQuestionEditor);
  els.cancelQuestionEditSecondary.addEventListener('click', requestCloseQuestionEditor);
  els.questionTools.addEventListener('toggle', () => {
    if (els.questionTools.open || !hasUnsavedQuestionEdit()) return;
    if (window.confirm('Bỏ các thay đổi chưa lưu của câu hỏi này?')) closeQuestionEditor();
    else els.questionTools.open = true;
  });
  els.refreshRanking.addEventListener('click', loadRanking);
  els.homeBrand.addEventListener('click', () => activatePanel('home-panel'));
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

  window.addEventListener('popstate', () => activatePanel(panelFromLocation(), { updateHistory: false }));
  window.addEventListener('beforeunload', (event) => {
    if (!hasUnsavedQuestionEdit()) return;
    event.preventDefault();
    event.returnValue = '';
  });
  document.addEventListener('pointerdown', markStudyActivity, { passive: true });
  document.addEventListener('keydown', handleGlobalKeydown);
}

function handleGlobalKeydown(event) {
  markStudyActivity();
  if (event.key === 'Escape') setFiltersOpen(false);
  handlePracticeKeyboard(event);
}

function handlePracticeKeyboard(event) {
  if (event.defaultPrevented || els.appShell.dataset.activePanel !== 'practice-panel') return;
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (document.querySelector('dialog[open]') || els.appShell.classList.contains('filters-open')) return;
  if (!els.questionEditor.hidden || shouldIgnoreQuizShortcutTarget(event.target)) return;

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    const options = [...els.options.querySelectorAll('.option-btn:not(:disabled)')];
    if (!options.length) return;

    event.preventDefault();
    const activeIndex = options.indexOf(document.activeElement);
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex = activeIndex < 0
      ? (direction > 0 ? 0 : options.length - 1)
      : (activeIndex + direction + options.length) % options.length;
    options[nextIndex].focus({ preventScroll: true });
    options[nextIndex].scrollIntoView({ block: 'nearest' });
    return;
  }

  if (event.key === 'Enter') {
    const activeOption = document.activeElement?.closest?.('.option-btn:not(:disabled)');
    if (!activeOption || event.repeat) return;
    event.preventDefault();
    activeOption.click();
    return;
  }

  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveQuestion(event.key === 'ArrowRight' ? 1 : -1);
    requestAnimationFrame(() => {
      els.options.querySelector('.option-btn:not(:disabled)')?.focus({ preventScroll: true });
    });
  }
}

function shouldIgnoreQuizShortcutTarget(target) {
  if (!(target instanceof Element)) return false;
  if (target.closest('input, textarea, select, [contenteditable="true"]')) return true;
  return Boolean(target.closest('button, a, summary, [role="button"]') && !target.closest('.option-btn'));
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
  state.questionNavPage = 0;

  renderBankChrome(data.bank);
  renderChapterOptions(data.chapters || []);
  refreshTopicOptions();
  migrateLegacyProgressForActiveBank();
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
  els.loginMessage.textContent = 'Đang đăng nhập…';
  els.loginMessage.classList.remove('error');
  setFormBusy(els.loginForm, true, 'Đang đăng nhập…');

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
  } finally {
    setFormBusy(els.loginForm, false);
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
  els.adminMessage.textContent = 'Đang tạo tài khoản…';
  els.adminMessage.classList.remove('error');
  setFormBusy(els.createUserForm, true, 'Đang tạo…');

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
  } finally {
    setFormBusy(els.createUserForm, false);
  }
}

async function changePassword(event) {
  event.preventDefault();
  const formData = new FormData(els.passwordForm);
  const currentPassword = String(formData.get('currentPassword') || '');
  const newPassword = String(formData.get('newPassword') || '');
  const confirmPassword = String(formData.get('confirmPassword') || '');

  els.passwordMessage.textContent = 'Đang cập nhật mật khẩu…';
  els.passwordMessage.classList.remove('error');

  if (newPassword !== confirmPassword) {
    els.passwordMessage.textContent = 'Mật khẩu mới nhập lại không khớp.';
    els.passwordMessage.classList.add('error');
    return;
  }

  setFormBusy(els.passwordForm, true, 'Đang cập nhật…');

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
  } finally {
    setFormBusy(els.passwordForm, false);
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
  els.adminMessage.textContent = 'Đang cập nhật quyền…';
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
  const currentTopic = els.topic.value;
  els.topic.innerHTML = '<option value="">Tất cả chủ đề</option>';
  for (const topic of topics) {
    const option = document.createElement('option');
    option.value = topic;
    option.textContent = topic;
    els.topic.appendChild(option);
  }
  els.topic.value = topics.includes(currentTopic) ? currentTopic : '';
}

function refreshTopicOptions() {
  const chapter = els.chapter.value;
  const topics = [...new Set(
    allQuestions()
      .filter((question) => !chapter || question.chapter === chapter)
      .map((question) => question.topic)
      .filter(Boolean)
  )].sort((left, right) => left.localeCompare(right, 'vi'));
  renderTopicOptions(topics);
}

function renderBankChrome(bank) {
  els.brandSubject.textContent = bank.subject || 'Kho câu hỏi';
  els.brandTitle.textContent = bank.title || 'Ôn thi trắc nghiệm';
  els.practiceBankSubject.textContent = bank.subject || 'Bộ câu hỏi';
  els.practiceBankTitle.textContent = bank.title || 'Ôn thi trắc nghiệm';
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
    card.addEventListener('click', () => selectBank(bank.id, { closeChooser: true }));
    els.bankCards.appendChild(card);
  }
  renderBankChooser();
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
  const answers = questions.map(getSavedAnswer).filter(Boolean);
  const correct = answers.filter((answer) => answer.correct).length;
  const done = answers.length;
  const total = questions.length;
  return {
    total,
    correct,
    done,
    wrong: done - correct,
    score: done ? Math.round((correct / done) * 100) : 0,
    complete: total > 0 && done === total
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
  if (action === 'continue') state.bankChooserOpen = false;
  renderBankChooser();
  applyFilters();
  activatePanel('practice-panel');
}

async function selectBank(bankId, options = {}) {
  if (!confirmDiscardQuestionEdit()) {
    els.bankSelect.value = state.activeBankId;
    return;
  }
  const { closeChooser = false } = options;
  state.activeBankId = bankId;
  els.bankSelect.value = bankId;
  await loadQuestions();
  for (const card of els.bankCards.querySelectorAll('.bank-card')) {
    card.classList.toggle('active', state.banks[Array.from(els.bankCards.children).indexOf(card)]?.id === bankId);
  }
  if (closeChooser) state.bankChooserOpen = false;
  renderBankChooser();
  setFiltersOpen(false);
}

function renderBankChooser() {
  if (!els.bankCards || !els.toggleBankChooser) return;
  const open = state.bankChooserOpen;
  els.toggleBankChooser.setAttribute('aria-expanded', open ? 'true' : 'false');
  els.toggleBankChooser.textContent = 'Đổi bộ';
  els.bankChooserTitle.textContent = 'Chọn môn hoặc bộ câu hỏi';
  els.bankChooserNote.textContent = 'Chọn một bộ để bắt đầu hoặc tiếp tục tiến độ đã lưu.';

  if (open && !els.subjectLanding.open) {
    els.subjectLanding.showModal();
  } else if (!open && els.subjectLanding.open) {
    els.subjectLanding.close();
  }
}

function closeBankChooser() {
  state.bankChooserOpen = false;
  renderBankChooser();
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
    const result = getSavedAnswer(question);
    const matchesKeyword = !keyword || normalize([
      question.prompt,
      question.chapter,
      question.topic,
      question.explanation,
      visualSearchText(question),
      ...Object.values(question.options || {})
    ].join(' ')).includes(keyword);
    const matchesChapter = !chapter || question.chapter === chapter;
    const matchesTopic = !topic || question.topic === topic;
    const matchesMode =
      mode === 'study' ||
      (mode === 'wrong' && result && !result.correct) ||
      (mode === 'bookmarked' && isQuestionBookmarked(question)) ||
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
  const pageCount = Math.max(1, Math.ceil(state.filtered.length / QUESTION_NAV_PAGE_SIZE));
  state.questionNavPage = Math.min(
    Math.floor(state.currentIndex / QUESTION_NAV_PAGE_SIZE),
    pageCount - 1
  );
  renderQuestionPageOptions(pageCount);

  const start = state.questionNavPage * QUESTION_NAV_PAGE_SIZE;
  const end = Math.min(start + QUESTION_NAV_PAGE_SIZE, state.filtered.length);
  els.questionPageSummary.textContent = state.filtered.length
    ? `${end - start} / ${state.filtered.length} câu`
    : '0 câu';

  for (let index = start; index < end; index += 1) {
    const question = state.filtered[index];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'question-chip';
    const displayNumber = getDisplayQuestionNumber(question);
    button.textContent = String(displayNumber).padStart(3, '0');
    button.setAttribute('aria-label', `Câu ${displayNumber}: ${getDisplayQuestionPrompt(question)}`);
    button.addEventListener('click', () => {
      if (!confirmDiscardQuestionEdit()) return;
      state.currentIndex = index;
      renderQuestion();
      renderList();
      scrollCurrentQuestionIntoView();
    });

    const answer = getSavedAnswer(question);
    button.classList.toggle('active', index === state.currentIndex);
    if (index === state.currentIndex) button.setAttribute('aria-current', 'true');
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

function renderQuestionPageOptions(pageCount) {
  const expectedCount = state.filtered.length ? pageCount : 0;
  if (els.questionPageSelect.options.length !== expectedCount ||
      els.questionPageSelect.dataset.total !== String(state.filtered.length)) {
    els.questionPageSelect.innerHTML = '';
    for (let page = 0; page < expectedCount; page += 1) {
      const start = page * QUESTION_NAV_PAGE_SIZE + 1;
      const end = Math.min((page + 1) * QUESTION_NAV_PAGE_SIZE, state.filtered.length);
      const firstNumber = getDisplayQuestionNumber(state.filtered[start - 1]);
      const lastNumber = getDisplayQuestionNumber(state.filtered[end - 1]);
      const option = document.createElement('option');
      option.value = String(page);
      option.textContent = `Câu ${firstNumber}-${lastNumber}`;
      els.questionPageSelect.appendChild(option);
    }
    els.questionPageSelect.dataset.total = String(state.filtered.length);
  }
  els.questionPageSelect.disabled = expectedCount <= 1;
  if (expectedCount) els.questionPageSelect.value = String(state.questionNavPage);
}

function renderQuestion() {
  const question = state.filtered[state.currentIndex];
  els.options.innerHTML = '';
  els.analysis.innerHTML = '';
  els.tips.innerHTML = '';
  els.questionVisuals.innerHTML = '';
  els.questionVisuals.hidden = true;
  els.answerPanel.open = false;

  if (!question) {
    els.questionChapter.textContent = 'Không có câu phù hợp';
    els.questionPosition.textContent = '0 / 0';
    els.questionJump.value = '';
    els.questionJump.max = '1';
    els.questionTitle.textContent = 'Không tìm thấy câu hỏi theo bộ lọc hiện tại.';
    els.questionProgressBar.style.width = '0%';
    els.answerPanel.hidden = true;
    els.bookmark.classList.remove('active');
    renderQuestionTools(null);
    return;
  }

  const saved = getSavedAnswer(question);
  els.questionChapter.textContent = [question.chapter, question.topic].filter(Boolean).join(' · ');
  els.questionPosition.textContent = `${state.currentIndex + 1} / ${state.filtered.length}`;
  els.questionJump.max = String(state.filtered.length);
  els.questionJump.value = String(state.currentIndex + 1);
  els.questionTitle.textContent = getDisplayQuestionPrompt(question);
  els.questionProgressBar.style.width = `${((state.currentIndex + 1) / state.filtered.length) * 100}%`;
  els.bookmark.classList.toggle('active', isQuestionBookmarked(question));
  els.bookmark.textContent = isQuestionBookmarked(question) ? '★' : '☆';
  renderQuestionTools(question);
  renderQuestionVisuals(question);

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
    els.answerPanel.open = false;
  }

  renderList();
}

function renderQuestionTools(question) {
  if (!els.questionTools) return;
  const canManage = Boolean(question) && canManageCurrentBank();
  els.questionTools.hidden = !canManage;

  if (!canManage) {
    els.questionTools.open = false;
    closeQuestionEditor();
    return;
  }

  els.editQuestion.disabled = !question;
  els.deleteQuestion.disabled = !question;
  if (state.questionEditMode === 'edit' && state.questionEditTargetId !== question.id) {
    closeQuestionEditor();
  }
}

function renderQuestionVisuals(question) {
  const blocks = [];
  const tables = [...(question.tables || []), question.table].filter(Boolean);
  for (const table of tables) blocks.push(createTableVisual(table));
  if (question.chart) blocks.push(createChartVisual(question.chart));
  if (question.timeline) blocks.push(createTimelineVisual(question.timeline));

  for (const block of blocks.filter(Boolean)) {
    els.questionVisuals.appendChild(block);
  }

  els.questionVisuals.hidden = !els.questionVisuals.children.length;
}

function createTableVisual(table) {
  if (!Array.isArray(table?.columns) || !Array.isArray(table?.rows) || !table.columns.length || !table.rows.length) {
    return null;
  }

  const block = document.createElement('section');
  block.className = 'visual-block visual-table-block';
  if (table.caption) {
    const caption = document.createElement('h3');
    caption.textContent = table.caption;
    block.appendChild(caption);
  }

  const scroll = document.createElement('div');
  scroll.className = 'visual-table-scroll';
  const htmlTable = document.createElement('table');
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  for (const column of table.columns) {
    const th = document.createElement('th');
    th.textContent = column;
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  htmlTable.appendChild(thead);

  const tbody = document.createElement('tbody');
  for (const row of table.rows) {
    const tr = document.createElement('tr');
    for (let index = 0; index < table.columns.length; index += 1) {
      const td = document.createElement('td');
      td.textContent = row[index] ?? '';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  htmlTable.appendChild(tbody);
  scroll.appendChild(htmlTable);
  block.appendChild(scroll);
  return block;
}

function createChartVisual(chart) {
  const data = normalizeChartData(chart?.data);
  if (!data.length) return null;

  const block = document.createElement('section');
  block.className = `visual-block chart-block chart-${chart.type === 'line' ? 'line' : 'bar'}`;
  if (chart.title) {
    const title = document.createElement('h3');
    title.textContent = chart.title;
    block.appendChild(title);
  }

  if (chart.type === 'line') {
    block.appendChild(createLineChart(data, chart.title));
  } else {
    block.appendChild(createBarChart(data));
  }

  if (chart.xLabel || chart.yLabel) {
    const note = document.createElement('p');
    note.className = 'visual-axis-note';
    note.textContent = [chart.xLabel && `X: ${chart.xLabel}`, chart.yLabel && `Y: ${chart.yLabel}`].filter(Boolean).join(' · ');
    block.appendChild(note);
  }

  return block;
}

function createBarChart(data) {
  const max = Math.max(...data.map((point) => point.value), 1);
  const chart = document.createElement('div');
  chart.className = 'bar-chart';

  for (const point of data) {
    const row = document.createElement('div');
    row.className = 'chart-bar-row';
    row.innerHTML = `
      <span class="chart-label"></span>
      <span class="chart-bar-track"><span class="chart-bar-fill"></span></span>
      <strong class="chart-value"></strong>
    `;
    row.querySelector('.chart-label').textContent = point.label;
    row.querySelector('.chart-bar-fill').style.width = `${Math.max(4, (point.value / max) * 100)}%`;
    row.querySelector('.chart-value').textContent = formatVisualNumber(point.value);
    chart.appendChild(row);
  }

  return chart;
}

function createLineChart(data, title) {
  const width = 640;
  const height = 220;
  const padding = 28;
  const min = Math.min(...data.map((point) => point.value), 0);
  const max = Math.max(...data.map((point) => point.value), 1);
  const span = max - min || 1;
  const xStep = data.length > 1 ? (width - padding * 2) / (data.length - 1) : 0;
  const points = data.map((point, index) => {
    const x = padding + (index * xStep);
    const y = height - padding - (((point.value - min) / span) * (height - padding * 2));
    return { ...point, x, y };
  });

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', title || 'Biểu đồ đường của câu hỏi');
  svg.classList.add('line-chart');

  const axis = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  axis.setAttribute('d', `M ${padding} ${padding} V ${height - padding} H ${width - padding}`);
  axis.setAttribute('class', 'line-chart-axis');
  svg.appendChild(axis);

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttribute('points', points.map((point) => `${point.x},${point.y}`).join(' '));
  polyline.setAttribute('class', 'line-chart-stroke');
  svg.appendChild(polyline);

  for (const point of points) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    circle.setAttribute('r', '4');
    circle.setAttribute('class', 'line-chart-point');
    svg.appendChild(circle);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', point.x);
    label.setAttribute('y', height - 8);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('class', 'line-chart-label');
    label.textContent = point.label;
    svg.appendChild(label);
  }

  return svg;
}

function createTimelineVisual(timeline) {
  const segments = Array.isArray(timeline?.segments) ? timeline.segments : [];
  if (!segments.length) return null;

  const starts = segments.map((segment) => Number(segment.start)).filter(Number.isFinite);
  const ends = segments.map((segment) => Number(segment.end)).filter(Number.isFinite);
  const min = Math.min(...starts, 0);
  const max = Math.max(...ends, 1);
  const span = max - min || 1;
  const block = document.createElement('section');
  block.className = 'visual-block timeline-block';

  if (timeline.caption) {
    const title = document.createElement('h3');
    title.textContent = timeline.caption;
    block.appendChild(title);
  }

  const track = document.createElement('div');
  track.className = 'timeline-track';
  for (const segment of segments) {
    const start = Number(segment.start);
    const end = Number(segment.end);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) continue;
    const item = document.createElement('div');
    item.className = 'timeline-segment';
    item.style.left = `${((start - min) / span) * 100}%`;
    item.style.width = `${Math.max(6, ((end - start) / span) * 100)}%`;
    item.innerHTML = `<strong></strong><span></span>`;
    item.querySelector('strong').textContent = segment.label || '';
    item.querySelector('span').textContent = `${formatVisualNumber(start)}-${formatVisualNumber(end)}${timeline.unit ? ` ${timeline.unit}` : ''}`;
    track.appendChild(item);
  }
  block.appendChild(track);

  const scale = document.createElement('div');
  scale.className = 'timeline-scale';
  scale.innerHTML = `<span>${formatVisualNumber(min)}</span><span>${formatVisualNumber(max)}${timeline.unit ? ` ${escapeHtml(timeline.unit)}` : ''}</span>`;
  block.appendChild(scale);
  return block;
}

function normalizeChartData(data) {
  if (!Array.isArray(data)) return [];
  return data.map((point, index) => {
    if (Array.isArray(point)) {
      const value = Number(point[1]);
      return Number.isFinite(value)
        ? { label: String(point[0] ?? index + 1), value }
        : null;
    }
    const value = Number(point?.value ?? point?.y ?? point?.count);
    return Number.isFinite(value)
      ? { label: String(point.label ?? point.x ?? index + 1), value }
      : null;
  }).filter(Boolean);
}

function visualSearchText(question) {
  return JSON.stringify({
    table: question.table || null,
    tables: question.tables || [],
    chart: question.chart || null,
    timeline: question.timeline || null
  });
}

function visualSummary(question) {
  const parts = [];
  const tableCount = (isRenderableTable(question.table) ? 1 : 0) + (question.tables || []).filter(isRenderableTable).length;
  if (tableCount) parts.push(`${tableCount} bảng`);
  if (question.chart?.data?.length) parts.push(question.chart.type === 'line' ? 'biểu đồ đường' : 'biểu đồ cột');
  if (question.timeline?.segments?.length) parts.push('timeline/Gantt');
  return parts.join(', ');
}

function isRenderableTable(table) {
  return Array.isArray(table?.columns) && table.columns.length &&
    Array.isArray(table?.rows) && table.rows.length;
}

function hasVisualObject(value) {
  return value && typeof value === 'object' && Object.keys(value).length > 0;
}

function formatVisualNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value || '');
  return Number.isInteger(number) ? String(number) : number.toFixed(2).replace(/\.?0+$/, '');
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
  els.questionTools.open = true;
  els.questionEditor.hidden = false;
  els.questionEditorTitle.textContent = mode === 'add' ? 'Thêm câu hỏi mới' : `Chỉnh sửa câu ${question.number}`;
  els.questionEditorJson.value = JSON.stringify(
    mode === 'add' ? buildQuestionTemplate(question) : serializeQuestionForEdit(question),
    null,
    2
  );
  state.questionEditInitialJson = els.questionEditorJson.value;
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
  state.questionEditInitialJson = '';
  els.questionEditor.hidden = true;
  els.questionEditorMessage.textContent = '';
  els.questionEditorMessage.classList.remove('error');
  if (els.questionTools) els.questionTools.open = false;
}

function hasUnsavedQuestionEdit() {
  return Boolean(
    els.questionEditor &&
    !els.questionEditor.hidden &&
    els.questionEditorJson.value !== state.questionEditInitialJson
  );
}

function requestCloseQuestionEditor() {
  confirmDiscardQuestionEdit();
}

function confirmDiscardQuestionEdit() {
  if (hasUnsavedQuestionEdit() && !window.confirm('Bỏ các thay đổi chưa lưu của câu hỏi này?')) return false;
  if (!els.questionEditor.hidden) closeQuestionEditor();
  return true;
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

  els.questionEditorMessage.textContent = 'Đang lưu câu hỏi…';
  els.questionEditorMessage.classList.remove('error');
  setFormBusy(els.questionEditor, true, 'Đang lưu…');

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
  } finally {
    setFormBusy(els.questionEditor, false);
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

    deleteQuestionProgress(question);
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
    ...(hasVisualObject(question.table) ? { table: question.table } : {}),
    ...(question.tables?.length ? { tables: question.tables } : {}),
    ...(hasVisualObject(question.chart) ? { chart: question.chart } : {}),
    ...(hasVisualObject(question.timeline) ? { timeline: question.timeline } : {}),
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
      B: 'Phương án nhiễu, sai ở điểm…',
      C: 'Phương án nhiễu, dễ nhầm với…',
      D: 'Phương án nhiễu, không phù hợp ngữ cảnh câu hỏi.'
    }
  };
}

function renderSingleChoice(question, saved) {
  for (const letter of getOptionLetters(question)) {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'option-btn';
    option.setAttribute('aria-keyshortcuts', 'ArrowUp ArrowDown Enter');
    option.innerHTML = `
      <div class="option-header">
        <span class="option-letter">${letter}.</span>
        <span class="option-text"></span>
      </div>
    `;
    option.querySelector('.option-text').textContent = question.options[letter];
    if (saved) {
      option.disabled = true;
      decorateOption(option, question, letter, saved.selected);
    } else {
      option.addEventListener('click', () => selectAnswer(question, letter));
    }
    els.options.appendChild(option);
  }
}

function renderMultipleChoice(question, saved) {
  const selected = new Set(Array.isArray(saved?.selected) ? saved.selected : []);
  const controls = document.createElement('div');
  controls.className = 'multi-submit-row';
  let submit = null;

  for (const letter of getOptionLetters(question)) {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'option-btn';
    option.setAttribute('aria-keyshortcuts', 'ArrowUp ArrowDown Enter');
    option.setAttribute('aria-pressed', selected.has(letter) ? 'true' : 'false');
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
        option.setAttribute('aria-pressed', selected.has(letter) ? 'true' : 'false');
        if (submit) submit.disabled = selected.size === 0;
      });
    } else {
      option.disabled = true;
      decorateOption(option, question, letter, saved.selected);
    }

    option.classList.toggle('selected', selected.has(letter));
    els.options.appendChild(option);
  }

  if (!saved) {
    submit = document.createElement('button');
    submit.className = 'primary-btn';
    submit.type = 'button';
    submit.textContent = 'Chốt đáp án';
    submit.disabled = selected.size === 0;
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
      <input name="answer" type="text" autocomplete="off" placeholder="Nhập đáp án ngắn…" required>
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
  if (getSavedAnswer(question)) return;
  const completedBefore = getProgressStats().complete;
  const correct = isCorrectAnswer(question, selected);
  state.progress.answers[getQuestionProgressKey(question)] = {
    selected,
    correct,
    at: new Date().toISOString()
  };
  saveProgress();
  renderQuestion();
  const stats = getProgressStats();
  renderStats(stats);
  if (!completedBefore && stats.complete) showCompletionDialog(stats);
}

function decorateOption(element, question, letter, selected) {
  const correctLetters = normalizeAnswerList(question.answer);
  const selectedLetters = normalizeAnswerList(selected);
  const isCorrectLetter = correctLetters.includes(letter);
  const isSelectedLetter = selectedLetters.includes(letter);
  element.classList.toggle('correct', isCorrectLetter);
  element.classList.toggle('wrong', isSelectedLetter && !isCorrectLetter);
  element.classList.toggle('dimmed', !isCorrectLetter && !isSelectedLetter);

  const questionType = getQuestionType(question);
  const shouldShowFeedback = questionType === 'single'
    ? isSelectedLetter || isCorrectLetter
    : isSelectedLetter;

  if (shouldShowFeedback) {
    const feedback = document.createElement('div');
    feedback.className = 'option-feedback';
    const isCorrect = isCorrectLetter;
    const showLearningDetail = isCorrect && questionType === 'single';
    const status = isCorrect ? '✓ Chính xác!' : '✕ Chưa đúng';
    const explanation = showLearningDetail
      ? question.explanation || buildOptionAnalysis(question, letter)
      : buildOptionAnalysis(question, letter);
    const tips = showLearningDetail ? (question.tips || []).slice(0, 1) : [];

    feedback.innerHTML = `
      <strong class="feedback-status">${status}</strong>
      <p></p>
      ${question.example && showLearningDetail ? `<p class="feedback-example"><strong>Ví dụ:</strong> ${escapeHtml(question.example)}</p>` : ''}
      ${tips.length ? `<div class="feedback-tips">${tips.map((tip) => `<span>${escapeHtml(tip)}</span>`).join('')}</div>` : ''}
    `;
    feedback.querySelector('p').textContent = explanation;
    element.appendChild(feedback);
  }
}

function showAnswer(question, selected) {
  const correct = isCorrectAnswer(question, selected);
  const questionType = getQuestionType(question);
  els.answerPanel.hidden = false;
  els.answerPanel.open = questionType !== 'single';
  els.answerSummary.textContent = correct
    ? 'Đúng · Xem giải thích đầy đủ'
    : 'Chưa đúng · Xem giải thích đầy đủ';
  els.answerPanel.classList.toggle('wrong', !correct);
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

function getDisplayQuestionNumber(question) {
  const match = String(question?.prompt || '').match(/^Câu\s+(?:hỏi\s+)?(\d+)/i);
  return match ? Number(match[1]) : question?.number || 1;
}

function getDisplayQuestionPrompt(question) {
  return String(question?.prompt || '').replace(/^Câu\s+(?:hỏi\s+)?\d+\s*[:.)-]\s*/i, '').trim();
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

function renderStats(stats = getProgressStats()) {
  els.total.textContent = stats.total;
  els.done.textContent = stats.done;
  els.score.textContent = `${stats.score}%`;
  els.hours.textContent = formatStudyTime(state.progress.studySeconds || 0);
  els.bankScore.textContent = `${stats.correct} / ${stats.total}`;
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
  if (!confirmDiscardQuestionEdit()) return;
  state.currentIndex = (state.currentIndex + delta + state.filtered.length) % state.filtered.length;
  renderQuestion();
  scrollCurrentQuestionIntoView();
}

function jumpToQuestion() {
  if (!state.filtered.length) return;
  const requested = Number.parseInt(els.questionJump.value, 10);
  if (!Number.isFinite(requested)) return;
  if (!confirmDiscardQuestionEdit()) return;
  const nextIndex = Math.min(Math.max(requested, 1), state.filtered.length) - 1;
  state.currentIndex = nextIndex;
  renderQuestion();
  scrollCurrentQuestionIntoView();
}

function moveToNextMatch(predicate) {
  if (!state.filtered.length) return;
  if (!confirmDiscardQuestionEdit()) return;
  const total = state.filtered.length;
  for (let step = 1; step <= total; step += 1) {
    const nextIndex = (state.currentIndex + step) % total;
    if (predicate(state.filtered[nextIndex])) {
      state.currentIndex = nextIndex;
      renderQuestion();
      scrollCurrentQuestionIntoView();
      return;
    }
  }
}

function shuffleCurrentSet() {
  if (!confirmDiscardQuestionEdit()) return;
  for (let index = state.filtered.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [state.filtered[index], state.filtered[swapIndex]] = [state.filtered[swapIndex], state.filtered[index]];
  }
  state.currentIndex = 0;
  renderList();
  renderQuestion();
}

function scrollCurrentQuestionIntoView() {
  requestAnimationFrame(() => {
    document.querySelector('.question-card')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

function toggleBookmark() {
  const question = state.filtered[state.currentIndex];
  if (!question) return;
  const progressKey = getQuestionProgressKey(question);
  const exists = isQuestionBookmarked(question);
  state.progress.bookmarks = exists
    ? state.progress.bookmarks.filter((id) => ![progressKey, question.id].includes(id))
    : [...state.progress.bookmarks, progressKey];
  saveProgress();
  if (els.mode.value === 'bookmarked') applyFilters();
  else renderQuestion();
}

function restartProgress() {
  if (!state.activeBank) return false;
  const attempt = buildCurrentAttemptSummary();
  const confirmed = window.confirm(
    attempt
      ? `Lưu lượt hiện tại (${attempt.correct}/${attempt.total} câu đúng) vào lịch sử và làm lại “${state.activeBank.title}”?`
      : `Bộ “${state.activeBank.title}” chưa có câu trả lời. Bắt đầu lại từ câu đầu?`
  );
  if (!confirmed) return false;

  if (attempt) {
    state.progress.attemptHistory = [...state.progress.attemptHistory, attempt];
  }

  const bankProgressPrefix = `${encodeURIComponent(String(state.activeBankId))}::`;
  for (const progressKey of Object.keys(state.progress.answers)) {
    if (progressKey.startsWith(bankProgressPrefix)) delete state.progress.answers[progressKey];
  }

  for (const question of allQuestions()) {
    delete state.progress.answers[question.id];
  }

  resetPracticeView();
  saveProgress();
  applyFilters();
  return true;
}

function buildCurrentAttemptSummary() {
  const questions = allQuestions();
  const answers = questions.map(getSavedAnswer).filter(Boolean);
  if (!answers.length) return null;

  const stats = getProgressStats();
  const answerTimes = answers
    .map((answer) => Date.parse(answer.at))
    .filter(Number.isFinite)
    .sort((left, right) => left - right);
  const fallbackTime = Date.now();
  const startedAt = new Date(answerTimes[0] || fallbackTime).toISOString();
  const endedAt = new Date(answerTimes.at(-1) || fallbackTime).toISOString();
  const randomId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return {
    id: `attempt-${randomId}`,
    bankId: state.activeBankId,
    bankTitle: state.activeBank.title || 'Bộ câu hỏi',
    subject: state.activeBank.subject || '',
    startedAt,
    endedAt,
    total: stats.total,
    done: stats.done,
    correct: stats.correct,
    wrong: stats.wrong,
    accuracy: stats.score,
    completed: stats.complete
  };
}

function resetPracticeView() {
  els.search.value = '';
  els.chapter.value = '';
  refreshTopicOptions();
  els.topic.value = '';
  els.mode.value = 'study';
  state.currentIndex = 0;
  state.questionNavPage = 0;
}

function openAttemptHistory() {
  if (!state.activeBank || !els.attemptHistoryDialog) return;
  renderAttemptHistory();
  if (!els.attemptHistoryDialog.open) els.attemptHistoryDialog.showModal();
}

function renderAttemptHistory() {
  const currentStats = getProgressStats();
  els.attemptHistoryBankName.textContent = state.activeBank?.title || 'Bộ câu hỏi đang học';
  els.currentAttemptSummary.hidden = currentStats.done === 0;
  els.currentAttemptSummary.textContent = currentStats.done
    ? `Phiên hiện tại: ${currentStats.correct}/${currentStats.total} câu đúng · ${currentStats.done}/${currentStats.total} câu đã làm`
    : '';

  const attempts = state.progress.attemptHistory
    .filter((attempt) => attempt.bankId === state.activeBankId)
    .map((attempt, index) => ({ attempt, number: index + 1 }))
    .reverse();

  els.attemptHistoryList.innerHTML = '';
  els.attemptHistoryEmpty.hidden = attempts.length > 0;

  for (const { attempt, number } of attempts) {
    const item = document.createElement('article');
    item.className = 'attempt-history-item';

    const header = document.createElement('div');
    header.className = 'attempt-history-item-header';
    const identity = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = `Lượt ${number}`;
    const time = document.createElement('time');
    time.dateTime = attempt.endedAt || '';
    time.textContent = formatAttemptDate(attempt.endedAt);
    identity.append(title, time);

    const status = document.createElement('span');
    status.className = `attempt-status${attempt.completed ? ' complete' : ''}`;
    status.textContent = attempt.completed ? 'Hoàn thành' : 'Chưa hoàn thành';
    header.append(identity, status);

    const metrics = document.createElement('div');
    metrics.className = 'attempt-history-metrics';
    metrics.append(
      createAttemptMetric('Điểm', `${attempt.correct}/${attempt.total}`),
      createAttemptMetric('Đã làm', `${attempt.done}/${attempt.total}`),
      createAttemptMetric('Chính xác', `${attempt.accuracy}%`)
    );

    item.append(header, metrics);
    els.attemptHistoryList.appendChild(item);
  }
}

function createAttemptMetric(label, value) {
  const metric = document.createElement('div');
  const labelElement = document.createElement('span');
  const valueElement = document.createElement('strong');
  labelElement.textContent = label;
  valueElement.textContent = value;
  metric.append(labelElement, valueElement);
  return metric;
}

function formatAttemptDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Không rõ thời gian';
  return date.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function showCompletionDialog(stats = getProgressStats()) {
  if (!state.activeBank || !stats.complete || !els.completionDialog) return;

  els.completionBankName.textContent = state.activeBank.title || 'Bộ câu hỏi đang học';
  els.completionCorrect.textContent = `${stats.correct} / ${stats.total}`;
  els.completionAccuracy.textContent = `${stats.score}%`;
  els.completionWrong.textContent = String(stats.wrong);
  els.reviewWrong.disabled = stats.wrong === 0;
  els.reviewWrong.textContent = stats.wrong ? `Xem ${stats.wrong} câu sai` : 'Không có câu sai';

  if (!els.completionDialog.open) els.completionDialog.showModal();
}

function reviewWrongAnswers() {
  const stats = getProgressStats();
  if (!stats.wrong) return;

  els.completionDialog.close();
  els.search.value = '';
  els.chapter.value = '';
  refreshTopicOptions();
  els.topic.value = '';
  els.mode.value = 'wrong';
  state.currentIndex = 0;
  state.questionNavPage = 0;
  applyFilters();
  scrollCurrentQuestionIntoView();
}

function restartCurrentBank() {
  if (!restartProgress()) return;
  els.completionDialog.close();
  scrollCurrentQuestionIntoView();
}

function activatePanel(panelId, options = {}) {
  const { updateHistory = true } = options;
  const requestedPanel = document.getElementById(panelId);
  const restrictedAdminPanel = panelId === 'admin-panel' && state.currentUser?.role !== 'admin';
  if (!requestedPanel || restrictedAdminPanel) panelId = 'home-panel';

  for (const tab of els.tabs) {
    const isActive = tab.dataset.panel === panelId;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  }
  for (const panel of els.panels) {
    const isActive = panel.id === panelId;
    panel.classList.toggle('active', isActive);
    panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  }
  els.appShell.dataset.activePanel = panelId;
  if (panelId !== 'practice-panel') setFiltersOpen(false);
  if (panelId === 'practice-panel') markStudyActivity();
  if (panelId === 'ranking-panel') {
    loadRanking();
  }
  const nextHash = PANEL_HASHES[panelId] || '#home';
  if (updateHistory && window.location.hash !== nextHash) {
    window.history.pushState({ panelId }, '', nextHash);
  }
}

function setFiltersOpen(open) {
  const nextOpen = Boolean(open) && els.appShell.dataset.activePanel === 'practice-panel';
  els.appShell.classList.toggle('filters-open', nextOpen);
  els.filterToggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
  els.sideFilterToggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
  document.body.classList.toggle('drawer-open', nextOpen);
}

function panelFromLocation() {
  const match = Object.entries(PANEL_HASHES).find(([, hash]) => hash === window.location.hash.toLowerCase());
  return match?.[0] || 'home-panel';
}

function updateFileLabel() {
  const names = [...els.documentInput.files].map((file) => file.name);
  els.fileLabel.textContent = names.length ? names.join(', ') : 'Chọn file PDF, DOCX, MD hoặc TXT';
}

async function generateFromDocuments(event) {
  event.preventDefault();
  const formData = new FormData(els.aiForm);
  setFormBusy(els.aiForm, true, 'Đang tạo câu hỏi…');
  els.aiMessage.textContent = 'Đang gửi prompt và phân tích tài liệu…';
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
    setFormBusy(els.aiForm, false);
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
      ${visualSummary(question) ? `<p><strong>Visual:</strong> ${escapeHtml(visualSummary(question))}</p>` : ''}
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
        chapter: 'Chương 2 - Điều phối CPU',
        topic: 'Round Robin',
        difficulty: 'Trung bình',
        questionType: 'single',
        prompt: 'Với quantum = 2, tiến trình nào hoàn thành cuối cùng theo timeline đã cho?',
        table: {
          caption: 'Bảng tiến trình',
          columns: ['Tiến trình', 'Arrival time', 'Burst time'],
          rows: [
            ['P1', '0', '4'],
            ['P2', '1', '3'],
            ['P3', '2', '2']
          ]
        },
        timeline: {
          caption: 'Gantt chart Round Robin',
          unit: 'ms',
          segments: [
            { label: 'P1', start: 0, end: 2 },
            { label: 'P2', start: 2, end: 4 },
            { label: 'P3', start: 4, end: 6 },
            { label: 'P1', start: 6, end: 8 },
            { label: 'P2', start: 8, end: 9 }
          ]
        },
        options: {
          A: 'P1',
          B: 'P2',
          C: 'P3',
          D: 'P1 và P2 hoàn thành cùng lúc'
        },
        answer: 'B',
        explanation: 'Theo Gantt chart, P3 hoàn thành ở 6 ms, P1 hoàn thành ở 8 ms và P2 hoàn thành ở 9 ms, nên P2 hoàn thành cuối cùng.',
        example: 'Trong Round Robin, ta lần lượt đưa tiến trình chưa xong về cuối ready queue sau mỗi quantum.',
        tips: ['Đọc thời điểm kết thúc ở cạnh phải đoạn cuối cùng của mỗi tiến trình.', 'Với Round Robin, đừng cộng burst liên tục như FCFS nếu tiến trình bị chia lát.'],
        optionAnalysis: {
          A: 'P1 hoàn thành ở 8 ms, chưa phải cuối cùng.',
          B: 'Đúng vì đoạn cuối của P2 kết thúc ở 9 ms.',
          C: 'P3 hoàn thành ở 6 ms.',
          D: 'Sai vì P1 kết thúc ở 8 ms còn P2 kết thúc ở 9 ms.'
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

  els.importMessage.textContent = 'Đang kiểm tra và nạp câu hỏi…';
  els.importMessage.classList.remove('error');
  setFormBusy(els.importForm, true, 'Đang nạp…');

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
      await selectBank(`run:${data.runId}`, { closeChooser: true });
    }
    await loadAIRuns();
    els.importMessage.textContent = `Đã nạp ${data.questions.length} câu hỏi.`;
    activatePanel('practice-panel');
  } catch (error) {
    els.importMessage.textContent = error.message;
    els.importMessage.classList.add('error');
  } finally {
    setFormBusy(els.importForm, false);
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
  els.aiMessage.textContent = 'Đang nạp lịch sử từ database…';
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
      .then(() => selectBank(`run:${state.aiResult.runId}`, { closeChooser: true }))
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

function setFormBusy(form, busy, busyLabel = 'Đang xử lý…') {
  const button = form?.querySelector('button[type="submit"]');
  if (!form || !button) return;

  if (busy) {
    if (!button.dataset.idleLabel) button.dataset.idleLabel = button.textContent;
    button.textContent = busyLabel;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    return;
  }

  button.textContent = button.dataset.idleLabel || button.textContent;
  button.disabled = false;
  form.removeAttribute('aria-busy');
}

function getQuestionProgressKey(question, bankId = state.activeBankId) {
  const bankKey = encodeURIComponent(String(bankId || question?.bankId || 'default'));
  const questionKey = String(question?.id || question?.number || 'unknown');
  return `${bankKey}::${questionKey}`;
}

function getSavedAnswer(question) {
  if (!question) return null;
  return state.progress.answers[getQuestionProgressKey(question)] || state.progress.answers[question.id] || null;
}

function isQuestionBookmarked(question) {
  if (!question) return false;
  return state.progress.bookmarks.includes(getQuestionProgressKey(question)) ||
    state.progress.bookmarks.includes(question.id);
}

function deleteQuestionProgress(question) {
  if (!question) return;
  const progressKey = getQuestionProgressKey(question);
  delete state.progress.answers[progressKey];
  delete state.progress.answers[question.id];
  state.progress.bookmarks = state.progress.bookmarks.filter((id) => ![progressKey, question.id].includes(id));
}

function migrateLegacyProgressForActiveBank() {
  let changed = false;
  const bookmarks = new Set(state.progress.bookmarks);

  for (const question of allQuestions()) {
    const progressKey = getQuestionProgressKey(question);
    if (state.progress.answers[question.id] && !state.progress.answers[progressKey]) {
      state.progress.answers[progressKey] = state.progress.answers[question.id];
      delete state.progress.answers[question.id];
      changed = true;
    }
    if (bookmarks.has(question.id)) {
      bookmarks.delete(question.id);
      bookmarks.add(progressKey);
      changed = true;
    }
  }

  if (changed) {
    state.progress.bookmarks = [...bookmarks];
    saveProgress();
  }
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(getProgressStorageKey()));
    return normalizeProgress(parsed);
  } catch {
    return normalizeProgress(null);
  }
}

function saveProgress() {
  localStorage.setItem(getProgressStorageKey(), JSON.stringify(state.progress));
  queueProgressSync();
}

function startStudyTimer() {
  if (state.studyTimer) return;
  state.studyTimer = setInterval(() => {
    const activePanel = els.appShell.dataset.activePanel;
    const recentlyActive = Date.now() - state.lastStudyActivityAt <= STUDY_IDLE_LIMIT_MS;
    if (!state.currentUser || document.hidden || activePanel !== 'practice-panel' || !recentlyActive || !state.filtered.length) return;
    state.progress.studySeconds = Math.max(0, Number(state.progress.studySeconds) || 0) + 15;
    localStorage.setItem(getProgressStorageKey(), JSON.stringify(state.progress));
    renderStats();
    queueProgressSync(800);
  }, 15000);
}

function markStudyActivity() {
  state.lastStudyActivityAt = Date.now();
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
      body: JSON.stringify({ progress: state.progress }),
      keepalive: true
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
    attemptHistory: normalizeAttemptHistory(progress?.attemptHistory),
    studySeconds: Math.max(0, Number.parseInt(progress?.studySeconds, 10) || 0)
  };
}

function normalizeAttemptHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((attempt) => attempt && typeof attempt === 'object')
    .map((attempt, index) => {
      const total = Math.max(0, Number.parseInt(attempt.total, 10) || 0);
      const done = Math.min(total || Number.MAX_SAFE_INTEGER, Math.max(0, Number.parseInt(attempt.done, 10) || 0));
      const correct = Math.min(done, Math.max(0, Number.parseInt(attempt.correct, 10) || 0));
      return {
        id: String(attempt.id || `legacy-attempt-${index + 1}`),
        bankId: String(attempt.bankId || ''),
        bankTitle: String(attempt.bankTitle || 'Bộ câu hỏi'),
        subject: String(attempt.subject || ''),
        startedAt: normalizeAttemptDate(attempt.startedAt),
        endedAt: normalizeAttemptDate(attempt.endedAt),
        total,
        done,
        correct,
        wrong: done - correct,
        accuracy: done ? Math.round((correct / done) * 100) : 0,
        completed: total > 0 && done === total
      };
    })
    .filter((attempt) => attempt.bankId && attempt.done > 0);
}

function normalizeAttemptDate(value) {
  const timestamp = Date.parse(String(value || ''));
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : '';
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
