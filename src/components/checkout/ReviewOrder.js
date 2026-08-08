"use client";
import { useRouter } from "next/navigation";
import MobileCheckoutSummary from "./MobileCheckoutSummary";
import ReviewContent from "./ReviewContent";

function ReviewOrder() {
  const router = useRouter();

  function handlePlaceOrder() {
    router.push("/checkout/success");
  }

  return (
    <div className="flex flex-col">
      <ReviewContent handlePlaceOrder={handlePlaceOrder} />
      <MobileCheckoutSummary onContinue={handlePlaceOrder} />
    </div>
  );
}

export default ReviewOrder;
