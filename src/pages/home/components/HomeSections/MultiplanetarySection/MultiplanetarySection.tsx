import { Section } from "../../../../../components/Section/Section";
import { UpcomingLaunches } from "../../../../../components/UpcomingLaunches/UpcomingLaunches";
import "./MultiplanetarySection.css";

export function MultiplanetarySection() {
  return (
    <>
      <Section
        sectionClassName="multiplanetary"
        className="hero-section"
        mediaType="video"
        mobileVideoSrc="assets/pages/home/videos/mars-rotation-mobile.mp4"
        desktopVideoSrc="assets/pages/home/videos/mars-rotation.mp4"
        title="MAKING LIFE MULTIPLANETARY"
        paragraph="SpaceX was founded under the belief that a future where humanity
                is out exploring the stars is fundamentally more exciting than
                one where we are not."
        buttonText="EXPLORE"
      />
      <UpcomingLaunches variant="section" />
    </>
  );
}
