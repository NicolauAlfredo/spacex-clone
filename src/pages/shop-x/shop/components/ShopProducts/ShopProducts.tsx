import { xaiProducts } from "../../../../../data/ShopProductsData";
import { ShopProductCard } from "./ShopProductCard/ShopProductCard";
import "./ShopProducts.css";

const products = [...xaiProducts.XCollection, ...xaiProducts.XaiCollection];

export function ShopProducts() {
  return (
    <section className="products" aria-labelledby="products-title">
      <div className="products__container">
        <div className="products__header">
          <h2 id="products-title" className="products__title">
            All Products
          </h2>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
