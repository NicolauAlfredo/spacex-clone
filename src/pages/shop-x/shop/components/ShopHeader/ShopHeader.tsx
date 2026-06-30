import { ShopLogo } from "./ShopLogo";
import { ShopNav } from "./shopNav/ShopNav";
import "./ShopHeader.css";

export function ShopHeader() {
  return (
    <header className="shop-header">
      <div className="shop-header__container">
        <ShopLogo />
        <ShopNav />
      </div>
    </header>
  );
}
