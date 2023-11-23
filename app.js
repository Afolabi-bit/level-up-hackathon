const userBtn = document.getElementById("user-btn");
const userPopup = document.getElementById("user-popup");
const alertBtn = document.getElementById("alert-btn");
const alertPopup = document.getElementById("alerts");
const closeModalBtn = document.getElementById("close-modal");
const count = document.getElementById("count");
const progressBar = document.getElementById("progress-bar");
const ink = document.getElementById("ink");
const arrow = document.getElementById("arrow");

const indicators = document.querySelectorAll(".indicator");
const toggleBtns = document.querySelectorAll(".toggle-card");
const cards = document.querySelectorAll(".card");

function calcProgressBar() {
  const checked = document.querySelectorAll(".checked");
  if (checked.length < 1) {
    count.innerHTML = "1";
  } else {
    count.textContent = `${checked.length}`;
  }
  ink.style.width = `${(+count.textContent / 5) * 120}px`;
  console.log(checked.length);
}

calcProgressBar();

arrow.addEventListener("click", () => {
  document.getElementById("guide").classList.toggle("open");
});

indicators.forEach((ind) => {
  ind.addEventListener("click", () => {
    ind.classList.toggle("checked");
    calcProgressBar();
  });
});

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

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("expand");
    });
    btn.parentElement.classList.add("expand");
  });
});
