import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function CosmeticDentistry() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/cosmetic-dentistry-banner.jpg'}
        className="!bg-[position:50%_25%]"
      >
        Transform Your Smile, Transform Your Confidence
      </HeroSection>
      <Container className="mb-20">
        <div className="flex gap-x-13 mt-20">
          <Image
            src={"/images/cosmetic-dentistry.jpg"}
            className="rounded-[10px] object-cover h-100"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mt-[-80]">Cosmetic Dentistry</h3>
            <h1 className="ml-2">Cosmetic Dentistry For A Brighter, More Confident You</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              Your smile is one of the first things people notice—and at Jain Dental Clinic, we’re here to help you make it unforgettable. Our cosmetic dentistry services are designed to enhance both the beauty and health of your smile, whether you’re looking for subtle improvements or a dramatic transformation.<br/><br/>

              From professional teeth whitening and custom veneers to complete smile makeovers, we use advanced techniques and personalized treatment plans to achieve natural, stunning results. Our experienced team will guide you every step of the way, ensuring your comfort while helping you achieve the smile you’ve always wanted.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction>Ready To Love Your Smile Again? — Call Us Today To Book Your Cosmetic Dentistry Consultation.</CallToAction>
      <Footer current="cosmetic-dentistry" />
    </>
  );
}