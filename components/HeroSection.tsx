import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import ServicesMenu from "./ServicesMenu";

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
      className={`bg-no-repeat bg-center bg-cover h-screen w-full relative before:content-[''] before:bg-[linear-gradient(to_bottom,#00162B,#2C5983)] before:bg-no-repeat before:bg-center before:bg-cover before:h-full before:w-full before:opacity-70 before:absolute before:z-[1] ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className={"py-5 h-full"}>
        <div className="relative z-[2] text-[white] flex h-full flex-col">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={"/icons/jdc-logo-white.png"}
                  width={78}
                  height={85}
                  alt=""
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-medium ml-6">Jain Dental Clinic</h3>
              </div>
            </Link>
            <nav>
              <ul className="flex gap-x-1.25 [&>li]:px-8 [&>li]:h-[38px] [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:rounded-full">
                <li className={
                  current === "home" ? "current" : ""
                }><Link href="/">Home</Link></li>
                <li className={
                  current === "about" ? "current" : ""
                }><Link href="/about">About</Link></li>
                <li className={
                  `w-[120px]
                  ${current === "services"
                    ? "current"
                    : ""
                  }`
                }>
                  <ServicesMenu />
                </li>
                <li className={
                  current === "clinic" ? "current" : ""
                }><Link href="/clinic">Our Clinics</Link></li>
                <li className={
                  current === "team" ? "current" : ""
                }><Link href="/team">Team</Link></li>
                <li className={
                  current === "contact" ? "current" : ""
                }><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="h-[90%] flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
            <h1 className="!text-[50px] max-w-150">{children}</h1>
            <p className="mt-6.5 mb-1.5">Call to book an appointment:</p>
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