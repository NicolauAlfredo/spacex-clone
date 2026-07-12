import { MinusButton } from "./components/MinusButton";
import { PlusButton } from "./components/PlusButton";
import "./QuantitySelector.css";

export type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantitySelector({
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
        <MinusButton />
      </button>

      <span className="product-detail__quantity-value">{quantity}</span>

      <button
        className="product-detail__quantity-button"
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        <PlusButton />
      </button>
    </div>
  );
}

export default QuantitySelector;
