import "server-only";
import { createClient } from "@/lib/supabase/server";

export async function getAllProducts() {
  const supabase = await createClient();

  const { error, data } = await supabase
    .from("products")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return data;
}

export async function getProduct(slug) {
  const supabase = await createClient();

  const { error, data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
  return product;
}
