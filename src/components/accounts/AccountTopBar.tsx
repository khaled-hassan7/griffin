"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/account": "Account",
  "/account/orders": "Orders",
  "/account/personal-info": "Personal details",
  "/account/my-addresses": "My address",
};

function AccountTopBar() {
  const pathname = usePathname();
  const title = titles[pathname ?? ""];

  return (
    <div className="lg:hidden relative flex items-center justify-center py-4 border-b border-neutral-200">
      <button
        type="button"
        onClick={() => history.back()}
        aria-label="Go back"
        className="absolute left-4"
      >
        <ArrowLeft strokeWidth={1.5} size={24} />
      </button>{" "}
      <h1 className="text-formHeading font-bold">{title}</h1>
    </div>
  );
}

export default AccountTopBar;
