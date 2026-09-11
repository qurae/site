import Image from "next/image";
import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface CaseStudyProps {
  eyebrow: string;
  title: string;
  logos: { src: string; alt: string }[];
  paragraphs: string[];
  tags: string[];
}

export const CaseStudy = ({ eyebrow, title, logos, paragraphs, tags }: CaseStudyProps) => {
  return (
    <section className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left", font.className)}>
          <div className="flex flex-wrap items-center gap-6 mb-10">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="relative h-20 w-48 md:h-24 md:w-56 bg-white rounded-xl p-4 shadow-lg"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="220px"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>

          <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
            {eyebrow}
          </p>
          <Heading className="text-3xl md:text-4xl mb-8 text-white">
            {title}
          </Heading>

          {paragraphs.map((paragraph, index) => (
            <BodyText key={index} className="text-lg md:text-xl text-white">
              {paragraph}
            </BodyText>
          ))}

          <div className="flex flex-wrap gap-3 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-widest font-semibold text-white/70 border border-white/20 rounded-full px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
