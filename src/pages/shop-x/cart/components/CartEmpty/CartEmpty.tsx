import { Link } from "react-router-dom";
import "./CartEmpty.css";

function CartEmpty() {
  return (
    <div className="cart__empty">
      <p className="cart__empty-message">Your cart is empty</p>

      <Link to="/shop-x" className="cart__continue-link">
        Continue shopping
      </Link>
    </div>
  );
}

export default CartEmpty;
