"use client";

import { usePathname } from "next/navigation";

function CheckoutProgress() {
  const pathname = usePathname();
  const isDelivery = pathname === "/checkout";
  const isPayment =
    pathname === "/checkout/card-details" ||
    pathname === "/checkout/review-order";
  const Confirmation = pathname === "/checkout/success";
  return (
    <div className="relative w-full flex justify-between items-center pb-10 text-xs lg:text-sm gap-2">
      <span className={` ${isDelivery ? "font-bold" : "font-medium"}`}>
        Delivery
      </span>
      <span className="flex-1 pt-0.5  text-text-muted border-b  border-text-muted"></span>
      <span
        className={` ${isPayment ? "font-bold" : Confirmation ? "font-medium" : "text-text-muted"}`}
      >
        Payment
      </span>
      <span className="flex-1 pt-0.5  text-text-muted border-b  border-text-muted"></span>

      <span className={` ${Confirmation ? "font-bold" : "text-text-muted"}`}>
        Confirmation
      </span>
    </div>
  );
}

export default CheckoutProgress;
