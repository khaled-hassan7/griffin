"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function ProductAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 border-b border-text-muted justify-start">
      <button
        onClick={() => setIsOpen((e) => !e)}
        className="text-primary flex justify-between items-center px-1 trans "
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`text-sm text-text-muted px-1 grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ProductAccordion;
