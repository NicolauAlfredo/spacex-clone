import type { CartItem as CartItemType } from "../../../../../models/Cart";
import { formatPrice } from "../../../../../utils/formatPrice";
import QuantitySelector from "../../../cart-details/components/QuantitySelector/QuantitySelector";
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
      <div className="cart__item-container">
        <div className="cart__item-image-wrapper">
          <img src={item.image} alt={item.name} className="cart__item-image" />
        </div>

        <div className="cart__item-content">
          <div className="cart__item-info">
            <h2 className="cart__item-title">{item.name}</h2>

            <p className="cart__item-price">{formatPrice(item.price)}</p>

            {item.color && <p className="cart__item-variant">{item.color}</p>}

            {item.size && (
              <p className="cart__item-variant">
                Size: {item.size.toUpperCase()}
              </p>
            )}
          </div>

          <div className="cart__item-actions">
            <QuantitySelector
              quantity={item.quantity}
              onDecrease={() => onDecreaseQuantity(item.id)}
              onIncrease={() => onIncreaseQuantity(item.id)}
            />

            <button
              className="cart__remove-button"
              type="button"
              onClick={() => onRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
