import Image from "next/image";
import heroImage from "@/assets/images/hero/heroImage3.webp";


function Hero() {
  return (
    <div className="relative h-screen ">
      <Image
        src={heroImage}
        alt="heroImage"
        priority={true}
        fill
        quality={75}
        className="object-cover"
      />

      <div className="absolute inset-0 " />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-7xl">Discover Collection</h1>
          <button className=" rounded-xl  text-primary text-7xl">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
