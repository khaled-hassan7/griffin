import Image from "next/image";
import Link from "next/link";
import ProductPurchase from "./ProductPurchase";
import EmptyProducts from "./EmptyProducts";

function ProductCard({ product }) {
  const { price, slug, images, sizes, name, id } = product;
  return (
    <div className=" px-1 pb-9 group">
      <div className="relative">
        <Link href={`/products/${slug}`}>
          <Image
            src={images[0]}
            quality={75}
            alt={name}
            className=" block h-auto w-full"
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
