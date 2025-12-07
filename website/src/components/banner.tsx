import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const Banner = () => {
  return (
    <div className="w-full relative h-screen border-b border-white">
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-5xl">
            <div className="text-left">
              <h1 className={cn("text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6", font.className)}>
                Advancing Federated<br /> Health Research
              </h1>
              <p className={cn("text-white text-xl md:text-2xl font-light drop-shadow-lg", font.className)}>
                Bridging technology and healthcare to unlock global federated research.
              </p>
        </div>
        </div>
        </div>
    </div>
    </div>
  );
};
