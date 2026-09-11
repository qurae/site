import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ProductPageHero } from "@/src/components/product-page-hero";
import { CaseStudy } from "@/src/components/case-study";
import { CtaBand } from "@/src/components/cta-band";

export const metadata: Metadata = {
  title: "Case Studies — Qurae",
  description: "Real examples of our founders' work: connecting Bunny to Snowflake for Metadataworks and the London SDE, advising the National University of Singapore's PRECISE 100K project on OMOP, and supporting HDR UK's Dementia Trials Accelerator with Bunny and Carrot.",
  openGraph: {
    title: "Case Studies — Qurae",
    description: "Real examples of our founders' work: connecting Bunny to Snowflake for Metadataworks and the London SDE, advising the National University of Singapore's PRECISE 100K project on OMOP, and supporting HDR UK's Dementia Trials Accelerator with Bunny and Carrot.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProductPageHero
          eyebrow="Case Studies"
          title="Evidence of impact"
          description="We don&apos;t just talk about connecting data and technology to national and international research. Our founders have already done it. Here&apos;s some of that work: adapting software to fit a partner&apos;s infrastructure, advising on standards adoption, and helping programmes actually use the data they have."
        />

        <CaseStudy
          eyebrow="Metadataworks"
          title="Connecting Bunny to Snowflake inside the London SDE"
          logos={[
            { src: "/images/logos/mwd.svg", alt: "Metadataworks" },
            { src: "/images/logos/sde.svg", alt: "London Secure Data Environment" },
          ]}
          paragraphs={[
            "Metadataworks needed Bunny, our founders' open-source research environment software, to work inside the London Secure Data Environment (London SDE), one of the regional nodes in the NHS Research Secure Data Environment Network. The London SDE's data was hosted in Snowflake. Bunny had no existing way to connect to it.",
            "We worked with Metadataworks to adapt Bunny so it could connect directly to Snowflake. Researchers inside the London SDE got the same cohort discovery and analysis experience Bunny already provides elsewhere, without anyone needing to migrate the underlying data.",
          ]}
          tags={["Bunny", "Snowflake", "London SDE"]}
        />

        <CaseStudy
          eyebrow="National University of Singapore"
          title="Advising PRECISE 100K on OMOP, vocabulary and federated connectivity"
          logos={[{ src: "/images/logos/nus.svg", alt: "National University of Singapore" }]}
          paragraphs={[
            "The National University of Singapore asked us to advise on PRECISE 100K, a large-scale precision medicine cohort. The question was how to adopt the OMOP Common Data Model properly: not just the structure, but how to use the OMOP vocabulary correctly too.",
            "Beyond the data model itself, we advised on how PRECISE 100K could connect into a federated network, or a similar cohort-to-cohort collaboration model, drawing on our founders' experience building and running federated health data infrastructure in the UK. Our advice was consistent throughout: adopt the standard properly, and build the connections in from the start rather than retrofitting them later.",
          ]}
          tags={["OMOP", "Vocabulary Mapping", "Federated Networks"]}
        />

        <CaseStudy
          eyebrow="Health Data Research UK"
          title="Cohort discovery and OMOP conversion for the Dementia Trials Accelerator"
          logos={[{ src: "/images/logos/hdr.svg", alt: "Health Data Research UK" }]}
          paragraphs={[
            "Health Data Research UK brought us in on the Dementia Trials Accelerator to advise on how Bunny and Carrot, our founders' own tools, could support two connected problems: finding eligible cohorts across datasets, and getting that data into OMOP so it could actually be used.",
            "We advised on using Bunny for cohort discovery, so the programme could see what data was available and who it could reach, alongside Carrot to convert and map that data into OMOP so it was ready for real analysis and trial recruitment, not just theoretically compliant. Two tools, one pipeline, built and proven by the same team advising on how to use them.",
          ]}
          tags={["Bunny", "Carrot", "OMOP", "Cohort Discovery"]}
        />

        <CtaBand
          heading="Have a similar problem?"
          subtext="Tell us what you're trying to connect, and we'll tell you how we'd approach it."
        />
      </main>
      <Footer />
    </>
  );
}
