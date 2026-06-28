import { useParams } from "react-router-dom";
import { xaiProducts } from "../../../data/ShopProductsData";
import {
  findProductById,
  getAllProducts,
  getRelatedProducts,
} from "../../../utils/productUtils";
import "./product-details.css";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

function ProductDetailsPage() {
  const { productId } = useParams();

  const products = getAllProducts(xaiProducts);
  const product = findProductById(products, productId);

  if (!product) {
    return (
      <main className="product-page">
        <section className="product-detail">
          <div className="product-detail__not-found">
            <h1>Product not found</h1>
            <p>The selected product does not exist.</p>
          </div>
        </section>
      </main>
    );
  }

  const relatedProducts = getRelatedProducts(products, product.id);

  return (
    <main className="product-page">
      <section className="product-detail" aria-labelledby="product-title">
        <div className="product-detail__container">
          <div className="product-detail__layout">
            <ProductGallery product={product} />

            <ProductInfo product={product} />
          </div>

          {relatedProducts.length > 0 && (
            <section className="product-detail__related">
              <h2 className="product-detail__related-title">
                You may also like
              </h2>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
