import Link from "next/link";
import { Gabarito } from "next/font/google";
import { Logo } from "@/src/components/ui/logo";
import { cn } from "@/src/lib/utils";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const companyLinks = [
  { label: "Data", href: "/data" },
  { label: "Software", href: "/software" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className={cn("text-white py-24 px-6 lg:px-8 border-t border-white bg-black", font.className)}>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/20">
          <div>
            <Logo size="lg" className="text-white" />
            <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
              Driving impact from your data. Connecting national strategy to local delivery.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs text-gray-400 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@qurae.co.uk"
                  className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
                >
                  hello@qurae.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/qurae-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <img src="/images/linkedin.svg" alt="" className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-gray-400 text-sm text-left">
            Company number: 16636226 (registered in England and Wales)
          </p>
        </div>
      </div>
    </footer>
  );
};
