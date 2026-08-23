import ProductCard from "./ProductCard";
import { getCollectionProducts } from "@/data/helpers";

function Collection({ collection }) {
  const filteredCollection = getCollectionProducts(collection);
  if (!filteredCollection) {
    return (
      <p className="px-4 pt-7 text-sm text-primary">Collection not found</p>
    );
  }

  const { name, products } = filteredCollection;

  return (
    <div>
      <header className="flex  gap-5 pt-7  pb-4 px-4 text-sm font- text-primary overflow-x-auto scrollbar-none whitespace-nowrap sm:justify-center">
        {name}
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
