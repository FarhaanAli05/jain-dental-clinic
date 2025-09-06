import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function ImplantDentistry() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/implant-dentistry-banner.avif'}
        className="!bg-[position:50%_45%]"
      >
        Lasting Solutions For Missing Teeth
      </HeroSection>
      <Container className="mb-20">
        <div className="flex gap-x-13 mt-20">
          <Image
            src={"/images/preventive-dentistry-banner.jpeg"}
            className="rounded-[10px] object-cover h-100"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mt-[-80]">Implant Dentistry</h3>
            <h1 className="ml-2">Restore Your Smile With Dental Implants</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              Missing teeth can affect more than just your smile—they can impact your ability to chew, speak, and feel confident. At Jain Dental Clinic, we provide advanced implant dentistry to restore both the function and appearance of your natural teeth.<br/><br/>

              Dental implants are a permanent, durable solution that looks and feels just like your own teeth. Whether you need to replace a single tooth or multiple teeth, our experienced team will design a personalized treatment plan to bring back your smile’s strength, stability, and beauty. With modern techniques and compassionate care, we make the process as comfortable and stress-free as possible.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction>Rebuild Your Smile With Confidence — Call Us Today To Schedule Your Implant Consultation.</CallToAction>
      <Footer current="implant-dentistry" />
    </>
  );
}