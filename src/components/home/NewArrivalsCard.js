import Image from "next/image";

function NewArrivalsCard({ arrival }) {
  const { name, image_url } = arrival;

  return (
    <div className=" shrink-0 w-[50vw]  md:w-110 ">
      <Image
        src={image_url}
        alt={name}
        priority={true}
        quality={75}
        className="w-full h-auto "
      />
    </div>
  );
}

export default NewArrivalsCard;
