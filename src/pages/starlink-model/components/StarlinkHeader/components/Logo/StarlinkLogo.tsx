import { getPublicAssetPath } from "../../../../../../utils/getPublicAssetPath";
import "./StarlinkLogo.css";

export function StarlinkLogo() {
  return (
    <div className="test">
      <img
        className="starlink-logo"
        src={getPublicAssetPath("assets/pages/starlink/logo/starlink-logo.png")}
        alt="Starlink Logo"
      />
    </div>
  );
}
