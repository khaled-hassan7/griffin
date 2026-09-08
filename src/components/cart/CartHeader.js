"use client";
import { X } from "lucide-react";
import { useCartStore } from "./CartStore";

function CartHeader() {
  const closeCart = useCartStore((state) => state.closeCart);
  return (
    <div className="sticky top-0  flex justify-between   bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <h2 className="font-bold text-lg">shopping bag</h2>
      <button className=" text-text-primary " onClick={closeCart}>
        <X strokeWidth={1} />
      </button>
    </div>
  );
}

export default CartHeader;
