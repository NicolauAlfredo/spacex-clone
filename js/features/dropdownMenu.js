// ELEMENTS
const menuToggle = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const dropdownItems = document.querySelectorAll(".header__item--dropdown");

// HELPERS

function isMobile() {
  return window.innerWidth < 1024;
}

function resetItems(item) {
  item.querySelectorAll(".header__submenu li").forEach((li) => {
    li.style.transitionDelay = "0s";
  });
}

function closeAll() {
  dropdownItems.forEach((d) => {
    d.classList.remove("is-open");
    d.querySelector(".header__link").setAttribute("aria-expanded", "false");
    resetItems(d);

    // Reset mobile inline display
    const sub = d.querySelector(".header__submenu");
    if (sub) sub.style.display = "";
  });
}

// MOBILE MENU TOGGLE

menuToggle.addEventListener("click", () => {
  header.classList.toggle("menu-open");
  const isOpen = header.classList.contains("menu-open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

  // Close all dropdowns when closing the menu
  if (!isOpen) closeAll();
});

// DROPDOWN ITEMS

dropdownItems.forEach((item) => {
  const trigger = item.querySelector(".header__link");

  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    if (isMobile()) {
      // Mobile: toggle submenu inline
      const submenu = item.querySelector(".header__submenu");
      const isOpen = item.classList.contains("is-open");

      // Close all others
      dropdownItems.forEach((d) => {
        if (d !== item) {
          d.classList.remove("is-open");
          const sub = d.querySelector(".header__submenu");
          if (sub) sub.style.display = "";
        }
      });

      // Toggle current
      item.classList.toggle("is-open", !isOpen);
      if (submenu) submenu.style.display = isOpen ? "" : "block";
    } else {
      // Desktop: toggle with animation
      if (item.classList.contains("is-open")) {
        closeAll();
      } else {
        openDropdown(item);
      }
    }
  });

  // Desktop only: hover
  item.addEventListener("mouseenter", () => {
    if (!isMobile()) openDropdown(item);
  });

  item.addEventListener("mouseleave", () => {
    if (!isMobile()) closeAll();
  });
});

// DESKTOP DROPDOWN

function openDropdown(item) {
  dropdownItems.forEach((d) => {
    if (d !== item) {
      d.classList.remove("is-open");
      d.querySelector(".header__link").setAttribute("aria-expanded", "false");
      resetItems(d);
    }
  });

  const submenu = item.querySelector(".header__submenu");
  if (submenu) {
    const itemRect = item.getBoundingClientRect();
    submenu.style.paddingTop = itemRect.bottom + 4 + "px";

    submenu.querySelectorAll("li").forEach((li, i) => {
      li.style.transitionDelay = `${i * 0.05}s`;
    });
  }

  item.classList.add("is-open");
  item.querySelector(".header__link").setAttribute("aria-expanded", "true");
}

// GLOBAL EVENTS

// Close on outside click (desktop only)
document.addEventListener("click", (e) => {
  if (!isMobile() && !e.target.closest(".header__item--dropdown")) closeAll();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

// HIDE HEADER ON SCROLL

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
});
