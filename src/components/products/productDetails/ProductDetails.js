import DesktopGallary from "./DesktopGallary";
import MobileGallary from "./MobileGallary";
import ProductInfo from "./ProductInfo";

function ProductDetails() {
  return (
    <div className=" grid grid-cols-1 gap-10 md:px-10 md:pt-8 pb-12 md:grid-cols-[2fr_1fr] md:pb-24">
      <div className="md:hidden">
        <MobileGallary />
      </div>
      <div className="hidden md:block">
        <DesktopGallary />
      </div>

      <ProductInfo />
    </div>
  );
}

export default ProductDetails;
