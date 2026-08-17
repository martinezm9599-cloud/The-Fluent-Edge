/*
  SUGGESTIONS BOX
  ---------------
  Submits straight to Formspree (https://formspree.io) — no email app
  needed on the student's device, unlike the old mailto: version.
  Messages arrive by email to whatever address the Formspree form
  was set up with.

  If you ever need to change where suggestions go, do it in the
  Formspree dashboard (formspree.io) — not here. This file only needs
  to change if you create a NEW Formspree form and get a new endpoint
  URL below.
*/

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvjzjn";

(function () {
  const form = document.getElementById("suggestion-form");
  if (!form) return;
  const note = document.getElementById("suggestion-note");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("suggestion-name");
    const messageInput = document.getElementById("suggestion-message");
    const message = messageInput.value.trim();
    if (!message) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    note.textContent = "Sending...";

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameInput.value.trim() || "(not provided)",
        message: message
      })
    })
      .then(function (response) {
        if (response.ok) {
          note.textContent = "Thanks! Your suggestion was sent.";
          form.reset();
        } else {
          note.textContent = "Something went wrong sending that. Please try again in a bit.";
        }
      })
      .catch(function () {
        note.textContent = "Something went wrong sending that. Please try again in a bit.";
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });
})();
