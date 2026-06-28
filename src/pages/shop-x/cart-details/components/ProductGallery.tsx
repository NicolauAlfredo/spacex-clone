import { useState } from "react";
import type { Product } from "../../../../models/Product";

type ProductGalleryProps = {
  product: Product;
};

function ProductGallery({ product }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = product.images[activeImageIndex];

  return (
    <div
      className={`product-detail__gallery ${
        isZoomed ? "product-detail__gallery--zoomed" : ""
      }`}
    >
      <div className="product-detail__thumbs">
        {product.images.map((image, index) => (
          <button
            key={image}
            className={`product-detail__thumb-button ${
              index === activeImageIndex
                ? "product-detail__thumb-button--active"
                : ""
            }`}
            type="button"
            onClick={() => setActiveImageIndex(index)}
            aria-label={`Show product image ${index + 1}`}
          >
            <img
              src={image}
              alt={product.alt}
              className="product-detail__thumb-image"
            />
          </button>
        ))}
      </div>

      <div className="product-detail__image-wrapper">
        <img
          src={activeImage}
          alt={product.alt}
          className="product-detail__main-image"
        />
      </div>

      <button
        className="product-detail__zoom-button"
        type="button"
        onClick={() => setIsZoomed((current) => !current)}
        aria-label="Zoom product image"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          width="14"
          className="icon icon-zoom"
          viewBox="0 0 14 14"
        >
          <path
            d="M9.432 9.432a4.94 4.94 0 1 1-6.985-6.985 4.94 4.94 0 0 1 6.985 6.985Zm0 0L13 13"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
          />
          <path
            d="M6 3.5V6m0 2.5V6m0 0H3.5h5"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </button>

      {product.images.length > 1 && (
        <div className="product-detail__dots">
          {product.images.map((image, index) => (
            <button
              key={image}
              className={`product-detail__dot ${
                index === activeImageIndex ? "product-detail__dot--active" : ""
              }`}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Show product image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
