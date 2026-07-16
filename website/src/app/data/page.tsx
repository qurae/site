import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { FeatureGrid } from "@/src/components/feature-grid";
import { ProcessSteps } from "@/src/components/process-steps";
import { Logos } from "@/src/components/logos";
import { CtaBand } from "@/src/components/cta-band";

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
    description: "OMOP mapping, FAIR alignment and the standards work that makes your data usable beyond your own walls.",
  },
  {
    title: "Governance & Compliance",
    description: "Frameworks that speed up safe use of your data, instead of slowing it down.",
  },
  {
    title: "AI & Analysis-Ready Platforms",
    description: "Infrastructure built so your data can be trusted and used with confidence by AI and analytics teams.",
  },
  {
    title: "A Route to the Network",
    description: "Access to one of the UK's leading health data networks, built over 15+ years across academia, the NHS and industry.",
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
    description: "You end up with trusted, interoperable data, and a direct line into national programmes.",
  },
];

export default function DataPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Data Partnership"
          title="Turn your data into a trusted asset"
          description="You&apos;re sitting on data you can&apos;t yet put to work. The standards, governance and platform expertise needed to make it trusted, interoperable and AI-ready is hard to hire and harder to retain. We bring that capability directly into your team &mdash; at pace, without adding headcount &mdash; and open a route into one of the UK&apos;s leading health data networks."
          svg="/animate/circle.svg"
        />

        <FeatureGrid
          eyebrow="What We Bring"
          heading="Capability you can't easily hire"
          items={capabilities}
        />

        <ProcessSteps
          eyebrow="How We Work"
          heading="Three steps, no headcount"
          steps={steps}
        />

        <Logos />

        <CtaBand
          heading="Ready to see what your data could become?"
          subtext="Let's talk about where you are today, and what a trusted, AI-ready asset would look like."
        />
      </main>
      <Footer />
    </>
  );
}
