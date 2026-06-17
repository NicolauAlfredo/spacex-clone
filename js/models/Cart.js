// Cart model
// Responsibility: manage cart state using localStorage.

const CART_STORAGE_KEY = "shopXCart";

export function Cart() {
    this.items = loadCart();
}

/**
 * Load cart items from localStorage.
 *
 * @returns {Array}
 */
function loadCart() {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) return [];

    try {
        return JSON.parse(storedCart);
    } catch {
        return [];
    }
}

/**
 * Save cart items to localStorage.
 *
 * @param {Array} items
 */
function saveCart(items) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

/**
 * Add a product to the cart.
 *
 * If the same product with the same size and color already exists,
 * only increase the quantity.
 *
 * @param {Object} cartItem
 */
Cart.prototype.addItem = function (cartItem) {
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

    saveCart(this.items);
};

/**
 * Increase product quantity.
 *
 * @param {string} itemId
 */
Cart.prototype.increaseQuantity = function (itemId) {
    const item = this.items.find((item) => item.id === itemId);

    if (!item) return;

    item.quantity += 1;

    saveCart(this.items);
};

/**
 * Decrease product quantity.
 *
 * If quantity reaches 1, it stays at 1.
 *
 * @param {string} itemId
 */
Cart.prototype.decreaseQuantity = function (itemId) {
    const item = this.items.find((item) => item.id === itemId);

    if (!item || item.quantity === 1) return;

    item.quantity -= 1;

    saveCart(this.items);
};

/**
 * Remove product from cart.
 *
 * @param {string} itemId
 */
Cart.prototype.removeItem = function (itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);

    saveCart(this.items);
};

/**
 * Clear all cart items.
 */
Cart.prototype.clearCart = function () {
    this.items = [];

    saveCart(this.items);
};

/**
 * Get cart total price.
 *
 * @returns {number}
 */
Cart.prototype.getTotal = function () {
    return this.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};

/**
 * Get total cart items quantity.
 *
 * @returns {number}
 */
Cart.prototype.getTotalQuantity = function () {
    return this.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
};