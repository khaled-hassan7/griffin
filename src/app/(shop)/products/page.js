import Collection from "@/components/products/Collection";
import ProductGrid from "@/components/products/ProductGrid";

async function page({ searchParams }) {
  const { category, collection } = await searchParams;
  return (
    <div className="flex flex-col  pt-20 min-h-screen gap-5">
      {collection ? (
        <Collection collection={collection ?? "new-arrivals"} />
      ) : (
        <ProductGrid category={category ?? "all"} />
      )}
    </div>
  );
}

export default page;
