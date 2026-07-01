import { StarlinkLogo } from "./components/Logo/StarlinkLogo";
import { StarlinkHamburgerMenu } from "./components/StarlinkHamburgerMenu";
import "./StarlinkHeader.css";

export function StarlinkHeader() {
  return (
    <div>
      <StarlinkLogo />
      <StarlinkHamburgerMenu />
      <h1>Header - Felice</h1>
    </div>
  );
}
