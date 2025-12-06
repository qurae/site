import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const About = () => {
  
  return (
    <section id="about" className={`py-16 px-6 lg:px-8 border-b border-white`}>
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left max-w-3xl", font.className)}>
          <Heading className="text-4xl md:text-4xl mb-8 text-white">
            We are an emerging company from the University of Nottingham, 
            built on a foundation of delivering impactful programmes with the NHS, 
            Health Data Research UK, DARE UK, and the NIHR Nottingham Biomedical 
            Research Centre.
          </Heading>

          <BodyText className="text-white mb-6">
            We enable organisations to harness federated technologies to drive collaboration, insight, and innovation. 
            By uniting technical expertise with governance and policy understanding, we help clients turn complex data landscapes into connected ecosystems.
          </BodyText>

          <BodyText className="text-white">
            Our mission is to help organisations become federation ready, enabling 
            them to unlock the power of collaborative data analysis while respecting 
            privacy, security, and regulatory requirements.
          </BodyText>
        </div>
      </div>
    </section>
  );
};

