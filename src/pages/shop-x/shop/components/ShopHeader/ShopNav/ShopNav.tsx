import { Link } from "react-router-dom";
import { LanguageSelector } from "./languageSelector/LanguageSelector";
import { UserIcon } from "./shopIcons/UserIcon";
import { SearchIcon } from "./shopIcons/SearchIcon";
import { CartIcon } from "./shopIcons/CartIcon";
import { useCart } from "../../../../../../hooks/useCart";

export function ShopNav() {
  const { totalQuantity } = useCart();

  return (
    <nav className="shop-header__menu" aria-label="Shop navigation">
      <ul className="menu__items">
        <li className="menu__item hidden">
          <LanguageSelector />
        </li>

        <li className="menu__item hidden account">
          <Link to="#">
            <span className="menu__item-login">login</span>
            <UserIcon />
          </Link>
        </li>

        <li className="menu__item">
          <Link to="#">
            <span className="menu__item-search">Search</span>

            <span>
              <SearchIcon />
            </span>
          </Link>
        </li>

        <li className="menu__item">
          <Link to="/cart" className="menu__item-cart-link">
            <span className="menu__item-cart">
              Cart{totalQuantity > 0 ? ` (${totalQuantity})` : "(0)"}
            </span>

            <span className="menu__item-cart-icon">
              <CartIcon />

              <span
                className={`header__cart-dot ${
                  totalQuantity > 0 ? "header__cart-dot--visible" : ""
                }`}
              />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
