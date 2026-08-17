/*
  PUBLIC COMPLETION STATS
  -----------------------
  Uses CountAPI (no signup, no keys):
  https://countapi.mileshilliard.com

  Each exercise has a key: fluentedge_v1_<exerciseId>
  - hit  → +1 when someone completes an exercise
  - get  → read current total for the homepage cards
  - set  → used by admin to reset or subtract 1

  Admin mode (only for you):
  Open any page with ?admin=fluentedge in the URL once.
  That unlocks −1 and Reset buttons on the homepage cards
  for the rest of the browser session.
*/

window.FluentEdgeStats = (function () {
  const BASE = "https://countapi.mileshilliard.com/api/v1";
  const PREFIX = "fluentedge_v1_";
  const ADMIN_KEY = "fluentedge";
  const ADMIN_STORAGE = "fluentedge_admin";

  // Activate admin if URL has ?admin=fluentedge
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === ADMIN_KEY) {
      sessionStorage.setItem(ADMIN_STORAGE, "1");
    }
  } catch (e) { /* ignore */ }

  function isAdmin() {
    try {
      return sessionStorage.getItem(ADMIN_STORAGE) === "1";
    } catch (e) {
      return false;
    }
  }

  function keyFor(exerciseId) {
    return PREFIX + exerciseId;
  }

  function parseValue(data) {
    if (!data || data.value === undefined || data.value === null) return 0;
    const n = parseInt(data.value, 10);
    return isNaN(n) ? 0 : Math.max(0, n);
  }

  async function get(exerciseId) {
    try {
      const res = await fetch(BASE + "/get/" + encodeURIComponent(keyFor(exerciseId)));
      if (res.status === 404) return 0;
      if (!res.ok) return null;
      const data = await res.json();
      return parseValue(data);
    } catch (e) {
      return null;
    }
  }

  async function hit(exerciseId) {
    try {
      const res = await fetch(BASE + "/hit/" + encodeURIComponent(keyFor(exerciseId)));
      if (!res.ok) return null;
      const data = await res.json();
      return parseValue(data);
    } catch (e) {
      return null;
    }
  }

  async function set(exerciseId, value) {
    const safe = Math.max(0, Math.floor(Number(value) || 0));
    try {
      const res = await fetch(
        BASE + "/set/" + encodeURIComponent(keyFor(exerciseId)) + "?value=" + safe
      );
      if (!res.ok) return null;
      const data = await res.json();
      return parseValue(data);
    } catch (e) {
      return null;
    }
  }

  async function decrement(exerciseId) {
    const current = await get(exerciseId);
    if (current === null) return null;
    return set(exerciseId, Math.max(0, current - 1));
  }

  async function reset(exerciseId) {
    return set(exerciseId, 0);
  }

  return {
    get: get,
    hit: hit,
    set: set,
    decrement: decrement,
    reset: reset,
    isAdmin: isAdmin,
    keyFor: keyFor
  };
})();
