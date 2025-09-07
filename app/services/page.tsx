import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Jain Dental Clinic's full range of dental services in Brampton and Vaughan, including preventive care, cosmetic dentistry, orthodontics, and implants.",
  openGraph: {
    type: "website",
    url: "https://jaindentalclinic.ca/services",
    title: "Our Services | Jain Dental Clinic",
    description: "Discover comprehensive dental care at Jain Dental Clinic. From preventive checkups to cosmetic and implant dentistry, we provide personalized solutions for every smile.",
    siteName: "Jain Dental Clinic",
    images: [
      {
        url: "https://jaindental.ca/images/home-services-background-og.jpg",
        width: 1280,
        height: 672,
        alt: "Jain Dental Clinic Room View"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Jain Dental Clinic",
    description: "Discover comprehensive dental care at Jain Dental Clinic. From preventive checkups to cosmetic and implant dentistry, we provide personalized solutions for every smile.",
    images: ["https://jaindental.ca/images/home-services-background-og.jpg"]
  }
};

export default function Services() {
  return (
    <>
      <HeroSection
        subtitle="Our Dental Services"
        backgroundImage="/images/home-services-background.jpg"
      >
        Personalized Solutions For <i>Every Smile</i>
      </HeroSection>
      <Container className="py-2 mb-10">
        <div className="relative z-20 text-center py-15">
          <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Services</h3>
          <h1 className="mt-2 mt-6">How We Care For Your Smile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-left mt-10 [&>a>div]:bg-white [&>a>div]:h-full [&>a>div]:p-7 [&>a>div]:rounded-[10px] [&>a>div>h2]:mt-3 [&>a>div>p]:mt-3">
            <Link href="/services/preventive-care">
              <div>
                <Image
                  src={"/icons/preventive-care.svg"}
                  width={56}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Preventive Care</h2>
                <p>
                  Protect your smile with routine checkups, professional cleanings, and preventive treatments designed to stop dental issues before they start.
                </p>
              </div>
            </Link>
            <Link href="/services/cosmetic-dentistry">
              <div>
                <Image
                  src={"/icons/cosmetic-dentistry.svg"}
                  width={52}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Cosmetic Dentistry</h2>
                <p>
                  Enhance your confidence with personalized cosmetic treatments such as teeth whitening, veneers, and full smile makeovers.
                </p>
              </div>
            </Link>
            <Link href="/services/root-canal-treatment">
              <div>
                <Image
                  src={"/icons/root-canal-treatment.png"}
                  width={53}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Root Canal Treatment</h2>
                <p>
                  Save your natural tooth and relieve discomfort with gentle, effective root canal therapy using modern techniques.
                </p>
              </div>
            </Link>
            <Link href="/services/braces-and-invisalign">
              <div>
                <Image
                  src={"/icons/braces-and-invisalign.svg"}
                  width={39}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Braces & Invisalign</h2>
                <p>
                  Achieve a straighter, healthier smile with our orthodontic solutions, including traditional braces and discreet Invisalign aligners.
                </p>
              </div>
            </Link>
            <Link href="/services/pediatric-dentistry">
              <div>
                <Image
                  src={"/icons/pediatric-dentistry.svg"}
                  width={42}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Pediatric Dentistry</h2>
                <p>
                  Give your child the best start to lifelong oral health with gentle, compassionate dental care in a kid-friendly environment.
                </p>
              </div>
            </Link>
            <Link href="/services/implant-dentistry">
              <div>
                <Image
                  src={"/icons/implant-dentistry.png"}
                  width={44}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Implant Dentistry</h2>
                <p>
                  Restore missing teeth with durable, natural-looking dental implants that feel and function like your own.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <CallToAction />
      <Footer current="services" />
    </>
  );
}