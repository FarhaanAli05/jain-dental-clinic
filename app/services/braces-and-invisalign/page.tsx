import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function BracesAndInvisalign() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/braces-and-invisalign-banner.webp'}
        className="!bg-[position:50%_45%]"
      >
        Straight Smiles Made Simple
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/braces-and-invisalign.avif"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Braces & Invisalign</h3>
            <h1 className="ml-2">Braces & Invisalign For Every Age</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              A straight smile is more than just cosmetic—it’s key to long-term oral health. At Jain Dental Clinic, we offer both traditional braces and Invisalign clear aligners to correct misaligned teeth and bite issues. Whether you’re a teen looking for reliable orthodontic care or an adult seeking a discreet option, our team will help you choose the treatment that best fits your lifestyle.<br/><br/>

              With personalized planning and ongoing support, we make orthodontic treatment comfortable and effective. From minor adjustments to full smile transformations, we’re here to guide you every step of the way toward the confident smile you’ve always wanted.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Start Your Journey To A Straighter Smile — Call Us Today To Book Your Orthodontic Consultation.</CallToAction> */}
      <CallToAction/>
      <Footer current="braces-and-invisalign" />
    </>
  );
}