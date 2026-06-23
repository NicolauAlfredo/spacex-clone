import type { Product } from "../../../../../../models/Product";
import { ShopProductCardImage } from "./components/ShopProductCardImage";
import { ShopProductCardInfo } from "./components/ShopProductCardInfo";

type ShopProductCardProps = {
  product: Product;
};

export function ShopProductCard({ product }: ShopProductCardProps) {
  return (
    <article className="products__card">
      <ShopProductCardImage product={product} />
      <ShopProductCardInfo product={product} />
    </article>
  );
}
