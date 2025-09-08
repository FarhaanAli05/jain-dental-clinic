"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OfficeTour() {
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
    <div className="mt-7 text-center">
      <input type="radio" name="city-tour" id="vaughan-tour" defaultChecked className="hidden" />
      <input type="radio" name="city-tour" id="brampton-tour" className="hidden" />

      <ul className="inline-flex gap-6 mb-6 cursor-pointer">
        <li>
          <label
            htmlFor="vaughan-tour"
            className="px-6 py-2.5 rounded-full border border-[#0B7192] text-[#0B7192] cursor-pointer"
          >
            Vaughan
          </label>
        </li>
        <li>
          <label
            htmlFor="brampton-tour"
            className="px-6 py-2.5 rounded-full border border-[#0B7192] text-[#0B7192] cursor-pointer"
          >
            Brampton
          </label>
        </li>
      </ul>

      <div className="city-swiper vaughan-tour">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          rewind
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192] !pb-10 mb-[-10]"
        >
          {images.vaughan.map((src, i) => (
            <SwiperSlide key={i} className="gap-x-6 mt-8 cursor-grab">
              <Image
                src={src}
                className="h-92 rounded-[10px] object-cover cursor-grab"
                width={488}
                height={0}
                alt=""
                aria-hidden="true"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="city-swiper brampton-tour">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          rewind
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192] !pb-10 mb-[-10]"
        >
          {images.brampton.map((src, i) => (
            <SwiperSlide key={i} className="gap-x-6 mt-8 cursor-grab">
              <Image
                src={src}
                className="h-92 rounded-[10px] object-cover"
                width={488}
                height={0}
                alt=""
                aria-hidden="true"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .city-swiper {
          display: none;
        }
        #vaughan-tour:checked ~ ul li:nth-child(1) label {
          background-color: #0B7192;
          color: white;
        }
        #brampton-tour:checked ~ ul li:nth-child(2) label {
          background-color: #0B7192;
          color: white;
        }
        #vaughan-tour:checked ~ .city-swiper.vaughan-tour {
          display: block;
        }
        #vaughan-tour:checked ~ .city-swiper.brampton-tour {
          display: none;
        }
        #brampton-tour:checked ~ .city-swiper.brampton-tour {
          display: block;
        }
        #brampton-tour:checked ~ .city-swiper.vaughan-tour {
          display: none;
        }
      `}</style>
    </div>
  );
}
