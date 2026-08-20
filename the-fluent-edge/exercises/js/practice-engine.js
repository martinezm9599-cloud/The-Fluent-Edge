/*
  PRACTICE ENGINE
  ---------------
  Generic engine for Spanish -> English translation exercises.
  Reused by every exercise: just pass the phrase list ({es, en})
  and the DOM references.

  Logic:
  - Phrases are shown one at a time, in the order they appear in the
    data file.
  - "Show answer" reveals the English translation and enables
    Correct / I got it wrong.
  - Correct -> the phrase is marked as learned, move to the next one.
  - I got it wrong -> the phrase goes back into the queue 3 phrases
    later, and is recorded for the final summary.
  - "Save & continue later" stores the current state (if a student
    is signed in) so they can pick up exactly where they left off.
  - When the queue is empty (every phrase has been answered
    correctly at least once), the summary appears with the missed
    phrases and an option to review only those.
  - Every phrase missed also gets added to the student's cross-exercise
    review bank (see profile.js), unless disableReviewCapture is set
    (used by the Reviews page itself, to avoid re-adding phrases that
    are already there).

  Options (all optional except exerciseId):
  - exerciseId: string, used to save/load progress and tag review-bank entries.
  - homeHref: where "Back to home" links point. Defaults to "../index.html"
    (correct for pages inside /exercises/). Pages at the site root
    (like reviews.html) should pass "index.html" instead.
  - disableReviewCapture: true skips adding wrong answers to the review
    bank (used by the Reviews page so it doesn't re-add its own items).
  - onSummary({ missedList, allItems, summaryEl }): called after the
    end-of-exercise summary renders, so a page can inject its own
    extra buttons into summaryEl.
*/

function initPracticeSession(root, allItems, opts) {
  opts = opts || {};
  const REQUEUE_OFFSET = 3;
  const exerciseId = opts.exerciseId || "exercise";
  const disableReviewCapture = !!opts.disableReviewCapture;
  const homeHref = opts.homeHref || "../index.html";

  // Fallback if paywall.js is not loaded on this page yet
  const freePreview = (window.FluentEdgePaywall && FluentEdgePaywall.freePreviewCount()) || 3;
  const ALWAYS_FREE_IDS = { invitations: true };

  const stageEl = root.querySelector("[data-stage]");
  const summaryEl = root.querySelector("[data-summary]");
  const progressFill = root.querySelector("[data-progress-fill]");
  const progressLabel = root.querySelector("[data-progress-label]");

  function isUnlockedLocal() {
    if (ALWAYS_FREE_IDS[exerciseId]) return true;
    if (window.FluentEdgePaywall) return FluentEdgePaywall.isUnlocked(exerciseId);
    try {
      const raw = localStorage.getItem("fluentedge:unlocks");
      if (!raw) return false;
      const map = JSON.parse(raw);
      return !!(map && map[exerciseId]);
    } catch (e) {
      return false;
    }
  }

  function needsPaywall() {
    if (ALWAYS_FREE_IDS[exerciseId]) return false;
    return !isUnlockedLocal();
  }

  function isPhraseLocked(item) {
    if (!needsPaywall()) return false;
    return typeof item._id === "number" && item._id >= freePreview;
  }

  function renderPaywall() {
    const price = (window.FluentEdgePaywall && FluentEdgePaywall.priceLabel()) || "$2000 ARS";
    stageEl.style.display = "block";
    summaryEl.style.display = "none";
    stageEl.innerHTML = `
      <div class="phrase-card edge-cut">
        <span class="phrase-label">Preview finished</span>
        <div class="phrase-es" style="font-size:22px;">
          You practiced the first ${freePreview} phrases free.
          Unlock the full exercise for <strong>${price}</strong>.
        </div>
        <p style="margin-top:12px;opacity:0.75;font-size:14px;line-height:1.5;">
          Pay securely with debit or credit card (Argentina).<br>
          After you pay, you’ll return here and the exercise unlocks on this device.
        </p>
        <p data-pay-error style="display:none;margin-top:10px;color:#f07178;font-size:14px;"></p>
      </div>
      <div class="stage-actions">
        <button class="btn btn-primary" type="button" data-btn-pay>Pay — ${price}</button>
        <a class="btn" href="${homeHref}">Back to home</a>
      </div>
    `;
    const payBtn = stageEl.querySelector("[data-btn-pay]");
    const errEl = stageEl.querySelector("[data-pay-error]");
    if (payBtn) {
      payBtn.addEventListener("click", async function () {
        payBtn.disabled = true;
        payBtn.textContent = "Connecting…";
        if (errEl) {
          errEl.style.display = "none";
          errEl.textContent = "";
        }
        try {
          if (!window.FluentEdgePaywall || !FluentEdgePaywall.startCheckout) {
            throw new Error("Paywall not loaded");
          }
          const url = await FluentEdgePaywall.startCheckout(exerciseId);
          window.location.href = url;
        } catch (err) {
          payBtn.disabled = false;
          payBtn.textContent = "Pay — " + price;
          if (errEl) {
            errEl.style.display = "block";
            errEl.textContent = (err && err.message) ? err.message : "Could not start payment. Try again.";
          }
        }
      });
    }
  }

  // ---------- keyboard shortcuts ----------
  // Space = show answer, 1 = I got it wrong, 4 = Correct.
  // Attached once here (not inside render functions) so restarting or
  // reviewing missed phrases doesn't stack up duplicate listeners.
  document.addEventListener("keydown", handleShortcutKey);

  function handleShortcutKey(e) {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return; // don't hijack typing into the name field

    const revealActions = stageEl.querySelector("[data-actions-reveal]");
    const gradeActions = stageEl.querySelector("[data-actions-grade]");

    if (e.code === "Space" || e.key === " ") {
      if (revealActions && revealActions.style.display !== "none") {
        e.preventDefault();
        const showBtn = stageEl.querySelector("[data-btn-show]");
        if (showBtn) showBtn.click();
      }
      return;
    }

    if (gradeActions && gradeActions.style.display === "flex") {
      if (e.key === "1") {
        const wrongBtn = stageEl.querySelector("[data-btn-wrong]");
        if (wrongBtn) wrongBtn.click();
      } else if (e.key === "4") {
        const correctBtn = stageEl.querySelector("[data-btn-correct]");
        if (correctBtn) correctBtn.click();
      }
    }
  }

  // ---------- sound feedback ----------
  // Small Web Audio beeps, no sound files needed. The AudioContext is
  // created lazily on first use (browsers require a user gesture first,
  // which a button click or keypress already satisfies).
  let audioCtx = null;

  function getAudioCtx() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq, duration, type, startOffset, volume) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const t = ctx.currentTime + (startOffset || 0);
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.start(t);
    osc.stop(t + duration);
  }

  function playCorrectSound() {
    // short rising two-note chime
    playTone(660, 0.12, "sine", 0, 0.15);
    playTone(880, 0.16, "sine", 0.09, 0.15);
  }

  function playWrongSound() {
    // short low buzz
    playTone(160, 0.22, "square", 0, 0.07);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function formatExerciseTitle() {
    return exerciseId
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  function downloadMissedWords(missedList) {
    const header = `The Fluent Edge — ${formatExerciseTitle()} — missed phrases (${new Date().toLocaleDateString()})\n\n`;
    const lines = missedList.map(entry => `${entry.item.es} — ${entry.item.en}`);
    const content = header + lines.join("\n") + "\n";

    const a = document.createElement("a");
    a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
    a.download = exerciseId + "-missed-words.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function rebuildMissedMap(missedArr) {
    const map = new Map();
    (missedArr || []).forEach(entry => {
      map.set(entry.id, { item: entry.item, timesMissed: entry.timesMissed });
    });
    return map;
  }

  function run(items, resumeState) {
    const totalUnique = resumeState ? resumeState.totalUnique : items.length;
    let queue = resumeState
      ? resumeState.queue.slice()
      : items.map((item, i) => ({ ...item, _id: i }));
    let completedCount = resumeState ? resumeState.completedCount : 0;
    let missedMap = resumeState ? rebuildMissedMap(resumeState.missed) : new Map();
    let current = null;

    function updateProgress() {
      const pct = totalUnique === 0 ? 0 : Math.round((completedCount / totalUnique) * 100);
      if (progressFill) progressFill.style.width = pct + "%";
      if (progressLabel) {
        progressLabel.innerHTML = `<span>${completedCount} / ${totalUnique} done</span><span>${pct}%</span>`;
      }
    }

    function snapshotState() {
      const fullQueue = current ? [current, ...queue] : queue.slice();
      return {
        totalUnique,
        completedCount,
        queue: fullQueue,
        missed: Array.from(missedMap.entries()).map(([id, entry]) => ({
          id, item: entry.item, timesMissed: entry.timesMissed
        }))
      };
    }

    function renderSaveBar() {
      return `
        <div class="save-bar" data-save-bar>
          <button class="save-link" type="button" data-btn-save>Save &amp; continue later</button>
        </div>
      `;
    }

    function wireSaveBar() {
      const saveBtn = stageEl.querySelector("[data-btn-save]");
      if (!saveBtn) return;
      saveBtn.addEventListener("click", () => {
        const name = FluentEdgeProfile.getCurrentUserName();
        if (!name) {
          const bar = stageEl.querySelector("[data-save-bar]");
          bar.innerHTML = `
            <form class="profile-form" data-save-form>
              <input type="text" class="profile-input" placeholder="Enter your name to save" maxlength="40" autocomplete="off" data-save-name>
              <button class="btn btn-primary btn-sm" type="submit">Save progress</button>
            </form>
          `;
          bar.querySelector("[data-save-form]").addEventListener("submit", e => {
            e.preventDefault();
            const input = bar.querySelector("[data-save-name]");
            if (input.value.trim()) {
              FluentEdgeProfile.setCurrentUserName(input.value);
              doSave();
            }
          });
        } else {
          doSave();
        }
      });
    }

    function doSave() {
      FluentEdgeProfile.saveExerciseProgress(exerciseId, snapshotState());
      renderSavedScreen();
    }

    function renderSavedScreen() {
      const name = FluentEdgeProfile.getCurrentUserName();
      stageEl.innerHTML = `
        <div class="phrase-card edge-cut">
          <span class="phrase-label">Progress saved</span>
          <div class="phrase-es" style="font-size:22px;">
            ${name ? "Nice, " + escapeHtml(name) + ". " : ""}You can come back anytime and pick up right where you left off.
          </div>
        </div>
        <div class="stage-actions">
          <button class="btn btn-primary" type="button" data-btn-keep-going>Keep practicing</button>
          <a class="btn" href="${homeHref}">Back to home</a>
        </div>
      `;
      stageEl.querySelector("[data-btn-keep-going]").addEventListener("click", () => {
        renderItemStage();
      });
    }

    function renderItemStage() {
      stageEl.innerHTML = `
        <div class="phrase-card edge-cut" data-phrase-card>
          <span class="phrase-label">Translate into English</span>
          <div class="phrase-es">${escapeHtml(current.es)}</div>
          <div class="phrase-divider"></div>
          <div class="phrase-en is-hidden" data-phrase-en>${escapeHtml(current.en)}</div>
        </div>
        <div class="stage-actions" data-actions-reveal>
          <button class="btn btn-primary" data-btn-show>Show answer <span class="key-hint">(Space)</span></button>
        </div>
        <div class="stage-actions" data-actions-grade style="display:none;">
          <button class="btn btn-wrong" data-btn-wrong>I got it wrong <span class="key-hint">(1)</span></button>
          <button class="btn btn-correct" data-btn-correct>Correct <span class="key-hint">(4)</span></button>
        </div>
        <p class="retry-note" data-retry-note style="visibility:hidden;">This phrase will come back up again later.</p>
        ${renderSaveBar()}
      `;

      const showBtn = stageEl.querySelector("[data-btn-show]");
      const wrongBtn = stageEl.querySelector("[data-btn-wrong]");
      const correctBtn = stageEl.querySelector("[data-btn-correct]");
      const enEl = stageEl.querySelector("[data-phrase-en]");
      const revealActions = stageEl.querySelector("[data-actions-reveal]");
      const gradeActions = stageEl.querySelector("[data-actions-grade]");

      showBtn.addEventListener("click", () => {
        enEl.classList.remove("is-hidden");
        revealActions.style.display = "none";
        gradeActions.style.display = "flex";
      });

      correctBtn.addEventListener("click", () => {
        flash(true);
        completedCount++;
        updateProgress();
        setTimeout(advance, 260);
      });

      wrongBtn.addEventListener("click", () => {
        flash(false);
        const entry = missedMap.get(current._id) || { item: current, timesMissed: 0 };
        entry.timesMissed++;
        missedMap.set(current._id, entry);

        if (!disableReviewCapture) {
          FluentEdgeProfile.addToReviewBank(exerciseId, formatExerciseTitle(), current);
        }

        const insertAt = Math.min(REQUEUE_OFFSET, queue.length);
        queue.splice(insertAt, 0, current);

        setTimeout(advance, 260);
      });

      wireSaveBar();
    }

    function flash(correct) {
      const card = stageEl.querySelector("[data-phrase-card]");
      if (card) card.classList.add(correct ? "flash-correct" : "flash-wrong");
      if (correct) playCorrectSound(); else playWrongSound();
    }

    function advance() {
      if (queue.length === 0) {
        FluentEdgeProfile.clearExerciseProgress(exerciseId);
        const stats = { correct: totalUnique - missedMap.size, missed: missedMap.size, total: totalUnique };
        FluentEdgeProfile.markExerciseCompleted(exerciseId, stats);
        // Public completion counter (+1). Uses CountAPI; fails silently if offline.
        try {
          fetch(
            "https://countapi.mileshilliard.com/api/v1/hit/" +
              encodeURIComponent("fluentedge_v1_" + exerciseId)
          ).catch(function () {});
        } catch (e) { /* ignore */ }
        renderSummary(missedMap, totalUnique);
        return;
      }
      current = queue.shift();
      if (isPhraseLocked(current)) {
        // Put it back so progress isn't lost if they unlock later
        queue.unshift(current);
        renderPaywall();
        return;
      }
      renderItemStage();
    }

    updateProgress();
    advance();
  }

  function renderSummary(missedMap, totalUnique) {
    stageEl.style.display = "none";
    summaryEl.style.display = "block";

    const missedList = Array.from(missedMap.values());
    const correctCount = totalUnique - missedList.length;

    let bodyHtml;
    if (missedList.length === 0) {
      bodyHtml = `<p class="all-clear">All phrases correct. Nice work.</p>`;
    } else {
      bodyHtml = `
        <ul class="miss-list">
          ${missedList.map(entry => `
            <li>
              <div>
                <div class="es">${escapeHtml(entry.item.es)}</div>
                <div class="en">${escapeHtml(entry.item.en)}</div>
              </div>
              <span class="miss-count">missed ${entry.timesMissed}&times;</span>
            </li>
          `).join("")}
        </ul>
      `;
    }

    summaryEl.innerHTML = `
      <div class="summary-hero">
        <h2>Exercise complete</h2>
        <div class="summary-stats">
          <div class="stat stat-correct"><div class="num">${correctCount}</div><div class="lbl">Got it right</div></div>
          <div class="stat stat-wrong"><div class="num">${missedList.length}</div><div class="lbl">Needed practice</div></div>
          <div class="stat"><div class="num">${totalUnique}</div><div class="lbl">Total</div></div>
        </div>
      </div>
      ${bodyHtml}
      <div class="summary-actions">
        ${missedList.length > 0 ? `<button class="btn btn-primary" data-btn-review>Review only the ones I missed</button>` : ""}
        ${missedList.length > 0 ? `<button class="btn" data-btn-download>Download missed words</button>` : ""}
        <button class="btn" data-btn-restart>Restart the whole exercise</button>
        <a class="btn" href="${homeHref}">Back to home</a>
      </div>
    `;

    if (missedList.length > 0) {
      summaryEl.querySelector("[data-btn-review]").addEventListener("click", () => {
        const reviewItems = missedList.map(entry => entry.item);
        startFresh(reviewItems);
      });
      summaryEl.querySelector("[data-btn-download]").addEventListener("click", () => {
        downloadMissedWords(missedList);
      });
    }
    summaryEl.querySelector("[data-btn-restart]").addEventListener("click", () => {
      startFresh(allItems);
    });

    if (typeof opts.onSummary === "function") {
      opts.onSummary({
        missedList: missedList,
        allItems: allItems,
        summaryEl: summaryEl
      });
    }
  }

  function startFresh(items, resumeState) {
    stageEl.style.display = "block";
    summaryEl.style.display = "none";
    summaryEl.innerHTML = "";
    run(items, resumeState || null);
  }

  function renderResumeBanner(savedEntry) {
    const savedDate = new Date(savedEntry.savedAt);
    const dateLabel = savedDate.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    stageEl.innerHTML = `
      <div class="phrase-card edge-cut">
        <span class="phrase-label">Welcome back</span>
        <div class="phrase-es" style="font-size:22px;">
          You have saved progress from ${dateLabel}
          (${savedEntry.state.completedCount} / ${savedEntry.state.totalUnique} done).
          Continue where you left off, or start over?
        </div>
      </div>
      <div class="stage-actions">
        <button class="btn" type="button" data-btn-startover>Start over</button>
        <button class="btn btn-primary" type="button" data-btn-continue>Continue</button>
      </div>
    `;
    stageEl.querySelector("[data-btn-continue]").addEventListener("click", () => {
      startFresh(allItems, savedEntry.state);
    });
    stageEl.querySelector("[data-btn-startover]").addEventListener("click", () => {
      FluentEdgeProfile.clearExerciseProgress(exerciseId);
      startFresh(allItems);
    });
  }

  // Entry point: check for saved progress before starting.
  const saved = FluentEdgeProfile.loadExerciseProgress(exerciseId);
  if (saved) {
    renderResumeBanner(saved);
  } else {
    startFresh(allItems);
  }
}
