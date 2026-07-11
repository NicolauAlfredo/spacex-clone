import { useState } from 'react';
import { MenuDropdown } from '../MenuDropdown/MenuDropdown';
import './MenuIcon.css';

export function IconMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="header__btn"
        aria-label="Menu"
        onClick={() => setIsOpen(true)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <MenuDropdown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}