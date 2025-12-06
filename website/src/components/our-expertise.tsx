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
    title: "Federation Readiness & Enablement",
    description: "We help organisations become federation-ready by aligning their data, governance, and infrastructure to participate confidently in secure, compliant research networks..",
    svg: "/animate/circle.svg"
  },
  {
    title: "Technical Enablement & Oversight",
    description: "We guide and review client teams to design, implement, and maintain federated tools and pipelines that meet the highest technical and interoperability standards.",
    svg: "/animate/orbit.svg"
  },
  {
    title: "Federation Strategy & Influence",
    description: "We shape the direction of federated health research by advising leaders, building partnerships, and defining strategies that position organisations at the forefront of global collaboration.",
    svg: "/animate/arc.svg"
  },
];

export const OurExpertise = () => {
  return (
    <section id="expertise" className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-4xl mb-8">
            What We Do
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

