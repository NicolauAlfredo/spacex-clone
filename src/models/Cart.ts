const CART_STORAGE_KEY = "shopXCart";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

export class Cart {
  items: CartItem[];

  constructor() {
    this.items = this.loadCart();
  }

  /**
   * Load cart items from localStorage.
   */
  private loadCart(): CartItem[] {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) return [];

    try {
      return JSON.parse(storedCart) as CartItem[];
    } catch {
      return [];
    }
  }

  /**
   * Save cart items to localStorage.
   */
  private saveCart(): void {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
  }

  /**
   * Add product to cart.
   */
  addItem(cartItem: CartItem): void {
    const existingItem = this.items.find(
      (item) =>
        item.productId === cartItem.productId &&
        item.size === cartItem.size &&
        item.color === cartItem.color,
    );

    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
    } else {
      this.items.push(cartItem);
    }

    this.saveCart();
  }

  /**
   * Increase quantity.
   */
  increaseQuantity(itemId: string): void {
    const item = this.items.find((item) => item.id === itemId);

    if (!item) return;

    item.quantity += 1;

    this.saveCart();
  }

  /**
   * Decrease quantity.
   */
  decreaseQuantity(itemId: string): void {
    const item = this.items.find((item) => item.id === itemId);

    if (!item || item.quantity === 1) return;

    item.quantity -= 1;

    this.saveCart();
  }

  /**
   * Remove item.
   */
  removeItem(itemId: string): void {
    this.items = this.items.filter((item) => item.id !== itemId);

    this.saveCart();
  }

  /**
   * Clear cart.
   */
  clearCart(): void {
    this.items = [];

    this.saveCart();
  }

  /**
   * Get total value.
   */
  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  /**
   * Get total quantity.
   */
  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}
