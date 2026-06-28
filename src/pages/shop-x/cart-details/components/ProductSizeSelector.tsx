import { useState } from "react";
import type { ProductSize } from "../../../../models/Product";
import "./ProductSizeSelector.css";
import { useEffect } from "react";

type ProductSizeSelectorProps = {
  sizes: ProductSize[];
  selectedSize: string;
  onSizeChange: (sizeValue: string) => void;
};

function ProductSizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: ProductSizeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const selectedSizeLabel =
    sizes.find((size) => size.value === selectedSize)?.label ?? sizes[0]?.label;

  function openSelector() {
    setIsRendered(true);

    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }

  function closeSelector() {
    setIsOpen(false);

    setTimeout(() => {
      setIsRendered(false);
    }, 260);
  }

  function handleSelectSize(sizeValue: string) {
    onSizeChange(sizeValue);
    closeSelector();
  }

  return (
    <div className="product-size-selector">
      <button
        className="product-size-selector__button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={openSelector}
      >
        <span>{selectedSizeLabel}</span>
        <span aria-hidden="true">⌃</span>
      </button>

      {isRendered && (
        <div
          className={`product-size-selector__overlay ${
            isOpen ? "product-size-selector__overlay--open" : ""
          }`}
        >
          <div className="product-size-selector__sheet">
            <div className="product-size-selector__header">
              <h3>Size</h3>

              <button
                className="product-size-selector__close"
                type="button"
                aria-label="Close size selector"
                onClick={closeSelector}
              >
                ×
              </button>
            </div>

            <div className="product-size-selector__options" role="listbox">
              {sizes.map((size) => (
                <button
                  key={size.value}
                  className="product-size-selector__option"
                  type="button"
                  role="option"
                  aria-selected={size.value === selectedSize}
                  disabled={!size.available}
                  onClick={() => handleSelectSize(size.value)}
                >
                  {size.label}
                  {!size.available ? " - Sold out" : ""}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSizeSelector;
