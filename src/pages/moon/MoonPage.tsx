import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { moonCarouselCollections } from "../../data/MoonCarousel.data";
import Carousel from "./components/moonCarousel/MoonCarousel";
import { MoonContact } from "./components/moonContact/MoonContact";
import { MoonHeroSection } from "./components/moonHeroSection/MoonHeroSection";
import { MissionsSection } from "./components/moonMissionsSection/MissionsSection";
import { MoonUnmatched } from "./components/moonUnmatched/MoonUnmatched";
import { WhySection } from "./components/moonWhySection/WhySection";


export function MoonPage() {
  return (
    <>
      <Header />
      <MoonHeroSection />
      <WhySection />
      <MissionsSection />
      {moonCarouselCollections.map((collection) => (
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
