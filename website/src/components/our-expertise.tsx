import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const expertiseAreas = [
  {
    title: "Federation Readiness & Enablement",
    description: "We help organisations become federation-ready by aligning their data, governance, and infrastructure to participate confidently in secure, compliant research networks.."
  },
  {
    title: "Technical Enablement & Oversight",
    description: "We guide and review client teams to design, implement, and maintain federated tools and pipelines that meet the highest technical and interoperability standards."
  },
  {
    title: "Federation Strategy & Influence",
    description: "We shape the direction of federated health research by advising leaders, building partnerships, and defining strategies that position organisations at the forefront of global collaboration."
  },
];

export const OurExpertise = () => {
  return (
    <section id="expertise" className="py-16 px-6 lg:px-8 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-4xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-7xl mb-8">
            Our Expertise
          </Heading>
          
          <BodyText className="mb-12">
            We combine technical insight with strategic experience to help organisations turn federation from an ambition into a working reality.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-500 transition-colors"
            >
              <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4 font-gabarito">
                {area.title}
              </h3>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

