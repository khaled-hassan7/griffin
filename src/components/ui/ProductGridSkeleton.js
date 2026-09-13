import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
