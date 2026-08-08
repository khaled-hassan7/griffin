"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "../cart/CartStore";
import useCheckoutStore from "./CheckoutStore";

function CheckoutGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const cart = useCartStore((state) => state.cart);
  const isHydrated = useCartStore((state) => state.isHydrated);

  const shippingInfo = useCheckoutStore((state) => state.shippingInfo);
  console.log(shippingInfo)
  const paymentMethod = useCheckoutStore((state) => state.paymentMethod);
  const cardInfo = useCheckoutStore((state) => state.cardInfo);

  useEffect(() => {
    if (!isHydrated) return;

    if (cart.length === 0 && pathname !== "/checkout/success") {
      router.replace("/products");
      return;
    }

    if (pathname === "/checkout/payment-methods" && !shippingInfo) {
      router.replace("/checkout");
      return;
    }

    if (
      pathname === "/checkout/card-details" &&
      (!shippingInfo || paymentMethod !== "card")
    ) {
      router.replace("/checkout/payment-methods");
      return;
    }

    if (
      pathname === "/checkout/review-order" &&
      (!shippingInfo ||
        !paymentMethod ||
        (paymentMethod === "card" && !cardInfo))
    ) {
      router.replace("/checkout/payment-methods");
      return;
    }
  }, [
    isHydrated,
    cart,
    shippingInfo,
    paymentMethod,
    cardInfo,
    pathname,
    router,
  ]);

  if (!isHydrated) return null;

  return children;
}

export default CheckoutGuard;
