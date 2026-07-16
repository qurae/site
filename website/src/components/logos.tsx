import { Gabarito } from "next/font/google";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Heading } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const partnerLogos = [
  { src: "/images/logos/uon.svg", alt: "UoN" },
  { src: "/images/logos/nus.svg", alt: "NUS" },
  { src: "/images/logos/hdr.svg", alt: "HDR" },
  { src: "/images/logos/sde.svg", alt: "SDE" },
  { src: "/images/logos/mwd.svg", alt: "MWD" },
];

export const Logos = () => {
  return (
    <section className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-4xl mb-8 text-white">
            Our Partners
          </Heading>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center">
          {partnerLogos.map((logo) => (
            <div key={logo.src} className="relative h-14 md:h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
