import { newArrivals } from "@/data/mockData";
import NewArrivalsCard from "./NewArrivalsCard";
import Button from "../ui/Button";
function NewArrivals() {
  return (
    <div className="lg:pb-24 pb-12">
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
