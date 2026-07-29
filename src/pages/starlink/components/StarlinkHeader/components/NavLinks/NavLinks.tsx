import { starlinkNavLinks } from "../../../../../../content/starlink/starlinknavlinks.content";
import { starlinkCallNumber } from "../../../../../../content/starlink/starlinkcallnumber.content";

import "./NavLinks.css";

export const NavLinks = () => {
  return (
    <>
      <nav className="starlink-header__nav">
        {starlinkNavLinks.map((link) => (
          <a key={link.label} className="starlink-header__nav-link" href={link.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="header__call"
        href={`tel:${starlinkCallNumber.phoneNumber}`}
      >
        Call <span>{starlinkCallNumber.label}</span>
      </a>
    </>
  );
};
