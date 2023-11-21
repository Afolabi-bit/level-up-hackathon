const userBtn = document.getElementById("user-btn");
const userPopup = document.getElementById("user-popup");
const alertBtn = document.getElementById("alert-btn");
const alertPopup = document.getElementById("alerts");

userBtn.addEventListener("click", () => {
  userPopup.classList.toggle("show");
});

alertBtn.addEventListener("click", () => {
  alertPopup.classList.toggle("show");
});
