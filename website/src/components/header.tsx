"use client";

import Link from "next/link";
import { Logo } from "@/src/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="md" className="text-white" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#expertise" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                    <span className={cn("text-white font-light drop-shadow-lg", font.className)}>
                      What We Enable
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#who-we-are" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                    <span className={cn("text-white font-light drop-shadow-lg", font.className)}>
                      Our Directors
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#14b8a6] px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                    <span className={cn("text-white font-light drop-shadow-lg", font.className)}>
                      Contact
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

