import { moonCarouselCollections } from "../../data/MoonCarouselData";
import Carousel from "./components/MoonCarousel/MoonCarousel";
import { MoonUnmatched } from "./components/MoonUnmatched/MoonUnmatched";

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
      <MoonUnmatched />
    </>
  );
}
