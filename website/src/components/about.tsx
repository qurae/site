import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const About = () => {
  
  return (
    <section id="about" className={`py-32 px-6 lg:px-8 border-b border-white`}>
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left max-w-3xl", font.className)}>
          <BodyText className="text-4xl md:text-4xl mb-8 text-white">
            Our directors have delivered programmes with the NHS, Health Data Research UK, DARE UK, 
            and the NIHR Nottingham Biomedical Research Centre.
          </BodyText>
        </div>
      </div>
    </section>
  );
};

