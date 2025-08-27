import Image from "next/image";
import Link from "next/link";

export default function PreventiveDentistry() {
  return (
    <>
      <div>
        <Image
          src={"/images/preventive-dentistry-banner.jpeg"}
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
        <h2>Preventive Dentistry</h2>
        <h1>Proactive Dental Care for A Lifetime Of Healthy Smiles</h1>
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
      <h3>Preventive Dentistry</h3>
      <div>
        <div>
          <Image
            src={"/images/home-welcome.jpg"}
            width={100}
            height={100}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div>
          <h1>Preventive Dentistry for Lifelong Oral Health</h1>
          <div>{/* underline */}</div>
          <p>
            A healthy smile starts with prevention. Our preventive dentistry services are designed to stop dental problems before they start, helping you maintain strong teeth and gums at every stage of life. From regular checkups and professional cleanings to fluoride treatments and sealants, we provide the care and guidance you need to keep your smile looking and feeling its best.

            By detecting early signs of decay, gum disease, or other concerns, we can address issues before they become complex—saving you time, discomfort, and unnecessary costs down the road. Our friendly team focuses on comfort and education, ensuring you feel informed and confident about your oral health.
          </p>
        </div>
      </div>
      <div>
        <h2>
          Protect Your Smile For Years To Come — Call Us Today To Book Your Next Preventive Appointment.
        </h2>
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