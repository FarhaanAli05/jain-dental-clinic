import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry",
  description: "Enhance your smile with teeth whitening, veneers, and full smile makeovers at Jain Dental Clinic.",
  openGraph: {
    title: "Cosmetic Dentistry | Jain Dental Clinic",
    description: "Boost your confidence with professional teeth whitening, veneers, and smile makeovers in Brampton and Vaughan.",
    images: [
      {
        url: "https://jaindental.ca/images/cosmetic-dentistry-banner-og.jpg",
        width: 1280,
        height: 672,
        alt: "Cosmetic dentistry treatment at Jain Dental Clinic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentistry | Jain Dental Clinic",
    description: "Personalized cosmetic dental care including whitening, veneers, and full smile transformations.",
    images: ["https://jaindental.ca/images/cosmetic-dentistry-banner-og.jpg"]
  }
};

export default function CosmeticDentistry() {
  return (
    <>
      <HeroSection
        subtitle="Cosmetic Dentistry"
        backgroundImage='/images/cosmetic-dentistry-banner.jpg'
        className="!bg-[position:50%_25%]"
      >
        Transform Your Smile, Transform Your Confidence
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/cosmetic-dentistry.jpg"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Cosmetic Dentistry</h3>
            <h1 className="ml-2">Cosmetic Dentistry For A Brighter, More Confident You</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              Your smile is one of the first things people notice—and at Jain Dental Clinic, we’re here to help you make it unforgettable. Our cosmetic dentistry services are designed to enhance both the beauty and health of your smile, whether you’re looking for subtle improvements or a dramatic transformation.<br/><br/>

              From professional teeth whitening and custom veneers to complete smile makeovers, we use advanced techniques and personalized treatment plans to achieve natural, stunning results. Our experienced team will guide you every step of the way, ensuring your comfort while helping you achieve the smile you’ve always wanted.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Ready To Love Your Smile Again? — Call Us Today To Book Your Cosmetic Dentistry Consultation.</CallToAction> */}
      <CallToAction/>
      <Footer current="cosmetic-dentistry" />
    </>
  );
}