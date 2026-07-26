"use client";

import { useState } from "react";
import AddToCartButton from "../AddToCartButton";
import { useCartStore } from "@/components/cart/CartStore";

function ProductActions({ productDetaleis }) {
  const { name, price, sizes, images_url, quantity } = productDetaleis;
  const [selectedSize, setSelectedSize] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart);

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
      <AddToCartButton
        disabled={!selectedSize}
        className="py-1.5 text-sm"
        onClick={() => {
          addToCart({
            name: name,
            price: price,
            size: selectedSize,
            images_url: images_url[0],
            quantity: quantity,
          });
          openCart();
        }}
      >
        {selectedSize ? "ADD TO CART" : "Select Size"}
      </AddToCartButton>
    </>
  );
}

export default ProductActions;
