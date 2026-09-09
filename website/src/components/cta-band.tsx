import Link from "next/link";
import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface CtaBandProps {
  heading: string;
  subtext: string;
}

export const CtaBand = ({ heading, subtext }: CtaBandProps) => {
  return (
    <section className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-center", font.className)}>
          <div className="text-left">
            <Heading className="text-4xl md:text-5xl mb-4 text-white">
              {heading}
            </Heading>
            <BodyText className="text-lg text-white mb-0">
              {subtext}
            </BodyText>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button asChild size="lg" className="bg-[#14b8a6] text-[#0f172a] hover:bg-[#14b8a6]/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
