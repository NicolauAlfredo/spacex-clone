import { shopCollections } from "../../../../../data/shopCollections.data";
import { ShopCollectionCard } from "./components/ShopCollectionCard";
import "./ShopCollections.css";

export function ShopCollections() {
  return (
    <section className="collections" aria-label="Product collections">
      <div className="collections__container">
        {shopCollections.map((collection) => (
          <ShopCollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
