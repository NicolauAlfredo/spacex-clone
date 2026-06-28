import type { Product } from "../models/Product";

export function getAllProducts(products: {
  XCollection: Product[];
  XaiCollection: Product[];
}): Product[] {
  return [...products.XCollection, ...products.XaiCollection];
}

export function findProductById(
  products: Product[],
  productId: string | undefined,
): Product | undefined {
  if (!productId) return undefined;

  return products.find((product) => product.id === productId);
}

export function hasColors(product: Product): boolean {
  return product.colors.length > 0;
}

export function hasSizes(product: Product): boolean {
  return product.sizes.length > 0;
}

export function getDefaultSize(product: Product): string {
  if (!hasSizes(product)) return "";

  const defaultSize = product.sizes.find(
    (size) => size.value === product.defaultSize,
  );

  return defaultSize?.value || product.sizes[0].value;
}

export function getDefaultColor(product: Product) {
  if (!hasColors(product)) return null;

  return (
    product.colors.find((color) => color.value === product.defaultColor) ||
    product.colors[0]
  );
}

export function getRelatedProducts(
  products: Product[],
  currentProductId: string,
  limit = 4,
): Product[] {
  return products
    .filter((product) => product.id !== currentProductId)
    .slice(0, limit);
}
