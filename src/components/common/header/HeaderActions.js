"use client";
import { useEffect, useState } from "react";
import { Handbag, User } from "lucide-react";
import Link from "next/link";
import Search from "./Search";
import { createClient } from "@/lib/supabase/client";
import { useCartStore } from "@/components/cart/CartStore";

function HeaderActions() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Defaults to /signin while the session is loading.
  const [accountHref, setAccountHref] = useState("/signin");

  useEffect(() => {
    const supabase = createClient();
    let isMounted = true;

    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      if (isMounted) {
        setAccountHref(data.session ? "/account" : "/signin");
      }
    }
    checkSession();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setAccountHref(session ? "/account" : "/signin");
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="flex gap-5">
      <div className="hidden lg:block">
        <Search />
      </div>
      <Link href={accountHref} aria-label="Account">
        <User strokeWidth={1.5} size={24} />
      </Link>
      <button onClick={toggleCart} className="relative">
        <Handbag strokeWidth={1.5} size={24} />
        <span className=" absolute top-1/3 left-1/2 -translate-x-1/2 text-xs bottom-0 text-error font-semibold">
          {quantity > 0 && quantity}
        </span>
      </button>
    </div>
  );
}

export default HeaderActions;
