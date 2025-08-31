import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  current,
  backgroundImage,
  children,
  className = ""
}: {
  current: string;
  backgroundImage: string;
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div
      className={`${styles.heroSection} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className={"py-5 h-full"}>
        <div className={styles.heroContent}>
          <div className={styles.header}>
            <Link href="/">
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
            </Link>
            <nav>
              <ul>
                <li className={
                  current === "home" ? styles.current : ""
                }><Link href="/">Home</Link></li>
                <li className={
                  current === "about" ? styles.current : ""
                }><Link href="/about">About</Link></li>
                <li className={
                  `${styles.servicesMenu}
                  ${current === "services"
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
                  {/* <div>
                    <h3><Link href="/services/preventive-care">Preventive Care</Link></h3>
                    <h3><Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></h3>
                    <h3><Link href="/services/root-canal-treatment">Root Canal Treatment</Link></h3>
                    <h3><Link href="/services/braces-and-invisalign">Braces & Invisalign</Link></h3>
                    <h3><Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link></h3>
                    <h3><Link href="/services/implant-dentistry">Implant Dentistry</Link></h3>
                  </div> */}
                </li>
                <li className={
                  current === "clinic" ? styles.current : ""
                }><Link href="/clinic">Our Clinics</Link></li>
                <li className={
                  current === "team" ? styles.current : ""
                }><Link href="/team">Team</Link></li>
                <li className={
                  current === "contact" ? styles.current : ""
                }><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.heroText}>
            <h1 className="!text-[50px]">{children}</h1>
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

// export default function HeroSection({
//   page,
//   backgroundImage,
//   children
// }: {
//   page: string;
//   backgroundImage: string;
//   children: ReactNode;
// }) {
//   return (
//     <div
//       className={"relative bg-no-repeat bg-center bg-cover h-screen w-full"}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="absolute bg-gradient-to-b from-[#00162B] to-[#2C5983] bg-no-repeat bg-center bg-cover h-full w-full opacity-70 z-10" />
//       <Container>
//         <div className={"relative flex flex-col text-white h-full z-20"}>
//           <div className={styles.header}>
//             <div className={styles.logoContainer}>
//               <Image
//                 src={"/icons/jdc-logo-white.png"}
//                 width={78}
//                 height={85}
//                 alt=""
//                 aria-hidden="true"
//               />
//               <h3>Jain Dental Clinic</h3>
//             </div>
//             <nav>
//               <ul>
//                 <li className={
//                   page === "home" ? styles.current : ""
//                 }><Link href="/">Home</Link></li>
//                 <li className={
//                   page === "about" ? styles.current : ""
//                 }><Link href="/about">About</Link></li>
//                 <li className={
//                   `${styles.servicesMenu}
//                   ${page === "services"
//                     ? styles.current
//                     : ""
//                   }`
//                 }>
//                   <Link href="/services">
//                     Services
//                     <Image
//                       src={"/icons/arrow-down.svg"}
//                       width={10}
//                       height={5}
//                       alt=""
//                       aria-hidden="true"
//                     />
//                   </Link>
//                 </li>
//                 <li className={
//                   page === "clinic" ? styles.current : ""
//                 }><Link href="/clinic">Our Clinics</Link></li>
//                 <li className={
//                   page === "team" ? styles.current : ""
//                 }><Link href="/team">Team</Link></li>
//                 <li className={
//                   page === "contact" ? styles.current : ""
//                 }><Link href="/contact">Contact</Link></li>
//               </ul>
//             </nav>
//           </div>
//           <div className={styles.heroText}>
//             <h1>{children}</h1>
//             <p className={styles.callToAction}>Call to book an appointment:</p>
//             <div>
//               <Image
//                 src={"/icons/phone.svg"}
//                 width={35}
//                 height={35}
//                 alt=""
//                 aria-hidden="true"
//               />
//               <p>Brampton: 905-794-0100</p>
//             </div>
//             <div>
//               <Image
//                 src={"/icons/phone.svg"}
//                 width={35}
//                 height={35}
//                 alt=""
//                 aria-hidden="true"
//               />
//               <p>Vaughan: 905-832-0050</p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }