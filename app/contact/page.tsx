import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div>
        <Image
          src={"/images/contact-banner.jpg"}
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
        <h2>We're Here for You</h2>
        <h1>
          Reach Out Today — We're Just A Call Or Message Away
        </h1>
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
      <div>
        <div>
          <h1>We're Here to Help You Smile</h1>
          <Image
            src={"/images/team-banner.jpg"}
            width={654.47}
            height={463.62}
            alt=""
            aria-hidden="true"
            priority
          />
        </div>
        <div>
          <form>
            <label htmlFor="full-name">Full Name *</label>
            <input type="text" id="full-name" name="full-name" placeholder="John Doe" required />
            <label htmlFor="email">Email *</label>
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com" required />
            <label htmlFor="message">How can we help you? *</label>
            <input type="text" id="message" name="message" placeholder="Enter your message..." required />
            <button>Send Message</button>
          </form>
          <div>{/* captcha */}</div>
        </div>
      </div>
      <div>
        <div></div> {/* white background */}
        <h1>Visit Jain Dental</h1>
        <p>Quality dental care, just around the corner.</p>
        <div>
          <div>
            <h2>Brampton Location</h2>
            <div>
              <Image
                src={"/icons/pin.svg"}
                width={23.49}
                height={28.9}
                alt=""
                aria-hidden="true"
              />
              <p>
                Jain Dental Clinic:
                3938 Cottrelle Blvd #1
                Brampton, Ontario
                L6P 2R1
              </p>
            </div>
            <div>
              <Image
                src={"/icons/clock.svg"}
                width={26.25}
                height={26.6}
                alt=""
                aria-hidden="true"
              />
              <p>
                Mon, Wed, Fri: 10AM - 7PM
                Tue, Thu: 10AM - 6PM
                Sat: 9AM - 5PM
                Sun: Closed
              </p>
            </div>
            <div>
              <Image
                src={"/icons/phone-2.svg"}
                width={22.78}
                height={23.11}
                alt=""
                aria-hidden="true"
              />
              <p>
                (905) 794-0100
              </p>
            </div>
          </div>
          <div>
            {/* google maps api */}
          </div>
        </div>
        <div>
          <div>
            <h2>Vaughan Location</h2>
            <div>
              <Image
                src={"/icons/pin.svg"}
                width={23.49}
                height={28.9}
                alt=""
                aria-hidden="true"
              />
              <p>
                Jain Dental Centre:
                3971 Major MacKenzie Dr W #6
                Vaughan, Ontario
                L4H 4G1
              </p>
            </div>
            <div>
              <Image
                src={"/icons/clock.svg"}
                width={26.25}
                height={26.6}
                alt=""
                aria-hidden="true"
              />
              <p>
                Mon - Fri: 10AM - 7PM
                Sat: 9AM - 5PM
                Sun: Closed
              </p>
            </div>
            <div>
              <Image
                src={"/icons/phone-2.svg"}
                width={22.78}
                height={23.11}
                alt=""
                aria-hidden="true"
              />
              <p>
                (905) 832-0050
              </p>
            </div>
          </div>
          <div>
            {/* google maps api */}
          </div>
        </div>
      </div>
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