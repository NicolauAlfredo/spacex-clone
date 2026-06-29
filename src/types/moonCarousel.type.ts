export type ContentPosition = 
| "top-left"
| "top-center"
| "center-left"
| "bottom-left"

export interface MoonCarouselSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    contentPosition: ContentPosition
} 