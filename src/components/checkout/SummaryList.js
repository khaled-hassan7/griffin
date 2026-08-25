import Image from "next/image";

function SummaryList({ item }) {
  const { name, price, description, size, images_url, id, quantity } = item;
  return (
    <li className="flex  py-3">
      <Image alt={name} className=" w-30 mr-5" src={images_url} />
      <div className="flex flex-col  ">
        <h2 className="text-productTitle pb-3">{name}</h2>
        <span className="text-price">{price.toLocaleString()}LE</span>
        <span className="text-text-muted text-productMeta">size: {size}</span>
        <span className="text-text-muted text-productMeta">
          quantity: {quantity}
        </span>
      </div>
    </li>
  );
}

export default SummaryList;
