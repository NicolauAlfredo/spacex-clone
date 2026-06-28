import { Link } from "react-router-dom";
import { getPublicAssetPath } from "../../../../../utils/getPublicAssetPath";

export function ShopLogo() {
  return (
    <Link to="/shop" className="shop-logo" aria-label="Go to Shop homepage">
      <img
        src={getPublicAssetPath("assets/pages/shopx/logo/xai-header-logo.webp")}
        alt="Shop xAI"
        className="shop-logo__image"
      />
    </Link>
  );
}
