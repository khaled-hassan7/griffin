import Image from "next/image";

function NewArrivalsCard({ slug, image }) {
  return (
    <div className=" shrink-0 w-[50vw]  md:w-110 ">
      <Image
        src={image}
        alt={slug}
        width={1200}
        height={1800}
        priority={true}
        quality={75}
        className="w-full h-auto "
      />
    </div>
  );
}

export default NewArrivalsCard;
