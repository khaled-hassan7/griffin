import Categories from "@/components/home/Categories";
import Editorial from "@/components/home/Editorial";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
      <Editorial />
    </div>
  );
}
