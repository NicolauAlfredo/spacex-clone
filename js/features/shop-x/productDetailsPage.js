// Import product data
import { xaiProducts } from "../../data/products.js";

// Import formata price util
import { formatPrice } from "../../utils/formatPrice.js";

// Select the product details container
const productDetailsContainer = document.querySelector(
  "[data-product-details]",
);

// Merge all product collections into one array
const products = [...xaiProducts.XCollection, ...xaiProducts.XaiCollection];

/**
 * Get the product id from the current URL.
 *
 * Example:
 * product-details.html?product=xai-multi-tumbler-black
 *
 * @returns {string | null}
 */
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);

  return params.get("product");
}

/**
 * Find a product by its id.
 *
 * @param {string | null} productId
 * @returns {Object | undefined}
 */
function findProductById(productId) {
  return products.find((product) => product.id === productId);
}

/**
 * Render the product details page.
 *
 * If the product does not exist,
 * a fallback message is displayed.
 *
 * @param {Object} product
 */
function renderProductDetails(product) {
  if (!productDetailsContainer) return;

  if (!product) {
    productDetailsContainer.innerHTML = `
      <div class="product-detail__not-found">
        <h1>Product not found</h1>
        <p>The selected product does not exist.</p>
        <a href="./shop-x.html">Back to shop</a>
      </div>
    `;

    document.title = "Product not found | Shop X";
    return;
  }

  document.title = `${product.name} | Shop X`;

  productDetailsContainer.innerHTML = `
    <div class="product-detail__layout">
      <div class="product-detail__gallery" data-product-gallery>
        <div class="product-detail__thumbs">
          ${createProductThumbnails(product)}
        </div>

        <div class="product-detail__image-wrapper" data-product-carousel>
          ${createProductSlides(product)}
        </div>

        ${createZoomButton()}
        ${createProductDots(product)}
      </div>

      <div class="product-detail__info">
        <h1 class="product-detail__title">${product.name}</h1>

        <p class="product-detail__price">
          ${formatPrice(product.price)}
        </p>

        <div class="product-detail__divider"></div>

        <p class="product-detail__description">
          ${product.description}
        </p>

        ${createProductColors(product)}
        ${createProductSizes(product)}

        <div class="product-detail__quantity">
          <button
            class="product-detail__quantity-button"
            type="button"
            data-quantity-decrease
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span class="product-detail__quantity-value" data-quantity-value>
            1
          </span>

          <button
            class="product-detail__quantity-button"
            type="button"
            data-quantity-increase
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button class="product-detail__cart-button" type="button">
          Add To Cart
        </button>
      </div>
    </div>

    ${createSizeChart(product)}
    ${createRelatedProducts(product)}
  `;
}

/**
 * Initialize the product details page.
 */
function init() {
  const productId = getProductIdFromURL();
  const product = findProductById(productId);

  renderProductDetails(product);

  if (!product) return;

  handleImageGallery();
  handleZoom();
  handleSizeChart();
  handleQuantityControls();
}

// Start application
init();