import { useMemo, useState } from "react";
import type { CartItem } from "../types/cart.type";

const CART_STORAGE_KEY = "shopXCart";

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

export function useCart() {
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
    setItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      );

      return updateCart(updatedItems);
    });
  }

  function decreaseQuantity(itemId: string): void {
    setItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      );

      return updateCart(updatedItems);
    });
  }

  function removeItem(itemId: string): void {
    setItems((currentItems) => {
      const updatedItems = currentItems.filter((item) => item.id !== itemId);

      return updateCart(updatedItems);
    });
  }

  function clearCart(): void {
    setItems(() => updateCart([]));
  }

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const totalQuantity = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return {
    items,
    total,
    totalQuantity,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  };
}
