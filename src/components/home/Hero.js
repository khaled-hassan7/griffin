import Image from "next/image";

function Hero() {
  const HERO_IMAGE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/hero_image/hero.webp`;
  return (
    <div className="relative h-screen " id="hero">
      <Image
        src={HERO_IMAGE_URL}
        alt="heroImage"
        priority={true}
        fetchPriority="high"
        fill
        sizes="100vw"
        className="object-cover object-[15%]"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 to-transparent z-10" />
    </div>
  );
}

export default Hero;
