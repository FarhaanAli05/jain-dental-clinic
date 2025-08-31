"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";

// import './GoogleReviews.css'

export default function GoogleReviews() {
  const [city, setCity] = useState<"brampton" | "vaughan">("brampton");

  const reviews = {
    brampton: [
      "Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!\n\n- Haiqa S.",
      "Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!\n\n- Haiqa S.",
      "Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!\n\n- Haiqa S.",
      // "Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!\n\n- Haiqa S.",
    ],
    vaughan: [
      "Vaughan review 1",
      "Vaughan review 2",
      "Vaughan review 3",
    ]
  };

  return (
    <>
      <nav className="mt-7">
        <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full">
          <li
            className={city === "brampton" ? "selected" : ""}
            onClick={() => setCity("brampton")}
          >
            Brampton
          </li>
          <li
            className={city === "vaughan" ? "selected" : ""}
            onClick={() => setCity("vaughan")}
          >
            Vaughan
          </li>
        </ul>
      </nav>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews[city].map((review, i) => {
          return (
            <SwiperSlide key={i} className="flex text-left [&>p:nth-child(even)]:bg-[#D5ECF9] [&>p:nth-child(odd)]:bg-white [&>p]:p-10 gap-x-6 [&>p]:rounded-[10px] mt-8">
              <p>{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}