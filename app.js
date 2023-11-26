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
}

// Default call that sets the progress bar and ink length
calcProgressBar();

// Closes the trial modal
closeModalBtn.addEventListener("click", (e) => {
  e.target.parentElement.remove();
});

// Adds the status of each step of the guide to the progress bar
indicators.forEach((ind) => {
  ind.addEventListener("click", () => {
    ind.classList.toggle("checked");
    calcProgressBar();
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
focusAbleMenuItems.forEach((menuitem, menuIndex) => {
  menuitem.addEventListener("keyup", (e) => arrowKeyNavigation(e, menuIndex));
});

// ALERT ACCESSIBILTY
let focusAbleAlertItems = alertPopup.querySelectorAll('[role="menuitem"]');

function closeAlert() {
  alertBtn.ariaExpanded = "false";
  alertBtn.focus();
  alertPopup.classList.remove("show");
}

function closeAlertWithEscape(e) {
  if (e.key == "Escape") {
    closeAlert();
  }
}

function openAlert() {
  alertBtn.ariaExpanded = "true";
  focusAbleAlertItems.item(0).focus();

  alertPopup.addEventListener("keyup", (e) => closeAlertWithEscape(e));
}
// Toggles the alerts button

const toggleAlert = () => {
  let isExpanded = alertBtn.attributes["aria-expanded"].value;

  userPopup.classList.remove("show");
  alertPopup.classList.toggle("show");

  if (isExpanded === "true") {
    closeAlert();
  } else {
    openAlert();
  }
};
alertBtn.addEventListener("click", toggleAlert);

function alertArrowKeyNavigation(e, menuIndex) {
  let nextItem = focusAbleAlertItems.item(menuIndex + 1);
  let prevItem = focusAbleAlertItems.item(menuIndex - 1);

  if (e.key == "ArrowDown" || e.key == "ArrowRight") {
    if (menuIndex == focusAbleAlertItems.length - 1) {
      focusAbleAlertItems.item(0).focus();
      return;
    }
    nextItem.focus();
  }
  if (e.key == "ArrowUp" || e.key == "ArrowLeft") {
    if (menuIndex == 0) {
      focusAbleAlertItems.item(focusAbleAlertItems.length - 1).focus();
      return;
    }
    prevItem.focus();
  }
}

focusAbleAlertItems.forEach((menuitem, menuIndex) => {
  menuitem.addEventListener("keyup", (e) =>
    alertArrowKeyNavigation(e, menuIndex)
  );
});

//
// Setup Guide *******************************************
//

const cardsWrapper = document.getElementById("cards-wrapper");
let cardItems = document.querySelectorAll("#cards-wrapper  [role='menuitem']");

function removeExpandClass() {
  cards.forEach((card) =>
    card.addEventListener("click", card.classList.remove("expand"))
  );
}

function arrowUpDownKeysForCards(e, index) {
  let nextCard = cards.item(index + 1);
  let prevCard = cards.item(index - 1);

  if (e.key == "ArrowUp") {
    removeExpandClass();
    if (index == 0) {
      cards.item(cards.length - 1).focus();
      cards.item(cards.length - 1).classList.add("expand");
      return;
    }
    prevCard.focus();
    prevCard.classList.add("expand");
  }
  if (e.key == "ArrowDown") {
    removeExpandClass();
    if (index == cards.length - 1) {
      cards.item(0).focus();
      cards.item(0).classList.add("expand");
      return;
    }
    nextCard.focus();
    nextCard.classList.add("expand");
  }
}
cards.forEach((card, index) => {
  card.addEventListener("keyup", (e) => arrowUpDownKeysForCards(e, index));
});

cards.forEach((card) =>
  card.addEventListener("click", () => {
    removeExpandClass();
    card.classList.add("expand");
  })
);

function openGuide() {
  arrow.ariaExpanded = "true";
  cards.item(0).classList.add("expand");
  cards.item(0).focus();
  console.log(cards.item(0));
}

function closeGuide() {
  arrow.ariaExpanded = "false";
  arrow.focus();
}
// Toggles the setup guide
const toggleSetupGuide = () => {
  let isExpanded = arrow.attributes["aria-expanded"].value;
  cardsWrapper.classList.toggle("open");
  arrow.classList.toggle("flip");

  if (isExpanded === "true") {
    closeGuide();
  } else {
    openGuide();
  }
};
arrow.addEventListener("click", toggleSetupGuide);

// Toggles each item on the setup guide
