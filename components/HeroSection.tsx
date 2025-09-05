import Image from "next/image";
import Container from "./Container";
import Navbar from "./Navbar";

export default function HeroSection({
  backgroundImage,
  children,
  className = ""
}: {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div
      className={`relative w-full h-screen sm:bg-no-repeat sm:bg-center sm:bg-cover ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00162B]/70 to-[#2C5983]/70 z-0" />
      <Container className={"h-full"}>
        <Navbar />
        <div className="relative z-2 text-[white] flex h-full flex-col pt-30 pb-40 lg:pt-40 lg:pb-50 xl:pt-40 xl:pb-50">
          <div className="h-[90%] flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
            <h1 className="md:!text-[50px] max-w-150 whitespace-normal break-words">{children}</h1>
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