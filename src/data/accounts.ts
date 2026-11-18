"use server";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import type { AccountProfile, Order } from "@/types";

export type UpdateResult = { error?: string; success?: boolean };

export async function getAccount(): Promise<{
  user: User | null;
  profile: AccountProfile | null;
}> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, profile: null };
  }

  const { data: profile } = await supabase
    .from("accounts")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  return { user, profile: profile as AccountProfile | null };
}

export async function getAccountOrders(): Promise<Order[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*, order_items(*, products(id, name, slug, images))")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch account orders:", error);
    throw error;
  }

  return (orders as Order[] | null) ?? [];
}

export async function updateProfile({
  fullName,
  phone,
}: {
  fullName?: string;
  phone?: string;
}): Promise<UpdateResult> {
  const name = typeof fullName === "string" ? fullName.trim() : "";
  const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

  if (!name) {
    return { error: "Full name can't be empty." };
  }
  if (name.length > 80) {
    return { error: "Full name is too long." };
  }
  if (trimmedPhone && !/^[0-9+\-\s()]{5,20}$/.test(trimmedPhone)) {
    return { error: "Please enter a valid phone number." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You need to sign in first." };
  }

  const { error } = await supabase.from("accounts").upsert({
    id: user.id,
    full_name: name,
    phone: trimmedPhone || null,
  });

  if (error) {
    console.error("Failed to update profile:", error);
    return { error: "Failed to save your details. Please try again." };
  }

  return { success: true };
}

export async function updateAddress({
  address,
  city,
}: {
  address?: string;
  city?: string;
}): Promise<UpdateResult> {
  const trimmedAddress = typeof address === "string" ? address.trim() : "";
  const trimmedCity = typeof city === "string" ? city.trim() : "";

  if (!trimmedAddress) {
    return { error: "Address can't be empty." };
  }
  if (trimmedAddress.length > 200) {
    return { error: "Address is too long." };
  }
  if (trimmedCity.length > 60) {
    return { error: "City is too long." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You need to sign in first." };
  }

  const { error } = await supabase.from("accounts").upsert({
    id: user.id,
    address: trimmedAddress,
    city: trimmedCity || null,
  });

  if (error) {
    console.error("Failed to update address:", error);
    return { error: "Failed to save your address. Please try again." };
  }

  return { success: true };
}
