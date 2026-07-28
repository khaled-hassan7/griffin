import { products } from "@/data/mockData";
import ProductCard from "./ProductCard";
import EmptyProducts from "./EmptyProducts";

function ProductGrid({ category }) {
  const filteredData =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  if (filteredData.length === 0) return <EmptyProducts />;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
      {filteredData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductGrid;
