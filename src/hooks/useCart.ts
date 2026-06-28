import { useState } from "react";
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

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  function addItem(cartItem: CartItem) {
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

      saveCart(updatedItems);
      return updatedItems;
    });
  }

  return { items, addItem };
}
