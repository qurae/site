import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const CTA = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-center", font.className)}>
          <div className="text-left">
            <Heading className="text-5xl md:text-7xl mb-6">
              Get in Touch
            </Heading>
            
            <BodyText className="text-xl md:text-2xl">
              Ready to get federation ready? Let's talk.
            </BodyText>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <a
              href="mailto:hello@qurae.co.uk"
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-8 decoration-2 py-8 px-12"
            >
              hello@qurae.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

