import { Link } from "react-router-dom";
import type { HeaderLinkItem } from "./HeaderNavItem";

type HeaderSubmenuProps = {
  id: string;
  items: HeaderLinkItem[];
  isOpen: boolean;
  isMobile: boolean;
  paddingTop: string;
};

function isExternalLink(href: string) {
  return /^https?:\/\//.test(href);
}

export function HeaderSubmenu({ id, items, isOpen, isMobile, paddingTop }: HeaderSubmenuProps) {
  return (
    <ul
      id={id}
      className="header__submenu"
      style={{
        paddingTop: isOpen && !isMobile ? paddingTop : undefined,
        display: isOpen && isMobile ? "block" : undefined,
      }}
    >
      {items.map((item, index) => (
        <li key={item.label} style={{ transitionDelay: isOpen ? `${index * 0.05}s` : "0s" }}>
          {isExternalLink(item.href) ? (
            <a
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
