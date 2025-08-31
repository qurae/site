"use client";

import { Hero } from "@/src/components/hero";
import { WavyBackground } from "@/src/components/ui/wavy-background";

export default function Page() {
  return (
    <WavyBackground
    className="max-w-4xl mx-auto relative max-h-screen px-6 lg:px-8"
      colors={[
        "#475569", // slate-600 - deeper professional gray
        "#64748b", // slate-500 - medium gray-blue
        "#94a3b8", // slate-400 - lighter gray-blue
        "#cbd5e1", // slate-300 - subtle light gray
      ]}
      waveOpacity={0.3}
      backgroundFill="#0f172a"
    >
      <Hero />
    </WavyBackground>
  );
}
