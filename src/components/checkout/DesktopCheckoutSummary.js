"use client";
import { useCartStore } from "../cart/CartStore";
import SummaryList from "./SummaryList";

function DesktopCheckoutSummary() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity , 0);
  return (
    <div className=" hidden lg:flex flex-col  w-93  border border-primary  ">
      <header className="font-bold p-5 ">Purchase summary</header>
      <ul className="flex flex-col pl-5 flex-1 overflow-y-auto">
        {cart.map((item) => (
          <SummaryList key={item.id} item={item} />
        ))}
      </ul>
      <footer className="text-summaryLabel font-bold p-5 border-t border-primary">
        <div className="flex justify-between">
          <span>TOTAL</span>
          <span>EGP {totalPrice.toLocaleString()}</span>
        </div>
        <span className="text-[10px] text-text-muted">Including VAT</span>
      </footer>
    </div>
  );
}

export default DesktopCheckoutSummary;
