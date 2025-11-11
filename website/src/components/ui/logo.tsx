import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-5xl md:text-6xl",
};

export const Logo = ({ className, size = "md" }: LogoProps) => {
  return (
    <span className={cn(font.className, sizeClasses[size], "font-semibold", className)}>
      Qurae
    </span>
  );
};

