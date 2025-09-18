import Image from "next/image";
import Container from "./Container";
import Navbar from "./Navbar";

export default function HeroSection({
  backgroundImage,
  page,
  subtitle,
  children,
  className = "",
}: {
  backgroundImage: string;
  page: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Navbar page={page} />
      <div
        className={`relative h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#00162B]/70 to-[#2C5983]/70" />
        <Container className={"h-full"}>
          <div className="relative z-2 flex h-[115vh] flex-col pt-30 pb-40 text-[white] lg:pt-40 lg:pb-50 xl:pt-40 xl:pb-50">
            <div className="flex h-full flex-col justify-center [&>div]:mt-4 [&>div]:flex [&>div]:items-center [&>div]:gap-x-3">
              <h2 className="mb-5 !text-[26px]">{subtitle}</h2>
              <h1 className="max-w-120 break-words whitespace-normal md:!text-[50px]">
                {children}
              </h1>
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
    </>
  );
}
