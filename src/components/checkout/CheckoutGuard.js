"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "../cart/CartStore";
import { useRouter } from "next/navigation";

function CheckoutGuard({ children }) {
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();
  const isHydrated = useCartStore((state) => state.isHydrated);

  useEffect(() => {
    if (!isHydrated) return;

    if (cart.length === 0) {
      router.replace("/");
    }
  }, [isHydrated, cart, router]);

  if (!isHydrated) return null; // أو Spinner

  return children;
}

export default CheckoutGuard;
