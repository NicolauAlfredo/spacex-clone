import { Link } from "react-router-dom";
import type { Product } from "../../../../../../../models/Product";

type ShopProductCardImageProps = {
  product: Product;
};

export function ShopProductCardImage({ product }: ShopProductCardImageProps) {
  return (
    <Link to={`/product/${product.id}`} className="products__image-link">
      <img
        src={product.primaryImage}
        alt={product.alt}
        loading="lazy"
        decoding="async"
        className="products__image products__image--primary"
      />

      {product.secondaryImage && (
        <img
          src={product.secondaryImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="products__image products__image--secondary"
        />
      )}
    </Link>
  );
}
