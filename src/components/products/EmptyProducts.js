function EmptyProducts() {
  return (
    <div className="flex flex-col gap-10 pt-15 items-center text-primary">
      <h2 className="text-primary font-bold text-2xl">No products found!</h2>
      <p className="font-semibold text-emptyState">
        We couldn&apos;t find any products matching your selection. Try a
        different category or browse all products.
      </p>
    </div>
  );
}

export default EmptyProducts;
