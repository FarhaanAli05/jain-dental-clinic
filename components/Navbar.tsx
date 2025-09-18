"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import Container from "./Container";

export default function Navbar({ page }: { page: string }) {
  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <Container className="flex">
        <div className="z-50 flex w-full justify-between !py-1 text-white lg:top-0 lg:items-center lg:!py-2">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={"/icons/jdc-logo-white.png"}
                width={66}
                height={0}
                alt=""
                aria-hidden="true"
              />
              <h3 className="!text-1 ml-4 font-medium sm:!text-xl">
                Jain Dental Clinic
              </h3>
            </div>
          </Link>
          <div className="relative flex items-center xl:hidden">
            <input id="menu-toggle" type="checkbox" className="peer hidden" />
            <label htmlFor="menu-toggle" className="z-50 cursor-pointer">
              <Image
                src="/icons/hamburger-menu.svg"
                width={30}
                height={0}
                alt="menu"
              />
            </label>
            <div className="absolute top-full right-0 mt-2 hidden w-40 rounded-[10px] bg-white p-6 peer-checked:block">
              <div className="flex flex-col gap-y-4 text-right text-[#1C2A3A]">
                <h3>
                  <Link href="/">Home</Link>
                </h3>
                <h3>
                  <Link href="/about">About</Link>
                </h3>
                <h3>
                  <Link href="/services">Services</Link>
                </h3>
                <h3>
                  <Link href="/clinic">Our Clinics</Link>
                </h3>
                <h3>
                  <Link href="/team">Team</Link>
                </h3>
              </div>
            </div>
          </div>
          <nav className="hidden xl:block">
            <ul className="mt-2 flex gap-x-1.25 [&>li]:flex [&>li]:h-[38px] [&>li]:items-center [&>li]:justify-center [&>li]:rounded-full [&>li]:px-6.5 [&>li]:py-2.5">
              <li className={page === "/" ? "current" : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={page === "/about" ? "current" : ""}>
                <Link href="/about">About</Link>
              </li>
              <li
                className={`w-[120px] ${page === "/services" ? "current" : ""}`}
              >
                <ServicesMenu page={page} />
              </li>
              <li className={page === "/clinic" ? "current" : ""}>
                <Link href="/clinic">Our Clinics</Link>
              </li>
              <li className={page === "/team" ? "current" : ""}>
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
