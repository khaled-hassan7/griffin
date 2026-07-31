"use client";

import { usePathname } from "next/navigation";

function CheckoutProgress() {
  const pathname = usePathname();
  const isDelivery = pathname === "/checkout";
  const isPayment = pathname === "/payment";
  return (
    <div className="relative w-full flex justify-between items-center pb-10 text-sm gap-2">
      <span className={` ${isDelivery ? "font-bold" : "font-medium"}`}>
        Delivery
      </span>
      <span className="flex-1 pt-0.5  text-text-muted border-b  border-text-muted"></span>
      <span className={` ${isPayment ? "font-bold" : "text-text-muted"}`}>
        Payment
      </span>
    </div>
  );
}

export default CheckoutProgress;
