import type { InnerTextProps } from "../../types/innerText.types";
import { InnerText } from "./components/InnerText/InnerText";
import {
  MediaBackground,
  type MediaBackgroundProps,
} from "./components/MediaBackground/MediaBackground";

type SectionProps = {
  sectionClassName: string;
} & MediaBackgroundProps &
  InnerTextProps;

export function Section({ sectionClassName, ...props }: SectionProps) {
  return (
    <section className={`hero-section hero-section--${sectionClassName}`}>
      <MediaBackground {...props} />
      <InnerText {...props} />
    </section>
  );
}
