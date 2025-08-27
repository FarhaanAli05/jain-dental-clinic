import Image from "next/image";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroSection
        page="home"
        backgroundImage={'/images/home-banner.webp'}
      >
        Personalized, Professional Care By <i>Experienced Dentists</i>
      </HeroSection>
      <Container>
        <div className={styles.welcomeSection}>
          <div className={styles.welcomeLeft}>
            <Image
              src={"/icons/jdc-logo-blue.png"}
              width={104.67}
              height={113.95}
              alt=""
              aria-hidden="true"
            />
            <h1>
              Welcome to<br />
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
          <div className={styles.welcomeRight}>
            <div className={styles.welcomeImageContainer}>
              <Image
                src={"/images/home-welcome.jpg"}
                width={443.05}
                height={473.54}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className={styles.welcomeCTA}>
              <p>Call to book an appointment:</p>
              <div>
                <Image
                  src={"/icons/phone-blue.svg"}
                  width={35}
                  height={35}
                  alt=""
                  aria-hidden="true"
                />
                <p>Brampton: 905-794-0100</p>
              </div>
              <div>
                <Image
                  src={"/icons/phone-blue.svg"}
                  width={35}
                  height={35}
                  alt=""
                  aria-hidden="true"
                />
                <p>Vaughan: 905-832-0050</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/home-services-background.jpg"}
            width={100}
            height={100}
            alt=""
            aria-hidden="true"
          />
          <h3>Services</h3>
          <h1>Comprehensive Care for Every Smile</h1>
          <div>
            <div>
              <div>
                <Image
                  src={"/icons/preventive-care.svg"}
                  width={55.7}
                  height={51.82}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Preventive Care</h2>
              <p>
                Protect your smile with routine checkups, professional cleanings, and preventive treatments designed to stop dental issues before they start.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src={"/icons/cosmetic-dentistry.svg"}
                  width={51.82}
                  height={51.82}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Cosmetic Dentistry</h2>
              <p>
                Enhance your confidence with personalized cosmetic treatments such as teeth whitening, veneers, and full smile makeovers.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src={"/icons/root-canal-treatment.png"}
                  width={52.91}
                  height={52.91}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Root Canal Treatment</h2>
              <p>
                Save your natural tooth and relieve discomfort with gentle, effective root canal therapy using modern techniques.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src={"/icons/braces-and-invisalign.svg"}
                  width={38.62}
                  height={38.62}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Braces & Invisalign</h2>
              <p>
                Protect your smile with routine checkups, professional cleanings, and preventive treatments designed to stop dental issues before they start.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src={"/icons/pediatric-dentistry.svg"}
                  width={41.51}
                  height={38.62}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Pediatric Dentistry</h2>
              <p>
                Give your child the best start to lifelong oral health with gentle, compassionate dental care in a kid-friendly environment.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src={"/icons/implant-dentistry.png"}
                  width={44.07}
                  height={44.07}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h2>Implant Dentistry</h2>
              <p>
                Restore missing teeth with durable, natural-looking dental implants that feel and function like your own.
              </p>
            </div>
          </div>
          <div>
            <button>
              Learn More
              <Image
                src={"/icons/right-arrow.svg"}
                width={9.95}
                height={9.62}
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/icons/stars.svg"}
              width={201.05}
              height={30.91}
              alt=""
              aria-hidden="true"
            />
          </div>
          <h1>See Why Patients Choose Us</h1>
          <p>See what our patients are saying about their experience with us.</p>
          <nav>
            <ul>
              <li>Brampton</li>
              <li>Vaughan</li>
            </ul>
          </nav>
          <div>
            <div>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”

              - Haiqa S.
            </div>
            <div>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”

              - Haiqa S.
            </div>
            <div>
              “Dr. Jain has been our family dentist since I could renember and it has always been a pleasure to go to him. The entire team in the clinic is so friendly and nice. They took care of my 5 month baby while I got my cleaning done. The hygenist was also super helpful asking if I was comfortable and doing a thorough job. Had an amazing experience. Thank you Dr. Jain & team!”

              - Haiqa S.
            </div>
            <div>
              <div> {/* nav menu */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/icons/pin-blue.svg"}
              width={74.66}
              height={74.66}
              alt=""
              aria-hidden="true"
            />
          </div>
          <h1>Tour Our Offices</h1>
          <p>Discover our clean, comfortable, and family-friendly environment.</p>
          <nav>
            <ul>
              <li>Vaughan</li>
              <li>Brampton</li>
            </ul>
          </nav>
          <div>
            <Image
              src={"/images/home-tour-1.jpg"}
              width={513.84}
              height={385.38}
              alt=""
              aria-hidden="true"
            />
            <Image
              src={"/images/home-tour-2.jpg"}
              width={462.46}
              height={385.38}
              alt=""
              aria-hidden="true"
            />
            <Image
              src={"/images/home-tour-3.jpg"}
              width={513.84}
              height={385.38}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div>
            <div> {/* nav menu */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
      </Container>
    </>
  );
}
