"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import Container from "./Container";

export default function Navbar({ page }: { page: string }) {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <Container className="flex">
        <div className="!py-1 lg:!py-2 lg:top-0 flex justify-between lg:items-center z-50 w-full text-white">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={"/icons/jdc-logo-white.png"}
                width={66}
                height={0}
                alt=""
                aria-hidden="true"
              />
              <h3 className="sm:!text-xl !text-1 font-medium ml-4">Jain Dental Clinic</h3>
            </div>
          </Link>
          <div className="relative xl:hidden flex items-center">
            <input id="menu-toggle" type="checkbox" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer z-50">
              <Image src="/icons/hamburger-menu.svg" width={30} height={0} alt="menu" />
            </label>
            <div className="absolute right-0 top-full mt-2 hidden peer-checked:block bg-white rounded-[10px] p-6 w-40">
              <div className="flex flex-col gap-y-4 text-right text-[#1C2A3A]">
                <h3><Link href="/">Home</Link></h3>
                <h3><Link href="/about">About</Link></h3>
                <h3><Link href="/services">Services</Link></h3>
                <h3><Link href="/clinic">Our Clinics</Link></h3>
                <h3><Link href="/team">Team</Link></h3>
              </div>
            </div>
          </div>
          <nav className="hidden xl:block">
            <ul className="flex gap-x-1.25 [&>li]:px-6.5 [&>li]:py-2.5 [&>li]:h-[38px] [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:rounded-full mt-2">
              <li className={
                page === "/" ? "current" : ""
              }><Link href="/">Home</Link></li>
              <li className={
                page === "/about" ? "current" : ""
              }><Link href="/about">About</Link></li>
              <li className={
                `w-[120px]
                ${page === ("/services")
                  ? "current"
                  : ""
                }`
              }>
                <ServicesMenu page={page} />
              </li>
              <li className={
                page === "/clinic" ? "current" : ""
              }><Link href="/clinic">Our Clinics</Link></li>
              <li className={
                page === "/team" ? "current" : ""
              }><Link href="/team">Team</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}