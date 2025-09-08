"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import { useState } from "react";
import Container from "./Container";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <Container className="flex">
        <div className="!py-1 lg:!py-2 lg:top-0 flex justify-between lg:items-center z-50 w-full text-white">
          <Link href="/">
            <div className="flex items-center">
              <Image
                className="mr-[-5] h-15 w-fit sm:h-18"
                src={"/icons/jdc-logo-white.png"}
                width={78}
                height={0}
                alt=""
                aria-hidden="true"
              />
              <h3 className="sm:!text-xl !text-1 font-medium ml-6">Jain Dental Clinic</h3>
            </div>
          </Link>
          <nav className="hidden xl:block">
            <ul className="flex gap-x-1.25 [&>li]:px-7 [&>li]:h-[38px] [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:rounded-full mt-2">
              <li className={
                pathname === "/" ? "current" : ""
              }><Link href="/">Home</Link></li>
              <li className={
                pathname === "/about" ? "current" : ""
              }><Link href="/about">About</Link></li>
              <li className={
                `w-[120px]
                ${pathname.startsWith("/services")
                  ? "current"
                  : ""
                }`
              }>
                <ServicesMenu />
              </li>
              <li className={
                pathname === "/clinic" ? "current" : ""
              }><Link href="/clinic">Our Clinics</Link></li>
              <li className={
                pathname === "/team" ? "current" : ""
              }><Link href="/team">Team</Link></li>
            </ul>
          </nav>
          <Image
            className="mr-[-5] xl:hidden block cursor-pointer"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            src={"/icons/hamburger-menu.svg"}
            width={30}
            height={0}
            alt="menu"
          />
        </div>
        {showMenu && (
          <div className="flex justify-end">
            <div className="absolute bg-white text-white top-18 [&>h3]:!font-normal rounded-[10px] mr-[-5] block xl:hidden">
              <div className="flex flex-col [&>h3]:text-white p-6 gap-y-4 [&>h3]:!text-[#1C2A3A] text-right">
                <h3><Link href="/">Home</Link></h3>
                <h3><Link href="/about">About</Link></h3>
                <h3><Link href="/services">Services</Link></h3>
                <h3><Link href="/clinic">Our Clinics</Link></h3>
                <h3><Link href="/team">Team</Link></h3>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}