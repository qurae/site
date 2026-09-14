import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";
import { Vanta } from "@/src/components/ui/vanta";
import { Button } from "@/src/components/ui/button";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const Banner = () => {
  return (
    <div className="w-full relative h-screen border-b border-white overflow-hidden">
      <Vanta />
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-5xl">
            <div className="text-left">
              <h1 className={cn("text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6 md:whitespace-nowrap", font.className)}>
                Driving Impact From Your Data
              </h1>
              <p className={cn("text-white text-xl md:text-2xl font-light drop-shadow-lg mb-8", font.className)}>
                Connected. Included. In control.
              </p>
              <Button asChild size="lg" className={cn("bg-[#14b8a6] text-[#0f172a] hover:bg-[#14b8a6]/90", font.className)}>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
