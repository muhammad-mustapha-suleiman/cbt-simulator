"use strict";
//import  mathematics from "./math.js";

/* ==========================================================
   1. QUESTION BANK  (sample data — replace/extend freely;
      app logic never needs to change when data grows)
   ========================================================== */
const questionBank = {
  mathematics: mathematics,

  english: [
    {id:1,topic:"Grammar",difficulty:"Easy",question:"Choose the correct sentence.",options:["He don't like rice.","He doesn't likes rice.","He doesn't like rice.","He not like rice."],answer:2,explanation:"The correct negative form uses 'doesn't' with the base verb 'like'."},
    {id:2,topic:"Vocabulary",difficulty:"Easy",question:"Choose the word nearest in meaning to 'benevolent'.",options:["Cruel","Kind","Angry","Selfish"],answer:1,explanation:"'Benevolent' means kind and generous."},
    {id:3,topic:"Vocabulary",difficulty:"Medium",question:"Choose the word opposite in meaning to 'scarce'.",options:["Rare","Abundant","Limited","Few"],answer:1,explanation:"'Abundant' is the opposite of 'scarce'."},
    {id:4,topic:"Grammar",difficulty:"Medium",question:"Fill the gap: Neither the teacher nor the students ___ ready.",options:["is","was","are","be"],answer:2,explanation:"With 'neither...nor', the verb agrees with the nearer subject, 'students'."},
    {id:5,topic:"Grammar",difficulty:"Easy",question:"Choose the correctly punctuated sentence.",options:["Its a beautiful day.","It's a beautiful day.","Its' a beautiful day.","It is' a beautiful day."],answer:1,explanation:"'It's' is the contraction of 'it is'."},
    {id:6,topic:"Grammar",difficulty:"Medium",question:"Choose the correct plural of 'child'.",options:["Childs","Childes","Children","Childrens"],answer:2,explanation:"'Children' is the irregular plural of 'child'."},
    {id:7,topic:"Vocabulary",difficulty:"Hard",question:"Choose the word nearest in meaning to 'ubiquitous'.",options:["Rare","Everywhere","Hidden","Unusual"],answer:1,explanation:"'Ubiquitous' means present or found everywhere."},
    {id:8,topic:"Figures of Speech",difficulty:"Medium",question:"'The classroom was a zoo' is an example of ___.",options:["Simile","Metaphor","Personification","Hyperbole"],answer:1,explanation:"A metaphor directly compares two unlike things without 'like' or 'as'."},
    {id:9,topic:"Grammar",difficulty:"Hard",question:"Choose the sentence in the passive voice.",options:["The chef cooked the meal.","The meal was cooked by the chef.","The chef is cooking the meal.","The chef will cook the meal."],answer:1,explanation:"In passive voice, the subject receives the action."},
    {id:10,topic:"Idioms",difficulty:"Medium",question:"'To break the ice' means ___.",options:["To cause damage","To start a conversation in a social setting","To end a friendship","To freeze water"],answer:1,explanation:"'Break the ice' means to ease tension and start conversation."},
    {id:11,topic:"Grammar",difficulty:"Medium",question:"Choose the correct comparative form of 'good'.",options:["Gooder","More good","Better","Best"],answer:2,explanation:"'Good' has the irregular comparative 'better'."},
    {id:12,topic:"Spelling",difficulty:"Medium",question:"Choose the correctly spelled word.",options:["Recieve","Receive","Receeve","Receve"],answer:1,explanation:"'I before E except after C': Receive."}
  ],
  cosc206: cosc206,
  gens202: gens202
};

const SUBJECT_META = {
  mathematics:{label:"Mathematics",glyph:"📐"},
  english:{label:"English Language",glyph:"📖"},
  cosc206:{label:"COSC 206: HCI", glyph:"💻"},
  gens202:{label:"Gens202 Entreprenusership",glyph:"🏛️"}

};

/* ==========================================================
   2. STORAGE  (js/storage.js equivalent)
   ========================================================== */
const Storage = {
  KEYS:{SESSION:"cbt_session",BOOKMARKS:"cbt_bookmarks",STATS:"cbt_stats",THEME:"cbt_theme",RECENT:"cbt_recent"},
  get(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  },
  set(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){ /* storage full/unavailable */ }
  },
  remove(key){ try{ localStorage.removeItem(key); }catch(e){} }
};

/* ==========================================================
   3. RANDOM  (js/random.js equivalent) — Fisher-Yates
   ========================================================== */
const RandomUtil = {
  shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  },
  pickQuestions(subjectQuestions, count){
    const indices = subjectQuestions.map((_,i)=>i);
    const shuffled = RandomUtil.shuffle(indices);
    const n = Math.min(count, subjectQuestions.length);
    return shuffled.slice(0,n).map(i=>subjectQuestions[i]);
  }
};

/* ==========================================================
   4. STATS  (js/stats.js equivalent)
   ========================================================== */
const Stats = {
  defaults(){
    return {totalQuizzes:0,scoresSum:0,best:0,questionsAnswered:0,correct:0,wrong:0,subjectCounts:{}};
  },
  load(){ return Storage.get(Storage.KEYS.STATS, Stats.defaults()); },
  record(subjectKey, pct, answeredCount, correctCount, wrongCount){
    const s = Stats.load();
    s.totalQuizzes += 1;
    s.scoresSum += pct;
    s.best = Math.max(s.best, pct);
    s.questionsAnswered += answeredCount;
    s.correct += correctCount;
    s.wrong += wrongCount;
    s.subjectCounts[subjectKey] = (s.subjectCounts[subjectKey]||0) + 1;
    Storage.set(Storage.KEYS.STATS, s);
    return s;
  }
};

/* ==========================================================
   5. BOOKMARKS  (js/bookmarks.js equivalent)
   ========================================================== */
const Bookmarks = {
  load(){ return Storage.get(Storage.KEYS.BOOKMARKS, []); },
  save(list){ Storage.set(Storage.KEYS.BOOKMARKS, list); },
  has(subjectKey, questionId){
    return Bookmarks.load().some(b=>b.subject===subjectKey && b.questionId===questionId);
  },
  toggle(subjectKey, question){
    let list = Bookmarks.load();
    const idx = list.findIndex(b=>b.subject===subjectKey && b.questionId===question.id);
    if(idx>=0){ list.splice(idx,1); }
    else{ list.push({subject:subjectKey, questionId:question.id, question}); }
    Bookmarks.save(list);
    return idx<0; // true if just added
  },
  remove(subjectKey, questionId){
    Bookmarks.save(Bookmarks.load().filter(b=>!(b.subject===subjectKey && b.questionId===questionId)));
  }
};

/* ==========================================================
   6. TIMER  (js/timer.js equivalent)
   ========================================================== */
const QuizTimer = {
  intervalId:null,
  start(onTick, onExpire){
    QuizTimer.stop();
    QuizTimer.intervalId = setInterval(()=>{
      onTick();
    },1000);
    QuizTimer._onExpire = onExpire;
  },
  stop(){
    if(QuizTimer.intervalId){ clearInterval(QuizTimer.intervalId); QuizTimer.intervalId = null; }
  }
};

function formatSeconds(total){
  total = Math.max(0,total);
  const m = String(Math.floor(total/60)).padStart(2,"0");
  const s = String(total%60).padStart(2,"0");
  return m+":"+s;
}

/* ==========================================================
   7. APP STATE
   ========================================================== */
let quiz = null;          // active quiz session object
let pendingSubject = null; // subject chosen on setup page, before quiz starts
let reviewList = [];       // built at result time: [{question, userAnswer}]
let reviewIndex = 0;
let reviewShowAll = false; // false = wrong-only review, true = full review

/* ==========================================================
   8. DOM SHORTCUTS
   ========================================================== */
const $ = id => document.getElementById(id);
const pages = {
  home: $("homePage"), setup: $("setupPage"), quiz: $("quizPage"),
  results: $("resultsPage"), review: $("reviewPage"), bookmarks: $("bookmarksPage")
};
function showPage(name){
  Object.values(pages).forEach(p=>p.classList.add("hidden"));
  pages[name].classList.remove("hidden");
  $("topBar").classList.toggle("hidden", name==="quiz");
  window.scrollTo({top:0});
}

/* ==========================================================
   9. DARK MODE
   ========================================================== */
function initTheme(){
  const dark = Storage.get(Storage.KEYS.THEME, false);
  document.documentElement.setAttribute("data-theme", dark?"dark":"light");
  $("darkToggle").textContent = dark ? "☀️" : "🌙";
}
$("darkToggle").addEventListener("click", ()=>{
  const isDark = document.documentElement.getAttribute("data-theme")==="dark";
  document.documentElement.setAttribute("data-theme", isDark?"light":"dark");
  $("darkToggle").textContent = isDark ? "🌙" : "☀️";
  Storage.set(Storage.KEYS.THEME, !isDark);
});

/* ==========================================================
   10. HOME PAGE RENDERING
   ========================================================== */
function renderHome(){
  // stats
  const s = Stats.load();
  $("statTotal").textContent = s.totalQuizzes;
  $("statAvg").textContent = s.totalQuizzes ? Math.round(s.scoresSum/s.totalQuizzes)+"%" : "0%";
  $("statBest").textContent = s.best+"%";
  $("statAnswered").textContent = s.questionsAnswered;

  // continue banner
  const saved = Storage.get(Storage.KEYS.SESSION, null);
  if(saved && !saved.submitted){
    $("continueBanner").classList.remove("hidden");
    $("continueSubject").textContent = SUBJECT_META[saved.subject].label;
    $("continueProgress").textContent = (saved.currentQuestion+1)+" of "+saved.questions.length;
  }else{
    $("continueBanner").classList.add("hidden");
  }

  // subject cards
  const grid = $("subjectGrid");
  grid.innerHTML = "";
  Object.keys(questionBank).forEach(key=>{
    const meta = SUBJECT_META[key];
    const count = questionBank[key].length;
    const practiced = s.subjectCounts[key] || 0;
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="glyph">${meta.glyph}</div>
      <h3>${meta.label}</h3>
      <div class="meta">${count} questions available</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100,practiced*20)}%"></div></div>
    `;
    card.addEventListener("click", ()=>openSetup(key));
    grid.appendChild(card);
  });

  // recent quizzes
  const recent = Storage.get(Storage.KEYS.RECENT, []);
  const recentList = $("recentList");
  recentList.innerHTML = "";
  if(recent.length===0){
    recentList.innerHTML = `<div class="empty-note">No papers taken yet. Start one above.</div>`;
  }else{
    recent.slice(0,6).forEach(r=>{
      const div = document.createElement("div");
      div.className = "recent-item";
      div.innerHTML = `
        <div class="rl-main"><b>${SUBJECT_META[r.subject].label}</b> · ${r.mode} · ${r.total} questions</div>
        <div class="rl-score">${r.pct}%</div>
      `;
      recentList.appendChild(div);
    });
  }

  // bookmark preview
  const bm = Bookmarks.load();
  const preview = $("homeBookmarkPreview");
  preview.innerHTML = "";
  if(bm.length===0){
    preview.innerHTML = `<div class="empty-note">No bookmarks yet. Star a question during a paper to save it here.</div>`;
  }else{
    bm.slice(0,3).forEach(b=>{
      const div = document.createElement("div");
      div.className = "bookmark-item";
      div.innerHTML = `<div class="bm-main"><b>${SUBJECT_META[b.subject].label}</b> — ${b.question.question.slice(0,60)}${b.question.question.length>60?"…":""}</div>`;
      preview.appendChild(div);
    });
    const more = document.createElement("button");
    more.className = "btn btn-ghost";
    more.textContent = "View all bookmarks →";
    more.addEventListener("click", openBookmarksPage);
    preview.appendChild(more);
  }
}

$("continueBtn").addEventListener("click", ()=>{
  const saved = Storage.get(Storage.KEYS.SESSION, null);
  if(saved){ quiz = saved; renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded(); }
});

/* ==========================================================
   11. SETUP PAGE
   ========================================================== */
function openSetup(subjectKey){
  pendingSubject = subjectKey;
  const meta = SUBJECT_META[subjectKey];
  $("setupSubjectName").textContent = meta.label;
  $("setupSubjectMeta").textContent = questionBank[subjectKey].length + " questions available in the bank";

  const countSelect = $("countSelect");
  countSelect.innerHTML = "";
  const max = questionBank[subjectKey].length;
  [5,10,15,20,30].filter(n=>n<=max).forEach(n=>{
    const opt = document.createElement("option");
    opt.value = n; opt.textContent = n + " questions";
    countSelect.appendChild(opt);
  });
  const allOpt = document.createElement("option");
  allOpt.value = max; allOpt.textContent = "All " + max + " questions";
  countSelect.appendChild(allOpt);

  document.querySelectorAll(".mode-pick button").forEach(b=>b.classList.toggle("active", b.dataset.mode==="CBT"));
  showPage("setup");
}
$("setupBack").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
document.querySelectorAll(".mode-pick button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".mode-pick button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});
$("startQuizBtn").addEventListener("click", startQuiz);

/* ==========================================================
   12. QUIZ CREATION  (once — never re-randomized)
   ========================================================== */
function startQuiz(){
  const subjectKey = pendingSubject;
  const mode = document.querySelector(".mode-pick button.active").dataset.mode;
  const count = parseInt($("countSelect").value, 10);
  const timerMinutes = parseInt($("timerSelect").value, 10);

  const subjectQuestions = questionBank[subjectKey];   // STEP: extract subject questions
  const selected = RandomUtil.pickQuestions(subjectQuestions, count); // STEP: randomize ONCE

  quiz = {
    subject: subjectKey,
    mode: mode,
    questionCount: selected.length,
    timer: mode==="CBT" ? timerMinutes*60 : null,
    timeRemaining: mode==="CBT" ? timerMinutes*60 : null,
    startedAt: Date.now(),
    submitted: false,
    currentQuestion: 0,
    questions: selected,              // STEP: create quiz.questions — never mutated after this
    answers: new Array(selected.length).fill(null),
    visited: new Array(selected.length).fill(false),
    skipped: new Array(selected.length).fill(false),
    bookmarkedIds: []
  };
  saveSession();
  renderQuizShell();
  renderQuestion();
  showPage("quiz");
  startTimerIfNeeded();
}

function saveSession(){ Storage.set(Storage.KEYS.SESSION, quiz); }

/* ==========================================================
   13. QUIZ RENDERING
   ========================================================== */
function renderQuizShell(){
  $("quizSubjectName").textContent = SUBJECT_META[quiz.subject].label;
  $("quizModeLabel").textContent = quiz.mode.toUpperCase() + " MODE";
  $("qTotalNum").textContent = quiz.questions.length;
  $("quizTimerDisplay").classList.toggle("hidden", quiz.mode!=="CBT");
  renderPalette();
}

function renderQuestion(){
  const idx = quiz.currentQuestion;
  const q = quiz.questions[idx];
  quiz.visited[idx] = true;

  $("qBadge").textContent = idx+1;
  $("qCurrentNum").textContent = idx+1;
  $("qTopic").textContent = (q.topic||"General") + " · " + (q.difficulty||"Medium");
  $("qText").textContent = q.question;

  const letters = ["A","B","C","D","E","F"];
  const list = $("omrList");
  list.innerHTML = "";
  q.options.forEach((optText,i)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "omr-option" + (quiz.answers[idx]===i ? " selected" : "");
    btn.innerHTML = `<span class="bubble">${letters[i]}</span><span class="opt-text">${optText}</span>`;
    btn.addEventListener("click", ()=>selectAnswer(i));
    list.appendChild(btn);
  });

  $("prevBtn").disabled = idx===0;
  const isLast = idx === quiz.questions.length-1;
  $("nextBtn").textContent = isLast ? "Finish ▶" : "Next ▶";

  const bookmarked = Bookmarks.has(quiz.subject, q.id);
  $("bookmarkBtn").classList.toggle("on", bookmarked);
  $("bookmarkBtn").textContent = bookmarked ? "★ Bookmarked" : "☆ Bookmark";

  updateProgressBar();
  renderPalette();
  saveSession();
}

function selectAnswer(optionIndex){
  const idx = quiz.currentQuestion;
  quiz.answers[idx] = optionIndex;      // STEP: store answer only — never check correctness here
  quiz.skipped[idx] = false;
  renderQuestion();
}

$("skipBtn").addEventListener("click", ()=>{
  const idx = quiz.currentQuestion;
  if(quiz.answers[idx]===null) quiz.skipped[idx] = true;
  goNext();
});
$("bookmarkBtn").addEventListener("click", ()=>{
  Bookmarks.toggle(quiz.subject, quiz.questions[quiz.currentQuestion]);
  renderQuestion();
});
$("prevBtn").addEventListener("click", ()=>{
  if(quiz.currentQuestion>0){ quiz.currentQuestion--; renderQuestion(); }
});
$("nextBtn").addEventListener("click", goNext);
function goNext(){
  if(quiz.currentQuestion < quiz.questions.length-1){
    quiz.currentQuestion++;
    renderQuestion();
  }else{
    openSubmitModal();
  }
}
function jumpTo(index){ quiz.currentQuestion = index; renderQuestion(); }

function updateProgressBar(){
  const answered = quiz.answers.filter(a=>a!==null).length;
  const pct = (answered / quiz.questions.length) * 100;
  $("quizProgressFill").style.width = pct+"%";
}

function renderPalette(){
  const grid = $("paletteGrid");
  grid.innerHTML = "";
  quiz.questions.forEach((q,i)=>{
    const cell = document.createElement("button");
    cell.type = "button";
    let cls = "p-cell";
    if(i===quiz.currentQuestion) cls += " current";
    else if(quiz.answers[i]!==null) cls += " answered";
    else if(quiz.skipped[i]) cls += " skipped";
    else if(quiz.visited[i]) cls += " visited";
    if(Bookmarks.has(quiz.subject, q.id)) cls += " bookmarked";
    cell.className = cls;
    cell.textContent = i+1;
    cell.addEventListener("click", ()=>jumpTo(i));
    grid.appendChild(cell);
  });
}

/* ==========================================================
   14. TIMER WIRING
   ========================================================== */
function startTimerIfNeeded(){
  QuizTimer.stop();
  if(quiz.mode!=="CBT") return;
  updateTimerDisplay();
  QuizTimer.start(()=>{
    quiz.timeRemaining--;
    updateTimerDisplay();
    saveSession();
    if(quiz.timeRemaining<=0){
      QuizTimer.stop();
      submitQuiz();
    }
  });
}
function updateTimerDisplay(){
  const el = $("quizTimerDisplay");
  el.textContent = formatSeconds(quiz.timeRemaining);
  el.classList.remove("warn","crit");
  if(quiz.timeRemaining<=60) el.classList.add("crit");
  else if(quiz.timeRemaining<=180) el.classList.add("warn");
}

/* ==========================================================
   15. SUBMIT FLOW
   ========================================================== */
$("submitBtn").addEventListener("click", openSubmitModal);
function openSubmitModal(){
  const answered = quiz.answers.filter(a=>a!==null).length;
  const unanswered = quiz.questions.length - answered;
  $("modalTitle").textContent = "Submit paper?";
  $("modalMessage").textContent = "Once submitted you cannot change your answers.";
  $("modalTally").classList.remove("hidden");
  $("modalAnswered").textContent = answered;
  $("modalUnanswered").textContent = unanswered;
  $("modalConfirm").textContent = "Submit";
  $("modalConfirm").onclick = ()=>{ closeModal(); submitQuiz(); };
  $("modalCancel").onclick = closeModal;
  $("modalOverlay").classList.remove("hidden");
}
function closeModal(){ $("modalOverlay").classList.add("hidden"); }

function submitQuiz(){
  QuizTimer.stop();
  quiz.submitted = true;                 // STEP: only now do we compare answers
  const timeUsedSeconds = quiz.mode==="CBT"
    ? (quiz.timer - quiz.timeRemaining)
    : Math.round((Date.now()-quiz.startedAt)/1000);

  let correct=0, wrong=0, skipped=0;
  reviewList = [];
  quiz.questions.forEach((q,i)=>{
    const userAns = quiz.answers[i];
    if(userAns===null){ skipped++; }
    else if(userAns===q.answer){ correct++; }
    else { wrong++; }
    reviewList.push({question:q, userAnswer:userAns});
  });

  const total = quiz.questions.length;
  const pct = total ? Math.round((correct/total)*100) : 0;

  quiz.result = {correct,wrong,skipped,pct,timeUsedSeconds};
  saveSession();

  // update stats + recent list
  Stats.record(quiz.subject, pct, total-skipped, correct, wrong);
  const recent = Storage.get(Storage.KEYS.RECENT, []);
  recent.unshift({subject:quiz.subject, mode:quiz.mode, total, pct, date:Date.now()});
  Storage.set(Storage.KEYS.RECENT, recent.slice(0,20));

  Storage.remove(Storage.KEYS.SESSION); // finished paper, nothing to resume

  renderResults();
  showPage("results");
}

/* ==========================================================
   16. RESULTS PAGE
   ========================================================== */
function renderResults(){
  const r = quiz.result;
  $("resultsSub").textContent = SUBJECT_META[quiz.subject].label + " · " + quiz.mode + " mode";
  $("scoreFrac").textContent = r.correct + " / " + quiz.questions.length;
  $("rCorrect").textContent = r.correct;
  $("rWrong").textContent = r.wrong;
  $("rSkipped").textContent = r.skipped;
  $("rTime").textContent = formatSeconds(r.timeUsedSeconds);

  const circumference = 2*Math.PI*70;
  const arc = $("scoreArc");
  arc.style.strokeDasharray = circumference;
  arc.style.strokeDashoffset = circumference;
  $("scorePct").textContent = "0%";

  let shown = 0;
  const step = Math.max(1, Math.round(r.pct/30));
  const anim = setInterval(()=>{
    shown = Math.min(r.pct, shown+step);
    $("scorePct").textContent = shown+"%";
    arc.style.strokeDashoffset = circumference - (shown/100)*circumference;
    if(shown>=r.pct) clearInterval(anim);
  },20);

  $("retryWrongBtn").disabled = r.wrong===0 && r.skipped===0;
}
$("resultsHomeBtn").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
$("reviewBtn").addEventListener("click", ()=>{ reviewShowAll=true; reviewIndex=0; renderReview(); showPage("review"); });

$("retryWrongBtn").addEventListener("click", ()=>{
  const missed = reviewList.filter(r=>r.userAnswer===null || r.userAnswer!==r.question.answer).map(r=>r.question);
  if(missed.length===0) return;
  quiz = {
    subject: quiz.subject, mode: quiz.mode, questionCount: missed.length,
    timer: quiz.mode==="CBT" ? Math.max(120, missed.length*45) : null,
    timeRemaining: quiz.mode==="CBT" ? Math.max(120, missed.length*45) : null,
    startedAt: Date.now(), submitted:false, currentQuestion:0,
    questions: missed, answers:new Array(missed.length).fill(null),
    visited:new Array(missed.length).fill(false), skipped:new Array(missed.length).fill(false), bookmarkedIds:[]
  };
  saveSession();
  renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded();
});

/* ==========================================================
   17. REVIEW PAGE
   ========================================================== */
function renderReview(){
  const item = reviewList[reviewIndex];
  const q = item.question;
  const userAns = item.userAnswer;
  const isCorrect = userAns===q.answer;
  const card = $("reviewCard");

  let userRow, correctRow="";
  if(userAns===null){
    userRow = `<div class="review-row neutral-row"><span class="rl-label">Your answer</span><span>Not answered</span></div>`;
  }else{
    userRow = `<div class="review-row ${isCorrect?'correct-row':'wrong-row'}"><span class="rl-label">Your answer</span><span>${q.options[userAns]} ${isCorrect?"✓":"✗"}</span></div>`;
  }
  if(!isCorrect){
    correctRow = `<div class="review-row correct-row"><span class="rl-label">Correct answer</span><span>${q.options[q.answer]} ✓</span></div>`;
  }

  card.innerHTML = `
    <div class="q-eyebrow"><div class="q-badge">${reviewIndex+1}</div><div class="topic">${q.topic||""} · ${q.difficulty||""}</div></div>
    <div class="rq-text">${q.question}</div>
    ${userRow}
    ${correctRow}
    <div class="review-explain"><b>Explanation:</b> ${q.explanation||"No explanation provided."}</div>
  `;

  $("reviewPrev").disabled = reviewIndex===0;
  $("reviewNext").textContent = reviewIndex===reviewList.length-1 ? "Done" : "Next ▶";
  $("reviewJump").textContent = "Question " + (reviewIndex+1) + " of " + reviewList.length;
}
$("reviewPrev").addEventListener("click", ()=>{ if(reviewIndex>0){ reviewIndex--; renderReview(); } });
$("reviewNext").addEventListener("click", ()=>{
  if(reviewIndex<reviewList.length-1){ reviewIndex++; renderReview(); }
  else { showPage("results"); }
});
$("reviewBack").addEventListener("click", ()=>showPage("results"));

/* ==========================================================
   18. BOOKMARKS PAGE
   ========================================================== */
function openBookmarksPage(){ renderBookmarksPage(); showPage("bookmarks"); }
function renderBookmarksPage(){
  const list = Bookmarks.load();
  const container = $("bookmarksFullList");
  container.innerHTML = "";
  $("practiceBookmarksBtn").disabled = list.length===0;
  if(list.length===0){
    container.innerHTML = `<div class="empty-note">No bookmarks yet.</div>`;
    return;
  }
  list.forEach(b=>{
    const div = document.createElement("div");
    div.className = "bookmark-item";
    div.innerHTML = `
      <div class="bm-main"><b>${SUBJECT_META[b.subject].label}</b> — ${b.question.question}</div>
      <button class="btn btn-ghost" data-remove>Remove</button>
    `;
    div.querySelector("[data-remove]").addEventListener("click", ()=>{
      Bookmarks.remove(b.subject, b.questionId);
      renderBookmarksPage();
    });
    container.appendChild(div);
  });
}
$("bookmarksBack").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
$("practiceBookmarksBtn").addEventListener("click", ()=>{
  const list = Bookmarks.load();
  if(list.length===0) return;
  const bySubject = list[0].subject; // practice bookmarks as a single mixed-subject-labelled set
  const qs = list.map(b=>b.question);
  quiz = {
    subject:bySubject, mode:"Practice", questionCount:qs.length, timer:null, timeRemaining:null,
    startedAt:Date.now(), submitted:false, currentQuestion:0, questions:qs,
    answers:new Array(qs.length).fill(null), visited:new Array(qs.length).fill(false),
    skipped:new Array(qs.length).fill(false), bookmarkedIds:[]
  };
  saveSession();
  renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded();
});

/* ==========================================================
   19. KEYBOARD SHORTCUTS (quiz page only)
   ========================================================== */
document.addEventListener("keydown", e=>{
  if(pages.quiz.classList.contains("hidden")) return;
  if(e.key==="ArrowLeft"){ $("prevBtn").click(); }
  else if(e.key==="ArrowRight"){ $("nextBtn").click(); }
  else if(/^[1-6]$/.test(e.key)){
    const i = parseInt(e.key,10)-1;
    const opts = document.querySelectorAll(".omr-option");
    if(opts[i]) opts[i].click();
  }
});

/* ==========================================================
   20. INIT
   ========================================================== */
function init(){
  initTheme();
  renderHome();
  showPage("home");
}
init();
