"use client";
import { X } from "lucide-react";
import NavigationList from "./NavigationList";
import { useNavigation } from "./NavigationMenuStore";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import useOutsideClick from "@/hooks/useOutsideClick";

function NavigationMenu() {
  const isOpen = useNavigation((state) => state.isOpen);
  const closeMenu = useNavigation((state) => state.closeMenu);

  useLockBodyScroll(isOpen);
  const ref = useOutsideClick(closeMenu);

  return (
    <div
      className={`inset-0 bg-primary/50 fixed  z-60 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
    >
      <div
        className="fixed  left-0 top-0 bottom-0  bg-white p-5  w-70  md:p-10  md:w-100 lg:w-118"
        ref={ref}
      >
        <button onClick={closeMenu}>
          <X width={20} strokeWidth={1.5} />
        </button>
        <NavigationList isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
}

export default NavigationMenu;
