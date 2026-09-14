import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { FeatureGrid } from "@/src/components/feature-grid";
import { CtaBand } from "@/src/components/cta-band";
import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Vision — Qurae",
  description: "Our vision for health research: well-annotated data connected safely across organisations and borders, built around public inclusion, wide representation, and international collaboration.",
  openGraph: {
    title: "Our Vision — Qurae",
    description: "Our vision for health research: well-annotated data connected safely across organisations and borders, built around public inclusion, wide representation, and international collaboration.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const beliefs = [
  {
    title: "Public Inclusion, Not Just Data",
    description: "Connected data only works if the public trust how it's used. That means real visibility and choice over what happens to their data.",
  },
  {
    title: "Representation Isn't Optional",
    description: "Research built on narrow, unrepresentative data produces findings that don't generalise, and leaves the people affected by a condition least represented in the evidence about it.",
  },
  {
    title: "International by Necessity",
    description: "Disease doesn't respect borders, and so we need mechanisims that respect controls and allows international insights to be learned. We work with partners across the UK and internationally, including the OHDSI community that maintains the OMOP standard, because the biggest questions usually need data from more than one country.",
  },
  {
    title: "Security and Connection, Together",
    description: "A more connected world and more secure data aren't opposing objectives. Federated networks and shared standards let researchers work with data they never have to move, so security and reach can grow together instead of trading off.",
  },
];

export default function VisionPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Our Vision"
          title="A research landscape built on trust"
          description="We think the next real leap in health research won&apos;t come from one new dataset or one new algorithm. It will come from well-annotated data, combined safely across organisations and countries, at a scale no single team could reach alone. Getting there has to mean greater connectivity, without compromising control and a focus on driving greater inclusion."
        />

        <section className="py-32 px-6 lg:px-8 border-b border-white">
          <div className="mx-auto max-w-5xl">
            <div className={cn("text-left", font.className)}>
              <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
                Why It Matters
              </p>
              <Heading className="text-4xl md:text-5xl mb-8 text-white">
                Obesity, diabetes, cancer, and the evidence we&apos;re missing
              </Heading>
              <BodyText className="text-lg md:text-xl text-white">
                The World Health Organization lists obesity, diabetes and cancer among the
                largest and fastest-growing burdens on health systems worldwide. Understanding
                them properly needs real-world evidence drawn from the full range of people
                living with them, not just the smaller, more uniform populations who make it
                into a clinical trial.
              </BodyText>
              <BodyText className="text-lg md:text-xl text-white">
                That evidence exists today. It&apos;s sitting inside hospitals, registries and
                research databases everywhere, mostly disconnected from each other, in different
                formats, under different governance, built for local use rather than shared
                discovery. The NHS Ten Year Plan names data as one of the enabling technologies
                behind its reform, and the national AI strategy is asking for greater provenance
                in how that data is used. The direction of travel is set. The infrastructure to
                get there safely is ready, we need clear pathways to help organisations connect.
              </BodyText>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="What We Believe"
          heading="Four things we won't compromise on"
          items={beliefs}
          footerLink={{ href: "/case-studies", label: "See this playing out in our case studies" }}
        />

        <CtaBand
          heading="Want to help build this?"
          subtext="Whether you hold data, run studies, or build the tools that connect them, tell us where you fit."
        />
      </main>
      <Footer />
    </>
  );
}
