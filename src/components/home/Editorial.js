import Link from "next/link";
import EditorialCard from "./EditorialCard";
import Image from "next/image";
import Button from "../ui/Button";
import { getCollectionProducts } from "@/data/helpers";
function Editorial() {
  const ss26Campaign = getCollectionProducts("ss26");
  const { name, slug, heroImage, description, products } = ss26Campaign;
  return (
    <div className=" pt-12 px-1 pb-12 md:pb-24 md:pt-24  ">
      <h2 className="text-primary font-bold text-6xl  px-5">{name}</h2>

      <div className="grid lg:grid-cols-2 gap-1 items-start pt-12 ">
        <Link
          href={`/products?collection=${slug}`}
          className="lg:sticky lg:top-0 "
        >
          <Image
            src={heroImage}
            alt={name}
            priority={true}
            quality={75}
            className="w-full h-auto "
          />
        </Link>

        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {products.map((product) => (
            <EditorialCard key={product.id} product={product} />
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
