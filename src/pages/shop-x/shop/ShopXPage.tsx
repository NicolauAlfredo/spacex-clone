import { ShopFooter } from "./components/ShopFooter/ShopFooter";
import { ShopHeader } from "./components/ShopHeader/ShopHeader";
import { ShopCollections } from "./components/ShopCollections/ShopCollections";
import { ShopProducts } from "./components/ShopProducts/ShopProducts";

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
