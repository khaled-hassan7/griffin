import CategoryFilter from "./CategoryFilter";
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
