import ProductDetails from "@/components/products/productDetails/ProductDetails";

async function page({ params }) {
  const { slug } = await params;
  return (
    <div className="pt-20 min-h-screen">
      <ProductDetails slug={slug} />
    </div>
  );
}

export default page;
