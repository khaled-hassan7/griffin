import { products } from "./mockData";
import { collections } from "./mockData";

export function getCollectionProducts(collectionSlug) {
  const collection = Object.values(collections).find(
    (c) => c.slug === collectionSlug,
  );

  if (!collection) return null;

  const collectionProducts = collection.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return { ...collection, products: collectionProducts };
}
