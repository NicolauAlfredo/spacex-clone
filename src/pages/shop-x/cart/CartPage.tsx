import { useCart } from "../../../hooks/useCart";
import { ShopFooter } from "../shop/components/ShopFooter/ShopFooter";
import { ShopHeader } from "../shop/components/ShopHeader/ShopHeader";
import "./CartPage.css";
import CartEmpty from "./components/CartEmpty/CartEmpty";
import CartItem from "./components/CartItem/CartItem";
import CartSummary from "./components/CartSummary/CartSummary";
import CartTableHeader from "./components/CartTableHeader/CartTableHeader";

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
