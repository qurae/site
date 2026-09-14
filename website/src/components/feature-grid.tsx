import { ReactNode } from "react";
import Link from "next/link";
import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface FeatureGridItem {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  heading: string;
  intro?: ReactNode;
  items: FeatureGridItem[];
  className?: string;
  footerLink?: { href: string; label: string };
}

export const FeatureGrid = ({ eyebrow, heading, intro, items, className, footerLink }: FeatureGridProps) => {
  return (
    <section className={cn("py-32 px-6 lg:px-8 border-b border-white", className)}>
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
          {intro && (
            <p className="text-white/80 text-lg mt-6">
              {intro}
            </p>
          )}
        </div>

        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6", font.className)}>
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-white text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">{item.description}</p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#14b8a6] font-semibold hover:underline underline-offset-4"
                >
                  {item.linkLabel ?? item.href.replace(/^https?:\/\//, "")} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

        {footerLink && (
          <Link
            href={footerLink.href}
            className={cn("inline-flex items-center gap-2 mt-10 text-[#14b8a6] font-semibold hover:underline underline-offset-4", font.className)}
          >
            {footerLink.label} &rarr;
          </Link>
        )}
      </div>
    </section>
  );
};
