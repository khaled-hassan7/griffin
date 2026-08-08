"use client";
import { useRouter } from "next/navigation";
import MobileCheckoutSummary from "./MobileCheckoutSummary";
import SuccsessContent from "./SuccsessContent";
import { useCartStore } from "../cart/CartStore";
import useCheckoutStore from "./CheckoutStore";

function Succsess() {
  const clearCart = useCartStore((state) => state.clearCart);
  const resetShippingInfo = useCheckoutStore(
    (state) => state.resetShippingInfo,
  );
  const resetPaymentMethod = useCheckoutStore(
    (state) => state.resetPaymentMethod,
  );
  const resetCardInfo = useCheckoutStore((state) => state.resetCardInfo);

  const router = useRouter();

  function handleContinueShopping() {
    router.push("/products");
    clearCart();
    resetShippingInfo();
    resetPaymentMethod();
    resetCardInfo();

  }
  return (
    <>
      <SuccsessContent handleContinueShopping={handleContinueShopping} />
      <MobileCheckoutSummary
        onContinue={handleContinueShopping}
        lable="continue shopping"
      />
    </>
  );
}

export default Succsess;
