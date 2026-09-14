"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/src/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Data", href: "/data" },
  { label: "Software", href: "/software" },
  { label: "Case Studies", href: "/case-studies" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <Logo size="md" className="text-white" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                      )}
                    >
                      <span className={cn("text-white font-light drop-shadow-lg", font.className)}>
                        {link.label}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#14b8a6] px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    )}
                  >
                    <span className={cn("text-[#0f172a] font-medium group-hover:text-white drop-shadow-lg", font.className)}>
                      Contact Us
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-white"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className={cn("md:hidden bg-[#0f172a] border-t border-white/10 px-6 py-6", font.className)}>
          <nav className="mx-auto max-w-5xl flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 text-lg font-light py-3 border-b border-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#14b8a6] px-4 py-3 text-[#0f172a] font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
