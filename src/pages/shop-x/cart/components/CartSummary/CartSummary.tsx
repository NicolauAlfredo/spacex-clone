import { formatPrice } from "../../../../../utils/formatPrice";
import "./CartSummary.css";

type CartSummaryProps = {
  total: number;
};

function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="cart__summary">
      <p className="cart__summary-total">Total: {formatPrice(total)}</p>

      <p className="cart__summary-note">
        Taxes and shipping calculated at checkout
      </p>

      <button className="cart__checkout-button" type="button">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
