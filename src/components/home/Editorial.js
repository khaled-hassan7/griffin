import Link from "next/link";
import EditorialCard from "./EditorialCard";
import Image from "next/image";
import Button from "../ui/Button";
import { getCollections } from "@/data/collections";
async function Editorial() {
  const ss26Campaign = await getCollections("ss26");
  const { name, slug, heroImage, description, images } = ss26Campaign;

  console.log(images);
  return (
    <div className=" pt-12 px-1 pb-12 md:pb-24 md:pt-24  ">
      <h2 className="text-primary font-bold px-5 text-4xl md:text-6xl">
        {name}
      </h2>

      <div className="grid lg:grid-cols-2 gap-1 items-start pt-12 ">
        <Link
          href={`/products?collection=${slug}`}
          className="lg:sticky lg:top-0 "
        >
          <Image
            src={heroImage}
            alt={name}
            width={1800}
            height={1800}
            priority={true}
            quality={75}
            className="w-full h-auto "
          />
        </Link>

        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {images.map((image, index) => (
            <EditorialCard key={index} image={image} slug={slug} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-5 justify-between pb-6">
        <div className=" lg:col-start-2">
          <p className="max-w-md text-bodySmall ">{description}</p>

          <div className="pt-6">
            <Button href={`/products?collection=${slug}`}>
              shop collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editorial;
