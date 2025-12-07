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
    description: "If you have datasets and want to be part of global studies, we can help you move from isolated datasets to federation ready assets. " +
        "Through deep expertise in data standards, governance, platforms, and compliance, we can help organisastions " +
        "through a data transformation programme. The result is data that is trusted, interoperable, and ready to " +
        "be safely used by artificial intelligence and support high impact research.",
    svg: "/animate/circle.svg"
  },
  {
    title: "Embed your technology",
    description: "If you have a technology that enables federation, we want to work with you with a focus on the adoption of " +
        "leading software to deliver change to healthcare organisations. Our knowledge of the complete eco-system and international " +
        "partnerships can help you fast track your technology to impact. Whether that is open-source of commercial offerings, we are " +
        "seeking strong partners to deliver change.   ",
    svg: "/animate/orbit.svg"
  },
  {
    title: "Build lasting partnerships",
    description: "We can help you connect with organisations that share your vision for research. With our understanding of the International" +
        " secure and confidential data infrastructure, we are seeking strong and lasting partnerships where we collaboratively seek to " +
        "form partnerships that are based on a common vision that can deliver long term impact. Our track record is strong in working across" +
        "academic, NHS and commercial partners and the ways of working that enable mutual success.",
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
                <h3 className={cn("text-white text-3xl md:text-3xl font-light mb-4 leading-tight", font.className)}>
                  {area.title}
                </h3>
                <p className={cn("text-white text-base md:text-lg leading-relaxed opacity-90", font.className)}>
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

