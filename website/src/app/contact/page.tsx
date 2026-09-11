import type { Metadata } from "next";
import Link from "next/link";
import { Gabarito } from "next/font/google";
import { Header } from "@/src/components/header";
import { CTA } from "@/src/components/cta";
import { Footer } from "@/src/components/footer";
import { cn } from "@/src/lib/utils";
import { Heading } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact — Qurae",
  description: "Get in touch with Qurae about data, software, or a partnership, whatever stage you're starting from.",
  openGraph: {
    title: "Contact — Qurae",
    description: "Get in touch with Qurae about data, software, or a partnership, whatever stage you're starting from.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const links = [
  {
    title: "Data",
    description: "Turn your data into a trusted, AI-ready asset.",
    href: "/data",
  },
  {
    title: "Software",
    description: "Connect your software into national research programmes.",
    href: "/software",
  },
  {
    title: "Case Studies",
    description: "See how we've done this before.",
    href: "/case-studies",
  },
  {
    title: "About",
    description: "Meet the founders and the network behind Qurae.",
    href: "/about",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <CTA />

        <section className="py-32 px-6 lg:px-8 border-b border-white">
          <div className="mx-auto max-w-5xl">
            <div className={cn("text-left mb-16", font.className)}>
              <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
                Not Sure Where to Start?
              </p>
              <Heading className="text-4xl md:text-5xl mb-0 text-white">
                Have a look around first
              </Heading>
            </div>

            <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6", font.className)}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl p-8 bg-white/5 border border-white/10 hover:border-[#14b8a6]/60 hover:bg-white/[0.07] transition-colors"
                >
                  <h3 className="text-white text-2xl font-medium mb-3">{link.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-6">{link.description}</p>
                  <span className="text-[#14b8a6] font-semibold group-hover:underline underline-offset-4">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
