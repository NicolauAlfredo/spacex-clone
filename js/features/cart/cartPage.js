// Import Cart model
import { Cart } from "../../models/Cart.js";

// Import price formatter utility
import { formatPrice } from "../../utils/formatPrice.js";

// Select cart content container
const cartContent = document.querySelector("[data-cart-content]");

// Create cart instance
const cart = new Cart();

/**
 * Render empty cart state.
 */
function renderEmptyCart() {
  cartContent.innerHTML = `
    <div class="cart__empty">
      <p class="cart__empty-message">Your cart is empty</p>

      <a href="./shop-x.html" class="cart__continue-link">
        Continue shopping
      </a>
    </div>
  `;
}

/**
 * Initialize cart page.
 */
function init() {
  renderCart();
}

// Start application
init();