import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Jain Dental Clinic and our commitment to caring for smiles.",
  openGraph: {
    type: "website",
    url: "https://jaindentalclinic.ca/about",
    title: "About Us | Jain Dental Clinic",
    description: "Learn more about Jain Dental Clinic and our commitment to caring for smiles.",
    siteName: "Jain Dental Clinic",
    images: [
      {
        url: "https://jaindental.ca/images/about-banner-og.jpg",
        width: 1280,
        height: 673,
        alt: "About Jain Dental Clinic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Jain Dental Clinic",
    description: "Learn more about Jain Dental Clinic and our commitment to caring for smiles.",
    images: ["https://jaindental.ca/images/about-banner-og.jpg"]
  }
};

export default function About() {
  return (
    <>
      <HeroSection
        subtitle='About Jain Dental Clinic'
        backgroundImage='/images/about-banner.webp'
      >
        Caring for <i>Smiles</i>, One Patient At A Time
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/about-banner.webp"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">About Us</h3>
            <h1 className="ml-2">Creating Healthy Smiles With A <i>Personal Touch</i></h1>
            <p className="mt-10">
              At Jain Dental Clinic, we understand that visiting the dentist is about more than just treatment — it's about trust, comfort, and building a lasting relationship with your dental team. Our mission is to provide personalized, professional care in a welcoming environment, where every patient feels valued and heard.<br /><br />

              From your child's first checkup to advanced restorative treatments, we offer a full range of dental services under one roof. Guided by years of experience and the latest techniques, our team works with you to create a care plan tailored to your unique needs and goals.<br /><br />

              We believe that prevention, education, and compassion are key to long-term oral health. Every smile we care for is a reflection of our commitment to helping you look and feel your best — today and for years to come.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Your Healthiest Smile Starts Here.</CallToAction> */}
      <CallToAction />
      <Footer current="about" />
    </>
  );
}