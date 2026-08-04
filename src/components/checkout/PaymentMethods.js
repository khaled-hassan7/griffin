"use client";
import DesktopPaymentMethods from "@/components/checkout/DesktopPaymentMethods";
import MobileCheckoutSummary from "@/components/checkout/MobileCheckoutSummary";
import MobilePaymentMethods from "@/components/checkout/MobilePaymentMethods";
import useCheckoutStore from "./CheckoutStore";
import { useRouter } from "next/navigation";

function PaymentMethods() {
  const paymentMethod = useCheckoutStore((state) => state.paymentMethod);
  const router = useRouter();

  function handleContinue() {
    if (!paymentMethod) return;
    if (paymentMethod === "cash") {
      router.push("/checkout/review-order");
    } else {
      router.push("/checkout/card-details");
    }
  }
  return (
    <div className="flex flex-col">
      <DesktopPaymentMethods />
      <MobilePaymentMethods />
      <MobileCheckoutSummary onContinue={handleContinue} />
    </div>
  );
}

export default PaymentMethods;
