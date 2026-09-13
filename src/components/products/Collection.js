import { getProduct } from "@/data/products";
import ProductCard from "./ProductCard";
import { getCollectionProducts } from "@/data/helpers";

async function Collection({ collection }) {
  const filteredCollection = await getProduct(collection);
  if (!filteredCollection || filteredCollection.length === 0) {
    return (
      <p className="px-4 pt-7 text-sm text-primary mx-auto">
        Collection not found
      </p>
    );
  }
  return (
    <div>
      <header className="flex  gap-5 pt-7  pb-4 px-4 text-sm font- text-primary overflow-x-auto scrollbar-none whitespace-nowrap sm:justify-center">
        {filteredCollection.name}
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        {filteredCollection.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
