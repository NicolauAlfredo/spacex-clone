// Import product data
import { xaiProducts } from "../../data/products.js";

// Import formata price util
import { formatPrice } from "../../utils/formatPrice.js";

// Select the products grid container
const productsGrid = document.querySelector("[data-products-grid]");

/**
 * Create the HTML markup for a single product card.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductCard(product) {
  return `
    <article class="products__card">
      <a href="./product-details.html?product=${product.id}" class="products__image-link">
        <img
          src="${product.primaryImage}"
          alt="${product.alt}"
          class="products__image products__image--primary"
        />

        <img
          src="${product.secondaryImage}"
          alt=""
          aria-hidden="true"
          class="products__image products__image--secondary"
        />
      </a>

      <div class="products__card-info">
        <div class="products__card-content">
          <h3 class="products__product-title">
            <a href="./product-details.html?product=${product.id}" class="products__product-link">
              ${product.name}
            </a>
          </h3>

          <span class="products__price">
            ${formatPrice(product.price)}
          </span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render a list of products inside the grid.
 *
 * @param {Array} products
 */
function renderProducts(products) {
  productsGrid.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}

/**
 * Initialize the products section.
 * Currently rendering the xAI Collection.
 */
function init() {
  renderProducts([...xaiProducts.XCollection, ...xaiProducts.XaiCollection]);
}

// Start the application
init();
