"use client";

import { useState } from "react";
import AddToCartButton from "../AddToCartButton";

function ProductActions({ sizes }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            onClick={() => setSelectedSize(size)}
            className={`border text-sm text-primary border-border py-1 w-15 ${size === selectedSize ? "text-white bg-primary" : ""}`}
            key={size}
          >
            {size}
          </button>
        ))}
      </div>
      <AddToCartButton disabled={!selectedSize} className="py-1.5 text-sm">
        {selectedSize ? "ADD TO CART" : "Select Size"}
      </AddToCartButton>
    </>
  );
}

export default ProductActions;
