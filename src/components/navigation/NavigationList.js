"use client";
import { navigationData } from "@/data/navigationData";
import Link from "next/link";

function NavigationList({ isOpen, closeMenu }) {
  return (
    <div
      className={`flex flex-col gap-5 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="font-bold pt-5">products</h2>
      <ul className="flex flex-col gap-5 text-filterLabel  text-primary  ">
        {navigationData.map((item) => (
          <li key={item.slug}>
            <Link
              onClick={closeMenu}
              href={`/products?category=${item.slug}`}
              className="hover:text-text-muted"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationList;
