/**
 * Netlify Function — create Ualá Bis checkout order
 * Secrets come from Netlify environment variables (never from the browser).
 *
 * Required env vars in Netlify → Site settings → Environment variables:
 *   UALA_USERNAME
 *   UALA_CLIENT_ID
 *   UALA_CLIENT_SECRET
 * Optional:
 *   SITE_URL  (default https://thefluentedge.netlify.app)
 *   UALA_AMOUNT (default "2000")
 */

const AUTH_URL = "https://auth.developers.ar.ua.la/v2/api/auth/token";
const CHECKOUT_URL = "https://checkout.developers.ar.ua.la/v2/api/checkout";

let cachedToken = null;
let tokenExpiresAt = 0;

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}

async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt - 60000) {
    return cachedToken;
  }

  const username = process.env.UALA_USERNAME;
  const clientId = process.env.UALA_CLIENT_ID;
  const clientSecret = process.env.UALA_CLIENT_SECRET;

  if (!username || !clientId || !clientSecret) {
    throw new Error("Missing Ualá credentials in Netlify environment variables");
  }

  const res = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      client_id: clientId,
      client_secret_id: clientSecret,
      grant_type: "client_credentials"
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("Ualá auth failed: " + res.status + " " + text);
  }

  const data = await res.json();
  cachedToken = data.access_token;
  const expiresIn = Number(data.expires_in) || 3600;
  tokenExpiresAt = Date.now() + expiresIn * 1000;
  return cachedToken;
}

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  try {
    let body = {};
    try {
      body = JSON.parse(event.body || "{}");
    } catch (e) {
      return json(400, { error: "Invalid JSON body" });
    }

    const exerciseId = (body.exerciseId || "").trim();
    if (!exerciseId) {
      return json(400, { error: "exerciseId is required" });
    }

    // only allow simple ids (letters, numbers, hyphens)
    if (!/^[a-z0-9-]+$/i.test(exerciseId)) {
      return json(400, { error: "Invalid exerciseId" });
    }

    const siteUrl = (process.env.SITE_URL || "https://thefluentedge.netlify.app").replace(/\/$/, "");
    const amount = process.env.UALA_AMOUNT || "2000";

    const token = await getAccessToken();

    const orderRes = await fetch(CHECKOUT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        amount: String(amount),
        description: "The Fluent Edge — " + exerciseId,
        callback_success: siteUrl + "/unlock.html?exercise=" + encodeURIComponent(exerciseId),
        callback_fail: siteUrl + "/exercises/" + encodeURIComponent(exerciseId) + ".html",
        external_reference: exerciseId
      })
    });

    if (!orderRes.ok) {
      const text = await orderRes.text();
      return json(502, { error: "Ualá checkout failed", detail: text });
    }

    const order = await orderRes.json();
    const checkoutLink =
      (order.links && order.links.checkout_link) ||
      order.checkout_link ||
      null;

    if (!checkoutLink) {
      return json(502, { error: "No checkout link in Ualá response", detail: order });
    }

    return json(200, {
      checkout_link: checkoutLink,
      uuid: order.uuid || null
    });
  } catch (err) {
    return json(500, { error: err.message || "Server error" });
  }
};
