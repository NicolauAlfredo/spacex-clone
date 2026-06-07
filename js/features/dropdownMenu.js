// Select all nav items that have a dropdown submenu
const dropdownItems = document.querySelectorAll(".header__item--dropdown");

// Reset transition delays on all submenu items (used when closing)
function resetItems(item) {
  const items = item.querySelectorAll(".header__submenu li");
  items.forEach((li) => {
    li.style.transitionDelay = "0s";
  });
}
