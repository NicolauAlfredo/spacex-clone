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
 * Create the thumbnail gallery markup.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductThumbnails(product) {
  return product.images
    .map(
      (image, index) => `
        <button
          class="product-detail__thumb-button ${index === 0 ? "product-detail__thumb-button--active" : ""
        }"
          type="button"
          data-product-thumb="${image}"
          aria-label="Show product image ${index + 1}"
        >
          <img
            src="${image}"
            alt="${product.alt}"
            class="product-detail__thumb-image"
          />
        </button>
      `,
    )
    .join("");
}

/**
 * Create all carousel slides.
 *
 * Used for the mobile image gallery.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductSlides(product) {
  return product.images
    .map(
      (image, index) => `
        <img
          src="${image}"
          alt="${product.alt}"
          class="product-detail__main-image"
          data-product-slide
          data-slide-index="${index}"
        />
      `,
    )
    .join("");
}

/**
 * Create navigation dots for the image carousel.
 *
 * Dots are only displayed when
 * the product contains more than one image.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductDots(product) {
  if (product.images.length <= 1) return "";

  return `
    <div class="product-detail__dots">
      ${product.images
      .map(
        (_, index) => `
            <button
              class="product-detail__dot ${index === 0 ? "product-detail__dot--active" : ""
          }"
              type="button"
              data-product-dot="${index}"
              aria-label="Show product image ${index + 1}"
            ></button>
          `,
      )
      .join("")}
    </div>
  `;
}

/**
 * Handle image gallery interactions.
 *
 * Features:
 * - Thumbnail navigation
 * - Carousel navigation
 * - Active state synchronization
 */
function handleImageGallery() {
  const carousel = document.querySelector("[data-product-carousel]");
  const slides = document.querySelectorAll("[data-product-slide]");
  const dots = document.querySelectorAll("[data-product-dot]");
  const thumbButtons = document.querySelectorAll("[data-product-thumb]");

  if (!carousel || slides.length === 0) return;

  function setActiveImage(index) {
    const slide = slides[index];

    if (!slide) return;

    carousel.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    dots.forEach((dot) => {
      dot.classList.toggle(
        "product-detail__dot--active",
        Number(dot.dataset.productDot) === index,
      );
    });

    thumbButtons.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle(
        "product-detail__thumb-button--active",
        thumbIndex === index,
      );
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      setActiveImage(Number(dot.dataset.productDot));
    });
  });

  thumbButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setActiveImage(index);
    });
  });

  carousel.addEventListener("scroll", () => {
    const currentIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);

    dots.forEach((dot) => {
      dot.classList.toggle(
        "product-detail__dot--active",
        Number(dot.dataset.productDot) === currentIndex,
      );
    });

    thumbButtons.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle(
        "product-detail__thumb-button--active",
        thumbIndex === currentIndex,
      );
    });
  });
}

/**
 * Create the zoom button.
 *
 * The button toggles fullscreen gallery mode.
 *
 * @returns {string}
 */
function createZoomButton() {
  return `
    <button
      class="product-detail__zoom-button"
      type="button"
      data-zoom-button
      aria-label="Zoom product image"
    >
      <svg aria-hidden="true" focusable="false" width="14" class="icon icon-zoom" viewBox="0 0 14 14">
        <path d="M9.432 9.432a4.94 4.94 0 1 1-6.985-6.985 4.94 4.94 0 0 1 6.985 6.985Zm0 0L13 13" fill="none" stroke="currentColor" stroke-linecap="square"></path>
        <path d="M6 3.5V6m0 2.5V6m0 0H3.5h5" fill="none" stroke="currentColor"></path>
      </svg>
    </button>
  `;
}

/**
 * Toggle gallery zoom mode.
 *
 * Adds or removes the zoomed state class.
 */
function handleZoom() {
  const gallery = document.querySelector("[data-product-gallery]");
  const zoomButton = document.querySelector("[data-zoom-button]");

  if (!gallery || !zoomButton) return;

  zoomButton.addEventListener("click", () => {
    gallery.classList.toggle("product-detail__gallery--zoomed");
  });
}

/**
 * Check if the product contains color options.
 *
 * @param {Object} product
 * @returns {boolean}
 */
function hasColors(product) {
  return Array.isArray(product.colors) && product.colors.length > 0;
}

/**
 * Check if the product contains size options.
 *
 * @param {Object} product
 * @returns {boolean}
 */
function hasSizes(product) {
  return Array.isArray(product.sizes) && product.sizes.length > 0;
}

/**
 * Get the default selected size.
 *
 * Falls back to the first available size if
 * no default size is defined.
 *
 * @param {Object} product
 * @returns {string}
 */
function getDefaultSize(product) {
  if (!hasSizes(product)) return "";

  const defaultSize = product.sizes.find(
    (size) => size.value === product.defaultSize,
  );

  return defaultSize?.value || product.sizes[0].value;
}

/**
 * Create product color selector.
 *
 * Returns an empty string if
 * the product has no color variants.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductColors(product) {
  if (!hasColors(product)) return "";

  const selectedColor =
    product.colors.find((color) => color.value === product.defaultColor) ||
    product.colors[0];

  return `
    <div class="product-detail__colors">
      <p class="product-detail__color-label">
        Color: <span>${selectedColor.label}</span>
      </p>

      <div class="product-detail__color-options">
        ${product.colors
      .map(
        (color) => `
              <button
                class="product-detail__color-button"
                type="button"
                aria-label="Select ${color.label}"
                title="${color.label}"
                ${!color.available ? "disabled" : ""}
              >
                ${color.label}
              </button>
            `,
      )
      .join("")}
      </div>
    </div>
  `;
}

/**
 * Create product size selector.
 *
 * Returns an empty string if
 * the product has no size variants.
 *
 * @param {Object} product
 * @returns {string}
 */
function createProductSizes(product) {
  if (!hasSizes(product)) return "";

  return `
    <div class="product-detail__sizes">
      <label class="product-detail__size-label" for="product-size">
        Size:
      </label>

      <select
        id="product-size"
        class="product-detail__size-select"
        name="size"
      >
        ${product.sizes
      .map(
        (size) => `
              <option
                value="${size.value}"
                ${size.value === getDefaultSize(product) ? "selected" : ""}
                ${!size.available ? "disabled" : ""}
              >
                ${size.label}${!size.available ? " - Sold out" : ""}
              </option>
            `,
      )
      .join("")}
      </select>
    </div>
  `;
}

/**
 * Create the size chart section.
 *
 * Only rendered for products
 * that contain size options.
 *
 * @param {Object} product
 * @returns {string}
 */
function createSizeChart(product) {
  if (!hasSizes(product)) return "";

  return `
    <div class="product-detail__size-chart" data-size-chart>
      <button
        class="product-detail__size-chart-toggle"
        type="button"
        data-size-chart-toggle
        aria-expanded="false"
      >
        <span>Size Chart</span>
        <span data-size-chart-icon>+</span>
      </button>

      <div class="product-detail__size-chart-content" data-size-chart-content>
        <table class="product-detail__size-chart-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>2XL</th>
              <th>3XL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Chest</th>
              <td>44"</td>
              <td>46"</td>
              <td>48"</td>
              <td>50"</td>
              <td>52"</td>
              <td>54"</td>
              <td>56"</td>
            </tr>

            <tr>
              <th>Sleeve Length</th>
              <td>22.5"</td>
              <td>23.5"</td>
              <td>24.5"</td>
              <td>25.5"</td>
              <td>26.5"</td>
              <td>27.5"</td>
              <td>28.5"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/**
 * Handle size chart expand/collapse.
 *
 * Updates:
 * - aria-expanded attribute
 * - toggle icon
 */
function handleSizeChart() {
  const toggleButton = document.querySelector("[data-size-chart-toggle]");
  const icon = document.querySelector("[data-size-chart-icon]");
  const sizeChart = document.querySelector("[data-size-chart]");

  if (!toggleButton || !icon || !sizeChart) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = sizeChart.classList.toggle(
      "product-detail__size-chart--open",
    );

    toggleButton.setAttribute("aria-expanded", String(isOpen));
    icon.textContent = isOpen ? "−" : "+";
  });
}

/**
 * Handle quantity controls.
 *
 * Prevents quantity values
 * lower than one.
 */
function handleQuantityControls() {
  const quantityValue = document.querySelector("[data-quantity-value]");
  const decreaseButton = document.querySelector("[data-quantity-decrease]");
  const increaseButton = document.querySelector("[data-quantity-increase]");

  if (!quantityValue || !decreaseButton || !increaseButton) return;

  let quantity = 1;

  decreaseButton.addEventListener("click", () => {
    if (quantity === 1) return;

    quantity -= 1;
    quantityValue.textContent = quantity;
  });

  increaseButton.addEventListener("click", () => {
    quantity += 1;
    quantityValue.textContent = quantity;
  });
}


/**
 * Get related products.
 *
 * Excludes the current product
 * from the results.
 *
 * @param {Object} currentProduct
 * @param {number} limit
 * @returns {Array}
 */
function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter((product) => product.id !== currentProduct.id)
    .slice(0, limit);
}

/**
 * Create the related products section.
 *
 * @param {Object} product
 * @returns {string}
 */
function createRelatedProducts(product) {
  const relatedProducts = getRelatedProducts(product);

  if (relatedProducts.length === 0) return "";

  return `
    <section class="product-detail__related" aria-labelledby="related-products-title">
      <h2 id="related-products-title" class="product-detail__related-title">
        You may also like
      </h2>

      <div class="product-detail__related-grid">
        ${relatedProducts
      .map(
        (relatedProduct) => `
              <article class="product-detail__related-card">
                <a
                  href="./product-details.html?product=${relatedProduct.id}"
                  class="product-detail__related-image-link"
                >
                <img 
                  src="${relatedProduct.primaryImage}" 
                  alt="${relatedProduct.alt}"
                  class="product-detail__related-image product-detail__related-image--primary" />
                
                <img
                  src="${relatedProduct.secondaryImage}"
                  alt="" aria-hidden="true"
                  class="product-detail__related-image product-detail__related-image--secondary" />
                </a>

                <h3 class="product-detail__related-name">
                  <a
                    href="./product-details.html?product=${relatedProduct.id}"
                    class="product-detail__related-link"
                  >
                    ${relatedProduct.name}
                  </a>
                </h3>

                <span class="product-detail__related-price">
                  ${formatPrice(relatedProduct.price)}
                </span>
              </article>
            `,
      )
      .join("")}
      </div>
    </section>
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