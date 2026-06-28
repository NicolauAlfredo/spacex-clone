import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import { xaiProducts } from "../../../data/ShopProductsData";
import SizeChart from "./components/SizeChart";
import RelatedProducts from "./components/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

import {
  findProductById,
  getAllProducts,
  getDefaultColor,
  getDefaultSize,
  getRelatedProducts,
} from "../../../utils/productUtils";
import "./ProductDetailsPage.css";

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

  const navigate = useNavigate();
  const { addItem } = useCart();

  function createCartItemId(productId: string, size = "", color = "") {
    return `${productId}-${size}-${color}`.toLowerCase();
  }

  function handleAddToCart() {
    addItem({
      id: createCartItemId(product.id, selectedSize, selectedColor),
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.primaryImage,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    navigate("/cart");
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

          <SizeChart product={product} />

          <RelatedProducts products={relatedProducts} />

          <ProductInfo
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            onColorChange={handleColorChange}
            onSizeChange={setSelectedSize}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
