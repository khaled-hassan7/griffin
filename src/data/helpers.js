import { collections } from "./mockData";
import { getAllProducts } from "./products";

export async function getCollectionProducts(collectionSlug) {
  const products = await getAllProducts();
  const collection = Object.values(collections).find(
    (c) => c.slug === collectionSlug,
  );

  if (!collection) return null;

  const collectionProducts = collection.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return { ...collection, products: collectionProducts };
}
