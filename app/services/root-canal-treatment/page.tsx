import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function RootCanalTreatment() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/root-canal-treatment-banner.avif'}
        className="!bg-[position:50%_45%]"
      >
        Relieve Pain and Restore Your Natural Smile
      </HeroSection>
      <Container className="mb-20">
        <div className="flex flex-col xl:flex-row gap-x-13 mt-20">
          <Image
            src={"/images/root-canal-treatment.jpg"}
            className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:ml-5 xl:w-120"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mb-3">Root Canal Treatment</h3>
            <h1 className="ml-2">Expert Root Canal Therapy For Lasting Comfort</h1>
            {/* <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" /> */}
            <p className="mt-10">
              A root canal doesn’t have to be intimidating—it’s a safe and effective way to save your natural tooth while eliminating infection and pain. At Jain Dental Clinic, our experienced team uses gentle techniques and modern technology to make the procedure as comfortable as possible.<br/><br/>

              By removing infected tissue and sealing the tooth, root canal treatment helps preserve your natural bite, prevents further complications, and restores your smile’s strength and function. Whether you’re experiencing tooth pain, sensitivity, or swelling, our priority is to get you relief and protect your long-term oral health.
            </p>
          </div>
        </div>
      </Container>
      {/* <CallToAction>Don’t Let Tooth Pain Hold You Back — Call Us Today To Schedule Your Root Canal Appointment.</CallToAction> */}
      <CallToAction/>
      <Footer current="root-canal-treatment" />
    </>
  );
}