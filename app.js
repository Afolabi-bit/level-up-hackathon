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

// Calulates the length of the ink in the progress bar
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

// Default call that sets the progress bar and ink length
calcProgressBar();

// Toggles the alerts button
alertBtn.addEventListener("click", () => {
  userPopup.classList.remove("show");
  alertPopup.classList.toggle("show");
});

// Closes the trial modal
closeModalBtn.addEventListener("click", (e) => {
  e.target.parentElement.remove();
});

// Opens the setup guide
arrow.addEventListener("click", () => {
  document.getElementById("guide").classList.toggle("open");
});

// Adds the status of each step of the guide to the progress bar
indicators.forEach((ind) => {
  ind.addEventListener("click", () => {
    ind.classList.toggle("checked");
    calcProgressBar();
  });
});

// Toggles each item on the setup guide
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("expand");
    });
    btn.parentElement.classList.add("expand");
  });
});

// ********************

// ********************

// Accessibilty programming

// ********************

// ********************
let focusAbleMenuItems = userPopup.querySelectorAll('[role="menuitem"]');

function closeMenu() {
  userBtn.ariaExpanded = "false";
  userBtn.focus();
  userPopup.classList.remove("show");
}

function closeWithEscape(e) {
  if (e.key == "Escape") {
    closeMenu();
  }
}

function openMenu() {
  userBtn.ariaExpanded = "true";
  focusAbleMenuItems.item(0).focus();

  userPopup.addEventListener("keyup", (e) => closeWithEscape(e));
}

const toggleMenu = () => {
  let isExpanded = userBtn.attributes["aria-expanded"].value;

  alertPopup.classList.remove("show");
  userPopup.classList.toggle("show");

  if (isExpanded === "true") {
    closeMenu();
  } else {
    openMenu();
  }
};
userBtn.addEventListener("click", toggleMenu);

focusAbleMenuItems.forEach((menuitem, menuIndex) => {
  menuitem.addEventListener("keyup", (e) => arrowKeyNavigation(e, menuIndex));
});

function arrowKeyNavigation(e, menuIndex) {
  let nextItem = focusAbleMenuItems.item(menuIndex + 1);
  let prevItem = focusAbleMenuItems.item(menuIndex - 1);

  if (e.key == "ArrowDown" || e.key == "ArrowRight") {
    if (menuIndex == focusAbleMenuItems.length - 1) {
      focusAbleMenuItems.item(0).focus();
      return;
    }
    nextItem.focus();
  }
  if (e.key == "ArrowUp" || e.key == "ArrowLeft") {
    if (menuIndex == 0) {
      focusAbleMenuItems.item(focusAbleMenuItems.length - 1).focus();
    }
    prevItem.focus();
  }
}
