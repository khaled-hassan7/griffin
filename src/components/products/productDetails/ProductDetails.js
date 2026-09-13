import dynamic from "next/dynamic";
import DesktopGallary from "./DesktopGallary";
import ProductInfo from "./ProductInfo";
import { getProduct } from "@/data/products";

const MobileGallery = dynamic(
  () => import("@/components/products/productDetails/MobileGallery"),
  {
    loading: () => (
      <div className="w-full aspect-1125/1688 bg-gray-100 animate-pulse" />
    ),
  },
);
async function ProductDetails({ slug }) {
  const product = await getProduct(slug);
  return (
    <div className=" grid grid-cols-1 gap-10 md:px-10 md:pt-8 pb-12 md:grid-cols-[2fr_1fr] md:pb-24">
      <div className="md:hidden">
        <MobileGallery product={product} />
      </div>
      <div className="hidden md:block">
        <DesktopGallary product={product} />
      </div>

      <ProductInfo product={product} />
    </div>
  );
}

export default ProductDetails;
