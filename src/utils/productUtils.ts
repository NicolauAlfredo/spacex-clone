import type { Product } from "../models/Product";
import type { ProductCollection } from "../content/shop-x/shopProducts.content";

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

export function getProductCollectionName(
  collections: ProductCollection,
  productId: string,
): keyof ProductCollection | null {
  const collectionNames = Object.keys(collections) as Array<
    keyof ProductCollection
  >;

  return (
    collectionNames.find((collectionName) =>
      collections[collectionName].some((product) => product.id === productId),
    ) ?? null
  );
}

export function shuffleProducts(products: Product[]): Product[] {
  return [...products].sort(() => Math.random() - 0.5);
}

export function getRelatedProducts(
  collections: ProductCollection,
  currentProduct: Product,
  limit = 4,
): Product[] {
  const collectionName = getProductCollectionName(
    collections,
    currentProduct.id,
  );

  const sameCollectionProducts = collectionName
    ? collections[collectionName].filter(
        (product) => product.id !== currentProduct.id,
      )
    : [];

  const otherProducts = getAllProducts(collections).filter(
    (product) =>
      product.id !== currentProduct.id &&
      !sameCollectionProducts.some(
        (sameCollectionProduct) => sameCollectionProduct.id === product.id,
      ),
  );

  return [
    ...shuffleProducts(sameCollectionProducts),
    ...shuffleProducts(otherProducts),
  ].slice(0, limit);
}
