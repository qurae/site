import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { FeatureGrid } from "@/src/components/feature-grid";
import { ProcessSteps } from "@/src/components/process-steps";
import { CtaBand } from "@/src/components/cta-band";

export const metadata: Metadata = {
  title: "Software Partnership — Qurae",
  description: "Qurae's founders are the software developers behind tools like Carrot and Bunny, built through their University of Nottingham roles. We partner with the best software providers to accelerate research together.",
  openGraph: {
    title: "Software Partnership — Qurae",
    description: "Qurae's founders are the software developers behind tools like Carrot and Bunny, built through their University of Nottingham roles. We partner with the best software providers to accelerate research together.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const builtByOurFounders = [
  {
    title: "Carrot",
    description: "Built at the University of Nottingham, Carrot helps structure and map clinical data for research use.",
    href: "https://carrot.ac.uk",
    linkLabel: "carrot.ac.uk",
  },
  {
    title: "Bunny",
    description: "Built at the University of Nottingham, Bunny is open-source software already running inside the NHS England Secure Data Environment Programme.",
    href: "https://bunny.health",
    linkLabel: "bunny.health",
  },
];

const steps = [
  {
    title: "Join Our Programmes",
    description: "We connect your technology into the national and international research programmes we run.",
  },
  {
    title: "Build With Us",
    description: "We work with you hands-on, integrating your software through our founders' technical roles inside the University.",
  },
  {
    title: "Get Our Advice",
    description: "We advise you on where your software fits in the UK health data research landscape, and how to get there.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Software Partnership"
          title="Led by the people who ship it"
          description="Phil and Andy, Qurae&apos;s founders, are software developers in their day jobs at the University of Nottingham &mdash; the team behind tools like Carrot and Bunny, already running inside NHS and academic environments to enable the safe, secure use of sensitive data in research. Qurae is how you work with that expertise: we&apos;re looking for partnerships that excite and accelerate research, and we want to work with the best software providers to drive impact together."
        />

        <FeatureGrid
          eyebrow="Built By Our Founders"
          heading="Software already running in production"
          items={builtByOurFounders}
        />

        <ProcessSteps
          eyebrow="How We Partner"
          heading="Three ways we can work together"
          steps={steps}
        />

        <CtaBand
          heading="Ready to accelerate research together?"
          subtext="Tell us what you're building, and we'll tell you where it fits &mdash; in our programmes, alongside our founders, or just with our advice."
        />
      </main>
      <Footer />
    </>
  );
}
