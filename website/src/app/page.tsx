"use client";

import { OriginalHeader } from "@/src/components/original/header";
import { OriginalBanner } from "@/src/components/original/banner";
import { OurExpertise } from "@/src/components/our-expertise";
import { OriginalWhoWeAre } from "@/src/components/original/who-we-are";
import { OriginalCTA } from "@/src/components/original/cta";
import { OriginalFooter } from "@/src/components/original/footer";

export default function Page() {
  return (
    <>
      <OriginalHeader />
      <OriginalBanner />
      <OurExpertise />
      <OriginalWhoWeAre />
      <OriginalCTA />
      <OriginalFooter />
    </>
  );
}
