import type { Metadata } from "next";
import Link from "next/link";
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
          description={
            <>
              These are some of our early projects: connecting data and technology to national
              and international research, in a way that empowers organisations to take part
              while keeping control. You can read more about the thinking behind this approach
              in{" "}
              <Link href="/vision" className="text-[#14b8a6] hover:underline underline-offset-4">
                our vision
              </Link>
              .
            </>
          }
        />

        <CaseStudy
          eyebrow="Metadataworks"
          title="Connecting Bunny to Snowflake inside the London SDE"
          logos={[
            { src: "/images/logos/mwd.svg", alt: "Metadataworks" },
            { src: "/images/logos/sde.svg", alt: "London Secure Data Environment" },
          ]}
          paragraphs={[
            <>
              <a
                href="https://bunny.health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                Bunny
              </a>{" "}
              is an open-source tool developed by our teams in the University, and is part of
              the national system from{" "}
              <a
                href="https://www.hdruk.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                Health Data Research UK
              </a>
              . The{" "}
              <a
                href="https://onelondon.online/london-secure-data-environment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                London Secure Data Environment
              </a>{" "}
              (London SDE) wanted to use Bunny to connect their data to the national cohort
              discovery service.
            </>,
            <>
              We supported{" "}
              <a
                href="https://metadataworks.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                Metadataworks
              </a>
              , who were supporting the London SDE, to make the necessary changes to Bunny,
              mainly around the adaptation to enable it to connect to a Snowflake database.
            </>,
          ]}
          tags={["Bunny", "Snowflake", "London SDE", "Security & Connection"]}
        />

        <CaseStudy
          eyebrow="National University of Singapore"
          title="Advising PRECISE 100K on OMOP, vocabulary and federated connectivity"
          logos={[{ src: "/images/logos/nus.svg", alt: "National University of Singapore" }]}
          paragraphs={[
            <>
              The National University of Singapore asked us to advise on{" "}
              <a
                href="https://www.npm.sg/archive/phase-ii-precise-sg100k/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                PRECISE 100K
              </a>
              , a large-scale precision medicine cohort, on how to adopt the OMOP Common Data
              Model properly: not just the structure, but the vocabulary that makes it usable
              across borders.
            </>,
            "Beyond the data model itself, we advised on how PRECISE 100K could connect into a federated network, or a similar cohort-to-cohort collaboration model, drawing on our experience in the OHDSI community that maintains OMOP, and on running federated health data infrastructure in the UK. Disease doesn't respect borders, so it tends to help when those connections are considered from the start, rather than added on afterwards.",
          ]}
          tags={["OMOP", "Vocabulary Mapping", "Federated Networks", "International by Necessity"]}
        />

        <CaseStudy
          eyebrow="Health Data Research UK"
          title="Cohort discovery and OMOP conversion for the Dementia Trials Accelerator"
          logos={[{ src: "/images/logos/hdr.svg", alt: "Health Data Research UK" }]}
          paragraphs={[
            <>
              <a
                href="https://www.hdruk.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                Health Data Research UK
              </a>{" "}
              sought our support for the{" "}
              <a
                href="https://web.dementia-trials.healthdatagateway.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline underline-offset-4"
              >
                Dementia Trials Accelerator
              </a>{" "}
              to advise on how to use the Carrot and Bunny tools. The University of Dundee is
              using Carrot to help with the data curation process, and Bunny is used by HDR UK
              for their Cohort Discovery Service. We are advising both teams on the best use of
              the tools, and supporting adaptations to the open-source repositories.
            </>,
            "Working with the development team at HDR UK, they are building new search capabilities into their cohort discovery " +
            "tool that need corresponding changes to the Bunny software. We are supporting their adaptation of Bunny and integrating " +
            "those changes into the main code repository, so the benefits are there for everyone using it. Better search and discovery, " +
            "in this case, means researchers can find and reach a wider range of people eligible for dementia trials.",
          ]}
          tags={["Bunny", "Carrot", "OMOP", "Wider Representation"]}
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
