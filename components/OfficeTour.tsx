"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import Image from "next/image";

// import './GoogleReviews.css'

export default function GoogleReviews() {
  const [city, setCity] = useState<"brampton" | "vaughan">("vaughan");

  const images = {
    vaughan: [
      "/images/home-tour-1.jpg",
      "/images/home-tour-2.jpg",
      "/images/home-tour-3.jpg",
      "/images/home-tour-1.jpg"
    ],
    brampton: [
      "/images/home-tour-3.jpg",
      "/images/home-tour-2.jpg",
      "/images/home-tour-1.jpg",
      "/images/home-tour-3.jpg"
    ],
  };

  return (
    <>
      <nav className="mt-7">
        <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full">
          <li
            className={city === "vaughan" ? "selected" : ""}
            onClick={() => setCity("vaughan")}
          >
            Vaughan
          </li>
          <li
            className={city === "brampton" ? "selected" : ""}
            onClick={() => setCity("brampton")}
          >
            Brampton
          </li>
        </ul>
      </nav>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images[city].map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={image}
                width={488}
                height={0}
                alt=""
                aria-hidden="true"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}