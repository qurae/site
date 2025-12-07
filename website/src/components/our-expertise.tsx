import { Gabarito } from "next/font/google";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const expertiseAreas = [
  {
    title: "Increase the value of your data",
    description: `We help you navigate how to make better use of your data. Through our expertise in data standards, governance, platforms, compliance.`,
    svg: "/animate/circle.svg"
  },
  {
    title: "Embed your technology",
    description: "If you have a technology we can help you navigate enabling research. Open source software, commercial, research software. Adoption, shaping, market ",
    svg: "/animate/orbit.svg"
  },
  {
    title: "Build lasting partnerships.",
    description: "We can help you connect with organisations that share your vision for research.",
    svg: "/animate/arc.svg"
  },
];

export const OurExpertise = () => {
  return (
    <section id="expertise" className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-4xl mb-8">
            What We Enable
          </Heading>
        
        </div>

        <div className="flex flex-col gap-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-16"
            >
              {/* SVG */}
              <div className="flex-shrink-0">
                <Image
                  src={area.svg}
                  alt=""
                  width={160}
                  height={160}
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-full min-h-[160px] bg-white opacity-30 flex-shrink-0" />

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-white text-3xl md:text-4xl font-light mb-4 leading-tight">
                  {area.title}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

