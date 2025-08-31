import Image from "next/image";

const images = [
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
  { src: "/images/home-tour-1.jpg", height: 413 },
  { src: "/images/home-tour-2.jpg", height: 350 },
];

const rowHeight = 100;

export default function Gallery() {
  return (
    <div className="grid grid-cols-4 auto-rows-[100px] gap-4">
      {images.map((img, i) => {
        const rowSpan = Math.round(img.height / rowHeight);

        return (
          <div key={i} className={`row-span-${rowSpan}`}>
            <Image
              src={img.src}
              width={368}
              height={img.height}
              className="h-full object-cover rounded-[10px]"
              alt=""
              aria-hidden={true}
            />
          </div>
        );
      })}
    </div>
  );
}
