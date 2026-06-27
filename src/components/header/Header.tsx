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
import { UpcomingLaunches } from "../upcoming-launches/UpcomingLaunches";

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
    return window.innerWidth < 1024;
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
                      <Link to="#">{item}</Link>
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
                  { label: "OVERVIEW", href: "#" },
                  { label: "SPACE STATION", href: "#" },
                  { label: "EARTH ORBIT", href: "#" },
                  { label: "THE MOON", href: "/moon" },
                  { label: "MARS & BEYOND", href: "#" },
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
              <Link to="#" className="header__link">
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
                    <Link to="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="header__item">
              <Link to="#" className="header__link">
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
                      <Link to="#">{item}</Link>
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
                  { label: "SPACEX", href: "#" },
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

function ArrowRightIcon() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
        fill="#F0F0FA"
        fillOpacity="0.8"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      width="9"
      height="13"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.875 10.0003H1L1 9.12527H1.875L1.875 10.0003ZM4.9375 10.0003H4.0625L4.0625 9.12527H4.9375L4.9375 10.0003ZM8 10.0003H7.125V9.12527H8V10.0003ZM1.875 6.93777H1L1 6.06277H1.875V6.93777ZM4.9375 6.93777H4.0625V6.06277H4.9375V6.93777ZM8 6.93777L7.125 6.93777V6.06277L8 6.06277V6.93777ZM1.875 3.87527H1L1 3.00027H1.875V3.87527ZM4.9375 3.87527H4.0625V3.00027H4.9375V3.87527ZM8 3.87527L7.125 3.87527V3.00027L8 3.00027V3.87527Z"
        fill="#F0F0FA"
      />
    </svg>
  );
}
