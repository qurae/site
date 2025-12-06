"use client";

import { Header } from "@/src/components/header";
import { Banner } from "@/src/components/banner";
import { About } from "@/src/components/about";
import { WhoWeAre } from "@/src/components/who-we-are";
import { CTA } from "@/src/components/cta";
import { Footer } from "@/src/components/footer";
import { WobbleCardDemo } from "@/src/components/cards";

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <WhoWeAre />
      <WobbleCardDemo />
      <CTA />
      <Footer />
    </>
  );
}
