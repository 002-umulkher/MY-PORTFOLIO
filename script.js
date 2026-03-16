document.addEventListener("DOMContentLoaded", () => {
  // Select the main container element
  const container = document.querySelector(".container");

  // Open navbar: add "change" class to container
  const openNavbarIcon = document.querySelector(".open-navbar-icon");
  if (openNavbarIcon && container) {
    openNavbarIcon.addEventListener("click", () => {
      container.classList.add("change");
    });
  }

  // Close navbar: remove "change" class from container
  const closeNavbarIcon = document.querySelector(".close-navbar-icon");
  if (closeNavbarIcon && container) {
    closeNavbarIcon.addEventListener("click", () => {
      container.classList.remove("change");
    });
  }

  // Colors for nav links
  const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
  let i = 0;

  // Apply colors to each nav link in order
  Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;
  });

  // Card flip behavior for each navigation button inside cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const buttons = card.querySelectorAll(".navigation-button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        card.classList.toggle("change");
      });
    });
  });
});