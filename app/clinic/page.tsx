import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";

export default function Clinic() {
  return (
    <>
      <HeroSection
        backgroundImage={'/images/clinic-banner.jpg'}
      >
        See Where Smiles Begin
      </HeroSection>
      <Container className="py-2 mb-10 text-center">
        <div className="relative z-20 text-center mt-15">
          <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Our Clinics</h3>
          <h1 className="mt-6">Where Dentistry Feels Like <i>Home</i></h1>
        </div>
        <Gallery/>
      </Container>
      <CallToAction/>
      <Footer current="clinic"/>
    </>
  );
}