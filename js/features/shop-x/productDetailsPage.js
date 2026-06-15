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