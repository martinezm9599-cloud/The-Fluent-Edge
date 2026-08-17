/*
  PAYWALL (honest / client-side unlock + Ualá Bis checkout)
  ----------------------------------------------------------
  - invitations → always free
  - other exercises → first 3 phrases free, then $2000 ARS via Ualá Bis
  - unlock is stored forever in this browser (localStorage)
  - payment is created by a Netlify Function (secrets stay on the server)
  - after paying, Ualá redirects to unlock.html?exercise=...
*/

window.FluentEdgePaywall = (function () {
  const STORAGE_KEY = "fluentedge:unlocks";
  const PENDING_KEY = "fluentedge:pendingUnlock";
  const FREE_PREVIEW = 3;
  const PRICE_LABEL = "$2000 ARS";
  const CHECKOUT_FUNCTION = "/.netlify/functions/create-uala-checkout";

  const ALWAYS_FREE = {
    invitations: true
  };

  function readUnlocks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const data = JSON.parse(raw);
      return data && typeof data === "object" ? data : {};
    } catch (e) {
      return {};
    }
  }

  function writeUnlocks(map) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch (e) { /* ignore */ }
  }

  function isAlwaysFree(exerciseId) {
    return !!ALWAYS_FREE[exerciseId];
  }

  function isUnlocked(exerciseId) {
    if (isAlwaysFree(exerciseId)) return true;
    const map = readUnlocks();
    return !!map[exerciseId];
  }

  function unlock(exerciseId) {
    if (!exerciseId || isAlwaysFree(exerciseId)) return;
    const map = readUnlocks();
    map[exerciseId] = true;
    writeUnlocks(map);
  }

  function lock(exerciseId) {
    const map = readUnlocks();
    delete map[exerciseId];
    writeUnlocks(map);
  }

  function setPending(exerciseId) {
    try {
      sessionStorage.setItem(PENDING_KEY, exerciseId || "");
    } catch (e) { /* ignore */ }
  }

  function consumePending() {
    try {
      const id = sessionStorage.getItem(PENDING_KEY);
      sessionStorage.removeItem(PENDING_KEY);
      return id || null;
    } catch (e) {
      return null;
    }
  }

  function freePreviewCount() {
    return FREE_PREVIEW;
  }

  function priceLabel() {
    return PRICE_LABEL;
  }

  function requiresPayment(exerciseId) {
    return !isAlwaysFree(exerciseId) && !isUnlocked(exerciseId);
  }

  /**
   * Creates a Ualá checkout order and returns the checkout URL.
   * On success the student is redirected to unlock.html?exercise=...
   */
  async function startCheckout(exerciseId) {
    setPending(exerciseId);
    const res = await fetch(CHECKOUT_FUNCTION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exerciseId: exerciseId })
    });
    const data = await res.json().catch(function () { return {}; });
    if (!res.ok || !data.checkout_link) {
      const msg = (data && data.error) || ("Checkout error " + res.status);
      throw new Error(msg);
    }
    return data.checkout_link;
  }

  return {
    isAlwaysFree: isAlwaysFree,
    isUnlocked: isUnlocked,
    unlock: unlock,
    lock: lock,
    requiresPayment: requiresPayment,
    setPending: setPending,
    consumePending: consumePending,
    freePreviewCount: freePreviewCount,
    priceLabel: priceLabel,
    startCheckout: startCheckout
  };
})();
