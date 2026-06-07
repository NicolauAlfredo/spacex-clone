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

// Open a specific dropdown and close any others that are open
function openDropdown(item) {
  // Close all other dropdowns first
  dropdownItems.forEach((d) => {
    if (d !== item) {
      d.classList.remove("is-open");
      d.querySelector(".header__link").setAttribute("aria-expanded", "false");
      resetItems(d);
    }
  });

  const submenu = item.querySelector(".header__submenu");
  if (submenu) {
    // Position the submenu below the trigger item
    const itemRect = item.getBoundingClientRect();
    submenu.style.paddingTop = itemRect.bottom + 4 + "px";

    // Apply staggered transition delays to each list item for cascade animation
    const items = submenu.querySelectorAll("li");
    items.forEach((li, i) => {
      li.style.transitionDelay = `${i * 0.05}s`;
    });
  }

  // Mark item as open and update accessibility attribute
  item.classList.add("is-open");
  item.querySelector(".header__link").setAttribute("aria-expanded", "true");
}

// Attach click and hover events to each dropdown item
dropdownItems.forEach((item) => {
  const trigger = item.querySelector(".header__link");

  // Toggle dropdown on click
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.classList.contains("is-open")) {
      closeAll();
    } else {
      openDropdown(item);
    }
  });

  // Open on mouse enter, close on mouse leave
  item.addEventListener("mouseenter", () => openDropdown(item));
  item.addEventListener("mouseleave", () => closeAll());
});

// Close all dropdowns when clicking outside the nav
document.addEventListener("click", (e) => {
  if (!e.target.closest(".header__item--dropdown")) closeAll();
});
