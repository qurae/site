import { cn } from "@/src/lib/utils";
import { Gabarito } from "next/font/google";
import Image from "next/image";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const Banner = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-screen object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="text-left max-w-5xl mx-auto">
          <h1 className={cn("text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6", font.className)}>
            Advancing Federated<br /> Health Research
          </h1>
          <p className={cn("text-white text-xl md:text-2xl font-light drop-shadow-lg", font.className)}>
            We help healthcare organisations collaborate through secure and trusted data federation.
          </p>
        </div>
      </div>
    </div>
  );
};

