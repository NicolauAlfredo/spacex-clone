import { moonCarouselCollections } from "../../data/MoonCarouselData";
import Carousel from "./components/MoonCarousel/MoonCarousel";

export function MoonPage() {
  return (
    <>
      {
        moonCarouselCollections.map((collection) => (
          <Carousel
            key={collection.id}
            collection={collection}
          />
        ))
      }
    </>
  );
}
