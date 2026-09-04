import Image from "next/image";

function DesktopGallary({ product }) {
  const { images, name } = product;

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-2 gap-1  ">
      {images.map((image, index) => (
        <Image
          key={index}
          alt={name}
          width={1125}
          height={1688}
          className="w-full h-auto"
          src={image}
        />
      ))}{" "}
    </div>
  );
}

export default DesktopGallary;
