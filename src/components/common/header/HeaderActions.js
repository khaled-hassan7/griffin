"use client";
import { Handbag, User } from "lucide-react";
import Search from "./Search";
import { useCartStore } from "@/components/cart/CartStore";

function HeaderActions() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  console.log(cart);
  return (
    <div className="flex gap-5">
      <div className="hidden lg:block">
        <Search />
      </div>
      <button>
        <User strokeWidth={1} size={24} />
      </button>
      <button onClick={toggleCart} className="relative">
        <Handbag strokeWidth={1} size={24} />
        <span className=" absolute top-1/3 left-1/2 -translate-x-1/2 text-xs bottom-0 text-error font-semibold">
          {quantity > 0 && quantity}
        </span>
      </button>
    </div>
  );
}

export default HeaderActions;
