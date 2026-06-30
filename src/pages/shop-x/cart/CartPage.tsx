import CartEmpty from "./components/cartEmpty/CartEmpty";
import CartItem from "./components/cartItem/CartItem";
import CartSummary from "./components/cartSummary/CartSummary";
import CartTableHeader from "./components/cartTableHeader/CartTableHeader";
import { ShopHeader } from "../shop/components/shopHeader/ShopHeader";
import { ShopFooter } from "../shop/components/shopFooter/ShopFooter";
import "./CartPage.css";
import { useCart } from "../../../hooks/useCart";

function CartPage() {
  const { items, total, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();

  return (
    <>
      <ShopHeader />

      <main className="cart-page">
        <section className="cart" aria-labelledby="cart-title">
          <div className="cart__container">
            <h1 id="cart-title" className="cart__title">
              Cart
            </h1>

            {items.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
                <CartTableHeader />

                <div className="cart__items">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncreaseQuantity={increaseQuantity}
                      onDecreaseQuantity={decreaseQuantity}
                      onRemoveItem={removeItem}
                    />
                  ))}
                </div>

                <CartSummary total={total} />
              </>
            )}
          </div>
        </section>
      </main>

      <ShopFooter />
    </>
  );
}

export default CartPage;
