/*
  REVIEWS PAGE
  ------------
  Reads the current student's cross-exercise review bank (see
  profile.js) and renders either:
  - a sign-in prompt (no student signed in),
  - an empty state (signed in, nothing missed yet),
  - a list of missed phrases with per-item delete + clear all, or
  - a practice session (reusing the same engine every exercise uses).

  Deleting from this list only removes it from the review bank —
  it never touches the original exercise's own data or progress.
*/

(function () {
  const signedOutEl = document.getElementById("reviews-signed-out");
  const emptyEl = document.getElementById("reviews-empty");
  const listViewEl = document.getElementById("reviews-list-view");
  const practiceViewEl = document.getElementById("reviews-practice-view");
  const listEl = document.getElementById("review-list");
  const countEl = document.getElementById("review-count");
  const practiceBtn = document.getElementById("btn-practice-reviews");
  const clearBtn = document.getElementById("btn-clear-reviews");
  const backBtn = document.getElementById("btn-back-to-list");

  if (!listViewEl) return;

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function render() {
    practiceViewEl.style.display = "none";

    const name = FluentEdgeProfile.getCurrentUserName();
    if (!name) {
      signedOutEl.style.display = "block";
      emptyEl.style.display = "none";
      listViewEl.style.display = "none";
      return;
    }
    signedOutEl.style.display = "none";

    const bank = FluentEdgeProfile.getReviewBank();
    if (bank.length === 0) {
      emptyEl.style.display = "block";
      listViewEl.style.display = "none";
      return;
    }
    emptyEl.style.display = "none";
    listViewEl.style.display = "block";

    countEl.textContent = bank.length + (bank.length === 1 ? " phrase" : " phrases");
    listEl.innerHTML = "";
    bank.forEach(entry => {
      const li = document.createElement("li");
      li.className = "review-item";
      li.innerHTML = `
        <div class="review-item-text">
          <span class="review-source-tag">${escapeHtml(entry.exerciseTitle)}</span>
          <div class="es">${escapeHtml(entry.es)}</div>
          <div class="en">${escapeHtml(entry.en)}</div>
        </div>
        <button class="review-item-delete" type="button" data-key="${escapeHtml(entry.key)}" title="Remove from reviews">&times;</button>
      `;
      listEl.appendChild(li);
    });

    listEl.querySelectorAll(".review-item-delete").forEach(btn => {
      btn.addEventListener("click", () => {
        FluentEdgeProfile.removeFromReviewBank(btn.getAttribute("data-key"));
        render();
      });
    });
  }

  if (practiceBtn) {
    practiceBtn.addEventListener("click", () => {
      const bank = FluentEdgeProfile.getReviewBank();
      if (bank.length === 0) return;

      listViewEl.style.display = "none";
      practiceViewEl.style.display = "block";

      const root = document.getElementById("practice-root");
      const stageEl = root.querySelector("[data-stage]");
      const summaryEl = root.querySelector("[data-summary]");
      stageEl.innerHTML = "";
      stageEl.style.display = "block";
      summaryEl.innerHTML = "";
      summaryEl.style.display = "none";

      initPracticeSession(root, bank, {
        exerciseId: "reviews",
        disableReviewCapture: true,
        homeHref: "index.html",
        onSummary: function (info) {
          const actions = info.summaryEl.querySelector(".summary-actions");
          if (!actions) return;

          const keepBtn = document.createElement("button");
          keepBtn.className = "btn";
          keepBtn.type = "button";
          keepBtn.textContent = "Keep these in Reviews";

          const removeBtn = document.createElement("button");
          removeBtn.className = "btn btn-primary";
          removeBtn.type = "button";
          removeBtn.textContent = "Remove these from Reviews";

          removeBtn.addEventListener("click", function () {
            info.allItems.forEach(function (item) {
              if (item.key) FluentEdgeProfile.removeFromReviewBank(item.key);
            });
            removeBtn.disabled = true;
            keepBtn.disabled = true;
            removeBtn.textContent = "Removed";
          });

          keepBtn.addEventListener("click", function () {
            keepBtn.disabled = true;
            removeBtn.disabled = true;
            keepBtn.textContent = "Kept";
          });

          const wrapper = document.createDocumentFragment();
          wrapper.appendChild(keepBtn);
          wrapper.appendChild(removeBtn);
          actions.insertBefore(wrapper, actions.firstChild);
        }
      });
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!window.confirm("Remove all saved review phrases? This won't affect your progress in the original exercises.")) return;
      FluentEdgeProfile.clearReviewBank();
      render();
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", e => {
      e.preventDefault();
      render();
    });
  }

  render();
  document.addEventListener("fluentedge:userchanged", render);
  document.addEventListener("fluentedge:reviewbankchanged", render);
})();
