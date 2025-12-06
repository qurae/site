import { Logo } from "@/src/components/ui/logo";

export const Footer = () => {
  
  return (
    <footer className="text-white py-32 px-6 lg:px-8 border-t border-white bg-black">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="lg" className="text-white" />
          <div className="text-center md:text-right">
            <a 
              href="mailto:hello@qurae.co.uk" 
              className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              hello@qurae.co.uk
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8">
          <p className="text-gray-400 text-sm text-left">
            Company number: 16636226 (registered in England and Wales)
          </p>
        </div>
      </div>
    </footer>
  );
};

