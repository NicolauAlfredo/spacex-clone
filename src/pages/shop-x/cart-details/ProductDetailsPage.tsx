import { useNavigate, useParams } from "react-router-dom";
import {
  findProductById,
  getAllProducts,
  getDefaultColor,
  getDefaultSize,
  getRelatedProducts,
} from "../../../utils/productUtils";
import NotFound from "./components/NotFound/NotFound";
import type { Product } from "../../../models/Product";
import { useCart } from "../../../hooks/useCart";
import { useState } from "react";
import { xaiProducts } from "../../../content/shop-x/shopProducts.content";
import { ShopHeader } from "../shop/components/ShopHeader/ShopHeader";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import SizeChart from "./components/SizeChart";
import HorizontalDivider from "./components/HorizontalDivider/HorizontalDivider";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import { ShopFooter } from "../shop/components/ShopFooter/ShopFooter";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { productId } = useParams();

  const products = getAllProducts(xaiProducts);
  const product = findProductById(products, productId);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetailsContent product={product} />;
}

export default ProductDetailsPage;

type ProductDetailsContentProps = {
  product: Product;
};

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
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
    <>
      <ShopHeader />

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

              <SizeChart product={product} />
            </div>

            <HorizontalDivider
              className={`product-detail__divider-section${
                product.sizes.length === 0
                  ? " product-detail__divider-section--without-size-chart"
                  : ""
              }`}
            />

            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      </main>

      <ShopFooter />
    </>
  );
}
