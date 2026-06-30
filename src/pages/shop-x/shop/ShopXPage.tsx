import { ShopCollections } from "./components/shopCollections/ShopCollections";
import { ShopFooter } from "./components/shopFooter/ShopFooter";
import { ShopHeader } from "./components/shopHeader/ShopHeader";
import { ShopProducts } from "./components/shopProducts/ShopProducts";

export function ShopXPage() {
  return (
    <>
      <ShopHeader />
      <ShopCollections />
      <ShopProducts />
      <ShopFooter />
    </>
  );
}
