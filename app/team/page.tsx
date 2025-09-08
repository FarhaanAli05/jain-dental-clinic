import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import Image from "next/image";
import RootLayout from "../layout";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experienced and compassionate dental professionals at Jain Dental Clinic in Brampton and Vaughan. Dedicated to your comfort, health, and smile.",
  openGraph: {
    type: "website",
    url: "https://jaindentalclinic.ca/team",
    title: "Our Team | Jain Dental Clinic",
    description: "Learn about the skilled dentists and caring team at Jain Dental Clinic in Brampton and Vaughan. Providing family, cosmetic, and advanced dental care.",
    siteName: "Jain Dental Clinic",
    images: [
      {
        url: "https://jaindentalclinic.ca/images/team-banner-og.jpg",
        width: 1280,
        height: 672,
        alt: "Jain Dental Clinic Front Desk"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Jain Dental Clinic",
    description: "Meet the skilled and compassionate dental professionals at Jain Dental Clinic in Brampton and Vaughan.",
    images: ["https://jaindentalclinic.ca/images/team-banner-og.jpg"]
  }
};

export default function Team() {
  return (
    <RootLayout activePage="/team">
      <HeroSection
        subtitle="Our Caring Professionals"
        backgroundImage='/images/team-banner.jpg'
      >
        Dedicated To Your <i>Comfort</i>, <i>Health</i>, and <i>Smile</i>
      </HeroSection>
      <Container className="py-2 mb-10">
        <div className="relative z-20 text-center py-15">
          <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Our Team</h3>
          <h1 className="mt-2 mt-6">Meet Our Doctors</h1>
        </div>
        <div className="flex gap-x-20 rounded-[10px] lg:flex-row flex-col">
          <Image
            src={"/images/dr-bhushan-jain.jpg"}
            className="object-cover w-450 h-full"
            width={496}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div className="flex flex-col gap-y-5 justify-top mt-10 lg:mt-0">
            <h1>Dr. Bhushan Jain</h1>
            <h2>BDS, DDS, FICOI, Cert. IV Sedation</h2>
            <p>
              Dr. Bhushan Jain earned his Bachelor of Dental Surgery (BDS) degree in 1994 from Punjab Government Dental School, GNDU Amritsar, India. In 2008, he received his Doctor of Dental Surgery (DDS) from the Schulich School of Medicine & Dentistry at the University of Western Ontario, London, ON, and has been practicing in downtown Toronto since May 2008.<br /><br />

              Passionate about continuing education, Dr. Bhushan has completed extensive advanced dental training. He earned his Fellowship with the International Congress of Oral Implantologists (ICOI) after specialized dental implant training, and is certified in IV sedation, allowing him to provide comfortable care for apprehensive patients. With experience dating back to 1994, he regularly performs wisdom teeth extractions, complex root canal re-treatments, and a wide range of advanced dental procedures.
            </p>
          </div>
        </div>
        <div className="flex gap-x-20 rounded-[10px] lg:flex-row flex-col mt-10">
          <Image
            src={"/images/dr-meenakshi-jain.jpg"}
            className="object-cover w-450 h-full"
            width={496}
            height={0}
            alt=""
            aria-hidden="true"
          />
          <div className="flex flex-col gap-y-5 justify-top mt-10 lg:mt-0">
            <h1>Dr. Meenakshi Jain</h1>
            <h2>BDS, DDS</h2>
            <p>
              Dr. Meenakshi Jain earned her Bachelor of Dental Surgery (BDS) degree from Amravati University, India in 1995 and her Doctor of Dental Surgery (DDS) from the Schulich School of Medicine & Dentistry at the University of Western Ontario, London, in 2011. A proud mother of two, she has a special passion for caring for children and creating a positive dental experience for young patients.<br /><br />

              Dr. Meenakshi has completed advanced training in smile design and cosmetic dentistry, and is an active member of the Ontario Dental Association, the Academy of General Dentistry, and the American Academy of Cosmetic Dentistry. Before moving to Canada, Dr. Bhushan and Dr. Meenakshi owned and operated a highly successful practice in Punjab, India, where they treated more than 40,000 patients between 1995 and 2005. Their combined experience, dedication, and patient-first approach continue to define the care they provide today.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction />
      <Footer current="team" />
    </RootLayout>
  );
}