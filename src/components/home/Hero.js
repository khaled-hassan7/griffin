import Image from "next/image";

function Hero() {
  const HERO_IMAGE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/hero_image/hero.webp`;
  return (
    <div
      className="relative h-screen bg-linear-to-b from-neutral-700 via-neutral-900 to-black "
      id="hero"
    >
      <Image
        src={HERO_IMAGE_URL}
        alt="heroImage"
        priority={true}
        fetchPriority="high"
        fill
        sizes="100vw"
        className="object-cover object-[15%]"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRoYCAABXRUJQVlA4WAoAAAAgAAAAFwAADgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggmAAAADAEAJ0BKhgADwA+tUieSackIqEwCADgFolpAAPkgZSQ17MgLUEXqa41qAD+wbvdNcYkA0/vmTDF3KY5TH8/88H6w5UDl76kkkIuPyelN5xp3pqfLYhcD/o9z143jXXyjDlHVFq8NSpM1ZWMUu0e4tx2XtuHPuSMPb+N4069DjOTtOa7d/rObartFVDbzygMlI+nDiTCgAAA"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 to-transparent z-10" />
    </div>
  );
}

export default Hero;
