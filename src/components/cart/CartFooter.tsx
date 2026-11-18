"use client";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Button from "../ui/Button";
import SignInWithGoogle from "../auth/SignInWithGoogle";
import { createClient } from "@/lib/supabase/client";
import { useCartStore } from "./CartStore";

function CartFooter({
  cart,
  closeCart,
}: {
  cart: { price: number; quantity: number }[];
  closeCart: () => void;
}) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const isOpen = useCartStore((state) => state.isOpen);

  // "loading" until the session check resolves; treated as signed-out for the
  // checkout click, and swapped automatically if a session turns up.
  const [sessionState, setSessionState] = useState<
    "loading" | "signed-in" | "guest"
  >("loading");
  const [showAuthChoice, setShowAuthChoice] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    let isMounted = true;

    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      if (isMounted) {
        setSessionState(data.session ? "signed-in" : "guest");
      }
    }
    checkSession();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) setSessionState(session ? "signed-in" : "guest");
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  // Start from a fresh footer every time the drawer opens — adjusted during
  // render instead of an effect (see "You Might Not Need an Effect").
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) setShowAuthChoice(false);
  }

  const showChoice = showAuthChoice && sessionState !== "signed-in";

  function handleCheckoutClick(event: MouseEvent) {
    if (sessionState !== "signed-in") {
      event.preventDefault();
      setShowAuthChoice(true);
    } else {
      closeCart();
    }
  }

  return (
    <div className="px-4 pb-4 bg-white font-bold border-t border-text-muted">
      {showChoice ? (
        <div className="pt-4">
          <p className="text-bodySmall text-text-muted font-normal pb-3">
            sign in to check out faster, or continue as a guest
          </p>
          <div className="flex flex-col gap-3">
            <SignInWithGoogle
              next="/checkout"
              onStart={closeCart}
              className="w-full bg-primary text-white"
            />
            <Button href="/checkout" className="w-full" onClick={closeCart}>
              continue as guest
            </Button>
            <Button
              onClick={() => setShowAuthChoice(false)}
              className="w-full bg-transparent border-transparent text-text-muted hover:bg-transparent hover:text-text-primary"
            >
              back
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="py-4 text-summaryLabel">
            <div className="flex justify-between">
              <span>sales tax</span>
              <span>included</span>
            </div>
            <div className="flex justify-between">
              <span>total</span>
              <span>{totalPrice.toLocaleString()} LE</span>
            </div>
          </div>
          <Button
            href="/checkout"
            className="w-full  bg-primary text-white"
            onClick={handleCheckoutClick}
          >
            check out
          </Button>
        </>
      )}
    </div>
  );
}

export default CartFooter;
