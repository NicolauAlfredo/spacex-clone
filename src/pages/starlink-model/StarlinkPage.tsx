import { StarlinkHeader } from "./components/StarlinkHeader/StarlinkHeader";
import { AffordableInternet } from "./components/AffordableInternet/AffordableInternet";
import { Plans } from "./components/Plans/Plans";
import { ReliableResilient } from "./components/ReliableResilient/ReliableResilient";
import { InternetForTravel } from "./components/InternetForTravel/InternetForTravel";
import { HighSpeedInternet } from "./components/HighSpeedInternet/HighSpeedInternet";
import { AvailableGlobally } from "./components/AvailableGlobally/AvailableGlobally";
import { PlugItInPoint } from "./components/PlugItInPoint/PlugItInPoint";
import { StarlinkFooter } from "./components/StarlinkFooter/StarlinkFooter";

import "./StarlinkPage.css";

export function StarlinkPage() {
  return (
    <>
      <div>
        <StarlinkHeader />
        <AffordableInternet />
      </div>
      <Plans />
      <ReliableResilient />
      <InternetForTravel />
      <HighSpeedInternet />
      <AvailableGlobally />
      <PlugItInPoint />
      <StarlinkFooter />
    </>
  );
}
