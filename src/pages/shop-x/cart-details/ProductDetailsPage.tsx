import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import { xaiProducts } from "../../../data/ShopProductsData";
import SizeChart from "./components/SizeChart";
import RelatedProducts from "./components/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import type { Product } from "../../../models/Product";

import {
  findProductById,
  getAllProducts,
  getDefaultColor,
  getDefaultSize,
  getRelatedProducts,
} from "../../../utils/productUtils";
import "./ProductDetailsPage.css";
import NotFound from "./components/NotFound";

function ProductDetailsPage() {
  const { productId } = useParams();

  const products = getAllProducts(xaiProducts);
  const product = findProductById(products, productId);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetailsContent product={product} products={products} />;
}

export default ProductDetailsPage;

type ProductDetailsContentProps = {
  product: Product;
  products: Product[];
};

function ProductDetailsContent({
  product,
  products,
}: ProductDetailsContentProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const defaultColor = getDefaultColor(product);
  const defaultSize = getDefaultSize(product);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(defaultColor?.value ?? "");
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = getRelatedProducts(xaiProducts, product);

  function handleColorChange(colorValue: string, imageIndex: number) {
    setSelectedColor(colorValue);
    setActiveImageIndex(imageIndex);
  }

  function handleIncreaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

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
              onAddToCart={handleAddToCart}
            />
          </div>

          <SizeChart product={product} />

          <RelatedProducts products={relatedProducts} />
        </div>
      </section>
    </main>
  );
}
