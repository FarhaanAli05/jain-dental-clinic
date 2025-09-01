"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";

export default function GoogleReviews() {
  const [city, setCity] = useState<"brampton" | "vaughan">("brampton");

  const reviews = {
    brampton: [
      "\"Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!\"\n\n- Haiqa S.",
      "\"Always a great experience. The doctor's attention to detail is so apparent with making sure that my filling was done well and I could bite down normally. All my questions were answered with patience and clarity. I'm very happy with the professionalism, care, and warmth from the entire team. They truly go above and beyond to ensure comfort and satisfaction\"\n\n- Lia P.",
      "\"I had a great experience at the dental office! The waiting room was super comfy, and I barely waited at all. The place was spotless. The staff was very experienced and took care of my concerns in such a professional manner that I felt completely at ease—definitely a welcome change from my past dental visits! I'll be sure to recommend it to my friends and family!\"\n\n- Mona R.",
      "\"Been going here for years, highly recommended! Dr. Jain and his staff are friendly and highly professional. They are punctual and you hardly have to wait for your appointment.\"\n\n- Hi S.",
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
        rewind
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192] !pb-10 mb-[-10] "
      >
        {reviews[city].map((review, i) => {
          return (
            <SwiperSlide key={i} className={`flex text-left ${i % 2 === 0 ? "bg-white" : "bg-[#D5ECF9]"} p-10 gap-x-6 rounded-[10px] mt-8 whitespace-pre-line !h-full`}>
              <p>{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}