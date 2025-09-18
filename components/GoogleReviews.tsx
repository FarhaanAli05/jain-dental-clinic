"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GoogleReviews() {
  const reviews = {
    brampton: [
      '"Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!"\n\n- Haiqa S.',
      "\"Always a great experience. The doctor's attention to detail is so apparent with making sure that my filling was done well and I could bite down normally. All my questions were answered with patience and clarity. I'm very happy with the professionalism, care, and warmth from the entire team. They truly go above and beyond to ensure comfort and satisfaction\"\n\n- Lia P.",
      '"The best clinic in Brampton. It’s very well organized, no long waiting times, and the whole staff is very friendly and super nice. I’ve been going here for a long time and highly recommend it. Thank you for the always great service."\n\n- Baljir B.',
      '"My experience at Jain Dental was very delightful. All the staff were welcoming and the facility was very clean. My cleaning was very thorough and satisfying. Thank you for the great service to myself and our community."\n\n- Famata O.',
      '"I couldn’t be happier with my experience with Dr. Bhushan Jain and his staff. Great service and great people, I would recommend him to anyone."\n\n- Bhushan K.',
      '"I had a great experience at the dental office! The waiting room was super comfy, and I barely waited at all. The place was spotless. The staff was very experienced and took care of my concerns in such a professional manner that I felt completely at ease—definitely a welcome change from my past dental visits! I\'ll be sure to recommend it to my friends and family!"\n\n- Mona R.',
      '"Been going here for years, highly recommended! Dr. Jain and his staff are friendly and highly professional. They are punctual and you hardly have to wait for your appointment."\n\n- Hi S.',
      '"I am very impressed with the efficiency, professionalism, and understanding of all the staff at the clinic. Dr. Jain and his staff are extremely welcoming and friendly. Dr. Jain took out my wisdom teeth which was very close to the nerve... The experience was amazing and painless. I highly recommend this office if you have any dental concerns."\n\n- T K.',
      '"One of the best professionally managed dental clinics I have ever visited. Dr. Jain is super knowledgeable and competent. The staff from the dental hygienists to the dental assistants and the front office are efficient and pleasant and go above and beyond."\n\n- Dilkash K.',
    ],
    vaughan: [
      '"Very friendly and professional - all the staff are truly amazing and genuinely care about their clientele."\n\n-Randy Y.',
      '"Very professional, kind and courteous staff. Always a pleasure when visiting, which is hard to say when you visit a dentist. I would highly recommend Jain Dental to all my friends and family."\n\n- Jeff W.',
      '"The office staff is friendly and Dr. Meenakshi Jain is very professional. Quality of work is amazing, I am very happy with the service."\n\n- Sam M.',
      '"I had extreme tooth pain and called the clinic about 10 minutes after closing. Even though the doctor had left for the day, the team called her back and they reopened the clinic just for me. Dr. Meenakshi quickly identified the issue, confirmed it with an X-ray, and booked me in for treatment. The service was fantastic — the clinic truly put the needs of the patient first."\n\n- Rupal S.',
      '"Jain Dental is fantastic. I can\'t believe how accommodating they have been... They changed appointments around to make sure I was seen in a timely basis when I was in pain for my broken tooth. I highly recommend Jain Dental."\n\n- Carole S.',
      '"The staff is pleasant and professional. The office is always clean and appointments are punctual. Highly recommend."\n\n- J. E',
    ],
  };

  return (
    <div className="mt-7 text-center">
      <input
        type="radio"
        name="city-reviews"
        id="brampton-reviews"
        defaultChecked
        className="hidden"
      />
      <input
        type="radio"
        name="city-reviews"
        id="vaughan-reviews"
        className="hidden"
      />

      <ul className="mb-6 inline-flex cursor-pointer gap-6">
        <li>
          <label
            htmlFor="brampton-reviews"
            className="cursor-pointer rounded-full border border-[#0B7192] px-6 py-2.5 text-[#0B7192]"
          >
            Brampton
          </label>
        </li>
        <li>
          <label
            htmlFor="vaughan-reviews"
            className="cursor-pointer rounded-full border border-[#0B7192] px-6 py-2.5 text-[#0B7192]"
          >
            Vaughan
          </label>
        </li>
      </ul>

      <div className="city-swiper brampton-reviews">
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
          className="mySwiper mb-[-10] !pb-10 [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192]"
        >
          {reviews.brampton.map((review, i) => (
            <SwiperSlide
              key={i}
              className={`flex text-left ${i % 2 === 0 ? "bg-white" : "bg-[#D5ECF9]"} mt-8 !h-full cursor-grab gap-x-6 rounded-[10px] p-10 whitespace-pre-line`}
            >
              <p>{review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="city-swiper vaughan-reviews">
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
          className="mySwiper mb-[-10] !pb-10 [--swiper-pagination-bottom:0px] [--swiper-pagination-color:#0B7192]"
        >
          {reviews.vaughan.map((review, i) => (
            <SwiperSlide
              key={i}
              className={`flex text-left ${i % 2 === 0 ? "bg-white" : "bg-[#D5ECF9]"} mt-8 !h-full cursor-grab gap-x-6 rounded-[10px] p-10 whitespace-pre-line`}
            >
              <p>{review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .city-swiper {
          display: none;
        }
        #brampton-reviews:checked ~ ul li:nth-child(1) label {
          background-color: #0b7192;
          color: white;
        }
        #vaughan-reviews:checked ~ ul li:nth-child(2) label {
          background-color: #0b7192;
          color: white;
        }
        #brampton-reviews:checked ~ .city-swiper.brampton-reviews {
          display: block;
        }
        #brampton-reviews:checked ~ .city-swiper.vaughan-reviews {
          display: none;
        }
        #vaughan-reviews:checked ~ .city-swiper.vaughan-reviews {
          display: block;
        }
        #vaughan-reviews:checked ~ .city-swiper.brampton-reviews {
          display: none;
        }
      `}</style>
    </div>
  );
}
