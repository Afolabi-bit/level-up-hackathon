const userbtn = document.getElementById("user-btn");
const userPopup = document.getElementById("user-popup");

userbtn.addEventListener("click", () => {
  userPopup.classList.toggle("show");
  console.log("working");
});
