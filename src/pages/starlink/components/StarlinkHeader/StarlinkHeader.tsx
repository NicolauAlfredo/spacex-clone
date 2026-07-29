import { HeaderToggle } from "./components/StarlinkHeaderToggle/StarlinkToggleHeader";
import { StarlinkLogo } from "../StarlinkLogo/StarlinkLogo";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { IconMenu } from "./components/StarlinkMenu/MenuIcon";
import { StarlinkCallMenu } from "./components/StarlinkCallMenu/StarlinkCallMenu";

import "./StarlinkHeader.css";

export const StarlinkHeader = () => {
  return (
    <header className="starlink-header">
      <div className="starlink-header__container">
        <StarlinkLogo />
        <NavLinks />

        <HeaderToggle />
        <StarlinkCallMenu />
        <IconMenu />
      </div>
    </header>
  );
};
