import Image from "next/image";
import Link from "next/link";
import ProductPurchase from "./ProductPurchase";

function ProductCard({ product }) {
  const { price, slug, images, sizes, name, id } = product;
  return (
    <div className=" px-1 pb-9 group product-card">
      <div className="relative">
        <Link href={`/products/${slug}`} className="block">
          <Image
            width={1125}
            height={1688}
            src={images[1]}
            quality={75}
            alt={name}
            className="block w-full opacity-100 group-hover:opacity-0"
          />
          <Image
            width={1125}
            height={1688}
            src={images[0]}
            quality={75}
            alt={name}
            className="absolute inset-0 w-full opacity-0 group-hover:opacity-100"
          />
        </Link>

        <ProductPurchase product={product} />
      </div>
      <div className="p-2 text-primary">
        <h3 className="text-productTitle truncate">{name}</h3>
        <span className="text-price">EGP {price.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default ProductCard;
