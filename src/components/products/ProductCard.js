import Image from "next/image";
import Link from "next/link";
import ProductPurchase from "./ProductPurchase";

function ProductCard({ product, category }) {
  const { price, slug, image_url, sizes, name, id } = product;

  return (
    <div className=" mb-5 px-1.5 pb-9 group">
      <div className="relative">
        <Link href={`/${id}/${slug}`}>
          <Image
            src={image_url}
            quality={75}
            alt={name}
            className=" block h-auto w-full"
          />
        </Link>
        <ProductPurchase product={product} />
      </div>
      <div className="mt-2 p-2 text-primary">
        <h3>{name}</h3>
        <span>EGY {price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
