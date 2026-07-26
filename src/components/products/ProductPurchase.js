"use client";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import SizeSelector from "./SizeSelector";
import { useCartStore } from "../cart/CartStore";
import { productDetaleis } from "@/data/mockData";
const sizes = ["s", "m", "l", "lg", "xl"];

function ProductPurchase({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedSize, setSelectedSize] = useState("");
  const { price, images_url, name, id, quantity } = productDetaleis;

  return (
    <div className="grid grid-cols-2 absolute left-0 bottom-2 w-full px-1 opacity-0 group-hover:opacity-100">
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <AddToCartButton
        disabled={!selectedSize}
        className="h-6 text-xs"
        onClick={() => {
          addToCart({
            price: price,
            images_url: images_url[0],
            size: selectedSize,
            name: name,
            id: id,
            quantity: quantity,
          });
          setSelectedSize("");
        }}
      >
        {selectedSize ? "add" : "select size"}
      </AddToCartButton>
    </div>
  );
}

export default ProductPurchase;
