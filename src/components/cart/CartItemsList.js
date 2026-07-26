import Image from "next/image";
import { useCartStore } from "./CartStore";

function CartItemsList({ item }) {
  const { name, price, description, size, images_url, id, quantity } = item;
  const deleteItem = useCartStore((state) => state.deleteFromCart);
  return (
    <li className="flex justify-between  border-t border-text-muted py-3">
      <div className="flex flex-col justi justify-center ">
        <h2 className=" text-text-muted pb-3">{name}</h2>

        <span className="text-">size {size}</span>
        <span>
          {price.toLocaleString()} le {"\u00D7"} {quantity}
        </span>
        <button
          onClick={() => deleteItem(id)}
          className="text-start pt-8 text-text-muted  border-b w-fit uppercase"
        >
          remove
        </button>
      </div>
      <Image alt={name} className=" w-30" src={images_url} />
    </li>
  );
}

export default CartItemsList;
