"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesMenu({ page }: { page: string }) {
  return (
    <div className="group relative px-7 py-2.5">
      <Link href="/services" className="flex gap-x-2 py-8">
        Services
        <Image
          src={
            page === "/services"
              ? "/icons/arrow-down.svg"
              : "/icons/arrow-down-white.svg"
          }
          width={10}
          height={5}
          alt="down arrow"
          aria-hidden="true"
          className="group-hover:hidden"
        />
        <Image
          src={
            page === "/services"
              ? "/icons/arrow-up.svg"
              : "/icons/arrow-up-white.svg"
          }
          width={10}
          height={5}
          alt="up arrow"
          aria-hidden="true"
          className="hidden group-hover:block"
        />
      </Link>
      <div className="absolute top-20 hidden w-60 flex-col gap-y-4 rounded-[10px] bg-white p-6 text-white group-hover:flex [&>h3]:text-[#1C2A3A]">
        <h3>
          <Link href="/services/preventive-care">Preventive Care</Link>
        </h3>
        <h3>
          <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
        </h3>
        <h3>
          <Link href="/services/root-canal-treatment">
            Root Canal Treatment
          </Link>
        </h3>
        <h3>
          <Link href="/services/braces-and-invisalign">
            Braces & Invisalign
          </Link>
        </h3>
        <h3>
          <Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link>
        </h3>
        <h3>
          <Link href="/services/implant-dentistry">Implant Dentistry</Link>
        </h3>
      </div>
    </div>
  );
}
