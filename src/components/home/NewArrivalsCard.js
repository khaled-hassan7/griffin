import Image from "next/image";

function NewArrivalsCard({ slug, image }) {
  return (
    <div className=" shrink-0 w-[50vw]  md:w-110 ">
      <Image
        src={image}
        alt={slug}
        width={1200}
        height={1800}
        quality={75}
        sizes="(max-width: 1024px) 50vw, 440px"
        className="w-full h-auto "
      />
    </div>
  );
}

export default NewArrivalsCard;
