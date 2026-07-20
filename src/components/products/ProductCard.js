import Image from "next/image";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

function ProductCard({ product }) {
  const { price, slug, image_url, sizes, name, id } = product;
  return (
    <div className=" mb-5 px-1.5 pb-9 group">
      <div className="relative">
        <Link href={`/${id}/${slug}`}>
          <Image
            src={image_url}
            quality={80}
            alt={name}
            className=" block h-auto w-full"
          />
        </Link>

        <div className="grid grid-cols-2 absolute left-0 bottom-2 w-full px-1 opacity-0 group-hover:opacity-100">
          <SizeSelector sizes={sizes} />
          <AddToCartButton />
        </div>
      </div>

      <div className="mt-2 p-2 text-primary">
        <h3>{name}</h3>
        <span>EGY {price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
