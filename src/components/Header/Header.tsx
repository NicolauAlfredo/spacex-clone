import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav";
import type { DropdownKey } from "./components/HeaderNavItem";
import { HeaderToggle } from "./components/HeaderToggle";
import { SpaceXLogo } from "./components/SpaceXLogo";
import "./Header.css";

const MOBILE_BREAKPOINT = 1180;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [submenuPaddingTop, setSubmenuPaddingTop] = useState("0px");

  function isMobileViewport() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  function closeDropdowns() {
    setOpenDropdown(null);
  }

  function handleMenuToggle() {
    setIsMenuOpen((isOpen) => {
      if (isOpen) closeDropdowns();
      return !isOpen;
    });
  }

  function handleDropdownClick(event: MouseEvent<HTMLButtonElement>, dropdownKey: DropdownKey) {
    event.preventDefault();
    setOpenDropdown((current) => (current === dropdownKey ? null : dropdownKey));
  }

  function handleDropdownMouseEnter(event: MouseEvent<HTMLLIElement>, dropdownKey: DropdownKey) {
    if (isMobileViewport()) return;
    const itemRect = event.currentTarget.getBoundingClientRect();
    setSubmenuPaddingTop(`${itemRect.bottom + 4}px`);
    setOpenDropdown(dropdownKey);
  }

  function handleDropdownMouseLeave() {
    if (!isMobileViewport()) closeDropdowns();
  }

  useEffect(() => {
    function handleDocumentClick(event: globalThis.MouseEvent) {
      const target = event.target as HTMLElement;
      if (!isMobileViewport() && !target.closest(".header__item--dropdown")) closeDropdowns();
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      closeDropdowns();
      setIsMenuOpen(false);
    }

    function handleScroll() {
      setIsHeaderHidden(window.scrollY > 0);
    }

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen || !isMobileViewport()) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const mobileViewport = isMobileViewport();

  return (
    <header className={["header", isMenuOpen && "menu-open", isHeaderHidden && "header--hidden"].filter(Boolean).join(" ")}>
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="SpaceX home">
          <SpaceXLogo />
        </Link>
        <HeaderToggle isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        <HeaderNav
          openDropdown={openDropdown}
          isMobile={mobileViewport}
          submenuPaddingTop={submenuPaddingTop}
          onDropdownClick={handleDropdownClick}
          onDropdownMouseEnter={handleDropdownMouseEnter}
          onDropdownMouseLeave={handleDropdownMouseLeave}
        />
      </div>
    </header>
  );
}
