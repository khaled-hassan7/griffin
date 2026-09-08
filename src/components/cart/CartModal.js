"use client";
import { useCartStore } from "./CartStore";
import CartItem from "./CartItem";
import useOutsideClick from "@/hooks/useOutsideClick";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import EmptyCart from "./EmptyCart";

function CartModal() {
  const cart = useCartStore((state) => state.cart);
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const ref = useOutsideClick(closeCart);
  useLockBodyScroll(isOpen);

  return (
    <div
      className={`fixed bg-black/50 inset-0 z-60  text-sm transition-opacity duration-300 ${isOpen ? "opacity-100  pointer-events-auto" : "opacity-0  pointer-events-none"}`}
    >
      <div
        className={`fixed bg-white top-0 right-0 bottom-0 w-9/10 md:w-8/10 lg:top-8 lg:bottom-8  lg:right-8 lg:w-95     ease-[cubic-bezier(0.22,1,0.36,1)] transition-transform duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
        ref={ref}
      >
        <div className="h-full w-full flex flex-col">
          <CartHeader />
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div className=" overflow-y-auto px-4 flex-1">
                <CartItem cart={cart} />
              </div>
              <CartFooter cart={cart} closeCart={closeCart} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
