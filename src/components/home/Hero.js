import Image from "next/image";
import { supabase } from "@/lib/supabase";

function Hero() {
  const { data } = supabase.storage
    .from("hero_image")
    .getPublicUrl("hero.webp");
  return (
    <div className="relative h-screen " id="hero">
      <Image
        src={data.publicUrl}
        alt="heroImage"
        priority={true}
        fill
        quality={75}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

export default Hero;
