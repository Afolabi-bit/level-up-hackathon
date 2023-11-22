const userBtn = document.getElementById("user-btn");
const userPopup = document.getElementById("user-popup");
const alertBtn = document.getElementById("alert-btn");
const alertPopup = document.getElementById("alerts");
const closeModalBtn = document.getElementById("close-modal");

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
