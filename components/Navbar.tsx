"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#1C2A3A]">
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
              <h3 className="sm:!text-xl !text-1 font-medium ml-6 !font-normal">Jain<br />
                <b>Dental Clinic</b></h3>
            </div>
          </Link>
          <nav className="hidden xl:block">
            <ul className="flex gap-x-1.25 [&>li]:px-5 [&>li]:h-[38px] [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:rounded-full mt-2">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li className='w-[120px]'>
                <ServicesMenu />
              </li>
              <li><Link href="/clinic">OUR CLINICS</Link></li>
              <li><Link href="/team">TEAM</Link></li>
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
      </Container>
      {showMenu && (
        <div className="absolute bg-[#1C2A3A] w-[100vw] border-t-2 border-white block xl:hidden">
          <Container>
            <div className="flex flex-col [&>h3]:text-white p-6 gap-y-4 ml-[-20]">
              <h3><Link href="/">HOME</Link></h3>
              <h3><Link href="/about">ABOUT</Link></h3>
              <h3><Link href="/services">SERVICES</Link></h3>
              <h3><Link href="/clinic">OUR CLINICS</Link></h3>
              <h3><Link href="/team">TEAM</Link></h3>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}