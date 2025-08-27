import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import styles from "./HeroSection.module.css";
import { ReactNode } from "react";

export default function HeroSection({
  page,
  backgroundImage,
  children
}: {
  page: string;
  backgroundImage: string;
  children: ReactNode;
}) {
  return (
    <div
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <Image
                src={"/icons/jdc-logo-white.png"}
                width={78}
                height={85}
                alt=""
                aria-hidden="true"
              />
              <h3>Jain Dental Clinic</h3>
            </div>
            <nav>
              <ul>
                <li className={
                  page === "home" ? styles.current : ""
                }><Link href="/">Home</Link></li>
                <li className={
                  page === "about" ? styles.current : ""
                }><Link href="/about">About</Link></li>
                <li className={
                  `${styles.servicesMenu}
                  ${page === "services"
                    ? styles.current
                    : ""
                  }`
                }>
                  <Link href="/services">
                    Services
                    <Image
                      src={"/icons/arrow-down.svg"}
                      width={10}
                      height={5}
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li className={
                  page === "clinic" ? styles.current : ""
                }><Link href="/clinic">Our Clinics</Link></li>
                <li className={
                  page === "team" ? styles.current : ""
                }><Link href="/team">Team</Link></li>
                <li className={
                  page === "contact" ? styles.current : ""
                }><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.heroText}>
            <h1>{children}</h1>
            <p className={styles.callToAction}>Call to book an appointment:</p>
            <div>
              <Image
                src={"/icons/phone.svg"}
                width={35}
                height={35}
                alt=""
                aria-hidden="true"
              />
              <p>Brampton: 905-794-0100</p>
            </div>
            <div>
              <Image
                src={"/icons/phone.svg"}
                width={35}
                height={35}
                alt=""
                aria-hidden="true"
              />
              <p>Vaughan: 905-832-0050</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}