"use client";
import { useRouter } from "next/navigation";
import MobileCheckoutSummary from "./MobileCheckoutSummary";
import ReviewContent from "./ReviewContent";
import { createOrder } from "@/data/orders";
import { useCartStore } from "../cart/CartStore";
import useCheckoutStore from "./CheckoutStore";
import { useState } from "react";

function ReviewOrder() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const shippingInfo = useCheckoutStore((state) => state.shippingInfo);
  const paymentMethod = useCheckoutStore((state) => state.paymentMethod);
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  async function handlePlaceOrder() {
    setIsPending(true);
    await createOrder({ shippingInfo, paymentMethod, cart, totalPrice });
    router.push("/checkout/success");
  }

  return (
    <div className="flex flex-col">
      <ReviewContent
        isPending={isPending}
        handlePlaceOrder={handlePlaceOrder}
      />
      <MobileCheckoutSummary onContinue={handlePlaceOrder} />
    </div>
  );
}

export default ReviewOrder;
