export type ContentPosition = 
| "top-left"
| "top-center"
| "center-left"
| "bottom-left"


export type CarouselVariant = "default" | "compact"
export interface CarouselSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    contentPosition: ContentPosition
} 

export interface CarouselCollection {
    id: string;
    variant: CarouselVariant;
    slides: CarouselSlide[];
   
} 