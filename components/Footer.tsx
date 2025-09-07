import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Footer({ current }: { current: string }) {
  return (
    <div className="bg-[#1C2A3A] text-white pt-18">
      <Container className="flex justify-center">
        <div className="w-300 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-10">
          <div className="[&>p]:mt-5">
            <h2>Locations</h2>
            <p className="mb-8">
              3938 Cottrelle Blvd #1<br />
              Brampton, Ontario<br /><br />

              <b>(905) 794-0100</b>
            </p>
            <p>
              3971 Major MacKenzie Dr W #6<br />
              Vaughan, Ontario<br /><br />

              <b>(905) 832-0050</b>
            </p>
          </div>
          <div>
            <h2 className="mb-5">Navigation</h2>
            <p className="[&>a]:mb-2 [&>a]:inline-block">
              <Link href="/" className={current === "home" ? "font-bold" : ""}>Home</Link><br />
              <Link href="/about" className={current === "about" ? "font-bold" : ""}>About</Link><br />
              <Link href="/services" className={current === "services" ? "font-bold" : ""}>Services</Link><br />
              <Link href="/clinic" className={current === "clinic" ? "font-bold" : ""}>Our Clinics</Link><br />
              <Link href="/team" className={current === "team" ? "font-bold" : ""}>Team</Link><br />
              {/* <Link href="/contact" className={current === "contact" ? "font-bold" : ""}>Contact</Link> */}
            </p>
          </div>
          <div>
            <h2 className="mb-5">Services</h2>
            <p className="[&>a]:mb-2 [&>a]:inline-block">
              <Link href="/services/preventive-care" className={current === "preventive-care" ? "font-bold" : ""}>Preventive Care</Link><br />
              <Link href="/services/cosmetic-dentistry" className={current === "cosmetic-dentistry" ? "font-bold" : ""}>Cosmetic Dentistry</Link><br />
              <Link href="/services/root-canal-treatment" className={current === "root-canal-treatment" ? "font-bold" : ""}>Root Canal Treatment</Link><br />
              <Link href="/services/braces-and-invisalign" className={current === "braces-and-invisalign" ? "font-bold" : ""}>Braces & Invisalign</Link><br />
              <Link href="/services/pediatric-dentistry" className={current === "pediatric-dentistry" ? "font-bold" : ""}>Pediatric Dentistry</Link><br />
              <Link href="/services/implant-dentistry" className={current === "implant-dentistry" ? "font-bold" : ""}>Implant Dentistry</Link>
            </p>
          </div>
          <div>
            <div className="[&>div]:flex [&>div]:gap-x-2 mb-10 [&>p]:mb-2">
              <h2 className="mb-5">Contact</h2>
              <p><b>Brampton:</b></p>
              <p><a href="mailto:info@jaindentalclinic.ca">info@jaindentalclinic.ca</a></p>
              <div className="mb-7">
                <a href="https://www.facebook.com/dentalclinicbrampton/">
                  <Image
                    src={"/icons/facebook.svg"}
                    width={26.67}
                    height={26.6}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
                <a href="https://www.instagram.com/jaindentalbrampton/">
                  <Image
                    src={"/icons/instagram.svg"}
                    width={27}
                    height={27}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>
              <p><b>Vaughan:</b></p>
              <p><a href="mailto:reception@jaindentalclinic.ca">reception@jaindentalclinic.ca</a></p>
              <div>
                <a href="https://www.facebook.com/dentistvaughan/">
                  <Image
                    src={"/icons/facebook.svg"}
                    width={26.67}
                    height={26.6}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
                <a href="https://www.instagram.com/jaindental.centre/">
                  <Image
                    src={"/icons/instagram.svg"}
                    width={27}
                    height={27}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <p className="text-center py-10 mt-0">&#169; 2025 Jain Dental Clinic | All Rights Reserved</p>
    </div>
  );
}