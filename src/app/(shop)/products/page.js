import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";

function page() {
  return (
    <div className="flex flex-col  items-center pt-20 min-h-screen gap-5">
      <CategoryFilter />
      <ProductGrid />
    </div>
  );
}

export default page;
