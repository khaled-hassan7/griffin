import Image from "next/image";
import Link from "next/link";

function EditorialCard({ products }) {
  const { name, slug, image_url } = products;
  return (
    <div className="gap-2">
      <Link href={`/products/${slug}`}>
        <Image
          src={image_url}
          alt={name}
          priority={true}
          quality={75}
          className="w-full h-auto "
        />
      </Link>
    </div>
  );
}

export default EditorialCard;
