// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  const validate = () => {
    let valid = true;

    // Name
    if (!fields.name.value.trim()) {
      errors.name.textContent = "Full name is required.";
      valid = false;
    } else errors.name.textContent = "";

    // Email
    const emailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.value.trim()) {
      errors.email.textContent = "Email is required.";
      valid = false;
    } else if (!emailVerify.test(fields.email.value.trim())) {
      errors.email.textContent = "Invalid email address.";
      valid = false;
    } else errors.email.textContent = "";

    // Subject
    if (!fields.subject.value.trim()) {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    } else errors.subject.textContent = "";

    // Message
    if (!fields.message.value.trim()) {
      errors.message.textContent = "Message is required.";
      valid = false;
    } else if (fields.message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      valid = false;
    } else errors.message.textContent = "";

    return valid;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      form.reset();
      successMsg.classList.remove("hidden");
      successMsg.focus();
    } else {
      successMsg.classList.add("hidden");
    }
  });
});
