import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Clinic() {
  return (
    <>
      <HeroSection
        current="clinic"
        backgroundImage={'/images/clinic-banner.jpg'}
      >
        See Where Smiles Begin
      </HeroSection>
      <Container className="py-2 mb-10">
        {/* <Gallery/> */}
        <div className="relative z-20 text-center py-15">
          <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Our Clinics</h3>
          <h1 className="mt-2 mt-6">Where Dentistry Feels Like <i>Home</i></h1>
          <nav className="mt-7">
            <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full">
              <li className="selected">Vaughan</li>
              <li>Brampton</li>
            </ul>
          </nav>
        </div>
        <div className="grid grid-cols-4">
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={252}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={332}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={298}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={445}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={602}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={280}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={413}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={333}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={602}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={333}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={412}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={331}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={332}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={453}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={333}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={413}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={332}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={252}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={349}
            alt=""
            aria-hidden="true"
          />
          <Image
            src={"/icons/phone.svg"}
            width={368}
            height={443}
            alt=""
            aria-hidden="true"
          />
        </div>
      </Container>
      <CallToAction/>
      <Footer current="clinic"/>
    </>
  );
}