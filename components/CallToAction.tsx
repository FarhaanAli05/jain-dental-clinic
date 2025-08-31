import Image from "next/image";
import Container from "./Container";

export default function CallToAction({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-[#D5ECF9] py-25 text-center">
      <Container>
        {children && (
          <div>
            <h2 className="mt-[-35]">{children}</h2>
            <div className="w-full h-0.25 bg-[#0E2321] rounded-full my-15"/>
          </div>
        )}
        <Image
          src={"/icons/jdc-logo-blue.png"}
          className="block mx-auto"
          width={74.78}
          height={81.41}
          alt=""
          aria-hidden="true"
        />
        <h1 className="relative z-1 mt-5">
          Your Smile Deserves<br />
          <i>Experienced Care</i>
        </h1>
        {/* <div className="flex justify-center">
          <div className="bg-[#9EDCFF] w-138 h-8 mt-[-35] z-0" />
        </div> */}
        <p className="mt-7">
          Our team at Jain Dental Clinic is dedicated to keeping your smile healthy,<br />
          comfortable, and confident. Call to book your appointment:
        </p>
        <div className="mt-[20px] [&>div]:justify-center">
          <div className="flex items-center mt-[15px] gap-x-[25px]">
            <Image
              src={"/icons/phone-blue.svg"}
              width={35}
              height={35}
              alt=""
              aria-hidden="true"
            />
            <p>Brampton: 905-794-0100</p>
          </div>
          <div className="flex items-center mt-[15px] gap-x-[25px]">
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
      </Container>
    </div>
  );
}