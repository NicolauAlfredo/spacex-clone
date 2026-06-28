export type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="product-detail__quantity">
      <button
        className="product-detail__quantity-button"
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        -
      </button>

      <span className="product-detail__quantity-value">{quantity}</span>

      <button
        className="product-detail__quantity-button"
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
