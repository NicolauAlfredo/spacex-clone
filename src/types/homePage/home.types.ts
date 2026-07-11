import type { ButtonProps } from "../button.types";
import type { MediaBackgroundProps } from "./mediaBackground.types";

export type ContentPosition = 
| "top-left"
| "top-right"
| "center-left"
| "center-right"
| "bottom-left"
| "bottom-right";

export type SectionVariant = 
| "standard"
| "dark"
| "split"
| "hero";

export interface HomeSectionContent {
    id: string;
    date?: string;
    title: string;
    description?: string;
    background: MediaBackgroundProps;
    button?: ButtonProps;
    position: ContentPosition;
    overlay?: number;
}

