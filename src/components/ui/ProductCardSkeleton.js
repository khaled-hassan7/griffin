export default function ProductCardSkeleton() {
  return (
    <div className="px-1 pb-9 group product-card animate-pulse">
      <div className="relative aspect-1125/1688 w-full bg-neutral-100 rounded-sm" />

      <div className="p-2 flex flex-col gap-2">
        <div className="h-4 bg-neutral-100 rounded w-3/4" />
        <div className="h-3 bg-neutral-100 rounded w-1/3" />
      </div>
    </div>
  );
}
