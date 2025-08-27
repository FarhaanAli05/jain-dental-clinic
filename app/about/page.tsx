import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div>
        <Image
          src={"/images/about-banner.jpg"}
          width={100}
          height={100}
          alt=""
          aria-hidden="true"
          priority
        />
        <div>
          <div>
            <Image
              src={"/icons/jdc-logo-white.png"}
              width={78}
              height={85}
              alt=""
              aria-hidden="true"
            />
          </div>
          <h3>Jain Dental Clinic</h3>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/clinic">Our Clinics</Link></li>
              <li>
                <Link href="/services">Services</Link>
                <Image
                  src={"/icons/arrow-down.svg"}
                  width={10}
                  height={5}
                  alt=""
                  aria-hidden="true"
                />
              </li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <h2>About Jain Dental Clinic</h2>
        <h1>Caring for Smiles, One Patient at a Time</h1>
        <p>Call to book an appointment:</p>
        <div>
          <div>
            <Image
              src={"/icons/phone.svg"}
              width={35}
              height={35}
              alt=""
              aria-hidden="true"
            />
          </div>
          <p>Brampton: 905-794-0100</p>
        </div>
        <div>
          <div>
            <Image
              src={"/icons/phone.svg"}
              width={35}
              height={35}
              alt=""
              aria-hidden="true"
            />
          </div>
          <p>Vaughan: 905-832-0050</p>
        </div>
      </div>
      <h3>About Us</h3>
      <div>
        <div>
          <Image
            src={"/images/about-banner.jpg"}
            width={100}
            height={100}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div>
          <h1>Creating Healthy Smiles With A Personal Touch</h1>
          <div>{/* underline */}</div>
          <p>
            At Jain Dental Clinic, we understand that visiting the dentist is about more than just treatment — it's about trust, comfort, and building a lasting relationship with your dental team. Our mission is to provide personalized, professional care in a welcoming environment, where every patient feels valued and heard.

            From your child's first checkup to advanced restorative treatments, we offer a full range of dental services under one roof. Guided by years of experience and the latest techniques, our team works with you to create a care plan tailored to your unique needs and goals.

            We believe that prevention, education, and compassion are key to long-term oral health. Every smile we care for is a reflection of our commitment to helping you look and feel your best — today and for years to come.
          </p>
        </div>
      </div>
      <div>
        <h2>Your Healthiest Smile Starts Here.</h2>
        <div>{/* line */}</div>
        <div>
          <Image
            src={"/icons/jdc-logo-blue.png"}
            width={74.78}
            height={81.41}
            alt=""
            aria-hidden="true"
          />
          <h1>
            Your Smile Deserves
            Experienced Care
          </h1>
          <div>{/* underline */}</div>
          <p>
            Our team at Jain Dental Clinic is dedicated to keeping your smile healthy, comfortable, and confident. Call to book your appointment:
          </p>
          <div>
            <Image
              src={"/icons/phone-blue.svg"}
              width={34}
              height={34}
              alt=""
              aria-hidden="true"
            />
            <p>Brampton: 905-794-0100</p>
          </div>
          <div>
            <Image
              src={"/icons/phone-blue.svg"}
              width={34}
              height={34}
              alt=""
              aria-hidden="true"
            />
            <p>Vaughan: 905-832-0050</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Locations</h2>
            <p>
              3938 Cottrelle Blvd #1
              Brampton, Ontario

              (905) 788-5555
            </p>
            <p>
              3971 Major MacKenzie Dr W #6
              Vaughan, Ontario

              (905) 832-0050
            </p>
          </div>
          <div>
            <h2>Navigation</h2>
            <p>
              Home
              About
              Services
              Our Clinics
              Team
              Contact
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <p>
              Preventive Care
              Cosmetic Dentistry
              Root Canal Treatment
              Braces & Invisalign
              Pediatric Dentistry
              Implant Dentistry
            </p>
          </div>
          <div>
            <div>
              <h2>Email</h2>
              <p>info@jaindental.ca</p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>Brampton:</p>
              <p>info@jaindentalclinic.ca</p>
              <div>
                <Image
                  src={"/icons/facebook.svg"}
                  width={26.67}
                  height={26.6}
                  alt=""
                  aria-hidden="true"
                />
                <Image
                  src={"/icons/instagram.svg"}
                  width={27}
                  height={27}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <p>Vaughan:</p>
              <p>reception@jaindentalclinic.ca</p>
              <div>
                <Image
                  src={"/icons/facebook.svg"}
                  width={26.67}
                  height={26.6}
                  alt=""
                  aria-hidden="true"
                />
                <Image
                  src={"/icons/instagram.svg"}
                  width={27}
                  height={27}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <p>&#169; 2025 Jain Dental Clinic | All Rights Reserved</p>
      </div>
    </>
  );
}