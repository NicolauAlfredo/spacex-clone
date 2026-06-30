import { Header } from "../../components/header/Header";
import { MoonHeroSection } from "./components/moonHeroSection/MoonHeroSection";
import { WhySection } from "./components/moonWhySection/WhySection";
import { MissionsSection } from "./components/moonMissionsSection/MissionsSection"
import { moonCarouselCollections } from "../../data/MoonCarouselData";
import Carousel from "./components/MoonCarousel/MoonCarousel";
import { MoonUnmatched } from "./components/MoonUnmatched/MoonUnmatched";
import { MoonContact } from "./components/MoonContact/MoonContact";
import { Footer } from "../../components/footer/Footer";

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
