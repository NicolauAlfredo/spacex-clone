import { Header } from './header/StarlinkHeader'
import StarlinkCoverage from './starlink-coverage/StarlinkCoverage';
import StarlinkGlobal from './starlink-global/StarlinkGlobal';
import StarlinkPlugItIn from './starlinkPlugIn/StarlinkPlugItIn';
import './StarlinkPage.css'
import StarlinkFooter from './footer/StarlinkFooter';


export function StarlinkPage() {
  return (
    <>
      <Header />
      <StarlinkCoverage classNameSection = "starlink-section--coverage" />
      <StarlinkGlobal classNameSection = "starlink-section--global" />
      <StarlinkPlugItIn classNameSection = "starlink-section--plug-it-in" />
      <StarlinkFooter />
    </>
  );
}
