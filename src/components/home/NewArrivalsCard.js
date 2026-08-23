import Image from "next/image";

function NewArrivalsCard({ product }) {
  const { images, name } = product;

  return (
    <div className=" shrink-0 w-[50vw]  md:w-110 ">
      <Image
        src={images[0]}
        alt={name}
        priority={true}
        quality={75}
        className="w-full h-auto "
      />
    </div>
  );
}

export default NewArrivalsCard;
