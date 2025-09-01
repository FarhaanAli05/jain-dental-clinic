"use client";

import Image from "next/image";
import { useState } from "react";

const images = {
  vaughan: [
    { src: "/images/home-tour-1.jpg", height: 252 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-1.jpg", height: 298 },
    { src: "/images/home-tour-2.jpg", height: 445 },
    { src: "/images/home-tour-1.jpg", height: 602 },
    { src: "/images/home-tour-2.jpg", height: 280 },
    { src: "/images/home-tour-1.jpg", height: 413 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-2.jpg", height: 602 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-1.jpg", height: 412 },
    { src: "/images/home-tour-2.jpg", height: 331 },
    { src: "/images/home-tour-2.jpg", height: 453 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-2.jpg", height: 413 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-2.jpg", height: 252 },
    { src: "/images/home-tour-2.jpg", height: 349 },
    { src: "/images/home-tour-2.jpg", height: 443 },
  ],
  brampton: [
    { src: "/images/home-tour-1.jpg", height: 252 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-1.jpg", height: 298 },
    { src: "/images/home-tour-2.jpg", height: 445 },
    { src: "/images/home-tour-1.jpg", height: 602 },
    { src: "/images/home-tour-2.jpg", height: 280 },
    { src: "/images/home-tour-1.jpg", height: 413 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-2.jpg", height: 602 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-1.jpg", height: 412 },
    { src: "/images/home-tour-2.jpg", height: 331 },
    { src: "/images/home-tour-2.jpg", height: 453 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-2.jpg", height: 413 },
    { src: "/images/home-tour-2.jpg", height: 332 },
    { src: "/images/home-tour-2.jpg", height: 333 },
    { src: "/images/home-tour-2.jpg", height: 252 },
    { src: "/images/home-tour-2.jpg", height: 349 },
    { src: "/images/home-tour-2.jpg", height: 443 },
  ],
};

export default function Gallery() {
  const [city, setCity] = useState<"vaughan" | "brampton">("vaughan");

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
