import { products } from "@/data/mockData";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductGrid;
