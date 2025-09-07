"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServicesMenu() {
  const [showServices, setShowServices] = useState(false);

  return (
    <div
      className="[&>a]:flex [&>a]:gap-x-2"
      onMouseEnter={() => {
        setShowServices(true);
      }}
      onMouseLeave={() => {
        setShowServices(false);
      }}
    >
      <Link href="/services" className="py-8">
        SERVICES
        <Image
          src={"/icons/down-arrow-white.svg"}
          width={10}
          height={5}
          alt=""
          aria-hidden="true"
        />
      </Link>
      {showServices && (
        <div className="flex flex-col absolute bg-[#1C2A3A] [&>h3]:text-white p-6 gap-y-4 border-t-2 top-full border-white [&>h3]:!font-normal">
          <h3><Link href="/services/preventive-care">PREVENTIVE CARE</Link></h3>
          <h3><Link href="/services/cosmetic-dentistry">COSMETIC DENTISTRY</Link></h3>
          <h3><Link href="/services/root-canal-treatment">ROOT CANAL TREATMENT</Link></h3>
          <h3><Link href="/services/braces-and-invisalign">BRACES & INVISALIGN</Link></h3>
          <h3><Link href="/services/pediatric-dentistry">PEDIATRIC DENTISTRY</Link></h3>
          <h3><Link href="/services/implant-dentistry">IMPLANT DENTISTRY</Link></h3>
        </div>
      )}
    </div>
  );
}