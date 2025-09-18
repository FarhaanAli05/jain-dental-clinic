import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import GoogleReviews from "@/components/GoogleReviews";
import VisitUs from "@/components/VisitUs";
import OfficeTour from "@/components/OfficeTour";
import HeroSectionHome from "@/components/HeroSectionHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Welcome to Jain Dental Clinic – providing family, cosmetic, and emergency dental care in Brampton and Vaughan.",
  openGraph: {
    title: "Jain Dental Clinic | Brampton & Vaughan Dentists",
    description:
      "Providing family, cosmetic, and emergency dental care in Brampton and Vaughan. Book an appointment today.",
    images: [
      {
        url: "https://jaindental.ca/images/clinic-banner-og.jpg",
        width: 2333,
        height: 1224,
        alt: "Jain Dental Clinic Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Dental Clinic | Brampton & Vaughan Dentists",
    description:
      "Providing family, cosmetic, and emergency dental care in Brampton and Vaughan. Book an appointment today.",
    images: ["https://jaindental.ca/images/clinic-banner-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSectionHome />
      <Container>
        <div className="mx-auto mt-10 max-w-302 grid-cols-1 md:mt-25 md:grid lg:grid-cols-[6fr_4fr] [&>p]:w-full lg:[&>p]:w-[88%]">
          <div className="[&>div]:flex [&>div]:items-center [&>div]:gap-x-2.5 [&>p]:w-[88%]">
            <Image
              src={"/icons/jdc-logo-blue.png"}
              width={105}
              height={0}
              alt=""
              aria-hidden="true"
            />
            <h1 className="mt-7 mb-9">
              Welcome to <br className="hidden lg:block" />
              Jain Dental Clinic!
            </h1>
            <p>
              At Jain Dental Clinic, we treat every patient like part of our
              extended family—offering honest guidance, expert treatment, and a
              welcoming atmosphere from the moment you walk in.
              <br />
              <br />
              Led by experienced dentists, our team is committed to helping
              patients of all ages achieve healthy, confident smiles through
              personalized care and modern techniques. Whether you&apos;re here
              for preventive checkups, cosmetic treatments, or urgent dental
              needs, your comfort and satisfaction are always our top
              priorities.
              <br />
              <br />
            </p>
            <div>
              <Image
                src={"/icons/checkmark.svg"}
                width={19.61}
                height={15.32}
                alt=""
                aria-hidden="true"
              />
              <p>Personalized care tailored to your unique needs</p>
            </div>
            <div>
              <Image
                src={"/icons/checkmark.svg"}
                width={19.61}
                height={15.32}
                alt=""
                aria-hidden="true"
              />
              <p>Comprehensive services for every stage of life</p>
            </div>
            <div>
              <Image
                src={"/icons/checkmark.svg"}
                width={19.61}
                height={15.32}
                alt=""
                aria-hidden="true"
              />
              <p>Experienced dentists with a commitment to your comfort</p>
            </div>
          </div>
          {/* <div className="lg:ml-8"> */}
          <div>
            <Image
              src={"/images/home-welcome.jpg"}
              className="order-1 mt-8 h-100 w-full rounded-[10px] object-cover xl:w-120"
              width={443}
              height={0}
              alt=""
              aria-hidden="true"
            />
            <div className="flex flex-col justify-center [&>div]:mt-4 [&>div]:flex [&>div]:items-center [&>div]:gap-x-3">
              <p className="mt-6 mb-1.5">Call to book an appointment:</p>
              <div>
                <Image
                  src={"/icons/phone-blue.svg"}
                  width={35}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <p>Brampton: 905-794-0100</p>
              </div>
              <div>
                <Image
                  src={"/icons/phone-blue.svg"}
                  width={35}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <p>Vaughan: 905-832-0050</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative mt-35 h-full bg-[url(/images/home-services-background.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#00162B] to-[#2C3E50] bg-cover bg-center bg-no-repeat opacity-60" />
        <Container className="py-2">
          <div className="relative z-20 py-15 text-center">
            <h3 className="inline-block rounded-full bg-[#EBFDFF] px-8 py-2.5 text-center">
              Services
            </h3>
            <h1 className="mt-2 mt-6 break-words whitespace-normal text-white">
              Comprehensive Care For <i>Every Smile</i>
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-2 xl:grid-cols-3 [&>a>div]:h-full [&>a>div]:rounded-[10px] [&>a>div]:bg-white [&>a>div]:p-7 [&>a>div>h2]:mt-3 [&>a>div>p]:mt-3">
              <Link href="/services/preventive-care">
                <div>
                  <Image
                    src={"/icons/preventive-care.svg"}
                    width={56}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Preventive Care</h2>
                  <p>
                    Protect your smile with routine checkups, professional
                    cleanings, and preventive treatments designed to stop dental
                    issues before they start.
                  </p>
                </div>
              </Link>
              <Link href="/services/cosmetic-dentistry">
                <div>
                  <Image
                    src={"/icons/cosmetic-dentistry.svg"}
                    width={52}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Cosmetic Dentistry</h2>
                  <p>
                    Enhance your confidence with personalized cosmetic
                    treatments such as teeth whitening, veneers, and full smile
                    makeovers.
                  </p>
                </div>
              </Link>
              <Link href="/services/root-canal-treatment">
                <div>
                  <Image
                    src={"/icons/root-canal-treatment.png"}
                    width={53}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Root Canal Treatment</h2>
                  <p>
                    Save your natural tooth and relieve discomfort with gentle,
                    effective root canal therapy using modern techniques.
                  </p>
                </div>
              </Link>
              <Link href="/services/braces-and-invisalign">
                <div>
                  <Image
                    src={"/icons/braces-and-invisalign.svg"}
                    width={39}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Braces & Invisalign</h2>
                  <p>
                    Achieve a straighter, healthier smile with our orthodontic
                    solutions, including traditional braces and discreet
                    Invisalign aligners.
                  </p>
                </div>
              </Link>
              <Link href="/services/pediatric-dentistry">
                <div>
                  <Image
                    src={"/icons/pediatric-dentistry.svg"}
                    width={42}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Pediatric Dentistry</h2>
                  <p>
                    Give your child the best start to lifelong oral health with
                    gentle, compassionate dental care in a kid-friendly
                    environment.
                  </p>
                </div>
              </Link>
              <Link href="/services/implant-dentistry">
                <div>
                  <Image
                    src={"/icons/implant-dentistry.png"}
                    width={44}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                  <h2>Implant Dentistry</h2>
                  <p>
                    Restore missing teeth with durable, natural-looking dental
                    implants that feel and function like your own.
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <label className="mt-15 flex cursor-pointer items-center gap-x-3 rounded-full border-2 border-[#80C6C6] px-6 py-2.5 text-white">
                  Learn More
                  <Image
                    src={"/icons/right-arrow.svg"}
                    width={10}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                </label>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-25 text-center">
          <div className="flex justify-center">
            <Image
              src={"/icons/stars.svg"}
              width={201}
              height={0}
              alt=""
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-6">See Why Patients Choose Us</h1>
          <p className="mt-4">
            See what our patients are saying about their experience with us.
          </p>
          <GoogleReviews />
        </div>
        <div className="mt-30 text-center">
          <div className="flex justify-center">
            <Image
              src={"/icons/pin-blue.svg"}
              width={75}
              height={0}
              alt=""
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-2">Tour Our Offices</h1>
          <p className="mt-4">
            Discover our clean, comfortable, and family-friendly environment.
          </p>
          <OfficeTour />
        </div>
      </Container>
      <VisitUs />
      <CallToAction />
      <Footer current="home" />
    </>
  );
}
