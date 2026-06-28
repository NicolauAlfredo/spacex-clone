import { useState } from "react";
import { Cart } from "../../models/Cart";
import type { CartItem as CartItemType } from "../../models/Cart";
import CartEmpty from "./components/CartEmpty";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CartTableHeader from "./components/CartTableHeader";
import { ShopHeader } from "../shop-x/shop/components/ShopHeader/ShopHeader";
import { ShopFooter } from "../shop-x/shop/components/ShopFooter/ShopFooter";
import "./CartPage.css";

function CartPage() {
  const [cart] = useState(() => new Cart());
  const [items, setItems] = useState<CartItemType[]>(cart.items);

  function refreshCart() {
    setItems([...cart.items]);
  }

  function handleIncreaseQuantity(itemId: string) {
    cart.increaseQuantity(itemId);
    refreshCart();
  }

  function handleDecreaseQuantity(itemId: string) {
    cart.decreaseQuantity(itemId);
    refreshCart();
  }

  function handleRemoveItem(itemId: string) {
    cart.removeItem(itemId);
    refreshCart();
  }

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
                      onIncreaseQuantity={handleIncreaseQuantity}
                      onDecreaseQuantity={handleDecreaseQuantity}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))}
                </div>

                <CartSummary total={cart.getTotal()} />
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
