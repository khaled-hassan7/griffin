"use server";
import { createClient } from "@/lib/supabase/server";

export async function createOrder({ shippingInfo, paymentMethod, cart }) {
  const supabase = await createClient();

  const productIds = cart.map((item) => item.id);

  const { data: dbProducts, error: productsError } = await supabase
    .from("products")
    .select("id, price")
    .in("id", productIds);

  if (productsError || !dbProducts) {
    throw new Error("Failed to verify product prices.");
  }

  const priceMap = new Map(dbProducts.map((p) => [p.id, p.price]));

  const calculatedTotalPrice = cart.reduce((sum, item) => {
    const realPrice = priceMap.get(item.id) || 0;
    return sum + realPrice * item.quantity;
  }, 0);

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      ...shippingInfo,
      paymentMethod: paymentMethod,
      totalPrice: calculatedTotalPrice,
    })
    .select()
    .single();

  if (orderError || !order) {
    console.error("Failed to create order:", orderError);
    throw new Error(orderError?.message || "Failed to create order.");
  }

  const orderItems = cart.map((item) => ({
    product_id: item.id,
    order_id: order.id,
    price: priceMap.get(item.id),
    size: item.size,
    quantity: item.quantity,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    console.error("Failed to create order items, rolling back:", itemsError);
    await supabase.from("orders").delete().eq("id", order.id);
    throw new Error("Failed to save order items. Transaction rolled back.");
  }

  return { success: true, orderId: order.id };
}
