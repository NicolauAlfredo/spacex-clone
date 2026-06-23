export type ProductColor = {
  label: string;
  value: string;
  color: string;
  available: boolean;
  imageIndex?: number;
};

export type ProductSize = {
  label: string;
  value: string;
  available: boolean;
};

export type ProductDetail = {
  label: string;
  value: string;
};

export type ProductProps = {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage?: string;
  alt: string;
  price: number;

  description?: string;

  images?: string[];

  colors?: ProductColor[];
  defaultColor?: string | null;

  sizes?: ProductSize[];
  defaultSize?: string | null;

  details?: ProductDetail[];
};

export class Product {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage?: string;
  alt: string;
  price: number;

  description: string;

  images: string[];

  colors: ProductColor[];
  defaultColor: string | null;

  sizes: ProductSize[];
  defaultSize: string | null;

  details: ProductDetail[];

  constructor({
    id,
    name,
    primaryImage,
    secondaryImage,
    alt,
    price,
    description = "",
    images = [],
    colors = [],
    defaultColor = null,
    sizes = [],
    defaultSize = null,
    details = [],
  }: ProductProps) {
    this.id = id;
    this.name = name;
    this.primaryImage = primaryImage;
    this.secondaryImage = secondaryImage;
    this.alt = alt;
    this.price = Number(price);

    this.description = description;

    this.images =
      images.length > 0
        ? images
        : ([primaryImage, secondaryImage].filter(Boolean) as string[]);

    this.colors = colors;
    this.defaultColor = defaultColor;

    this.sizes = sizes;
    this.defaultSize = defaultSize;

    this.details = details;
  }
}
