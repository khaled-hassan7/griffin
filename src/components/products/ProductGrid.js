import { products } from "@/data/mockData";
import ProductCard from "./ProductCard";
import EmptyProducts from "./EmptyProducts";
import CategoryFilter from "./CategoryFilter";

function ProductGrid({ category }) {
  const filteredData =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <CategoryFilter category={category} />
      {filteredData.length === 0 ? (
        <EmptyProducts />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {filteredData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductGrid;
