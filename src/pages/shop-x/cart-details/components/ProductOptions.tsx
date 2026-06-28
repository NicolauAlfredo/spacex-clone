import type { Product } from "../../../../models/Product";
import {
  getDefaultColor,
  getDefaultSize,
} from "../../../../utils/productUtils";

type ProductOptionsProps = {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  onColorChange: (colorValue: string, imageIndex: number) => void;
  onSizeChange: (sizeValue: string) => void;
};

function ProductOptions({
  product,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: ProductOptionsProps) {
  const defaultColor = getDefaultColor(product);
  const selectedColorLabel =
    product.colors.find((color) => color.value === selectedColor)?.label ??
    defaultColor?.label;

  return (
    <>
      {product.colors.length > 0 && (
        <div className="product-detail__colors">
          <p className="product-detail__color-label">
            Color: <span>{selectedColorLabel}</span>
          </p>

          <div className="product-detail__color-options">
            {product.colors.map((color) => (
              <button
                key={color.value}
                className={`product-detail__color-button ${
                  color.value === selectedColor
                    ? "product-detail__color-button--active"
                    : ""
                }`}
                type="button"
                aria-label={color.label}
                title={color.label}
                style={{ backgroundColor: color.color }}
                disabled={!color.available}
                onClick={() =>
                  onColorChange(color.value, color.imageIndex ?? 0)
                }
              />
            ))}
          </div>
        </div>
      )}

      {product.sizes.length > 0 && (
        <div className="product-detail__sizes">
          <label className="product-detail__size-label" htmlFor="product-size">
            Size:
          </label>

          <select
            id="product-size"
            className="product-detail__size-select"
            name="size"
            value={selectedSize || getDefaultSize(product)}
            onChange={(event) => onSizeChange(event.target.value)}
          >
            {product.sizes.map((size) => (
              <option
                key={size.value}
                value={size.value}
                disabled={!size.available}
              >
                {size.label}
                {!size.available ? " - Sold out" : ""}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default ProductOptions;
