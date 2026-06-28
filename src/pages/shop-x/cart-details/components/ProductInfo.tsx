import type { Product } from "../../../../models/Product";
import { formatPrice } from "../../../../utils/formatPrice";

type ProductInfoProps = {
  product: Product;
};

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="product-detail__info">
      <h1 id="product-title" className="product-detail__title">
        {product.name}
      </h1>

      <p className="product-detail__price">{formatPrice(product.price)}</p>

      <div className="product-detail__divider" />

      <p className="product-detail__description">{product.description}</p>

      {/* Product colors */}

      {/* Product sizes */}

      {/* Quantity selector */}

      {/* Add to cart */}
    </div>
  );
}

export default ProductInfo;
