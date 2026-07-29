import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { UpcomingLaunches } from "../../../pages/home/components/UpcomingLaunches/UpcomingLaunches";
import { HeaderDropdown } from "./HeaderDropdown";
import { headerNavItems, type DropdownKey } from "./HeaderNavItem";

type HeaderNavProps = {
  openDropdown: DropdownKey | null;
  isMobile: boolean;
  submenuPaddingTop: string;
  onDropdownClick: (event: MouseEvent<HTMLButtonElement>, key: DropdownKey) => void;
  onDropdownMouseEnter: (event: MouseEvent<HTMLLIElement>, key: DropdownKey) => void;
  onDropdownMouseLeave: () => void;
};

export function HeaderNav(props: HeaderNavProps) {
  return (
    <nav id="header-navigation" className="header__nav" aria-label="Primary navigation">
      <ul className="header__list">
        {headerNavItems.map((item) => {
          if (item.dropdownKey && item.submenuItems) {
            return (
              <HeaderDropdown
                key={item.dropdownKey}
                label={item.label}
                dropdownKey={item.dropdownKey}
                items={item.submenuItems}
                isOpen={props.openDropdown === item.dropdownKey}
                isMobile={props.isMobile}
                submenuPaddingTop={props.submenuPaddingTop}
                onClick={props.onDropdownClick}
                onMouseEnter={props.onDropdownMouseEnter}
                onMouseLeave={props.onDropdownMouseLeave}
              />
            );
          }

          const external = /^https?:\/\//.test(item.href);
          return (
            <li className="header__item" key={item.label}>
              {external ? (
                <a
                  href={item.href}
                  className="header__link"
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="header__link"
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <UpcomingLaunches variant="header" />
    </nav>
  );
}
