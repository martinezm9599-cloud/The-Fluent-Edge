/*
  FLUENT EDGE PROFILE
  --------------------
  Local, browser-only account system. No server, no password:
  a student types their name once and everything is saved in
  that browser's localStorage under that name.

  This does NOT sync across devices — it's meant for a student
  who mostly practices from the same computer.
*/

const FluentEdgeProfile = (function () {
  const CURRENT_USER_KEY = "fluentEdge:currentUser";
  const PROFILE_PREFIX = "fluentEdge:profile:";

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (e) { return false; }
  }
  function safeRemove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }

  function getCurrentUserName() {
    return safeGet(CURRENT_USER_KEY);
  }

  function getProfile(name) {
    const raw = safeGet(PROFILE_PREFIX + name);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }

  function saveProfile(name, data) {
    safeSet(PROFILE_PREFIX + name, JSON.stringify(data));
  }

  function setCurrentUserName(name) {
    const trimmed = (name || "").trim();
    if (!trimmed) return false;
    safeSet(CURRENT_USER_KEY, trimmed);
    if (!getProfile(trimmed)) {
      saveProfile(trimmed, { name: trimmed, createdAt: Date.now(), exercises: {} });
    }
    document.dispatchEvent(new CustomEvent("fluentedge:userchanged", { detail: { name: trimmed } }));
    return true;
  }

  function signOut() {
    safeRemove(CURRENT_USER_KEY);
    document.dispatchEvent(new CustomEvent("fluentedge:userchanged", { detail: { name: null } }));
  }

  function withProfile(mutateFn) {
    const name = getCurrentUserName();
    if (!name) return null;
    const profile = getProfile(name) || { name, createdAt: Date.now(), exercises: {} };
    const result = mutateFn(profile);
    saveProfile(name, profile);
    return result;
  }

  function saveExerciseProgress(exerciseId, state) {
    return withProfile(profile => {
      profile.exercises[exerciseId] = {
        status: "in-progress",
        savedAt: Date.now(),
        state: state
      };
    });
  }

  function loadExerciseProgress(exerciseId) {
    const name = getCurrentUserName();
    if (!name) return null;
    const profile = getProfile(name);
    const entry = profile && profile.exercises[exerciseId];
    return entry && entry.status === "in-progress" ? entry : null;
  }

  function clearExerciseProgress(exerciseId) {
    withProfile(profile => {
      if (profile.exercises[exerciseId] && profile.exercises[exerciseId].status === "in-progress") {
        delete profile.exercises[exerciseId];
      }
    });
  }

  function markExerciseCompleted(exerciseId, stats) {
    withProfile(profile => {
      profile.exercises[exerciseId] = {
        status: "completed",
        completedAt: Date.now(),
        stats: stats
      };
    });
  }

  function getExerciseStatus(exerciseId) {
    const name = getCurrentUserName();
    if (!name) return "not-started";
    const profile = getProfile(name);
    const entry = profile && profile.exercises[exerciseId];
    return entry ? entry.status : "not-started";
  }

  // ---------- review bank ----------
  // A cross-exercise collection of missed phrases. Keyed by
  // "<exerciseId>::<spanish phrase>" so the same phrase missed again
  // updates the existing entry instead of duplicating it.
  function reviewKey(exerciseId, es) {
    return exerciseId + "::" + es;
  }

  function addToReviewBank(exerciseId, exerciseTitle, item) {
    withProfile(profile => {
      if (!profile.reviewBank) profile.reviewBank = {};
      const key = reviewKey(exerciseId, item.es);
      const existing = profile.reviewBank[key];
      profile.reviewBank[key] = {
        es: item.es,
        en: item.en,
        exerciseId: exerciseId,
        exerciseTitle: exerciseTitle,
        timesMissed: existing ? existing.timesMissed + 1 : 1,
        lastMissedAt: Date.now()
      };
    });
    document.dispatchEvent(new CustomEvent("fluentedge:reviewbankchanged"));
  }

  function getReviewBank() {
    const name = getCurrentUserName();
    if (!name) return [];
    const profile = getProfile(name);
    const bank = (profile && profile.reviewBank) || {};
    return Object.keys(bank)
      .map(key => Object.assign({ key: key }, bank[key]))
      .sort((a, b) => b.lastMissedAt - a.lastMissedAt);
  }

  function removeFromReviewBank(key) {
    withProfile(profile => {
      if (profile.reviewBank) delete profile.reviewBank[key];
    });
    document.dispatchEvent(new CustomEvent("fluentedge:reviewbankchanged"));
  }

  function clearReviewBank() {
    withProfile(profile => {
      profile.reviewBank = {};
    });
    document.dispatchEvent(new CustomEvent("fluentedge:reviewbankchanged"));
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  /* Renders a small sign-in / "signed in as" widget into the given element. */
  function renderWidget(el) {
    function draw() {
      const name = getCurrentUserName();
      if (name) {
        el.innerHTML = `
          <div class="profile-widget">
            <span class="profile-pill">Signed in as <strong>${escapeHtml(name)}</strong></span>
            <button class="profile-link" type="button" data-switch>Switch</button>
          </div>
        `;
        el.querySelector("[data-switch]").addEventListener("click", showForm);
      } else {
        showForm();
      }
    }

    function showForm() {
      el.innerHTML = `
        <form class="profile-form" data-form>
          <input type="text" class="profile-input" placeholder="Enter your name to save progress" maxlength="40" autocomplete="off" data-name-input>
          <button class="btn btn-primary btn-sm" type="submit">Save name</button>
        </form>
      `;
      const form = el.querySelector("[data-form]");
      form.addEventListener("submit", e => {
        e.preventDefault();
        const input = el.querySelector("[data-name-input]");
        if (input.value.trim()) {
          setCurrentUserName(input.value);
          draw();
        }
      });
    }

    draw();
    document.addEventListener("fluentedge:userchanged", draw);
  }

  return {
    getCurrentUserName,
    setCurrentUserName,
    signOut,
    saveExerciseProgress,
    loadExerciseProgress,
    clearExerciseProgress,
    markExerciseCompleted,
    getExerciseStatus,
    addToReviewBank,
    getReviewBank,
    removeFromReviewBank,
    clearReviewBank,
    renderWidget,
    escapeHtml
  };
})();
