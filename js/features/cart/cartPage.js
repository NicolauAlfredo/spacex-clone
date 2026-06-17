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
 * Create cart item markup.
 *
 * @param {Object} item
 * @returns {string}
 */
function createCartItem(item) {
  return `
    <article class="cart__item">
      <div class="cart__item-main">
        <div class="cart__item-image-wrapper">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="cart__item-image"
          />
        </div>

        <div class="cart__item-info">
          <h2 class="cart__item-title">${item.name}</h2>

          <p class="cart__item-price">
            ${formatPrice(item.price)}
          </p>

          ${item.color
      ? `<p class="cart__item-variant">Color: ${item.color}</p>`
      : ""
    }

          ${item.size
      ? `<p class="cart__item-variant">Size: ${item.size.toUpperCase()}</p>`
      : ""
    }
        </div>
      </div>

      <div class="cart__item-actions">
        <div class="cart__quantity">
          <button
            class="cart__quantity-button"
            type="button"
            data-cart-decrease="${item.id}"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span class="cart__quantity-value">
            ${item.quantity}
          </span>

          <button
            class="cart__quantity-button"
            type="button"
            data-cart-increase="${item.id}"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          class="cart__remove-button"
          type="button"
          data-cart-remove="${item.id}"
        >
          Remove
        </button>
      </div>

      <span class="cart__item-total">
        ${formatPrice(item.price * item.quantity)}
      </span>
    </article>
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