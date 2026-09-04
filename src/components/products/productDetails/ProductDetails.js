import DesktopGallary from "./DesktopGallary";
import MobileGallary from "./MobileGallary";
import ProductInfo from "./ProductInfo";
import { getProduct } from "@/data/products";

async function ProductDetails({ slug }) {
  const product = await getProduct(slug);
  return (
    <div className=" grid grid-cols-1 gap-10 md:px-10 md:pt-8 pb-12 md:grid-cols-[2fr_1fr] md:pb-24">
      <div className="md:hidden">
        <MobileGallary product={product} />
      </div>
      <div className="hidden md:block">
        <DesktopGallary product={product} />
      </div>

      <ProductInfo product={product} />
    </div>
  );
}

export default ProductDetails;
