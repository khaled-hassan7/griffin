"use client";
import { useState } from "react";

const sizes = ["s", "m", "l", "lg", "xl"];

function SizeSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className=" relative h-5 font-semibold"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <ul className="absolute w-full bottom-0 left-0  bg-white  border border-border border-b-0 ">
          {sizes.map((size) => (
            <li
              key={size}
              className="py-1  pl-2 text-xs hover:bg-surface hover:text-primary cursor-pointer "
            >
              {size}
            </li>
          ))}
        </ul>
      )}

      <button className="w-full text-xs border border-border bg-white text-start pl-2 h-6 ">
        Size
      </button>
    </div>
  );
}

export default SizeSelector;
