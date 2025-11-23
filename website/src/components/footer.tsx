import { Logo } from "@/src/components/ui/logo";
import { EmailLink } from "@/src/components/ui/email-link";

export const Footer = () => {
  const sectionBg = "bg-black";
  
  return (
    <footer className={`${sectionBg} text-white py-32 px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="lg" className="text-white" />
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2 text-sm md:text-base">Get in touch</p>
            <a 
              href="mailto:hello@qurae.co.uk" 
              className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              hello@qurae.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

