import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/about-banner.jpg'}
      >
        Caring for <i>Smiles</i>, One Patient At A Time
      </HeroSection>
      <Container className="mb-20">
        <div className="flex gap-x-13 mt-20">
          <Image
            src={"/images/about-banner.jpg"}
            className="rounded-[10px] object-cover"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mt-[-80]">About Us</h3>
            <h1 className="ml-2">Creating Healthy Smiles With A <i>Personal Touch</i></h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              At Jain Dental Clinic, we understand that visiting the dentist is about more than just treatment — it's about trust, comfort, and building a lasting relationship with your dental team. Our mission is to provide personalized, professional care in a welcoming environment, where every patient feels valued and heard.<br /><br />

              From your child's first checkup to advanced restorative treatments, we offer a full range of dental services under one roof. Guided by years of experience and the latest techniques, our team works with you to create a care plan tailored to your unique needs and goals.<br /><br />

              We believe that prevention, education, and compassion are key to long-term oral health. Every smile we care for is a reflection of our commitment to helping you look and feel your best — today and for years to come.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction>Your Healthiest Smile Starts Here.</CallToAction>
      <Footer current="about"/>
    </>
  );
}