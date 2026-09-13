"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function MobileGallery({ product }) {
  const { images, name } = product;

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      loop={false}
      pagination={{
        clickable: true,
      }}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            width={1125}
            height={1688}
            src={image}
            sizes="100vw"
            alt={name}
            priority={index === 0}
            className="w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MobileGallery;
