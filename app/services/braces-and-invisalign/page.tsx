import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Braces & Invisalign",
  description:
    "Straighten your teeth with traditional braces or discreet Invisalign aligners at Jain Dental Clinic.",
  openGraph: {
    title: "Braces & Invisalign | Jain Dental Clinic",
    description:
      "Orthodontic solutions for all ages — from braces to Invisalign — available in Brampton and Vaughan.",
    images: [
      {
        url: "https://jaindental.ca/images/braces-and-invisalign-banner-og.jpg",
        width: 1280,
        height: 672,
        alt: "Braces and Invisalign at Jain Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braces & Invisalign | Jain Dental Clinic",
    description:
      "Achieve a straighter, healthier smile with braces or Invisalign aligners.",
    images: [
      "https://jaindental.ca/images/braces-and-invisalign-banner-og.jpg",
    ],
  },
};

export default function BracesAndInvisalign() {
  return (
    <>
      <HeroSection
        subtitle="Braces & Invisalign"
        backgroundImage="/images/braces-and-invisalign-banner.webp"
        page="/services"
        className="!bg-[position:50%_45%]"
      >
        Straight Smiles Made Simple
      </HeroSection>
      <Container className="mb-20">
        <div className="mt-20 flex flex-col gap-x-13 xl:flex-row">
          <Image
            src={"/images/braces-and-invisalign.avif"}
            className="order-1 mt-8 h-100 w-full rounded-[10px] object-cover xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="mb-3 inline-block rounded-full bg-[#EBFDFF] px-8 py-2.5 text-center">
              Braces & Invisalign
            </h3>
            <h1 className="ml-2">Braces & Invisalign For Every Age</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              A straight smile is more than just cosmetic—it’s key to long-term
              oral health. At Jain Dental Clinic, we offer both traditional
              braces and Invisalign clear aligners to correct misaligned teeth
              and bite issues. Whether you’re a teen looking for reliable
              orthodontic care or an adult seeking a discreet option, our team
              will help you choose the treatment that best fits your lifestyle.
              <br />
              <br />
              With personalized planning and ongoing support, we make
              orthodontic treatment comfortable and effective. From minor
              adjustments to full smile transformations, we’re here to guide you
              every step of the way toward the confident smile you’ve always
              wanted.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Start Your Journey To A Straighter Smile — Call Us Today To Book Your Orthodontic Consultation.</CallToAction> */}
      <CallToAction />
      <Footer current="braces-and-invisalign" />
    </>
  );
}
