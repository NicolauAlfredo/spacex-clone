import { Header } from "./header/StarlinkHeader";
import { BestValue } from "./components/BestValue/BestValue";
import { Plans } from "./components/Plans/Plans";
import { Reliable } from "./components/Reliable/Reliable";
import StarlinkCoverage from "./starlink-coverage/StarlinkCoverage";
import StarlinkGlobal from "./starlink-global/StarlinkGlobal";
import StarlinkPlugItIn from "./starlinkPlugIn/StarlinkPlugItIn";
import StarlinkFooter from "./footer/StarlinkFooter";

import "./StarlinkPage.css";
export function StarlinkPage() {
  return (
    <>
      <Header />
      <BestValue />
      <Plans />
      <Reliable />
      <StarlinkCoverage classNameSection="starlink-section--coverage" />
      <StarlinkGlobal classNameSection="starlink-section--global" />
      <StarlinkPlugItIn classNameSection="starlink-section--plug-it-in" />
      <StarlinkFooter />
    </>
  );
}
