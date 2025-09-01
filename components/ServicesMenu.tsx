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
      <Link href="/services">
        Services
        <Image
          src={"/icons/arrow-down.svg"}
          width={10}
          height={5}
          alt=""
          aria-hidden="true"
        />
      </Link>
      {showServices && (
        <div>
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