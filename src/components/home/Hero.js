import Image from "next/image";
import heroImage from "@/assets/images/hero/heroImage3.webp";

function Hero() {
  return (
    <div className="relative h-screen " id="hero">
      <Image
        src={heroImage}
        alt="heroImage"
        priority={true}
        fill
        quality={100}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

export default Hero;
