"use client";
import { useNavigation } from "@/components/navigation/NavigationMenuStore";
import { MenuIcon } from "lucide-react";

function Menu() {
  const openMenu = useNavigation((state) => state.openMenu);
  return (
    <button onClick={openMenu}>
      <MenuIcon strokeWidth={1} size={24} />
    </button>
  );
}

export default Menu;
