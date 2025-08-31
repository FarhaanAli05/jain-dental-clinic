import Image from "next/image";
import Container from "./Container";

export default function VisitUs() {
  return (
    <div className="bg-white mt-35 py-20 pb-30 text-center">
      <Container>
        <h1>Visit Jain Dental</h1>
        <p className="mt-4">Quality dental care, just around the corner.</p>
        <div className="flex text-left gap-x-1 mt-17 pl-14">
          <div className="[&>div]:flex [&>div]:items-start [&>div]:gap-x-9 flex-1 [&>div]:mt-4">
            <h2 className="mb-10">Brampton Location</h2>
            <div>
              <Image
                src={"/icons/pin.svg"}
                width={23.49}
                height={28.9}
                alt=""
                aria-hidden="true"
              />
              <p>
                Jain Dental Clinic:<br />
                3938 Cottrelle Blvd #1<br />
                Brampton, Ontario<br />
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
                Mon, Wed, Fri: 10AM - 7PM<br />
                Tue, Thu: 10AM - 6PM<br />
                Sat: 9AM - 5PM<br />
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
          <div className="flex flex-3 justify-center">
            <iframe
              width="1068"
              height="333"
              style={{ "border": 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}
                      &q=Jain Dental Clinic, Brampton, ON`}>
            </iframe>
          </div>
        </div>
        <div className="flex text-left gap-x-1 mt-17 pl-14">
          <div className="[&>div]:flex [&>div]:items-start [&>div]:gap-x-9 flex-1 [&>div]:mt-4">
            <h2 className="mb-10">Vaughan Location</h2>
            <div>
              <Image
                src={"/icons/pin.svg"}
                width={23.49}
                height={28.9}
                alt=""
                aria-hidden="true"
              />
              <p>
                Jain Dental Centre:<br />
                3971 Major MacKenzie Dr W #6<br />
                Vaughan, Ontario<br />
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
                Mon - Fri: 10AM - 7PM<br />
                Sat: 9AM - 5PM<br />
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
          <div className="flex flex-3 justify-center">
            <iframe
              width="1068"
              height="333"
              style={{ "border": 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}
                      &q=Jain Dental Centre, Maple, ON`}>
            </iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}