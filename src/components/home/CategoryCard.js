import Image from "next/image";
import Link from "next/link";

function CategoryCard({ category }) {
  const { name, slug, image_url } = category;
  return (
    <div className="relative ">
      <Link href={`/products?category=${slug}`}>
        <Image
          src={image_url}
          alt={name}
          priority={true}
          quality={75}
          className="w-full h-auto "
        />
      </Link>
      <Link
        href={`/products?category=${slug}`}
        className="absolute bottom-4 left-4 font-bold text-white text-categoryHeading uppercase"
      >
        shop {name}
      </Link>
    </div>
  );
}

export default CategoryCard;
