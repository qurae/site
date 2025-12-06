"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Heading } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export function WobbleCardDemo() {

  const sectionBg = "bg-white dark:bg-slate-950";
  
  return (
    <section className={`py-16 px-6 lg:px-8`}>
    <div className="mx-auto max-w-5xl">

      <div className={cn("text-left mb-12", font.className)}>
        <Heading className="text-5xl md:text-7xl mb-8">
          Our Expertise
        </Heading>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Federation Readiness & Enablement
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We help organisations become federation-ready by aligning their data, governance, and 
          infrastructure to participate confidently in secure, compliant research networks.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-teal-800">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Technical Enablement & Oversight
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-100">
          We guide and review client teams to design, implement, and maintain federated tools and pipelines that meet the highest technical and interoperability standards.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-sky-800">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Federation Strategy & Influence
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We shape the direction of federated health research by advising leaders, building partnerships, 
          and defining strategies that position organisations at the forefront of global collaboration.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
    </div>
    </section>
  );
}
