"use client";

import Logo from "@/components/ui/Logo";
import { getCollectionProducts } from "@/data/helpers";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function FooterTop() {
  const [index, setIndex] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([]);

  const footerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);


  const newArrivalsCollection = getCollectionProducts("new-arrivals");
  const products = newArrivalsCollection?.products ?? []; 

  useEffect(() => {
    let inimationFrame;
    const footer = footerRef?.current;
    function handleMouseMove(e) {
      cancelAnimationFrame(inimationFrame);

      inimationFrame = requestAnimationFrame(() => {
        const rect = footerRef.current.getBoundingClientRect();
        const currentImage = products[imageIndex.current];

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const id = crypto.randomUUID();

        const distance = Math.hypot(
          x - lastPosition.current.x,
          y - lastPosition.current.y,
        );

        if (distance < 50) return;

        lastPosition.current = { x, y };

        setIndex({ x: x, y: y });

        setImages((prev) => [
          ...prev,
          {
            id,
            src: currentImage.images[0],
            x,
            y,
          },
        ]);

        imageIndex.current = (imageIndex.current + 1) % products.length;

        setTimeout(() => {
          setImages((prev) => prev.filter((image) => image.id !== id));
        }, 500);
      });
    }

    footer.addEventListener("mousemove", handleMouseMove);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(inimationFrame);
    };
  }, []);

  return (
    <div
      className="bg-primary w-full pt-20 lg:pt-24 relative overflow-hidden flex items-center justify-center flex-1"
      ref={footerRef}
    >
      <AnimatePresence>
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute w-45 flex items-center justify-center z-0 "
            style={{
              top: image.y,
              left: image.x,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image src={image.src} alt="" className="absolute w-full h-auto " />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="relative z-50 w-[clamp(400px,70vw,1000px)] px-5">
        <Logo />
      </div>
    </div>
  );
}

export default FooterTop;
