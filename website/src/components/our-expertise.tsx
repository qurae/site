import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const expertiseAreas = [
  {
    title: "Federated Technologies",
    description: "We design and implement federated systems that enable secure, privacy-preserving data analysis across multiple organisations without centralising data."
  },
  {
    title: "Data Federation",
    description: "Our expertise in data federation helps organisations connect disparate data sources while maintaining governance, security, and compliance."
  },
  {
    title: "Healthcare Data Systems",
    description: "With deep experience in NHS and healthcare environments, we understand the unique requirements for handling sensitive health data."
  },
];

export const OurExpertise = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-4xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-7xl mb-8">
            Our Expertise
          </Heading>
          
          <BodyText className="mb-12">
            Our team brings together deep expertise across multiple domains, 
            enabling us to deliver comprehensive solutions that address both 
            technical and operational challenges.
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

