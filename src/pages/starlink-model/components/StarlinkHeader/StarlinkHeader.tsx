



import { HeaderToggle } from "../StarlinkLink/StarlinkHeaderToggle/StarlinkToggleHeader";
import { StarlinkLogo } from "../StarlinkLogo/StarlinkLogo";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { IconMenu } from "../StarlinkLink/StarlinkMenu/MenuIcon";


import "./StarlinkHeader.css";


export const StarlinkHeader = () => {
  
     
  return (
   <header className="header">
      <div className="header__container">
     <StarlinkLogo />
     <NavLinks />
     <HeaderToggle />
     <IconMenu />
      </div>
    </header>
  );
};
