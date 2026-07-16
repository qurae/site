import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { Header } from "@/src/components/header";
import { WhoWeAre } from "@/src/components/who-we-are";
import { Logos } from "@/src/components/logos";
import { CtaBand } from "@/src/components/cta-band";
import { Footer } from "@/src/components/footer";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About — Qurae",
  description: "Meet the directors behind Qurae and the national health data network we bring to every partnership.",
  openGraph: {
    title: "About — Qurae",
    description: "Meet the directors behind Qurae and the national health data network we bring to every partnership.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

const stats = [
  { value: "15+", label: "Years inside the NHS and academia" },
  { value: "2", label: "Directors. No layers, no handoffs." },
  { value: "1", label: "National network, 15 years in the making" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 px-6 lg:px-8 border-b border-white">
          <div className="mx-auto max-w-5xl">
            <div className={cn("text-left", font.className)}>
              <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
                About Qurae
              </p>
              <Heading className="text-4xl md:text-6xl mb-6 text-white">
                The team you can&apos;t hire yourself
              </Heading>
              <BodyText className="text-lg md:text-xl text-white/80 max-w-2xl mb-0">
                Qurae is Phil Quinlan and Andy Rae &mdash; two directors with 15+ years inside the NHS
                and academia, and the network to prove it. You don&apos;t need to hire us. You can
                just engage us.
              </BodyText>
            </div>

            <div className={cn("grid grid-cols-3 gap-6 mt-16 max-w-2xl", font.className)}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-white text-4xl md:text-5xl font-light mb-2">{stat.value}</p>
                  <p className="text-white/60 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhoWeAre />

        <section className="py-32 px-6 lg:px-8 border-b border-white">
          <div className="mx-auto max-w-5xl">
            <div className={cn("text-left", font.className)}>
              <p className="text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-4">
                Why It Matters
              </p>
              <Heading className="text-4xl md:text-5xl mb-8 text-white">
                A network you can&apos;t buy
              </Heading>
              <BodyText className="text-lg md:text-xl text-white max-w-2xl">
                When you work with Qurae, you don&apos;t just get two directors &mdash; you get a
                pathway into one of the UK&apos;s leading health data networks, built over 15+ years
                across academia, the NHS and industry. We&apos;re seeking strong, lasting partnerships
                with organisations who share our vision for what data can do, and who want to move
                first rather than explain later why they didn&apos;t.
              </BodyText>
            </div>
          </div>
        </section>

        <Logos />

        <CtaBand
          heading="Ready to work with the team, not around it?"
          subtext="Tell us what you're building. We'll tell you how we fit."
        />
      </main>
      <Footer />
    </>
  );
}
