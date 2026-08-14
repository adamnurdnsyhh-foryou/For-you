// ===============================
// UBAH KATA SANDI DI SINI
// ===============================
const PASSWORD = "kepada seseorang yang mengagumi langit biru";

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");
const lockScreen = document.getElementById("lockScreen");
const messageScreen = document.getElementById("messageScreen");
const backButton = document.getElementById("backButton");

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === PASSWORD) {
    error.textContent = "";
    lockScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    error.textContent = "Kata sandinya belum tepat. Coba lagi.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

backButton.addEventListener("click", function () {
  messageScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
  passwordInput.value = "";
  passwordInput.focus();
});
