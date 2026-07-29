import type { MouseEvent } from "react";
import { HeaderSubmenu } from "./HeaderSubmenu";
import type { DropdownKey, HeaderLinkItem } from "./HeaderNavItem";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";

type HeaderDropdownProps = {
  label: string;
  dropdownKey: DropdownKey;
  items: HeaderLinkItem[];
  isOpen: boolean;
  isMobile: boolean;
  submenuPaddingTop: string;
  onClick: (event: MouseEvent<HTMLButtonElement>, key: DropdownKey) => void;
  onMouseEnter: (event: MouseEvent<HTMLLIElement>, key: DropdownKey) => void;
  onMouseLeave: () => void;
};

export function HeaderDropdown(props: HeaderDropdownProps) {
  const submenuId = `header-submenu-${props.dropdownKey}`;

  return (
    <li
      className={`header__item header__item--dropdown ${props.isOpen ? "is-open" : ""}`}
      onMouseEnter={(event) => props.onMouseEnter(event, props.dropdownKey)}
      onMouseLeave={props.onMouseLeave}
    >
      <button
        className="header__link"
        aria-expanded={props.isOpen}
        aria-controls={submenuId}
        onClick={(event) => props.onClick(event, props.dropdownKey)}
      >
        {props.label}
        <span className="header__arrow"><ChevronDownIcon /></span>
      </button>
      <HeaderSubmenu
        id={submenuId}
        items={props.items}
        isOpen={props.isOpen}
        isMobile={props.isMobile}
        paddingTop={props.submenuPaddingTop}
      />
    </li>
  );
}
