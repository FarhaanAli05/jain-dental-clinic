"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="relative !py-2 lg:!py-5 lg:top-0 flex lg:justify-between lg:items-center z-50 w-full text-white">
      <Link href="/">
        <div className="flex items-center">
          <Image
            className="mr-[-5]"
            src={"/icons/jdc-logo-white.png"}
            width={78}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <h3 className="sm:text-2xl text-xl font-medium ml-6">Jain Dental Clinic</h3>
        </div>
      </Link>
      <nav className="hidden xl:block">
        <ul className="flex gap-x-1.25 [&>li]:px-5 [&>li]:h-[38px] [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:rounded-full">
          <li className={
            !segment ? "current" : ""
          }><Link href="/">Home</Link></li>
          <li className={
            segment === "about" ? "current" : ""
          }><Link href="/about">About</Link></li>
          <li className={
            `w-[120px]
                  ${segment === "services"
              ? "current"
              : ""
            }`
          }>
            <ServicesMenu />
          </li>
          <li className={
            segment === "clinic" ? "current" : ""
          }><Link href="/clinic">Our Clinics</Link></li>
          <li className={
            segment === "team" ? "current" : ""
          }><Link href="/team">Team</Link></li>
          <li className={
            segment === "contact" ? "current" : ""
          }><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}