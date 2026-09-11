"use client";
import Link from "next/link";
import useCheckoutStore from "./CheckoutStore";
import { BanknoteCheck, House, PenLine } from "lucide-react";
import Button from "../ui/Button";

function ReviewContent({ handlePlaceOrder, isPending }) {
  const { firstName, lastName, address } = useCheckoutStore(
    (state) => state.shippingInfo,
  );
  const paymentMethod = useCheckoutStore((state) => state.paymentMethod);

  return (
    <div>
      <h2 className="font-bold pb-5">Review Order</h2>
      <section className="flex justify-between items-center p-4 lg:p-6 border border-border">
        <div className="flex items-center gap-5 ">
          <House className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          <div className="flex flex-col">
            <h3 className="font-bold pb-1 text-sm">Standard Delivery</h3>
            <span className="text-xs text-text-muted">
              {firstName} {lastName}
            </span>
            <span className="text-xs text-text-muted">{address}</span>
          </div>
        </div>
        <Link href={"/checkout"}>
          <PenLine className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
        </Link>
      </section>

      <section className="flex justify-between items-center p-4 lg:p-6 border border-border border-t-0">
        <div className="flex items-center gap-5">
          <BanknoteCheck className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          <div className="flex flex-col">
            <h3 className="font-bold  text-sm">Payment Method</h3>
            <span className="text-xs text-text-muted">
              {paymentMethod === "cash"
                ? "Cash on delivery"
                : "Credit / Debit Card"}
            </span>
          </div>
        </div>
        <Link href={"/checkout/payment-methods"}>
          <PenLine className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
        </Link>
      </section>
      <Button
        className="hidden lg:block py-3 text-white bg-primary w-full mt-5"
        onClick={handlePlaceOrder}
        disabled={isPending}
      >
        {isPending ? "Placing order..." : "Place order"}
      </Button>
    </div>
  );
}

export default ReviewContent;
