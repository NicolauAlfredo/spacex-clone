import type { StarlinkBackground as StarlinkBackgroundType } from "../../../../../../types/starlinkbackground.types";
import "./StarlinkBackground.css";

type Props = {
  background: StarlinkBackgroundType;
};

export const StarlinkBackground = ({ background }: Props) => {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={background.desktop} />
      <img
        src={background.mobile}
        alt={background.alt}
        className="starlink-section__img"
      />
    </picture>
  );
};
