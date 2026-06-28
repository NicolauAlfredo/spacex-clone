import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import { xaiProducts } from "../../../data/ShopProductsData";
import {
  findProductById,
  getAllProducts,
  getDefaultColor,
  getDefaultSize,
  getRelatedProducts,
} from "../../../utils/productUtils";
import "./product-details.css";

function ProductDetailsPage() {
  const { productId } = useParams();

  const products = getAllProducts(xaiProducts);
  const product = findProductById(products, productId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  const defaultColor = getDefaultColor(product);
  const defaultSize = getDefaultSize(product);

  const [selectedColor, setSelectedColor] = useState(defaultColor?.value ?? "");
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  const relatedProducts = getRelatedProducts(products, product.id);

  function handleColorChange(colorValue: string, imageIndex: number) {
    setSelectedColor(colorValue);
    setActiveImageIndex(imageIndex);
  }

  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  return (
    <main className="product-page">
      <section className="product-detail" aria-labelledby="product-title">
        <div className="product-detail__container">
          <div className="product-detail__layout">
            <ProductGallery
              product={product}
              activeImageIndex={activeImageIndex}
              onImageChange={setActiveImageIndex}
            />

            <ProductInfo
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              quantity={quantity}
              onColorChange={handleColorChange}
              onSizeChange={setSelectedSize}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
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
