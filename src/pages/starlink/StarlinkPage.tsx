import { Header } from './header/header'
import StarlinkCoverage from './starlink-coverage/StarlinkCoverage';
import StarlinkGlobal from './starlink-global/StarlinkGlobal';
import StarlinkPlugItIn from './starlink-plug-it-in/StarlinkPlugItIn';
import './StarlinkPage.css'


export function StarlinkPage() {
  return (
    <>
      <Header />
      <StarlinkCoverage classNameSection = "starlink-section--coverage" />
      <StarlinkGlobal classNameSection = "starlink-section--global" />
      <StarlinkPlugItIn classNameSection = "starlink-section--plug-it-in" />
    </>
  );
}
