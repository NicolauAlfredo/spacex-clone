import { LanguageSelector } from "../ShopHeader/ShopNav/LanguageSelector/LanguageSelector";
import "./ShopFooter.css";

export function ShopFooter() {
  return (
    <footer className="shop-footer">
      <div className="shop-footer__container">
        <nav className="shop-footer__menu" aria-label="Shop footer navigation">
          <ul className="shop-footer__menu-list">
            <li className="shop-footer__menu-item">
              <span>FAQs</span>
            </li>
            <li className="shop-footer__menu-item">
              <span>Search</span>
            </li>
            <li className="shop-footer__menu-item">
              <span>Accessibility Statement</span>
            </li>
            <li className="shop-footer__menu-item">
              <span>Privacy Policy</span>
            </li>
            <li className="shop-footer__menu-item">
              <span>Terms and Conditions</span>
            </li>
            <li className="shop-footer__menu-item">
              <span>Cookie Consent</span>
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
