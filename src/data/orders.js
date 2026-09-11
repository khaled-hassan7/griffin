import { supabase } from "@/lib/supabase";

export async function createOrder({ shippingInfo, paymentMethod, totalPrice }) {
  const { data: order, error } = await supabase.from("orders").insert({
    ...shippingInfo,
    paymentMethod: paymentMethod,
    totalPrice: totalPrice,
  });
  if (error) {
    console.log("cant creat order");
    throw new Error(error.message);
  }
}
