import Link from "next/link";
import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface ProductPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const ProductPageHero = ({ eyebrow, title, description }: ProductPageHeroProps) => {
  return (
    <section className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left", font.className)}>
          <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
            {eyebrow}
          </p>
          <Heading className="text-4xl md:text-5xl mb-8 text-white">
            {title}
          </Heading>
          <BodyText className="text-lg md:text-xl text-white">
            {description}
          </BodyText>
          <Button asChild size="lg" className="bg-[#14b8a6] text-[#0f172a] hover:bg-[#14b8a6]/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
