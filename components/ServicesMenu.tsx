"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ServicesMenu() {
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

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
        Services
        <Image
          src={
            pathname === "/services" && !showServices ? "/icons/arrow-down.svg" : pathname === "/services" && showServices ? "/icons/arrow-up.svg" : pathname !== "/services" && !showServices ? "/icons/arrow-down-white.svg" : "/icons/arrow-up-white.svg"
          }
          width={10}
          height={5}
          alt=""
          aria-hidden="true"
        />
      </Link>
      {showServices && (
        <div className="flex flex-col absolute [&>h3]:text-[#1C2A3A] bg-white text-white p-6 gap-y-4 top-20 rounded-[10px]">
          <h3><Link href="/services/preventive-care">Preventive Care</Link></h3>
          <h3><Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></h3>
          <h3><Link href="/services/root-canal-treatment">Root Canal Treatment</Link></h3>
          <h3><Link href="/services/braces-and-invisalign">Braces & Invisalign</Link></h3>
          <h3><Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link></h3>
          <h3><Link href="/services/implant-dentistry">Implant Dentistry</Link></h3>
        </div>
      )}
    </div>
  );
}