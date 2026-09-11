import type { Metadata } from "next";
import Link from "next/link";
import { Gabarito } from "next/font/google";
import { Header } from "@/src/components/header";
import { Banner } from "@/src/components/banner";
import { FeatureGrid } from "@/src/components/feature-grid";
import { CtaBand } from "@/src/components/cta-band";
import { Footer } from "@/src/components/footer";
import { cn } from "@/src/lib/utils";
import { Heading } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qurae — Driving Impact From Data",
  description: "Connected. Included. In control. We turn healthcare data into trusted, AI-ready assets without adding headcount.",
  openGraph: {
    title: "Qurae — Driving Impact From Your Data",
    description: "Connected. Included. In control. We turn healthcare data into trusted, AI-ready assets without adding headcount.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const services = [
  {
    title: "Data",
    description: "Turn the data you already have into a trusted, AI-ready asset, without adding headcount.",
    href: "/data",
  },
  {
    title: "Software",
    description: "Partner with us to connect your software into national and international research programmes.",
    href: "/software",
  },
];

const differentiators = [
  {
    title: "An Embedded Team",
    description: "We sit inside your team and do the work directly, rather than handing you a report and stepping back.",
  },
  {
    title: "A National Network, Ready to Open",
    description: "15+ years of relationships across academia, the NHS and industry, a door that took decades to build.",
  },
  {
    title: "Proven Inside the NHS",
    description: "Our tools are already running in production, including the NHS England Secure Data Environment Programme.",
  },
  {
    title: "Built to Move First",
    description: "Organisations moving now on standards and AI-readiness attract the studies and funding. We help you go first.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <Banner />

      <section className="py-32 px-6 lg:px-8 border-b border-white">
        <div className="mx-auto max-w-5xl">
          <div className={cn("text-left mb-16", font.className)}>
            <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
              What We Do
            </p>
            <Heading className="text-4xl md:text-5xl mb-0 text-white">
              Two ways we help
            </Heading>
          </div>

          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", font.className)}>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl p-8 bg-white/5 border border-white/10 hover:border-[#14b8a6]/60 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-white text-2xl font-medium mb-3">{service.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                <span className="text-[#14b8a6] font-semibold group-hover:underline underline-offset-4">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Why Qurae"
        heading="Partners, not consultants"
        items={differentiators}
        footerLink={{ href: "/vision", label: "This is part of a bigger shift we believe in" }}
      />

      <CtaBand
        heading="Ready to move first?"
        subtext="Tell us what you're sitting on. We'll tell you what it could become."
      />

      <Footer />
    </>
  );
}
