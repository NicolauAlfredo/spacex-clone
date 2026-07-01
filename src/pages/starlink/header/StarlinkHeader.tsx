import { Buttons } from "../../../components/Buttons/Buttons";
import { IconPhone } from "./components/icons/iconPhone";
import { IconMenu } from "./components/icons/iconMenu";
import "./StarlinkHeader.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#">
          STARLINK
        </a>

        <nav className="header__nav">
          <a className="header__nav-link" href="#">
            Residential
          </a>
          <a className="header__nav-link" href="#">
            Roam
          </a>
        </nav>

        <div className="header__actions">
          <a className="header__call" href="tel:8884678275">
            Call <span>(888) GO-STARLINK</span>
          </a>
          <Buttons />
          <button className="header__btn" aria-label="Call">
            <IconPhone />
          </button>
          <button className="header__btn" aria-label="Menu">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
