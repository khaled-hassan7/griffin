"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const links = [
  { href: "/account/orders", label: "Orders" },
  { href: "/account/personal-info", label: "Personal details" },
  { href: "/account/my-addresses", label: "My address" },
];

function AccountNavList() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link, index) => {
        const isActive = pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-between py-5 ${
              index > 0 ? "border-t border-neutral-200" : ""
            } ${isActive ? "font-bold" : ""}`}
          >
            <span>{link.label}</span>
            <ChevronRight strokeWidth={1.5} size={18} />
          </Link>
        );
      })}
    </nav>
  );
}

export default AccountNavList;
