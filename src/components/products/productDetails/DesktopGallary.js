import { productDetaleis } from "@/data/mockData";
import Image from "next/image";

function DesktopGallary() {
  const { images_url, name } = productDetaleis;

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-2 gap-1  ">
      {images_url.map((image, index) => (
        <Image key={index} alt={name} className="w-full h-auto" src={image} />
      ))}{" "}
    </div>
  );
}

export default DesktopGallary;
