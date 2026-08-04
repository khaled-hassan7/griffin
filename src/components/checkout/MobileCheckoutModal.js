import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useCartStore } from "../cart/CartStore";
import SummaryList from "./SummaryList";
import { ChevronDown } from "lucide-react";

function MobileCheckoutModal({ isOpen, setIsOpen }) {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce((total, price) => total + price.price, 0);
  useLockBodyScroll(isOpen);
  return (
    <div
      className={`fixed  inset-0 transition-transform  duration-300 ease-out bg-white ${isOpen ? "translate-y-0" : "translate-y-full"} `}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col   h-full  border border-primary ">
        <div
          className=" flex justify-center items-center relative   border-b border-primary  py-4  "
          onClick={() => setIsOpen(false)}
        >
          <h2 className="font-bold"> Purchase summary</h2>
          <ChevronDown
            className="absolute  top-1/2 -translate-y-1/2 right-4 size-5"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex justify-between px-2 py-4 text-sm font-semibold">
          <span>TOTAL</span>
          <span>EGP {totalPrice.toLocaleString()}</span>
        </div>
        <ul className="flex flex-col pl-5 flex-1 overflow-y-auto border-t border-primary">
          {cart.map((item) => (
            <SummaryList key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileCheckoutModal;
