


import { StarlinkLogo } from "../StarlinkLogo/StarlinkLogo";
import { NavLinks } from "./components/NavLinks/NavLinks";

import "./StarlinkHeader.css";


export const StarlinkHeader = () => {
  
     
  return (
   <header className="header">
      <div className="header__container">
     <StarlinkLogo />
     <NavLinks />


      </div>
    </header>
  );
};
