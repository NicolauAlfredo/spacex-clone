import { StarlinkHeader } from "./components/StarlinkHeader/StarlinkHeader";
import { AffordableInternet } from "./components/AffordableInternet/AffordableInternet";
import { StarlinkResidentialButton } from "./components/Plans/components/StarlinkPlansButtons/StarlinkPlansButtons";
import { ReliableResilient } from "./components/ReliableResilient/ReliableResilient";
import { InternetForTravel } from "./components/InternetForTravel/InternetForTravel";
import { HighSpeedInternet } from "./components/HighSpeedInternet/HighSpeedInternet";
import { AvailableGlobally } from "./components/AvailableGlobally/AvailableGlobally";
import { PlugItInPoint } from "./components/PlugItInPoint/PlugItInPoint";
import { StarlinkFooter } from "./components/StarlinkFooter/StarlinkFooter";
import { StarlinkBackground } from "./components/AffordableInternet/components/StarlinkBackground/StarlinkBackground";
import { starlinkBackgrounds } from "../../content/starlinkbackground.content";

import "./StarlinkPage.css";
import { StarlinkOverlay } from "./components/AffordableInternet/components/StarlinkBackground/StarlinkBackgroundOverlay/StarlinkOverlay";

export function StarlinkPage() {
  return (
    <>
      <div className="starlink-section starlink-section--best-value">
        <StarlinkBackground
          background={starlinkBackgrounds.find((bg) => bg.id === "night-sky")!}
        />
        <StarlinkOverlay variant="best-value" />
        <StarlinkHeader />
        <AffordableInternet />
      </div>

      <section className="starlink-section starlink-section--plans">
        <StarlinkResidentialButton />
      </section>

      <div className="starlink-section starlink-section--reliable">
        <StarlinkBackground
          background={starlinkBackgrounds.find((bg) => bg.id === "lightning-sky")!}
        />
        <StarlinkOverlay variant="reliable" />
        <ReliableResilient />
      </div>

      <InternetForTravel />
      <HighSpeedInternet />
      <AvailableGlobally />
      <PlugItInPoint />
      <StarlinkFooter />
    </>
  );
}