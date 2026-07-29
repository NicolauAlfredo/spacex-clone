/**
 * Main Header component.
 *
 * Responsibilities:
 * - Manage header state.
 * - Control mobile menu.
 * - Control opened dropdown.
 * - Render the overall header structure.
 *
 * This component should NOT contain:
 * - Navigation data.
 * - Dropdown markup.
 * - SVG icons.
 * - Upcoming Launches implementation.
 *
 * Keep this component as clean as possible.
 */

import { useEffect, useState } from "react";
import { SpaceXLogo } from "./components/SpaceXLogo";

import "./Header.css";
import { Link } from "react-router-dom";
import { UpcomingLaunches } from "../../pages/home/components/UpcomingLaunches/UpcomingLaunches";

type DropdownKey =
  | "vehicles"
  | "human-spaceflight"
  | "xai"
  | "company"
  | "shop";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [submenuPaddingTop, setSubmenuPaddingTop] = useState("0px");

  function isMobile() {
    return window.innerWidth < 1180;
  }

  function closeAll() {
    setOpenDropdown(null);
  }

  function handleMenuToggle() {
    setIsMenuOpen((currentValue) => {
      const nextValue = !currentValue;

      if (!nextValue) {
        closeAll();
      }

      return nextValue;
    });
  }

  function handleDropdownClick(
    event: React.MouseEvent<HTMLButtonElement>,
    dropdownKey: DropdownKey,
  ) {
    event.preventDefault();

    if (isMobile()) {
      setOpenDropdown((currentValue) =>
        currentValue === dropdownKey ? null : dropdownKey,
      );

      return;
    }

    setOpenDropdown((currentValue) =>
      currentValue === dropdownKey ? null : dropdownKey,
    );
  }

  function handleDropdownMouseEnter(
    event: React.MouseEvent<HTMLLIElement>,
    dropdownKey: DropdownKey,
  ) {
    if (isMobile()) return;

    const itemRect = event.currentTarget.getBoundingClientRect();
    setSubmenuPaddingTop(`${itemRect.bottom + 4}px`);
    setOpenDropdown(dropdownKey);
  }

  function handleDropdownMouseLeave() {
    if (isMobile()) return;

    closeAll();
  }

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (!isMobile() && !target.closest(".header__item--dropdown")) {
        closeAll();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAll();
        setIsMenuOpen(false);
      }
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
    if (!isMenuOpen || !isMobile()) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={[
        "header",
        isMenuOpen ? "menu-open" : "",
        isHeaderHidden ? "header--hidden" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="header__container">
        <Link to="/" className="header__logo">
          <SpaceXLogo />
        </Link>

        <button
          className="header__toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <nav className="header__nav">
          <ul className="header__list">
            <li
              className={`header__item header__item--dropdown ${
                openDropdown === "vehicles" ? "is-open" : ""
              }`}
              onMouseEnter={(event) =>
                handleDropdownMouseEnter(event, "vehicles")
              }
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="header__link"
                aria-expanded={openDropdown === "vehicles"}
                onClick={(event) => handleDropdownClick(event, "vehicles")}
              >
                VEHICLES
                <span className="header__arrow">
                  <ChevronDownIcon />
                </span>
              </button>

              <ul
                className="header__submenu"
                style={{
                  paddingTop:
                    openDropdown === "vehicles" && !isMobile()
                      ? submenuPaddingTop
                      : undefined,
                  display:
                    openDropdown === "vehicles" && isMobile()
                      ? "block"
                      : undefined,
                }}
              >
                {["STARSHIP", "DRAGON", "FALCON 9", "FALCON HEAVY"].map(
                  (item, index) => (
                    <li
                      key={item}
                      style={{
                        transitionDelay:
                          openDropdown === "vehicles"
                            ? `${index * 0.05}s`
                            : "0s",
                      }}
                    >
                      <a href={`https://www.spacex.com/vehicles/${["starship", "dragon", "falcon-9", "falcon-heavy"][index]}`}>{item}</a>
                    </li>
                  ),
                )}
              </ul>
            </li>

            <li
              className={`header__item header__item--dropdown ${
                openDropdown === "human-spaceflight" ? "is-open" : ""
              }`}
              onMouseEnter={(event) =>
                handleDropdownMouseEnter(event, "human-spaceflight")
              }
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="header__link"
                aria-expanded={openDropdown === "human-spaceflight"}
                onClick={(event) =>
                  handleDropdownClick(event, "human-spaceflight")
                }
              >
                HUMAN SPACEFLIGHT
                <span className="header__arrow">
                  <ChevronDownIcon />
                </span>
              </button>

              <ul
                className="header__submenu"
                style={{
                  paddingTop:
                    openDropdown === "human-spaceflight" && !isMobile()
                      ? submenuPaddingTop
                      : undefined,
                  display:
                    openDropdown === "human-spaceflight" && isMobile()
                      ? "block"
                      : undefined,
                }}
              >
                {[
                  { label: "OVERVIEW", href: "https://www.spacex.com/humanspaceflight/overview" },
                  { label: "SPACE STATION", href: "https://www.spacex.com/humanspaceflight/iss" },
                  { label: "EARTH ORBIT", href: "https://www.spacex.com/humanspaceflight/earth" },
                  { label: "THE MOON", href: "/moon" },
                  { label: "MARS & BEYOND", href: "https://www.spacex.com/humanspaceflight/mars" },
                ].map((item, index) => (
                  <li
                    key={item.label}
                    style={{
                      transitionDelay:
                        openDropdown === "human-spaceflight"
                          ? `${index * 0.05}s`
                          : "0s",
                    }}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="header__item">
              <Link to="/starlink" className="header__link">
                STARLINK
              </Link>
            </li>

            <li className="header__item">
              <Link to="https://www.spacex.com/starshield" className="header__link">
                STARSHIELD
              </Link>
            </li>

            <li
              className={`header__item header__item--dropdown ${
                openDropdown === "xai" ? "is-open" : ""
              }`}
              onMouseEnter={(event) => handleDropdownMouseEnter(event, "xai")}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="header__link"
                aria-expanded={openDropdown === "xai"}
                onClick={(event) => handleDropdownClick(event, "xai")}
              >
                xAI
                <span className="header__arrow">
                  <ChevronDownIcon />
                </span>
              </button>

              <ul
                className="header__submenu"
                style={{
                  paddingTop:
                    openDropdown === "xai" && !isMobile()
                      ? submenuPaddingTop
                      : undefined,
                  display:
                    openDropdown === "xai" && isMobile() ? "block" : undefined,
                }}
              >
                {["GROK", "GROKIPEDIA", "X"].map((item, index) => (
                  <li
                    key={item}
                    style={{
                      transitionDelay:
                        openDropdown === "xai" ? `${index * 0.05}s` : "0s",
                    }}
                  >
                    <Link to={["https://x.ai", "https://grokipedia.com", "https://x.com"][index]}>{item}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="header__item">
              <Link to="https://terafab.ai" className="header__link">
                TERAFAB
              </Link>
            </li>

            <li
              className={`header__item header__item--dropdown ${
                openDropdown === "company" ? "is-open" : ""
              }`}
              onMouseEnter={(event) =>
                handleDropdownMouseEnter(event, "company")
              }
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="header__link"
                aria-expanded={openDropdown === "company"}
                onClick={(event) => handleDropdownClick(event, "company")}
              >
                COMPANY
                <span className="header__arrow">
                  <ChevronDownIcon />
                </span>
              </button>

              <ul
                className="header__submenu"
                style={{
                  paddingTop:
                    openDropdown === "company" && !isMobile()
                      ? submenuPaddingTop
                      : undefined,
                  display:
                    openDropdown === "company" && isMobile()
                      ? "block"
                      : undefined,
                }}
              >
                {["MISSION", "CAREERS", "UPDATES", "CONTENT"].map(
                  (item, index) => (
                    <li
                      key={item}
                      style={{
                        transitionDelay:
                          openDropdown === "company"
                            ? `${index * 0.05}s`
                            : "0s",
                      }}
                    >
                      <Link to={`https://www.spacex.com/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                  ),
                )}
              </ul>
            </li>

            <li
              className={`header__item header__item--dropdown ${
                openDropdown === "shop" ? "is-open" : ""
              }`}
              onMouseEnter={(event) => handleDropdownMouseEnter(event, "shop")}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="header__link"
                aria-expanded={openDropdown === "shop"}
                onClick={(event) => handleDropdownClick(event, "shop")}
              >
                SHOP
                <span className="header__arrow">
                  <ChevronDownIcon />
                </span>
              </button>

              <ul
                className="header__submenu"
                style={{
                  paddingTop:
                    openDropdown === "shop" && !isMobile()
                      ? submenuPaddingTop
                      : undefined,
                  display:
                    openDropdown === "shop" && isMobile() ? "block" : undefined,
                }}
              >
                {[
                  { label: "SPACEX", href: "https://shop.spacex.com" },
                  { label: "xAI", href: "/shop-x" },
                ].map((item, index) => (
                  <li
                    key={item.label}
                    style={{
                      transitionDelay:
                        openDropdown === "shop" ? `${index * 0.05}s` : "0s",
                    }}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <UpcomingLaunches variant="header" />
        </nav>
      </div>
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M24 19L0 19L1.74849e-07 18L24 18V19Z" fill="#D9D9D9" />
      <path d="M24 12L0 12L1.74849e-07 11L24 11V12Z" fill="#D9D9D9" />
      <path d="M24 5L0 5L1.74849e-07 4L24 4V5Z" fill="#D9D9D9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
