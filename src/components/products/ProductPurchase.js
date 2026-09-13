"use client";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import SizeSelector from "./SizeSelector";
import { useCartStore } from "../cart/CartStore";
const sizes = ["s", "m", "l", "lg", "xl"];

function ProductPurchase({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart);
  const [selectedSize, setSelectedSize] = useState("");
  const { price, images, name, id, stock } = product;
  const cartItemId = `${id}-${selectedSize}`;
  
  return (
    <div className="grid grid-cols-2 text-addToCart absolute left-0 bottom-2 w-full px-1  opacity-0 group-hover:opacity-100">
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <AddToCartButton
        disabled={!selectedSize}
        className="h-6.5"
        onClick={() => {
          addToCart({
            cartItemId,
            price: price,
            images_url: images[1],
            size: selectedSize,
            name: name,
            id: id,
            quantity: 1,
            stock,
          });
          setSelectedSize("");
          openCart();
        }}
      >
        {selectedSize ? "add" : "select size"}
      </AddToCartButton>
    </div>
  );
}

export default ProductPurchase;
