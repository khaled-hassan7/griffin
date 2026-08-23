import Image from "next/image";
import Link from "next/link";

function EditorialCard({ product }) {
  const { name, slug, images } = product;
  return (
    <div className="gap-2">
      <Link href={`/products?collection=${slug}`}>
        <Image
          src={images[0]}
          alt={name}
          quality={75}
          className="w-full h-auto "
        />
      </Link>
    </div>
  );
}

export default EditorialCard;
