import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import GoogleReviews from "@/components/GoogleReviews";
import VisitUs from "@/components/VisitUs";
import OfficeTour from "@/components/OfficeTour";
import HeroSectionHome from "@/components/HeroSectionHome";

export default function Home() {
  return (
    <>
      <HeroSectionHome />
      <Container>
        <div className="max-w-302 md:grid lg:grid-cols-[6fr_4fr] grid-cols-1 mt-10 md:mt-25 mx-auto lg:[&>p]:w-[88%] [&>p]:w-full">
          <div className="[&>p]:w-[88%] [&>div]:flex [&>div]:items-center [&>div]:gap-x-2.5">
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
              At Jain Dental Clinic, we treat every patient like part of our extended family—offering honest guidance, expert treatment, and a welcoming atmosphere from the moment you walk in.<br /><br />
              Led by experienced dentists, our team is committed to helping patients of all ages achieve healthy, confident smiles through personalized care and modern techniques. Whether you're here for preventive checkups, cosmetic treatments, or urgent dental needs, your comfort and satisfaction are always our top priorities.<br /><br />
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
              className="rounded-[10px] object-cover order-1 h-100 w-full mt-8 xl:w-120"
              width={443}
              height={0}
              alt=""
              aria-hidden="true"
            />
            <div className="flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
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
      <div className="relative bg-[url(/images/home-services-background.jpg)] bg-no-repeat bg-cover bg-center h-full mt-35">
        <div className="absolute bg-gradient-to-b from-[#00162B] to-[#2C3E50] bg-no-repeat bg-center bg-cover h-full w-full opacity-60 z-10" />
        <Container className="py-2">
          <div className="relative z-20 text-center py-15">
            <h3 className="px-8 py-2.5 bg-[#EBFDFF] text-center inline-block rounded-full">Services</h3>
            <h1 className="text-white mt-2 mt-6 whitespace-normal break-words">Comprehensive Care For <i>Every Smile</i></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-left mt-10 [&>div]:bg-white [&>div]:h-full [&>div]:p-7 [&>div]:rounded-[10px] [&>div>h2]:mt-3 [&>div>p]:mt-3">
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
                  Protect your smile with routine checkups, professional cleanings, and preventive treatments designed to stop dental issues before they start.
                </p>
              </div>
              <div className="bg-white">
                <Image
                  src={"/icons/cosmetic-dentistry.svg"}
                  width={52}
                  height={0}
                  alt=""
                  aria-hidden="true"
                />
                <h2>Cosmetic Dentistry</h2>
                <p>
                  Enhance your confidence with personalized cosmetic treatments such as teeth whitening, veneers, and full smile makeovers.
                </p>
              </div>
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
                  Save your natural tooth and relieve discomfort with gentle, effective root canal therapy using modern techniques.
                </p>
              </div>
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
                  Achieve a straighter, healthier smile with our orthodontic solutions, including traditional braces and discreet Invisalign aligners.
                </p>
              </div>
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
                  Give your child the best start to lifelong oral health with gentle, compassionate dental care in a kid-friendly environment.
                </p>
              </div>
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
                  Restore missing teeth with durable, natural-looking dental implants that feel and function like your own.
                </p>
              </div>
            </div>
            <Link href="/services">
              <div className="flex justify-center border-3 border-[#80C6C6] inline-block px-8 py-2.5 rounded-full mt-15">
                <button className="flex items-center text-white gap-x-3 cursor-pointer">
                  Learn More
                  <Image
                    src={"/icons/right-arrow.svg"}
                    width={10}
                    height={0}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Link>
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-center mt-25">
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
          <p className="mt-4">See what our patients are saying about their experience with us.</p>
          {/* <nav className="mt-7">
            <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full">
              <li className="selected">Brampton</li>
              <li>Vaughan</li>
            </ul>
          </nav> */}
          <GoogleReviews />
          {/* <div className="flex text-left [&>p:nth-child(even)]:bg-[#D5ECF9] [&>p:nth-child(odd)]:bg-white [&>p]:p-10 gap-x-6 [&>p]:rounded-[10px] mt-8">
            <p>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”<br /><br />

              - Haiqa S.
            </p>
            <p>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”<br /><br />

              - Haiqa S.
            </p>
            <p>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”<br /><br />

              - Haiqa S.
            </p>
            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div> */}
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
          <p className="mt-4">Discover our clean, comfortable, and family-friendly environment.</p>
          {/* <nav className="mt-7">
            <ul className="[&>li]:px-6 [&>li]:py-2.5 [&>li]:text-center [&>li]:inline-block [&>li]:rounded-full">
              <li className="selected">Vaughan</li>
              <li>Brampton</li>
            </ul>
          </nav> */}
          <OfficeTour />
          {/* <div className="flex mt-10 h-100 [&>img]:object-cover [&>img]:rounded-[10px] gap-x-6 justify-center">
            <Image
              src={"/images/home-tour-1.jpg"}
              width={488}
              height={0}
              alt=""
              aria-hidden="true"
            />
            <Image
              className="object-[50%_10%]"
              src={"/images/home-tour-2.jpg"}
              width={488}
              height={0}
              alt=""
              aria-hidden="true"
            />
            <Image
              src={"/images/home-tour-3.jpg"}
              width={488}
              height={0}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div> */}
        </div>
      </Container>
      <VisitUs />
      <CallToAction />
      <Footer current="home" />
    </>
  );
}
