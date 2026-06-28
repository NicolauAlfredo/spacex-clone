import { Link } from "react-router-dom";
import type { Product } from "../../../../../models/Product";
import { formatPrice } from "../../../../../utils/formatPrice";
import "./RelatedProducts.css";

type RelatedProductsProps = {
  products: Product[];
};

function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section
      className="product-detail__related"
      aria-labelledby="related-products-title"
    >
      <div className="product-detail__related-container">
        <h2
          id="related-products-title"
          className="product-detail__related-title"
        >
          You may also like
        </h2>
        <div className="product-detail__related-grid">
          {products.map((product) => (
            <article key={product.id} className="product-detail__related-card">
              <Link
                to={`/product/${product.id}`}
                className="product-detail__related-image-link"
              >
                <img
                  src={product.primaryImage}
                  alt={product.alt}
                  className="product-detail__related-image product-detail__related-image--primary"
                />

                {product.secondaryImage && (
                  <img
                    src={product.secondaryImage}
                    alt=""
                    aria-hidden="true"
                    className="product-detail__related-image product-detail__related-image--secondary"
                  />
                )}
              </Link>

              <h3 className="product-detail__related-name">
                <Link
                  to={`/product/${product.id}`}
                  className="product-detail__related-link"
                >
                  {product.name}
                </Link>
              </h3>

              <span className="product-detail__related-price">
                {formatPrice(product.price)}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
