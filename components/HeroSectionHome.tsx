"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";

const images = ["/images/home-banner.webp", "/images/home-welcome.jpg", "/images/preventive-care-banner.jpeg"];

export default function HeroSectionHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full h-[82vh] sm:bg-no-repeat sm:bg-center sm:bg-cover`}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 !bg-[position:50%_45%] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})`}}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00162B]/70 to-[#2C5983]/70 z-0" />
      <Container className={"h-full"}>
        <div className="relative z-2 text-[white] flex h-full flex-col pt-30 pb-40 lg:pt-40 lg:pb-50 xl:pt-40 xl:pb-50">
          <div className="h-full flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
            <h2 className="mb-5 !text-[26px]">Your Smile, Our Care</h2>
            <h1 className="md:!text-[50px] max-w-150 whitespace-normal break-words">Personalized, Professional Care By <i>Experienced Dentists</i></h1>
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
    </div>
  );
}