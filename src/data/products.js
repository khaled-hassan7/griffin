import { supabase } from "@/lib/supabase";

export async function getAllProducts() {
  const { error, data } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return data;
}

export async function getProduct(slug) {
  const { error, data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
  return product;
}
