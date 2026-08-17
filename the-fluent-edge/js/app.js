(function () {
  const container = document.getElementById("exercise-categories");
  const countEl = document.getElementById("exercise-count");
  if (!container) return;

  const isAdmin = window.FluentEdgeStats && FluentEdgeStats.isAdmin();

  function statusMeta(ex) {
    if (ex.locked) return { cta: "In development", tagOverride: null };
    const status = FluentEdgeProfile.getExerciseStatus(ex.id);
    if (status === "in-progress") return { cta: "Continue", tagOverride: "In progress" };
    if (status === "completed") return { cta: "Practice again", tagOverride: "Completed" };
    return { cta: "Practice", tagOverride: null };
  }

  function formatCompletions(n) {
    if (n === 1) return "1 completion";
    return n + " completions";
  }

  function priceBadge(ex) {
    if (ex.locked) return "";
    if (!window.FluentEdgePaywall) return "";
    if (FluentEdgePaywall.isAlwaysFree(ex.id)) {
      return `<span style="color:#5ddea7;">Free</span>`;
    }
    if (FluentEdgePaywall.isUnlocked(ex.id)) {
      return `<span style="color:#5ddea7;">Unlocked</span>`;
    }
    const price = FluentEdgePaywall.priceLabel();
    const preview = FluentEdgePaywall.freePreviewCount();
    return `${preview} free · ${price}`;
  }

  function buildCard(ex) {
    if (ex.dataVar && window[ex.dataVar]) {
      ex.count = window[ex.dataVar].length;
    }

    const meta = statusMeta(ex);
    const tagLabel = meta.tagOverride || ex.tag;
    const tagClass = ex.locked
      ? " tag-muted"
      : meta.tagOverride === "In progress" ? " tag-progress"
      : meta.tagOverride === "Completed" ? " tag-done"
      : "";

    const card = document.createElement(ex.locked || isAdmin ? "div" : "a");
    if (!ex.locked && !isAdmin) card.href = ex.href;
    card.className = "exercise-card edge-cut" + (ex.locked ? " is-locked" : "");
    card.dataset.exerciseId = ex.id;

    const adminHtml = (!ex.locked && isAdmin)
      ? `<div class="card-admin" data-admin-controls style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
           <button type="button" class="btn btn-sm" data-admin-minus title="Subtract 1">−1</button>
           <button type="button" class="btn btn-sm" data-admin-reset title="Reset to 0">Reset</button>
           <a class="btn btn-sm" href="${ex.href}">Open →</a>
         </div>`
      : "";

    const badge = priceBadge(ex);

    card.innerHTML = `
      <div class="card-top">
        <span class="card-tag${tagClass}">${tagLabel}</span>
        ${ex.count ? `<span class="card-count">${ex.count} phrases</span>` : ""}
      </div>
      <h3>${ex.title}</h3>
      <p>${ex.description}</p>
      ${badge ? `<div style="font-size:13px;opacity:0.85;margin-top:4px;">${badge}</div>` : ""}
      <div class="card-completions" data-completions style="font-size:13px;opacity:0.7;margin-top:6px;">…</div>
      <div class="card-go">
        <span>${meta.cta}</span>
        ${ex.locked ? "" : '<span class="arrow">&rarr;</span>'}
      </div>
      ${adminHtml}
    `;

    if (!ex.locked && isAdmin) {
      card.style.cursor = "pointer";
      card.addEventListener("click", function (e) {
        if (e.target.closest("[data-admin-controls]")) return;
        window.location.href = ex.href;
      });
    }

    return card;
  }

  function wireAdminControls(card, exerciseId) {
    if (!isAdmin || !window.FluentEdgeStats) return;
    const minusBtn = card.querySelector("[data-admin-minus]");
    const resetBtn = card.querySelector("[data-admin-reset]");
    const label = card.querySelector("[data-completions]");

    function refreshLabel(n) {
      if (label && n !== null) label.textContent = formatCompletions(n);
    }

    if (minusBtn) {
      minusBtn.addEventListener("click", async function (e) {
        e.preventDefault();
        e.stopPropagation();
        minusBtn.disabled = true;
        const n = await FluentEdgeStats.decrement(exerciseId);
        refreshLabel(n);
        minusBtn.disabled = false;
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", async function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!confirm("Reset completion count for this exercise to 0?")) return;
        resetBtn.disabled = true;
        const n = await FluentEdgeStats.reset(exerciseId);
        refreshLabel(n);
        resetBtn.disabled = false;
      });
    }
  }

  async function loadCompletionCounts() {
    if (!window.FluentEdgeStats) return;
    const cards = container.querySelectorAll("[data-exercise-id]");
    for (const card of cards) {
      const id = card.dataset.exerciseId;
      const label = card.querySelector("[data-completions]");
      if (!label || !id) continue;
      const n = await FluentEdgeStats.get(id);
      if (n === null) {
        label.textContent = "";
      } else {
        label.textContent = formatCompletions(n);
      }
      wireAdminControls(card, id);
    }
  }

  function buildCategorySection(cat, items) {
    const VISIBLE_COUNT = 3;
    const hasMore = items.length > VISIBLE_COUNT;

    const section = document.createElement("div");
    section.className = "category-group";
    section.innerHTML = `
      <div class="category-head">
        <h3>${cat.title}</h3>
        <p>${cat.description}</p>
      </div>
      <div class="exercise-grid" data-grid></div>
      ${hasMore ? `<button class="show-more-btn" type="button" data-toggle-more></button>` : ""}
    `;

    const grid = section.querySelector("[data-grid]");
    items.forEach((ex, i) => {
      const card = buildCard(ex);
      if (hasMore && i >= VISIBLE_COUNT) {
        card.classList.add("is-collapsed-card");
        card.style.display = "none";
      }
      grid.appendChild(card);
    });

    if (hasMore) {
      const toggleBtn = section.querySelector("[data-toggle-more]");
      const hiddenCount = items.length - VISIBLE_COUNT;
      let expanded = false;

      function updateToggleLabel() {
        toggleBtn.innerHTML = expanded
          ? `Show fewer <span class="arrow arrow-up">&uarr;</span>`
          : `Show ${hiddenCount} more <span class="arrow">&darr;</span>`;
      }
      updateToggleLabel();

      toggleBtn.addEventListener("click", () => {
        expanded = !expanded;
        grid.querySelectorAll(".is-collapsed-card").forEach(card => {
          card.style.display = expanded ? "" : "none";
        });
        updateToggleLabel();
      });
    }

    return section;
  }

  function buildReviewCard() {
    const name = FluentEdgeProfile.getCurrentUserName();
    const bank = name ? FluentEdgeProfile.getReviewBank() : [];

    let countLabel = "";
    let ctaLabel = "Practice";
    if (!name) {
      ctaLabel = "Sign in to start";
    } else if (bank.length === 0) {
      countLabel = "Nothing saved yet";
      ctaLabel = "View";
    } else {
      countLabel = bank.length + (bank.length === 1 ? " phrase" : " phrases");
    }

    const card = document.createElement("a");
    card.href = "reviews.html";
    card.className = "exercise-card edge-cut";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-tag">Personal</span>
        ${countLabel ? `<span class="card-count">${countLabel}</span>` : ""}
      </div>
      <h3>Your Missed Words</h3>
      <p>Automatically collected from every exercise you practice. Review them, or clear out the ones you've got down.</p>
      <div class="card-go">
        <span>${ctaLabel}</span>
        <span class="arrow">&rarr;</span>
      </div>
    `;
    return card;
  }

  function buildReviewSection() {
    const section = document.createElement("div");
    section.className = "category-group";
    section.innerHTML = `
      <div class="category-head">
        <h3>Review</h3>
        <p>Every phrase you've missed, across every exercise, collected in one place.</p>
      </div>
      <div class="exercise-grid"></div>
    `;
    section.querySelector(".exercise-grid").appendChild(buildReviewCard());
    return section;
  }

  function render() {
    container.innerHTML = "";

    const totalAvailable = EXERCISES.filter(ex => !ex.locked).length;
    if (countEl) {
      countEl.textContent = totalAvailable + (totalAvailable === 1 ? " exercise available" : " exercises available");
    }

    EXERCISE_CATEGORIES.forEach(cat => {
      const items = EXERCISES.filter(ex => ex.category === cat.id);
      if (items.length === 0) return;
      container.appendChild(buildCategorySection(cat, items));
    });

    container.appendChild(buildReviewSection());

    loadCompletionCounts();
  }

  render();
  document.addEventListener("fluentedge:userchanged", render);
  document.addEventListener("fluentedge:reviewbankchanged", render);
})();
