import Image from "next/image";
import Container from "./Container";

export default function HeroSection({
  backgroundImage,
  subtitle,
  children,
  className = ""
}: {
  backgroundImage: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div
      className={`relative w-full h-screen bg-no-repeat bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00162B]/70 to-[#2C5983]/70 z-0" />
      <Container className={"h-full"}>
        <div className="relative z-2 text-[white] flex flex h-[115vh] flex-col pt-30 pb-40 lg:pt-40 lg:pb-50 xl:pt-40 xl:pb-50">
          <div className="h-full flex flex-col justify-center [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:mt-4">
            <h2 className="mb-5 !text-[26px]">{subtitle}</h2>
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