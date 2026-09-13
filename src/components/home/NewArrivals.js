import NewArrivalsCard from "./NewArrivalsCard";
import Button from "../ui/Button";
import { getEditorialCollection } from "@/data/collections";
async function NewArrivals() {
  const newArrivalsCollection = await getEditorialCollection("new-arrivals");
  const { slug, images } = newArrivalsCollection;

  return (
    <div className="lg:pb-24 pb-12">
      <div className=" overflow-hidden pt-12">
        <div className="flex animate-marquee w-max">
          {images.map((image, index) => (
            <NewArrivalsCard
              key={index}
              image={image}
              slug={`${slug}-${index}`}
            />
          ))}
          {images.map((image, index) => (
            <NewArrivalsCard
              key={`copy-${index}`}
              image={image}
              slug={`${slug}-${index}-copy`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center pt-12 pb-16 ">
        <Button href={`/products?collection=${slug}`}>Shop collection</Button>
      </div>
    </div>
  );
}
export default NewArrivals;
