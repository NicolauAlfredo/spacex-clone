import { Section } from "../../../../../components/Section/Section";
import "./StarshipSection.css";

export function StarshipSection() {
  return (
    <Section
      sectionClassName="starship"
      className="hero-section"
      mediaType="video"
      mobileVideoSrc="assets/pages/home/videos/Starships-twelfth-flight-test-mobile.mp4"
      desktopVideoSrc="assets/pages/home/videos/Starships-twelfth-flight-test.mp4"
      title="STARSHIP'S TWELFTH FLIGHT TEST"
      paragraph="MAY 22, 2026"
      buttonText="WATCH"
    />
  );
}
