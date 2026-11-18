"use server";
import { createClient } from "@/lib/supabase/server";

export async function createOrder({ shippingInfo, paymentMethod, cart }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Only the fields the checkout form actually sends; everything else
  // (user_id, totalPrice, paymentMethod validation) is derived inside the
  // create_order SQL function so a client can never override it.
  const { firstName, lastName, phone, address, furtherInformation, governorate, town } =
    shippingInfo ?? {};

  const { data: orderId, error: orderError } = await supabase.rpc(
    "create_order",
    {
      p_shipping: {
        firstName,
        lastName,
        phone,
        address,
        furtherInformation,
        governorate,
        town,
      },
      p_payment_method: paymentMethod,
      p_cart: cart.map(({ id, size, quantity }) => ({
        product_id: id,
        size,
        quantity,
      })),
    },
  );

  if (orderError || orderId == null) {
    console.error("Failed to create order:", orderError);
    throw new Error(orderError?.message || "Failed to create order.");
  }

  // Best-effort: pre-fill the signed-in user's account profile from the
  // shipping info they just ordered with. Only fills EMPTY fields and must
  // never block or roll back the order.
  if (user) {
    try {
      const { data: profile } = await supabase
        .from("accounts")
        .select("phone, address, city")
        .eq("id", user.id)
        .maybeSingle();

      const accountUpdates = { id: user.id };

      if (!profile?.phone && phone) accountUpdates.phone = phone;
      if (!profile?.address && address) accountUpdates.address = address;
      if (!profile?.city && town) accountUpdates.city = town;

      if (
        accountUpdates.phone ||
        accountUpdates.address ||
        accountUpdates.city
      ) {
        const { error: accountError } = await supabase
          .from("accounts")
          .upsert(accountUpdates);

        if (accountError) {
          console.error(
            "Skipped filling account details after order:",
            accountError
          );
        }
      }
    } catch (accountError) {
      console.error(
        "Skipped filling account details after order:",
        accountError
      );
    }
  }

  return { success: true, orderId };
}
