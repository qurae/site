import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface ProcessStepsProps {
  eyebrow?: string;
  heading: string;
  steps: { title: string; description: string }[];
}

export const ProcessSteps = ({ eyebrow, heading, steps }: ProcessStepsProps) => {
  return (
    <section className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-16", font.className)}>
          {eyebrow && (
            <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <Heading className="text-4xl md:text-5xl mb-0 text-white">
            {heading}
          </Heading>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-12", font.className)}>
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="text-[#14b8a6] text-5xl font-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white text-xl font-medium mt-4 mb-3">{step.title}</h3>
              <p className="text-white/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
