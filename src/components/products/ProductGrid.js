import ProductCard from "./ProductCard";
import EmptyProducts from "./EmptyProducts";
import CategoryFilter from "./CategoryFilter";
import { getAllProducts } from "@/data/products";
import ProductList from "./ProductList";
import { Suspense } from "react";
import ProductGridSkeleton from "../ui/ProductGridSkeleton";
function ProductGrid({ category }) {
  return (
    <>
      <CategoryFilter category={category} />
      <Suspense key={category} fallback={<ProductGridSkeleton/>} >
        <ProductList category={category} />
      </Suspense>
    </>
  );
}

export default ProductGrid;
