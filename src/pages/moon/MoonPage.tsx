import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { moonCarouselCollections } from "../../data/MoonCarouselData";
import Carousel from "./components/MoonCarousel/MoonCarousel";
import { MoonContact } from "./components/MoonContact/MoonContact";
import { MoonUnmatched } from "./components/MoonUnmatched/MoonUnmatched";


export function MoonPage() {
  return (
    <>
    <Header />
      {
        moonCarouselCollections.map((collection) => (
          <Carousel
            key={collection.id}
            collection={collection}
          />
        ))
      }
      <MoonUnmatched />
      <MoonContact />
      <Footer />
    </>
  );
}
