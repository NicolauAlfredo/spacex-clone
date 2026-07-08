import { starlinkLogo } from "../../../../content/starlinklogo.content";
import "./StarlinkLogo.css";

export const StarlinkLogo = () => {
  return (
    <a className="header__logo" href={starlinkLogo.link}>
      {starlinkLogo.label}
    </a>
  );
};