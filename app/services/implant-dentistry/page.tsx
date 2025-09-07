import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Implant Dentistry",
  description: "Restore missing teeth with durable, natural-looking dental implants at Jain Dental Clinic.",
  openGraph: {
    title: "Implant Dentistry | Jain Dental Clinic",
    description: "Permanent tooth replacement with advanced dental implants in Brampton and Vaughan.",
    images: [
      {
        url: "https://jaindental.ca/images/implant-dentistry-banner-og.jpg",
        width: 1280,
        height: 672,
        alt: "Dental implants at Jain Dental Clinic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Implant Dentistry | Jain Dental Clinic",
    description: "Restore your smile with durable, natural-looking dental implants.",
    images: ["https://jaindental.ca/images/implant-dentistry-banner-og.jpg"]
  }
};

export default function ImplantDentistry() {
  return (
    <>
      <HeroSection
        subtitle="Implant Dentistry"
        backgroundImage='/images/implant-dentistry-banner.avif'
        className="!bg-[position:50%_45%]"
      >
        Lasting Solutions For Missing Teeth
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/preventive-care-banner.jpeg"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Implant Dentistry</h3>
            <h1 className="ml-2">Restore Your Smile With Dental Implants</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              Missing teeth can affect more than just your smile—they can impact your ability to chew, speak, and feel confident. At Jain Dental Clinic, we provide advanced implant dentistry to restore both the function and appearance of your natural teeth.<br/><br/>

              Dental implants are a permanent, durable solution that looks and feels just like your own teeth. Whether you need to replace a single tooth or multiple teeth, our experienced team will design a personalized treatment plan to bring back your smile’s strength, stability, and beauty. With modern techniques and compassionate care, we make the process as comfortable and stress-free as possible.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Rebuild Your Smile With Confidence — Call Us Today To Schedule Your Implant Consultation.</CallToAction> */}
      <CallToAction/>
      <Footer current="implant-dentistry" />
    </>
  );
}