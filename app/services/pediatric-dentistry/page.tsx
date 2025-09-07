import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function PediatricDentistry() {
  return (
    <>
      <HeroSection
        subtitle="Pediatric Dentistry"
        backgroundImage='/images/pediatric-dentistry-banner.avif'
        className="!bg-[position:50%_45%]"
      >
        Gentle Care for Growing Smiles
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/pediatric-dentistry.jpg"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Pediatric Dentistry</h3>
            <h1 className="ml-2">Pediatric Dentistry For Children Of All Ages</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              A child’s early experiences at the dentist can shape their attitude toward oral health for life. At Jain Dental Clinic, we create a welcoming, stress-free environment where kids feel safe and comfortable. From their very first checkup to routine cleanings and cavity prevention, our goal is to make every visit positive and encouraging.<br/><br/>

              Our dentists use a gentle, compassionate approach to help children develop healthy habits and strong smiles. Whether it’s teaching proper brushing techniques, applying protective sealants, or providing guidance for parents, we’re committed to supporting your child’s oral health at every stage of growth.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Set The Foundation For Lifelong Smiles — Call Us Today To Schedule Your Child’s Next Dental Visit.</CallToAction> */}
      <CallToAction/>
      <Footer current="pediatric-dentistry" />
    </>
  );
}