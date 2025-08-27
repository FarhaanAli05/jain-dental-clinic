import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <div>
        <Image
          src={"/images/team-banner.jpg"}
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
        <h2>Our Caring Professionals</h2>
        <h1>Dedicated To Your Comfort, Health, And Smile</h1>
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
      <h3>Our Team</h3>
      <h1>Meet Our Doctors</h1>
      <div>
        <div>
          <Image
            src={"/images/dr-bhushan-jain.jpg"}
            width={495.87}
            height={406}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div>
          <h1>Dr. Bhushan Jain</h1>
          <h2>BDS, DDS, FICOI, Cert. IV Sedation</h2>
          <p>
            Dr. Bhushan Jain earned his Bachelor of Dental Surgery (BDS) degree in 1994 from Punjab Government Dental School, GNDU Amritsar, India. In 2008, he received his Doctor of Dental Surgery (DDS) from the Schulich School of Medicine & Dentistry at the University of Western Ontario, London, ON, and has been practicing in downtown Toronto since May 2008.

            Passionate about continuing education, Dr. Bhushan has completed extensive advanced dental training. He earned his Fellowship with the International Congress of Oral Implantologists (ICOI) after specialized dental implant training, and is certified in IV sedation, allowing him to provide comfortable care for apprehensive patients. With experience dating back to 1994, he regularly performs wisdom teeth extractions, complex root canal re-treatments, and a wide range of advanced dental procedures.
          </p>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={"/images/dr-meenakshi-jain.jpg"}
            width={495.87}
            height={406}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div>
          <h1>Dr. Meenakshi Jain</h1>
          <h2>BDS, DDS</h2>
          <p>
            Dr. Meenakshi Jain earned her Bachelor of Dental Surgery (BDS) degree from Amravati University, India in 1995 and her Doctor of Dental Surgery (DDS) from the Schulich School of Medicine & Dentistry at the University of Western Ontario, London, in 2011. A proud mother of two, she has a special passion for caring for children and creating a positive dental experience for young patients.

            Dr. Meenakshi has completed advanced training in smile design and cosmetic dentistry, and is an active member of the Ontario Dental Association, the Academy of General Dentistry, and the American Academy of Cosmetic Dentistry. Before moving to Canada, Dr. Bhushan and Dr. Meenakshi owned and operated a highly successful practice in Punjab, India, where they treated more than 40,000 patients between 1995 and 2005. Their combined experience, dedication, and patient-first approach continue to define the care they provide today.
          </p>
        </div>
      </div>
      <div>
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