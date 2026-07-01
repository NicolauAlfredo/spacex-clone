import { createContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../models/Cart";

const CART_STORAGE_KEY = "shopXCart";

type CartContextValue = {
  items: CartItem[];
  total: number;
  totalQuantity: number;
  addItem: (cartItem: CartItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

function loadCart(): CartItem[] {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) return [];

  try {
    return JSON.parse(storedCart) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  function updateCart(updatedItems: CartItem[]): CartItem[] {
    saveCart(updatedItems);
    return updatedItems;
  }

  function addItem(cartItem: CartItem): void {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.productId === cartItem.productId &&
          item.size === cartItem.size &&
          item.color === cartItem.color,
      );

      const updatedItems = existingItem
        ? currentItems.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + cartItem.quantity }
              : item,
          )
        : [...currentItems, cartItem];

      return updateCart(updatedItems);
    });
  }

  function increaseQuantity(itemId: string): void {
    setItems((currentItems) =>
      updateCart(
        currentItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      ),
    );
  }

  function decreaseQuantity(itemId: string): void {
    setItems((currentItems) =>
      updateCart(
        currentItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        ),
      ),
    );
  }

  function removeItem(itemId: string): void {
    setItems((currentItems) =>
      updateCart(currentItems.filter((item) => item.id !== itemId)),
    );
  }

  function clearCart(): void {
    setItems(updateCart([]));
  }

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const totalQuantity = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        totalQuantity,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
