import RootLayout from "@/app/layout";
import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Preventive Care",
  description: "Protect your smile with routine checkups, cleanings, and preventive treatments at Jain Dental Clinic in Brampton and Vaughan.",
  openGraph: {
    title: "Preventive Care | Jain Dental Clinic",
    description: "Stop dental issues before they start with routine checkups, cleanings, and preventive treatments in Brampton and Vaughan.",
    images: [
      {
        url: "https://jaindental.ca/images/preventive-care-banner-og.jpg",
        width: 1106,
        height: 580,
        alt: "Preventive dental care at Jain Dental Clinic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventive Care | Jain Dental Clinic",
    description: "Comprehensive preventive dental services to keep your smile healthy and bright.",
    images: ["https://jaindental.ca/images/preventive-care-banner-og.jpg"]
  }
};

export default function PreventiveCare() {
  return (
    <RootLayout activePage="/services">
      <HeroSection
        subtitle="Preventive Care"
        backgroundImage='/images/preventive-care-banner.jpeg'
        className="!bg-[position:50%_45%]"
      >
        Proactive Dental Care for A Lifetime Of Healthy Smiles
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/home-welcome.jpg"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Preventive Care</h3>
            <h1 className="ml-2">Preventive Dentistry for Lifelong Oral Health</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              A healthy smile starts with prevention. Our preventive dentistry services are designed to stop dental problems before they start, helping you maintain strong teeth and gums at every stage of life. From regular checkups and professional cleanings to fluoride treatments and sealants, we provide the care and guidance you need to keep your smile looking and feeling its best.<br/><br/>

              By detecting early signs of decay, gum disease, or other concerns, we can address issues before they become complex—saving you time, discomfort, and unnecessary costs down the road. Our friendly team focuses on comfort and education, ensuring you feel informed and confident about your oral health.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Protect Your Smile For Years To Come — Call Us Today To Book Your Next Preventive Appointment.</CallToAction> */}
      <CallToAction/>
      <Footer current="preventive-care" />
    </RootLayout>
  );
}