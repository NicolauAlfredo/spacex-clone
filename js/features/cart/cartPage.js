// Import Cart model
import { Cart } from "../../models/Cart.js";

// Import price formatter utility
import { formatPrice } from "../../utils/formatPrice.js";

// Select cart content container
const cartContent = document.querySelector("[data-cart-content]");

// Create cart instance
const cart = new Cart();

/**
 * Initialize cart page.
 */
function init() {
  renderCart();
}

// Start application
init();