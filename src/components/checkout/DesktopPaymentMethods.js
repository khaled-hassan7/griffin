import { Truck } from "lucide-react";
import Link from "next/link";
import useCheckoutStore from "./CheckoutStore";

function DesktopPaymentMethods() {
  const setPayMentMethod = useCheckoutStore((state) => state.setPayMentMethod);
  return (
    <div className="hidden lg:grid gap-5 w-full  max-h-150  m-auto">
      <h2 className="font-bold">How should we send it?</h2>
      <section className="grid  gap-0 grid-cols-2">
        <Link
          href="/checkout/card-details"
          className="hover:border hover:border-primary border border-border md:border-r-0 "
          onClick={() => setPayMentMethod("card")}
        >
          <div className="py-15 pl-10">
            <Truck strokeWidth={0.5} className="w-10 h-10" />
            <h2 className="font-semibold">Card Payment</h2>
            <span className="text-sm">
              Pay online with your credit or debit card.
            </span>
          </div>
        </Link>
        <Link
          href="/checkout/review-order"
          className="hover:border hover:border-primary border border-border"
          onClick={() => setPayMentMethod("cash")}
        >
          <div className="py-15 pl-10">
            <Truck strokeWidth={0.5} className="w-10 h-10" />
            <h2 className="font-semibold">Cash on Delivery</h2>
            <span className="text-sm">Pay when your order arrives.</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
export default DesktopPaymentMethods;
