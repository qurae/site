"use client";

import { Gabarito } from "next/font/google";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/src/lib/utils";

const font = Gabarito({ weight: "500", subsets: ["latin"] });
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
          <img 
            alt="Qurae Logo" 
            src="/logos/logo.svg" 
            className={cn(
              "h-16 w-auto transition-opacity duration-200",
              mounted && resolvedTheme === "dark" ? "opacity-0 absolute" : "opacity-100"
            )}
          />
          {/* Dark mode logo */}
          <img 
            alt="Qurae Logo" 
            src="/logos/logo-white.svg" 
            className={cn(
              "h-16 w-auto transition-opacity duration-200",
              mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0 absolute"
            )}
          />
        </div>
        <div className="text-center">
          <p
            className={cn(
              "text-gray-500 dark:text-white text-lg mt-10",
              font.className
            )}
          >
            We help organisations make their health data usable, safe, and connected.
          </p>
          <p
            className={cn(
              "text-black dark:text-white text-lg mt-10",
              font.className
            )}
          >
            <a href="mailto:hello@qurae.co.uk">hello@qurae.co.uk</a>
          </p>
          
        </div>
      </div>
    </div>
  );
};
