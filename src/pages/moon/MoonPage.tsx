import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { moonCarouselCollections } from "../../data/MoonCarousel.data";
import Carousel from "./components/MoonCarousel/MoonCarousel";
import { MoonContact } from "./components/MoonContact/MoonContact";
import { MoonHeroSection } from "./components/MoonHeroSection/MoonHeroSection";
import { MissionsSection } from "./components/MoonMissionsSection/MissionsSection";
import { MoonUnmatched } from "./components/MoonUnmatched/MoonUnmatched";
import { WhySection } from "./components/MoonWhySection/WhySection";

export function MoonPage() {
  return (
    <>
      <Header />
      <MoonHeroSection />
      <WhySection />
      <MissionsSection />
      {moonCarouselCollections.map((collection) => (
        <Carousel key={collection.id} collection={collection} />
      ))}
      <MoonUnmatched />
      <MoonContact />
      <Footer />
    </>
  );
}
