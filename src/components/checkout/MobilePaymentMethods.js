"use client";
import { Truck } from "lucide-react";
import useCheckoutStore from "./CheckoutStore";

function MobilePaymentMethods() {
  const setPayMentMethod = useCheckoutStore((state) => state.setPayMentMethod);
  const PayMentMethod = useCheckoutStore((state) => state.paymentMethod);

  return (
    <div className=" lg:hidden grid gap-5 w-full   max-h-150  m-auto ">
      <h2 className="font-bold">How should we send it?</h2>
      <section className="grid gap-5">
        <div
          className={`border border-border ${PayMentMethod === "card" ? "border-primary" : ""}`}
          onClick={() => {
            setPayMentMethod("card");
          }}
        >
          <div className="py-5 pl-5 ">
            <Truck strokeWidth={0.5} className="w-10 h-10" />
            <h2 className="font-semibold">Card Payment</h2>
            <span className="text-sm">
              Pay online with your credit or debit card.
            </span>
          </div>
        </div>

        <div
          className={`border border-border ${PayMentMethod === "cash" ? "border-primary" : ""}`}
          onClick={() => {
            setPayMentMethod("cash");
          }}
        >
          <div className="py-5 pl-5">
            <Truck strokeWidth={0.5} className=" w-10 h-10" />
            <h2 className="font-semibold">Cash on Delivery</h2>
            <span className="text-sm">Pay when your order arrives.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobilePaymentMethods;
