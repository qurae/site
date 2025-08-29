"use client";

import { Gabarito } from "next/font/google";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/src/lib/utils";

const font = Gabarito({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-12">
        <div className="mt-32 mb-8 flex justify-center">
          {/* Light mode logo */}
          {/* <img 
            alt="Qurae Logo" 
            src="./logos/logo.svg" 
            className={cn(
              "h-16 w-auto transition-opacity duration-200",
              mounted && resolvedTheme === "dark" ? "opacity-0 absolute" : "opacity-100"
            )}
          /> */}
          {/* Dark mode logo */}
          {/* <img 
            alt="Qurae Logo" 
            src="./logos/logo-white.svg" 
            className={cn(
              "h-16 w-auto transition-opacity duration-200",
              mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0 absolute"
            )}
          /> */}
        </div>
        <div className="text-left max-w-4xl mx-auto">
          <p
            className={cn(
              "text-black dark:text-white text-4xl leading-relaxed mb-6 font-light",
              font.className
            )}
          >
            Introducing <span className="font-semibold">Qurae</span>
          </p>
          <p
            className={cn(
              "text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8",
              font.className
            )}
          >
            We’ve worked on programmes with the NHS, HDR UK, DARE UK, and NIHR.
          </p>
          <p
            className={cn(
              "text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8",
              font.className
            )}
          > The next step is open, help us define it:{' '}
            <a href="mailto:hello@qurae.co.uk" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-black dark:text-white font-semibold underline underline-offset-8">hello@qurae.co.uk</a>
          </p>
          
        </div>
      </div>
    </div>
  );
};
