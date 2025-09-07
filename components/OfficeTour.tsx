"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import Image from "next/image";

export default function GoogleReviews() {
  const [city, setCity] = useState<"brampton" | "vaughan">("vaughan");

  const images = {
    vaughan: [
      "/images/about-banner.webp",
      "/images/home-tour-1.jpg",
      "/images/home-tour-3.jpg",
      "/images/home-services-background.jpg",
      "/images/clinic-vaughan-7.jpg",
      "/images/team-banner.jpg",
      "/images/clinic-vaughan-2.jpg",
      "/images/clinic-vaughan-5.jpg",
    ],
    brampton: [
      "/images/clinic-brampton-1.jpg",
      "/images/clinic-brampton-2.jpg",
      "/images/clinic-brampton-3.jpg",
      "/images/clinic-brampton-7.jpeg",
      "/images/clinic-brampton-11.jpg",
      "/images/clinic-brampton-17.jpg",
      "/images/clinic-brampton-4.jpeg",
      "/images/clinic-brampton-9.jpg",
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
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          }
        }}
        spaceBetween={20}
        rewind
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192] !pb-10 mb-[-10]"
      >
        {images[city].map((image, i) => {
          return (
            <SwiperSlide key={i} className="gap-x-6 mt-8">
              <Image
                src={image}
                className="h-92 rounded-[10px] object-cover"
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