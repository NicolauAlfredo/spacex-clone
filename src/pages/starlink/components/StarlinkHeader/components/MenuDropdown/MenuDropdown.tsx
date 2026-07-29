import { useEffect } from "react";
import { HeaderToggle } from "../StarlinkHeaderToggle/StarlinkToggleHeader";
import { NavLinks } from "../NavLinks/NavLinks";
import { starlinkMenuLinks } from "../../../../../../content/starlink/starlinkMenu.content";
import "./MenuDropdown.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MenuDropdown({ isOpen, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      <div className="menu-dropdown">
        <button
          className="menu-dropdown__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="menu-dropdown__mobile-only">
          <HeaderToggle />
          <NavLinks />
        </div>

        <div className="menu-dropdown__region">
          US
          <svg
            fill="none"
            height="23"
            viewBox="0 0 24 24"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C14.7614 21 17 16.9706 17 12C17 7.02944 14.7614 3 12 3M12 21C9.23858 21 7 16.9706 7 12C7 7.02944 9.23858 3 12 3M12 21V3M20.5 9.5H3.5M20.5 14.5H3.5"
              stroke="currentColor"
            ></path>
          </svg>
        </div>

        <nav className="menu-dropdown__nav">
          {starlinkMenuLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="menu-dropdown__link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
