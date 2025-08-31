import CallToAction from "@/components/CallToAction";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisitUs from "@/components/VisitUs";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <HeroSection
        current="contact"
        backgroundImage={'/images/contact-banner.jpg'}
      >
        Reach Out <i>Today</i> — We're Just A Call Or Message Away
      </HeroSection>
      <Container className="mt-25">
        <div className="flex gap-x-20">
          <div className="flex-1">
            <h1>
              We're Here<br />
              To Help You Smile
            </h1>
            <div />
            <Image
              src={"/images/team-banner.jpg"}
              className="rounded-[10px] mt-10"
              width={654}
              height={0}
              alt=""
              aria-hidden="true"
              priority
            />
          </div>
          <form className="flex flex-col bg-[#CFE7F7] [&>input,&>textarea]:bg-white [&>input,&>textarea]:mb-5 [&>input,&>textarea]:mt-2 [&>input,&>textarea]:py-4 [&>input,&>textarea]:px-3 [&>input,&>textarea]:rounded-[10px] w-full flex-1 p-10 rounded-[10px] justify-top h-fit">
            <label htmlFor="full-name"><b>Full Name <span className="text-red-400">*</span></b></label>
            <input type="text" id="full-name" name="full-name" placeholder="John Doe" required />
            <label htmlFor="email"><b>Email <span className="text-red-400">*</span></b></label>
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com" required />
            <label htmlFor="message"><b>How can we help you? <span className="text-red-400">*</span></b></label>
            <textarea id="message" name="message" placeholder="Enter your message..." rows={5} required />
            <button className="bg-[#0C3E66] text-white send-message rounded-[10px] py-5 cursor-pointer"><b>Send Message</b></button>
          </form>
          <div>{/* captcha */}</div>
        </div>
      </Container>
      <VisitUs />
      <CallToAction />
      <Footer current="contact" />
    </>
  );
}