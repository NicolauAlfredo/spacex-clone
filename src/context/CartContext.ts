import { createContext } from "react";
import type { CartItem } from "../models/Cart";

export type CartContextValue = {
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
