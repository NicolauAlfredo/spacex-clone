import type { ShopCollection } from "../../../../../../types/shop-x/shopCollection.types";
import { ShopCollectionButton } from "./ShopCollectionButton";

type ShopCollectionCardProps = {
  collection: ShopCollection;
};

export function ShopCollectionCard({ collection }: ShopCollectionCardProps) {
  return (
    <a href={collection.href} className="collection">
      <div className="collection__img">
        <img src={collection.image} alt={collection.alt} />
      </div>

      <div className="collection__content">
        <h3 className="content__title">{collection.title}</h3>

        <ShopCollectionButton>Shop All</ShopCollectionButton>
      </div>
    </a>
  );
}
