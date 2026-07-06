import { useEffect, useState } from 'react';
import { starlinkMenuLinks } from '../../../../../../content/starlinkMenu.content';
import './MenuIcon.css';

export function IconMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

      {isOpen && (
        <>
          <div className="menu-overlay" onClick={() => setIsOpen(false)} />
          <div className="menu-dropdown">
            <button
              className="menu-dropdown__close"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <div className="menu-dropdown__region">
              US
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C14.7614 21 17 16.9706 17 12C17 7.02944 14.7614 3 12 3M12 21C9.23858 21 7 16.9706 7 12C7 7.02944 9.23858 3 12 3M12 21V3M20.5 9.5H3.5M20.5 14.5H3.5"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>

            <nav className="menu-dropdown__nav">
              {starlinkMenuLinks.map((link) => (
                <a key={link.label} href={link.href} className="menu-dropdown__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}