import { supabase } from "@/lib/supabase";

export async function getCollections(slug) {
  const { data: collections, error } = await supabase
    .from("editorial_collections")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return collections;
}

export async function getCollectionProducts(collectionSlug) {
  const { data: collection, error } = await supabase
    .from("products")
    .select(
      `
      *,
      products (*)
    `,
    )
    .eq("slug", collectionSlug)

  if (error || !collection) return null;

  return collection;
}
