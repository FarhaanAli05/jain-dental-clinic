"use client";

import Image from "next/image";
import { useState } from "react";

const images = {
  vaughan: [
    { src: "/images/about-banner.webp", height: 252 },
    { src: "/images/clinic-vaughan-1.jpg", height: 332 },
    { src: "/images/home-tour-1.jpg", height: 298 },
    { src: "/images/clinic-vaughan-2.jpg", height: 445 },
    { src: "/images/clinic-vaughan-3.webp", height: 602 },
    { src: "/images/home-services-background.jpg", height: 280 },
    { src: "/images/home-tour-3.jpg", height: 413 },
    { src: "/images/clinic-vaughan-4.jpg", height: 333 },
    { src: "/images/clinic-vaughan-5.jpg", height: 602 },
    { src: "/images/clinic-vaughan-6.jpg", height: 333 },
    { src: "/images/clinic-vaughan-7.jpg", height: 412 },
    { src: "/images/clinic-vaughan-8.jpg", height: 331 },
    { src: "/images/clinic-vaughan-9.jpg", height: 453 },
    { src: "/images/clinic-vaughan-10.webp", height: 332 },
    { src: "/images/clinic-vaughan-11.jpg", height: 413 },
    { src: "/images/clinic-vaughan-12.webp", height: 332 },
    { src: "/images/clinic-vaughan-13.jpg", height: 333 },
    { src: "/images/team-banner.jpg", height: 252 },
    { src: "/images/clinic-vaughan-14.jpg", height: 349 },
    { src: "/images/clinic-vaughan-15.jpg", height: 443 },
  ],
  brampton: [
    { src: "/images/clinic-brampton-1.jpg", height: 333 },
    { src: "/images/clinic-brampton-2.jpg", height: 332 },
    { src: "/images/clinic-brampton-3.jpg", height: 298 },
    { src: "/images/clinic-brampton-4.jpeg", height: 445 },
    { src: "/images/clinic-brampton-5.jpg", height: 602 },
    { src: "/images/clinic-brampton-6.jpeg", height: 280 },
    { src: "/images/clinic-brampton-7.jpeg", height: 413 },
    { src: "/images/clinic-brampton-9.jpg", height: 602 },
    { src: "/images/clinic-brampton-10.jpg", height: 252 },
    { src: "/images/clinic-brampton-11.jpg", height: 412 },
    { src: "/images/clinic-brampton-12.jpg", height: 331 },
    { src: "/images/clinic-brampton-8.jpg", height: 333 },
    { src: "/images/clinic-brampton-14.jpg", height: 332 },
    { src: "/images/clinic-brampton-13.jpg", height: 453 },
    { src: "/images/clinic-brampton-15.jpg", height: 413 },
    { src: "/images/clinic-brampton-16.jpg", height: 332 },
    { src: "/images/clinic-brampton-17.jpg", height: 333 },
    { src: "/images/clinic-brampton-18.jpg", height: 252 },
    { src: "/images/clinic-brampton-19.jpg", height: 349 },
    { src: "/images/clinic-brampton-20.jpg", height: 443 },
  ],
};

export default function Gallery() {
  const [city, setCity] = useState<"vaughan" | "brampton">("vaughan");

  return (
    <>
      <nav className="mt-7">
        <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full mb-10">
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
      <div className="columns-[368px]">
        {images[city].map((img, i) => {
          return (
            <div
              className={`relative break-inside-avoid mb-4`}
              style={{ height: `${img.height}px` }}
              key={i}
            >
              <Image
                src={img.src}
                fill
                className="object-cover rounded-[10px]"
                alt=""
                aria-hidden={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
