import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";

async function page({ searchParams }) {
  const category = (await searchParams).category ?? "all";
  return (
    <div className="flex flex-col  pt-20 min-h-screen gap-5">
      <CategoryFilter category={category} />
      <ProductGrid category={category} />
    </div>
  );
}

export default page;
