import { productDetaleis } from "@/data/mockData";
import ProductActions from "./ProductActions";
import ProductAccordion from "./ProductAccordion";

function ProductInfo() {
  const { name, price, description, sizes } = productDetaleis;

  return (
    <div className="px-2  md:sticky md:top-28 md:self-start">
      <div className=" flex flex-col justify-end gap-5 pl-  ">
        <h2 className="text-4xl">{name}</h2>
        <span className="text-xl">EGP {price}</span>
        <p className="text-text-muted leading-7">{description}</p>

        <ProductActions productDetaleis={productDetaleis} />
        <ProductAccordion title="Materials & Care">
          <ul className="space-y-1 overflow-hidden">
            <li>Machine wash cold (30°C)</li>
            <li>Do not bleach</li>
            <li>Iron at low temperature</li>
            <li>Do not tumble dry</li>
            <li>Wash with similar colors</li>
          </ul>
        </ProductAccordion>
        <ProductAccordion title="Shipping & Returns">
          <p className=" overflow-hidden">
            Orders are processed within 1-2 business days. Standard delivery
            takes 2-5 business days. Returns are accepted within 14 days of
            delivery, provided the item is unworn, unwashed, and returned with
            its original tags.
          </p>
        </ProductAccordion>
      </div>
    </div>
  );
}

export default ProductInfo;
