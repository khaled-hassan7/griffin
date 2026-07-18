import { newArrivals } from "@/data/mockData";
import NewArrivalsCard from "./NewArrivalsCard";
import Link from "next/link";
import Button from "../ui/Button";
function NewArrivals() {
  return (
    <div className="lg:pb-24 pb-12">
      <div className="py-11 lg:py-40 max-w-235 mx-auto">
        <p className="mb-3 text-xs text-center ">SS26 Collection</p>{" "}
        <h2 className="lg:text-5xl text-2xl px-4 text-center md:text-3xl">
          As the new season begins, we explore a refined balance between
          simplicity and innovation. Discover Griffin SS26, crafted for modern
          everyday wear.
        </h2>
      </div>

      <div className=" overflow-hidden pt-12">
        <div className="flex animate-marquee w-max">
          {newArrivals.map((arrival) => (
            <NewArrivalsCard key={arrival.id} arrival={arrival} />
          ))}
          {newArrivals.map((arrival) => (
            <NewArrivalsCard key={`copy-${arrival.id}`} arrival={arrival} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center pt-12 pb-16 ">
        <Button href={"/products/newCollection"}>Shop collection</Button>
      </div>
    </div>
  );
}
export default NewArrivals;
