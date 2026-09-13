import { getAllProducts } from "@/data/products";
import EmptyProducts from "./EmptyProducts";
import ProductCard from "./ProductCard";

async function ProductList({ category }) {
  const products = await getAllProducts();
  const filteredData =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  if (filteredData.length === 0) return <EmptyProducts />;

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {filteredData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
