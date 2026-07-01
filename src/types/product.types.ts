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

export type Product = {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage: string;
  alt: string;
  price: number;
  description?: string;
  images: string[];
  colors?: ProductColor[];
  defaultColor?: string | null;
  sizes?: ProductSize[];
  defaultSize?: string | null;
  details?: string[];
};
