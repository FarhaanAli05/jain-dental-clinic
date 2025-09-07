import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Our Offices",
  description: "Explore Jain Dental Clinic's Brampton and Vaughan locations. See our modern facilities and welcoming environment for all your dental needs.",
  openGraph: {
    type: "website",
    url: "https://jaindentalclinic.ca/clinic",
    title: "Tour Our Offices | Jain Dental Clinic",
    description: "Visit our Brampton and Vaughan clinics to see our modern dental facilities and caring team. Book your appointment today.",
    siteName: "Jain Dental Clinic",
    images: [
      {
        url: "https://jaindental.ca/images/clinic-banner-2-og.jpg",
        width: 1280,
        height: 672,
        alt: "Jain Dental Clinic Brampton Interior Tour"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Our Offices | Jain Dental Clinic",
    description: "Visit our Brampton and Vaughan clinics to see our modern dental facilities and caring team. Book your appointment today.",
    images: ["https://jaindental.ca/images/clinic-banner-2-og.jpg"]
  }
};

export default function Clinic() {
  return (
    <>
      <HeroSection
        subtitle='Tour Our Offices'
        backgroundImage='/images/clinic-banner-2.jpg'
        className="!bg-[position:77%_50%]"
      >
        See Where Smiles Begin
      </HeroSection>
      <Container className="py-2 mb-10 text-center">
        <div className="relative z-20 text-center mt-15">
          <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Our Clinics</h3>
          <h1 className="mt-6">Where Dentistry Feels Like <i>Home</i></h1>
        </div>
        <Gallery />
      </Container>
      <CallToAction />
      <Footer current="clinic" />
    </>
  );
}