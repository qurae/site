"use client";

import { Banner } from "@/src/components/banner";
import { About } from "@/src/components/about";
import { WhoWeAre } from "@/src/components/who-we-are";
import { OurExpertise } from "@/src/components/our-expertise";
import { Footer } from "@/src/components/footer";

export default function Page() {
  return (
    <>
      <Banner />
      <About />
      <WhoWeAre />
      <OurExpertise />
      <Footer />
    </>
  );
}
