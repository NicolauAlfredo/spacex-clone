import type { CartItem as CartItemType } from "../../../models/Cart";
import { formatPrice } from "../../../utils/formatPrice";
import "./CartItem.css";

type CartItemProps = {
  item: CartItemType;
  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
};

function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}: CartItemProps) {
  return (
    <article className="cart__item">
      <div className="cart__item-main">
        <div className="cart__item-image-wrapper">
          <img src={item.image} alt={item.name} className="cart__item-image" />
        </div>

        <div className="cart__item-info">
          <h2 className="cart__item-title">{item.name}</h2>

          <p className="cart__item-price">{formatPrice(item.price)}</p>

          {item.color && (
            <p className="cart__item-variant">Color: {item.color}</p>
          )}

          {item.size && (
            <p className="cart__item-variant">
              Size: {item.size.toUpperCase()}
            </p>
          )}
        </div>
      </div>

      <div className="cart__item-actions">
        <div className="cart__quantity">
          <button
            className="cart__quantity-button"
            type="button"
            onClick={() => onDecreaseQuantity(item.id)}
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="cart__quantity-value">{item.quantity}</span>

          <button
            className="cart__quantity-button"
            type="button"
            onClick={() => onIncreaseQuantity(item.id)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          className="cart__remove-button"
          type="button"
          onClick={() => onRemoveItem(item.id)}
        >
          Remove
        </button>
      </div>

      <span className="cart__item-total">
        {formatPrice(item.price * item.quantity)}
      </span>
    </article>
  );
}

export default CartItem;
