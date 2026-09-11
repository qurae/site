import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-center", font.className)}>
          <div className="text-left">
            <Heading className="text-5xl md:text-7xl mb-6 text-white">
              Let&apos;s talk
            </Heading>

            <BodyText className="text-xl md:text-2xl text-white">
              Tell us what you&apos;re working on, data, software, or something in between, and
              we&apos;ll tell you how we can help.
            </BodyText>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-[#14b8a6] text-[#0f172a] hover:bg-[#14b8a6]/90 text-lg md:text-xl h-auto px-8 py-6"
            >
              <a href="mailto:hello@qurae.co.uk">hello@qurae.co.uk</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
