import { Section } from "../../../../../components/Section/Section";
import "./TechnologySection.css";

export function TechnologySection() {
  return (
    <Section
      sectionClassName="technology"
      className="hero-section"
      mediaType="image"
      desktopImageSrc="assets/pages/home/images/revolutionizing-space-tech-desktop.jpg"
      mobileImageSrc="assets/pages/home/images/revolutionizing-space-tech-mobile.jpg"
      title="REVOLUTIONIZING SPACE TECHNOLOGY"
      paragraph="  SpaceX’s Starship spacecraft and Super Heavy rocket is a fully
                reusable transportation system designed to carry both crew and
                cargo to Earth orbit, the Moon, Mars, and beyond."
      buttonText="LEARN MORE"
    />
  );
}
