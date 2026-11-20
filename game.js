/* Byte Run - game logic + UI. No dependencies. */
(function () {
  "use strict";

  var BITS = 8;
  var STORAGE_KEY = "byterun:v1";
  var RANKS = [
    { min: 255, title: "Byte perfecto" },
    { min: 192, title: "Fibra óptica" },
    { min: 128, title: "Banda ancha" },
    { min: 64, title: "Dial-up" },
    { min: 0, title: "Disquete" }
  ];

  /* ---------- Pure core (testable in Node) ---------- */

  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function weightOf(index) {
    return Math.pow(2, BITS - 1 - index); // 128, 64, ... 1
  }

  /** Build a run: 8 random questions, each with shuffled options. */
  function createRun(pool, rng) {
    rng = rng || Math.random;
    if (!pool || pool.length < BITS) throw new Error("Need at least " + BITS + " questions");
    var picked = shuffle(pool, rng).slice(0, BITS);
    var items = picked.map(function (src) {
      var order = shuffle([0, 1, 2, 3], rng);
      return {
        q: src.q,
        topic: src.topic || "",
        ref: src.ref || "",
        explain: src.explain,
        options: order.map(function (k) { return src.options[k]; }),
        correct: order.indexOf(src.answer)
      };
    });
    return { items: items, bits: [], index: 0, streak: 0, longest: 0 };
  }

  /** Record an answer (0-3) for the current question. */
  function answer(run, choice) {
    if (run.index >= BITS) throw new Error("Run already finished");
    var item = run.items[run.index];
    var ok = choice === item.correct;
    run.bits.push(ok ? 1 : 0);
    run.streak = ok ? run.streak + 1 : 0;
    if (run.streak > run.longest) run.longest = run.streak;
    run.index++;
    return ok;
  }

  function score(bits) {
    return bits.reduce(function (sum, b, i) { return sum + (b ? weightOf(i) : 0); }, 0);
  }

  function rankFor(value) {
    for (var i = 0; i < RANKS.length; i++) if (value >= RANKS[i].min) return RANKS[i].title;
    return RANKS[RANKS.length - 1].title;
  }

  var core = { BITS: BITS, shuffle: shuffle, weightOf: weightOf,
    createRun: createRun, answer: answer, score: score, rankFor: rankFor };

  if (typeof module !== "undefined" && module.exports) module.exports = core;
  if (typeof document === "undefined") return;

  /* ---------- Storage ---------- */

  function loadStats() {
    var base = { best: 0, bestStreak: 0, runs: 0 };
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      var s = JSON.parse(raw);
      return {
        best: Number(s.best) || 0,
        bestStreak: Number(s.bestStreak) || 0,
        runs: Number(s.runs) || 0
      };
    } catch (e) {
      return base;
    }
  }

  function saveStats(stats) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) { /* storage unavailable (private mode, quota): ignore */ }
  }

  /* ---------- UI ---------- */

  var $ = function (id) { return document.getElementById(id); };
  var el = {};
  var run = null;
  var stats = loadStats();
  var awaitingAnswer = false;
  var lastResultText = "";

  function show(screen) {
    ["start", "play", "result"].forEach(function (name) {
      $("screen-" + name).hidden = name !== screen;
    });
  }

  function buildRegister() {
    el.register.innerHTML = "";
    for (var i = 0; i < BITS; i++) {
      var cell = document.createElement("div");
      cell.className = "bit";
      cell.setAttribute("role", "img");
      var box = document.createElement("span");
      box.className = "bit-box";
      var w = document.createElement("span");
      w.className = "bit-weight";
      w.textContent = weightOf(i);
      w.setAttribute("aria-hidden", "true");
      cell.appendChild(box);
      cell.appendChild(w);
      el.register.appendChild(cell);
    }
    renderRegister();
  }

  function renderRegister() {
    var cells = el.register.children;
    for (var i = 0; i < BITS; i++) {
      var cell = cells[i];
      var box = cell.firstChild;
      var bit = run ? run.bits[i] : undefined;
      var current = run && i === run.index && awaitingAnswer;
      cell.className = "bit" + (bit === 1 ? " is-one" : bit === 0 ? " is-zero" : "") + (current ? " is-current" : "");
      box.textContent = bit === undefined ? "" : String(bit);
      var state = bit === 1 ? "1, correcta" : bit === 0 ? "0, incorrecta" : current ? "pregunta actual" : "vacío";
      cell.setAttribute("aria-label", "Bit " + (i + 1) + ", vale " + weightOf(i) + ": " + state);
    }
    el.hudScore.textContent = run ? score(run.bits) : 0;
  }

  function renderStartStats() {
    el.startBest.textContent = stats.best;
    el.startStreak.textContent = stats.bestStreak;
    el.startRuns.textContent = stats.runs;
  }

  function startRun() {
    run = createRun(window.BYTE_RUN_QUESTIONS || []);
    show("play");
    showQuestion();
  }

  function showQuestion() {
    var item = run.items[run.index];
    awaitingAnswer = true;
    el.qNum.textContent = run.index + 1;
    el.qWeight.textContent = weightOf(run.index);
    el.qTopic.textContent = item.topic;
    el.question.textContent = item.q;
    el.feedback.hidden = true;
    el.feedback.className = "feedback";
    el.options.innerHTML = "";
    item.options.forEach(function (text, k) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.dataset.index = k;
      btn.setAttribute("aria-keyshortcuts", String(k + 1));
      var key = document.createElement("span");
      key.className = "option-key";
      key.textContent = k + 1;
      key.setAttribute("aria-hidden", "true");
      var label = document.createElement("span");
      label.className = "option-text";
      label.textContent = text;
      btn.appendChild(key);
      btn.appendChild(label);
      btn.addEventListener("click", function () { choose(k); });
      el.options.appendChild(btn);
    });
    renderRegister();
    el.question.focus({ preventScroll: true });
  }

  function choose(choice) {
    if (!awaitingAnswer) return;
    awaitingAnswer = false;
    var item = run.items[run.index];
    var bitIndex = run.index;
    var ok = answer(run, choice);

    var buttons = el.options.querySelectorAll(".option");
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.disabled = true;
      if (i === item.correct) b.classList.add("is-correct");
      else if (i === choice) b.classList.add("is-wrong");
    }

    var lead = ok ? "¡Correcto! Bit " + (bitIndex + 1) + " = 1 (+" + weightOf(bitIndex) + ")."
      : "Incorrecto. Bit " + (bitIndex + 1) + " = 0.";
    el.feedbackLead.textContent = lead;
    el.feedbackText.textContent = item.explain;
    el.feedbackRef.textContent = item.ref ? "Ver " + item.ref : "";
    el.feedback.className = "feedback " + (ok ? "is-good" : "is-bad");
    el.feedback.hidden = false;
    el.next.textContent = run.index >= BITS ? "Ver resultado" : "Siguiente";
    renderRegister();
    el.next.focus({ preventScroll: true });
  }

  function next() {
    if (awaitingAnswer || !run) return;
    if (run.index >= BITS) finish();
    else showQuestion();
  }

  function finish() {
    var value = score(run.bits);
    var correct = run.bits.reduce(function (a, b) { return a + b; }, 0);
    var isBest = value > stats.best;
    stats.runs += 1;
    stats.best = Math.max(stats.best, value);
    stats.bestStreak = Math.max(stats.bestStreak, run.longest);
    saveStats(stats);

    var byteStr = run.bits.join("");
    var hex = "0x" + value.toString(16).toUpperCase().padStart(2, "0");
    var rank = rankFor(value);

    el.resBits.innerHTML = "";
    run.bits.forEach(function (b) {
      var s = document.createElement("span");
      s.className = "res-bit " + (b ? "is-one" : "is-zero");
      s.textContent = b;
      el.resBits.appendChild(s);
    });
    el.resBits.setAttribute("aria-label", "Byte final " + byteStr);
    el.resScore.textContent = value;
    el.resHex.textContent = hex;
    el.resRank.textContent = rank;
    el.resNew.hidden = !isBest || value === 0;
    el.resCorrect.textContent = correct + "/" + BITS;
    el.resStreak.textContent = run.longest;
    el.resBest.textContent = stats.best;
    el.resBestStreak.textContent = stats.bestStreak;
    el.copyStatus.textContent = "";

    lastResultText = "BYTE RUN " + byteStr + " = " + value + "/255 (" + hex + ")\n" +
      run.bits.map(function (b) { return b ? "🟩" : "🟥"; }).join("") + "\n" +
      rank + " | " + correct + "/" + BITS + " correctas | racha " + run.longest;

    show("result");
    el.again.focus({ preventScroll: true });
  }

  function copyResult() {
    var done = function (ok) { el.copyStatus.textContent = ok ? "¡Copiado!" : "No se pudo copiar"; };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(lastResultText).then(function () { done(true); }, function () { done(fallbackCopy()); });
    } else {
      done(fallbackCopy());
    }
  }

  function fallbackCopy() {
    try {
      var ta = document.createElement("textarea");
      ta.value = lastResultText;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function onKey(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var playing = !$("screen-play").hidden;
    if (playing && awaitingAnswer && /^[1-4]$/.test(e.key)) {
      e.preventDefault();
      choose(Number(e.key) - 1);
      return;
    }
    if (e.key === "Enter") {
      // Let a focused button handle its own Enter (avoids double activation).
      if (e.target && e.target.tagName === "BUTTON") return;
      if (!$("screen-start").hidden) { e.preventDefault(); startRun(); }
      else if (playing && !awaitingAnswer) { e.preventDefault(); next(); }
      else if (!$("screen-result").hidden) { e.preventDefault(); startRun(); }
    }
  }

  function init() {
    el = {
      register: $("register"), hudScore: $("hud-score"),
      qNum: $("q-num"), qWeight: $("q-weight"), qTopic: $("q-topic"), question: $("question"), options: $("options"),
      feedback: $("feedback"), feedbackLead: $("feedback-lead"), feedbackText: $("feedback-text"),
      feedbackRef: $("feedback-ref"), next: $("next"),
      startBest: $("start-best"), startStreak: $("start-streak"), startRuns: $("start-runs"),
      resBits: $("res-bits"), resScore: $("res-score"), resHex: $("res-hex"), resRank: $("res-rank"), resNew: $("res-new"),
      resCorrect: $("res-correct"), resStreak: $("res-streak"), resBest: $("res-best"), resBestStreak: $("res-best-streak"),
      again: $("again"), copy: $("copy"), copyStatus: $("copy-status")
    };
    buildRegister();
    renderStartStats();
    $("start").addEventListener("click", startRun);
    el.next.addEventListener("click", next);
    el.again.addEventListener("click", startRun);
    el.copy.addEventListener("click", copyResult);
    document.addEventListener("keydown", onKey);
    show("start");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
