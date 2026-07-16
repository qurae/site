import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { FeatureGrid } from "@/src/components/feature-grid";
import { ProcessSteps } from "@/src/components/process-steps";
import { Logos } from "@/src/components/logos";
import { CtaBand } from "@/src/components/cta-band";

export const metadata: Metadata = {
  title: "Software Partnership — Qurae",
  description: "Bring your technology to the NHS. Fast-track adoption through the UK's leading health data networks.",
  openGraph: {
    title: "Software Partnership — Qurae",
    description: "Bring your technology to the NHS. Fast-track adoption through the UK's leading health data networks.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const capabilities = [
  {
    title: "Adoption Pathways into the NHS",
    description: "We know the procurement routes, information governance requirements and stakeholders that decide whether your technology gets adopted or stalls.",
  },
  {
    title: "Ecosystem & Standards Alignment",
    description: "We help make sure your technology speaks the same language as the platforms already inside NHS and academic environments.",
  },
  {
    title: "Partnership & Procurement Support",
    description: "From pilot to scale, we help you navigate NHS procurement and build the case for wider rollout.",
  },
  {
    title: "A Route to the Network",
    description: "Access to one of the UK's leading health data networks, built over 15+ years across academia, the NHS and industry.",
  },
];

const steps = [
  {
    title: "Discover",
    description: "We map where your technology fits, who the stakeholders are, and what a credible pilot looks like.",
  },
  {
    title: "Embed",
    description: "We work alongside your team, opening doors that would otherwise take years to find on your own.",
  },
  {
    title: "Deliver",
    description: "You end up with a live deployment, a credible NHS reference, and a route to scale.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Software Partnership"
          title="Embed your technology"
          description="If you&apos;ve built technology that helps healthcare organisations get more value from their data, we want to work with you. Our track record deploying software inside real NHS and academic environments &mdash; and our reach across the UK&apos;s leading health data networks &mdash; can fast-track your adoption and impact, whether you&apos;re open-source or commercial. We&apos;re looking for strong partners to deliver change together."
          svg="/animate/lines.svg"
        />

        <FeatureGrid
          eyebrow="What We Bring"
          heading="A fast track into the NHS"
          items={capabilities}
        />

        <ProcessSteps
          eyebrow="How We Work"
          heading="Three steps to a live deployment"
          steps={steps}
        />

        <Logos />

        <CtaBand
          heading="Ready to fast-track adoption?"
          subtext="Tell us about your technology, and we'll tell you where it fits."
        />
      </main>
      <Footer />
    </>
  );
}
