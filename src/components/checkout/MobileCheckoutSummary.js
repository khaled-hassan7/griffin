"use client";
import MobileCheckoutModal from "./MobileCheckoutModal";
import useCheckoutStore from "./CheckoutStore";
import { ChevronUp } from "lucide-react";
import { useCartStore } from "../cart/CartStore";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

function MobileCheckoutSummary({ onContinue, lable }) {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce((total, price) => total + price.price, 0);
  const pathName = usePathname();

  if (pathName === "/checkout") return null;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 lg:hidden "
      onClick={() => setIsOpen(true)}
    >
      <footer className=" font-bold px-4 pb-5 pt-4 border-t border-primary ">
        <div>
          <div className="flex justify-between">
            <span className="text-sm">Total</span>
            <div className="flex items-center ">
              <span className="text-sm pr-2">
                EGP {totalPrice.toLocaleString()}
              </span>
              <ChevronUp strokeWidth={1.5} width={20} />
            </div>
          </div>
        </div>
        <button
          className="block text-center text-white bg-primary w-full p-3 mt-2"
          onClick={(e) => {
            e.stopPropagation();
            onContinue();
          }}
        >
          {!lable ? "continue" : lable}
        </button>
      </footer>
      <MobileCheckoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default MobileCheckoutSummary;
