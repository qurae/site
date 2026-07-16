import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { CTA } from "@/src/components/cta";
import { Footer } from "@/src/components/footer";

export const metadata: Metadata = {
  title: "Contact — Qurae",
  description: "Get in touch with Qurae. Ready to turn your data into an asset?",
  openGraph: {
    title: "Contact — Qurae",
    description: "Get in touch with Qurae. Ready to turn your data into an asset?",
    images: "https://qurae.co.uk/images/og-image.png",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <CTA />
      </main>
      <Footer />
    </>
  );
}
