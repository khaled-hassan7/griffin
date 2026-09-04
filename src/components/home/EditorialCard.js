import Image from "next/image";
import Link from "next/link";

function EditorialCard({ image, slug }) {
  return (
    <div className="gap-2">
      <Link href={`/products?collection=${slug}`}>
        <Image
          src={image}
          alt={slug}
          quality={75}
          width={1200}
          height={1800}
        />
      </Link>
    </div>
  );
}

export default EditorialCard;
