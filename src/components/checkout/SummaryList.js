import Image from "next/image";

function SummaryList({ item }) {
  const { name, price, description, size, images_url, id, quantity } = item;
  return (
    <li className="flex  py-3">
      <Image alt={name} className=" w-30 mr-5" src={images_url} />
      <div className="flex flex-col  ">
        <h2 className=" pb-3">{name}</h2>
        <span>{price.toLocaleString()}LE</span>
        <span className="text-text-muted">size: {size}</span>
        <span className="text-text-muted">quantity: {quantity}</span>
      </div>
    </li>
  );
}

export default SummaryList;
