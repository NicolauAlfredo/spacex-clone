import { Footer } from "../../components/footer/Footer";
import { Header } from "../home/components/Header";
import { WhySection } from "./components/moonWhySection/WhySection";
import { MoonHeroSection } from "./components/moonHeroSection/MoonHeroSection";
import { MissionsSection } from "./components/moonMissionsSection/MissionsSection";

export function MoonPage() {
  return (
    <>
      <Header />
      <MoonHeroSection />
      <WhySection />
      <MissionsSection />
      <Footer />
    </>
  );
}
