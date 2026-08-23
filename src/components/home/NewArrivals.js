import NewArrivalsCard from "./NewArrivalsCard";
import Button from "../ui/Button";
import { getCollectionProducts } from "@/data/helpers";
function NewArrivals() {
  const ss26Campaign = getCollectionProducts("new-arrivals");
  const { slug, products } = ss26Campaign;

  return (
    <div className="lg:pb-24 pb-12">
      <div className=" overflow-hidden pt-12">
        <div className="flex animate-marquee w-max">
          {products.map((product) => (
            <NewArrivalsCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <NewArrivalsCard key={`copy-${product.id}`} product={product} />
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
