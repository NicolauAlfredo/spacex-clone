import { LanguageSelector } from "../shopHeader/shopNav/languageSelector/LanguageSelector";
import "./ShopFooter.css";

export function ShopFooter() {
  return (
    <footer className="shop-footer">
      <div className="shop-footer__container">
        <nav className="shop-footer__menu" aria-label="Shop footer navigation">
          <ul className="shop-footer__menu-list">
            <li className="shop-footer__menu-item">
              <a href="#">FAQs</a>
            </li>
            <li className="shop-footer__menu-item">
              <a href="#">Search</a>
            </li>
            <li className="shop-footer__menu-item">
              <a href="#">Accessibility Statement</a>
            </li>
            <li className="shop-footer__menu-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="shop-footer__menu-item">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="shop-footer__menu-item">
              <a href="#">Cookie Consent</a>
            </li>
          </ul>
        </nav>

        <div className="shop-footer__info">
          <LanguageSelector showFullLabel />

          <p className="shop-footer__copyright">X Corp © 2024</p>
        </div>
      </div>
    </footer>
  );
}
