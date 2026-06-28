import type { Product } from "../../../../models/Product";
import { formatPrice } from "../../../../utils/formatPrice";
import ProductOptions from "./ProductOptions";

type ProductInfoProps = {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  onColorChange: (colorValue: string, imageIndex: number) => void;
  onSizeChange: (sizeValue: string) => void;
};

function ProductInfo({
  product,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: ProductInfoProps) {
  return (
    <div className="product-detail__info">
      <h1 id="product-title" className="product-detail__title">
        {product.name}
      </h1>

      <p className="product-detail__price">{formatPrice(product.price)}</p>

      <div className="product-detail__divider" />

      <p className="product-detail__description">{product.description}</p>

      <ProductOptions
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        onColorChange={onColorChange}
        onSizeChange={onSizeChange}
      />

      {/* Quantity selector */}

      {/* Add to cart */}
    </div>
  );
}

export default ProductInfo;
