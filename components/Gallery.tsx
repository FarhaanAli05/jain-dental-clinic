"use client";

import Image from "next/image";

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
  return (
    <div className="mt-7 text-center">
      <input
        type="radio"
        name="city-gallery"
        id="vaughan-gallery"
        defaultChecked
        className="hidden"
      />
      <input
        type="radio"
        name="city-gallery"
        id="brampton-gallery"
        className="hidden"
      />
      <ul className="mb-10 inline-flex cursor-pointer gap-6">
        <li>
          <label
            htmlFor="vaughan-gallery"
            className="cursor-pointer rounded-full border border-[#0B7192] px-6 py-2.5 text-[#0B7192]"
          >
            Vaughan
          </label>
        </li>
        <li>
          <label
            htmlFor="brampton-gallery"
            className="cursor-pointer rounded-full border border-[#0B7192] px-6 py-2.5 text-[#0B7192]"
          >
            Brampton
          </label>
        </li>
      </ul>
      <div className="city-gallery vaughan-gallery columns-[368px]">
        {images.vaughan.map((img, i) => (
          <div
            key={i}
            className="relative mb-4 break-inside-avoid"
            style={{ height: `${img.height}px` }}
          >
            <Image
              src={img.src}
              fill
              className="rounded-[10px] object-cover"
              alt=""
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <div className="city-gallery brampton-gallery columns-[368px]">
        {images.brampton.map((img, i) => (
          <div
            key={i}
            className="relative mb-4 break-inside-avoid"
            style={{ height: `${img.height}px` }}
          >
            <Image
              src={img.src}
              fill
              className="rounded-[10px] object-cover"
              alt=""
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .city-gallery {
          display: none;
        }
        #vaughan-gallery:checked ~ ul li:nth-child(1) label {
          background-color: #0b7192;
          color: white;
        }
        #brampton-gallery:checked ~ ul li:nth-child(2) label {
          background-color: #0b7192;
          color: white;
        }
        #vaughan-gallery:checked ~ .city-gallery.vaughan-gallery {
          display: block;
        }
        #brampton-gallery:checked ~ .city-gallery.brampton-gallery {
          display: block;
        }
      `}</style>
    </div>
  );
}
