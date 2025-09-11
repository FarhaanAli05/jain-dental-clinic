"use client";

import Image from "next/image";
import Container from "./Container";
import Navbar from "./Navbar";

export default function HeroSectionHome() {
  const images = [
    "/images/home-banner.webp",
    "/images/home-welcome.jpg",
    "/images/preventive-care-banner.jpeg"
  ];

  return (
    <>
      <Navbar page="/" />
      <div
        className={`relative w-full h-screen bg-no-repeat bg-center bg-cover overflow-hidden`}
      >
        <div className="absolute inset-0 z-0">
          {images.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center animate-[fadeSlide_15s_infinite] opacity-0"
              style={{
                backgroundImage: `url(${img})`,
                animationDelay: `${i * 5}s`,
                animationFillMode: "both",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00162B]/70 to-[#2C5983]/70 z-0" />
        <Container className={"h-full"}>
          <div className="relative z-2 text-[white] flex h-[115vh] flex-col pt-30 pb-40 lg:pt-40 lg:pb-50 xl:pt-40 xl:pb-50">
            <div className="h-full flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
              {/* <h2 className="mb-5 !text-[26px]">Your Smile, Our Care</h2> */}
              <h1 className="md:!text-[50px] max-w-120 whitespace-normal break-words">Personalized, Professional Care By <i>Experienced Dentists</i></h1>
              <p className="mt-6.5 mb-1.5">Call to book an appointment:</p>
              <div>
                <Image
                  src={"/icons/phone.svg"}
                  width={35}
                  height={35}
                  alt=""
                  aria-hidden="true"
                />
                <p>Brampton: 905-794-0100</p>
              </div>
              <div>
                <Image
                  src={"/icons/phone.svg"}
                  width={35}
                  height={35}
                  alt=""
                  aria-hidden="true"
                />
                <p>Vaughan: 905-832-0050</p>
              </div>
            </div>
          </div>
        </Container>

        <style jsx>{`
          .hero-slideshow {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .slide {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: 50% 45%;
            opacity: 0;
          }

          @keyframes fadeSlide {
            0% { opacity: 0; }
            5% { opacity: 1; }
            30% { opacity: 1; }
            35% { opacity: 0; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    </>
  );
}