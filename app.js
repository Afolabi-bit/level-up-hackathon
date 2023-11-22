const userBtn = document.getElementById("user-btn");
const userPopup = document.getElementById("user-popup");
const alertBtn = document.getElementById("alert-btn");
const alertPopup = document.getElementById("alerts");
const closeModalBtn = document.getElementById("close-modal");
const count = document.getElementById("count");
const progressBar = document.getElementById("progress-bar");
const ink = document.getElementById("ink");

userBtn.addEventListener("click", () => {
  alertPopup.classList.remove("show");
  userPopup.classList.toggle("show");
});

alertBtn.addEventListener("click", () => {
  userPopup.classList.remove("show");
  alertPopup.classList.toggle("show");
});

closeModalBtn.addEventListener("click", (e) => {
  e.target.parentElement.remove();
});

ink.style.width = `${(+count.textContent / 5) * 120}px`;
