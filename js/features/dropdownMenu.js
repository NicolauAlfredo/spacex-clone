// Select all nav items that have a dropdown submenu
const dropdownItems = document.querySelectorAll(".header__item--dropdown");

// Reset transition delays on all submenu items (used when closing)
function resetItems(item) {
  const items = item.querySelectorAll(".header__submenu li");
  items.forEach((li) => {
    li.style.transitionDelay = "0s";
  });
}

// Close all open dropdowns and reset their state
function closeAll() {
  dropdownItems.forEach((d) => {
    d.classList.remove("is-open");
    d.querySelector(".header__link").setAttribute("aria-expanded", "false");
    resetItems(d);
  });
}
