"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function CategoryCard({ category }) {
  const { name, slug, image_url } = category;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const x = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 150,
    damping: 20,
  });

  const y = useSpring(useTransform(mouseY, [0, 1], [-4, 4]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      className="group relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/products?category=${slug}`}>
        <motion.div style={{ x, y }}>
          <Image
            src={image_url}
            alt={name}
            quality={70}
            width={1350}
            height={1800}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-101"
          />
        </motion.div>
      </Link>

      <Link
        href={`/products?category=${slug}`}
        className="absolute bottom-4 left-4 font-bold text-white text-categoryHeading uppercase"
      >
        shop {name}
      </Link>
    </div>
  );
}

export default CategoryCard;
