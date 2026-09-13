import Image from "next/image";
import { useCartStore } from "./CartStore";
import { Minus, Plus } from "lucide-react";

function CartItemsList({ item }) {
  const {
    name,
    price,
    description,
    size,
    images_url,
    id,
    quantity,
    cartItemId,
    stock,
  } = item;

  const deleteItem = useCartStore((state) => state.deleteFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <li className="flex gap-4 justify-between border-t border-border py-5">
      <div className="flex flex-1 flex-col justify-between py-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary  text-productTitle font-bold leading-snug">
            {name}
          </h3>
          <span className="text-productMeta text-text-muted uppercase tracking-wide">
            size {size}
          </span>

          <span className="text-price font-medium ">
            {price.toLocaleString()} le {"\u00D7"} {quantity}
          </span>
        </div>

        <div className="relative flex items-center justify-between mt-4">
          <button
            onClick={() => deleteItem(cartItemId)}
            className="text-cartRemove text-start text-text-muted border-b border-text-muted/50 w-fit uppercase hover:text-primary hover:border-primary transition-colors"
          >
            remove
          </button>

          <div className="border border-border  flex items-center text-primary">
            <button
              onClick={() => decreaseQuantity(cartItemId)}
              disabled={quantity <= 1}
              className="disabled:opacity-40 flex items-center justify-center size-8 hover:bg-black/5 transition-colors"
            >
              <Minus size={16} />
            </button>

            <span className="px-3 w-8 text-center">{quantity}</span>

            <button
              onClick={() => increaseQuantity(cartItemId)}
              disabled={quantity >= stock}
              className="disabled:opacity-40 flex items-center justify-center size-8 hover:bg-black/5 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          {quantity >= stock && (
            <span className="absolute left-0 top-full mt-1 text-cartRemove text-error whitespace-nowrap">
              max stock reached
            </span>
          )}
        </div>
      </div>

      <div className="relative w-28 aspect-2/3 shrink-0 rounded-sm overflow-hidden bg-surface-1">
        <Image
          alt={name}
          fill
          sizes="112px"
          className="object-cover"
          src={images_url}
        />
      </div>
    </li>
  );
}

export default CartItemsList;
