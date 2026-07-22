"use client";

import { productDetaleis } from "@/data/mockData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function MobileGallery() {
  const { images_url, name } = productDetaleis;

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
      {images_url.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
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
