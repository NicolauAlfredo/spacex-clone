import type { Product } from "../../../../models/Product";

type ProductGalleryProps = {
  product: Product;
  activeImageIndex: number;
  onImageChange: (imageIndex: number) => void;
};

function ProductGallery({
  product,
  activeImageIndex,
  onImageChange,
}: ProductGalleryProps) {
  const activeImage = product.images[activeImageIndex];

  return (
    <div className="product-detail__gallery">
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
            onClick={() => onImageChange(index)}
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

      {product.images.length > 1 && (
        <div className="product-detail__dots">
          {product.images.map((image, index) => (
            <button
              key={image}
              className={`product-detail__dot ${
                index === activeImageIndex ? "product-detail__dot--active" : ""
              }`}
              type="button"
              onClick={() => onImageChange(index)}
              aria-label={`Show product image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
