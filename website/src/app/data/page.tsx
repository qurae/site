import type { Metadata } from "next";
import Link from "next/link";
import { Gabarito } from "next/font/google";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { FeatureGrid } from "@/src/components/feature-grid";
import { ProcessSteps } from "@/src/components/process-steps";
import { CtaBand } from "@/src/components/cta-band";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Partnership — Qurae",
  description: "Turn your data into a trusted, AI-ready asset. We embed data standards, governance and platform expertise into your team, at pace, without adding headcount.",
  openGraph: {
    title: "Data Partnership — Qurae",
    description: "Turn your data into a trusted, AI-ready asset. We embed data standards, governance and platform expertise into your team, at pace, without adding headcount.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const capabilities = [
  {
    title: "Data Standards & Interoperability",
    description: "OMOP mapping, FAIR alignment and the standards work that lets your data connect safely across international, federated research networks.",
  },
  {
    title: "Governance & Compliance",
    description: "Connecting does not mean losing control, and there are approaches that ensure we help you retain that control whilst still benefitting from being connected into international research data networks",
  },
  {
    title: "AI & Analysis-Ready Platforms",
    description: "There are many options you could select, not all give you the control you may desire, we can help you pick the right platforms that match your desired levels of control",
  },
  {
    title: "The Research Domain, Built In",
    description: "Direct access to the University of Nottingham's research and research software teams, and to one of the UK's leading health data networks — built for real-world evidence studies and international programmes of research.",
  },
];

const steps = [
  {
    title: "Discover",
    description: "We assess what you have, what's missing, and what \"good\" looks like for your organisation.",
  },
  {
    title: "Embed",
    description: "Our team works inside yours, no lengthy hiring process, no ramp-up risk.",
  },
  {
    title: "Deliver",
    description: "You end up with trusted, interoperable data, connected to national and international programmes, and it's still yours.",
  },
];

export default function DataPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Data Partnership"
          title="Turn your data into a trusted research asset"
          description="The NHS Ten Year Plan names data as one of the enabling technologies behind its reform, and the national AI strategy is asking for greater provenance in the data organisations use. That means navigating international standards and federated networks. It&apos;s daunting for any single organisation, and a team that can do it is hard to recruit and harder to retain. Organisations that aren&apos;t connected to national and international research programmes don&apos;t just miss the network. They miss the funding that comes with being part of it. We help you get connected and included while you stay in control, bringing that capability directly into your team at pace, without adding headcount, and with a route into one of the UK&apos;s leading health data networks."
        />

        <section className="py-32 px-6 lg:px-8 border-b border-white">
          <div className="mx-auto max-w-5xl">
            <div className={cn("text-left", font.className)}>
              <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
                Why It Matters
              </p>
              <Heading className="text-4xl md:text-5xl mb-8 text-white">
                Governance as an enabler for research
              </Heading>
              <BodyText className="text-lg md:text-xl text-white">
                Our founders have done this before, across national programmes with the NHS, Health Data
                Research UK and the NHS England Secure Data Environment Programme and we
                bring that knowledge and experience directly into your organisation.
              </BodyText>
              <BodyText className="text-lg md:text-xl text-white">
                Where it helps, we bring in the University of Nottingham&apos;s own research and
                research software teams too, so what you build works for the research domain, not
                just the technical platform: real-world evidence studies, international
                programmes of research, and the standards they run on.
              </BodyText>
              <BodyText className="text-lg md:text-xl text-white">
                If you&apos;re an NHS organisation, this is also about your patients. Data that
                isn&apos;t standards-ready and connected is research your patients can&apos;t be
                included in. We partner with you through every step of getting there, and the
                data stays yours throughout.
              </BodyText>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[#14b8a6] font-semibold hover:underline underline-offset-4"
              >
                See it in action in our case studies &rarr;
              </Link>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="What We Bring"
          heading="Capability you can't easily recruit"
          items={capabilities}
        />

        <ProcessSteps
          eyebrow="How We Work"
          heading="Three steps, no headcount"
          steps={steps}
        />

        <CtaBand
          heading="Ready to see what your data could become?"
          subtext="Let's talk about where you are today, and how we partner with you to get connected without you losing control of your data."
        />
      </main>
      <Footer />
    </>
  );
}
