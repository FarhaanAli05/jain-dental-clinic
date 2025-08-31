import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function PreventiveCare() {
  return (
    <>
      <HeroSection
        current="services"
        backgroundImage={'/images/preventive-dentistry-banner.jpeg'}
        className="!bg-[position:50%_45%]"
      >
        Proactive Dental Care for A Lifetime Of Healthy Smiles
      </HeroSection>
      <Container className="mb-20">
        <div className="flex gap-x-13 mt-20">
          <Image
            src={"/images/home-welcome.jpg"}
            className="rounded-[10px] object-cover"
            width={490}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div>
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full mt-[-80]">Preventive Care</h3>
            <h1 className="ml-2">Proactive Dental Care for A Lifetime Of Healthy Smiles</h1>
            <div className="bg-[#CAFAFF] w-123 h-7 mt-[-33]" />
            <p className="mt-10">
              A healthy smile starts with prevention. Our preventive dentistry services are designed to stop dental problems before they start, helping you maintain strong teeth and gums at every stage of life. From regular checkups and professional cleanings to fluoride treatments and sealants, we provide the care and guidance you need to keep your smile looking and feeling its best.<br/><br/>

              By detecting early signs of decay, gum disease, or other concerns, we can address issues before they become complex—saving you time, discomfort, and unnecessary costs down the road. Our friendly team focuses on comfort and education, ensuring you feel informed and confident about your oral health.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction>Your Healthiest Smile Starts Here.</CallToAction>
      <Footer current="preventive-care" />
    </>
  );
}