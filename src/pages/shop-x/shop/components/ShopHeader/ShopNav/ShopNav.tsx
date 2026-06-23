import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { UserIcon } from "./ShopIcons/UserIcon";
import { SearchIcon } from "./ShopIcons/SearchIcon";
import { CartIcon } from "./ShopIcons/CartIcon";

export function ShopNav() {
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
          <Link to="/cart">
            <span className="menu__item-cart">Cart (0)</span>
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
