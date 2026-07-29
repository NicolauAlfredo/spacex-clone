import { Link } from "react-router-dom";

import { formatPrice } from "../../../../../../../utils/formatPrice";
import type { Product } from "../../../../../../../models/Product";

type ShopProductCardInfoProps = {
  product: Product;
};

export function ShopProductCardInfo({ product }: ShopProductCardInfoProps) {
  return (
    <div className="products__card-info">
      <div className="products__card-content">
        <h3 className="products__product-title">
          <Link
            to={`/product/${product.id}`}
            className="products__product-link"
          >
            {product.name}
          </Link>
        </h3>

        <span className="products__price">{formatPrice(product.price)}</span>
      </div>
    </div>
  );
}
