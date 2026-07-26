"use client";
import { useState } from "react";

function SizeSelector({ sizes, selectedSize, setSelectedSize }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=" relative h-5 font-semibold"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen && (
        <ul className="absolute w-full bottom-0 left-0  bg-white  border border-border border-b-0 ">
          {sizes.map((size) => (
            <li key={size}>
              <button
                className="py-1  pl-2 text-xs hover:bg-surface hover:text-primary cursor-pointer w-full text-start "
                onClick={() => {
                  setSelectedSize(size);
                  setIsOpen(false);
                }}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="w-full text-xs border border-border bg-white text-start pl-2 h-6 "
        onClick={() => setIsOpen((open) => !open)}
      >
        {selectedSize ? selectedSize : "size"}
      </button>
    </div>
  );
}

export default SizeSelector;
