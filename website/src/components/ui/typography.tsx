import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: TypographyProps) => (
  <p className={cn("text-gray-900 dark:text-white text-7xl leading-relaxed mb-6 font-light", className)}>
    {children}
  </p>
);

export const BodyText = ({ children, className }: TypographyProps) => (
  <p className={cn("text-gray-700 dark:text-white md:text-lg leading-relaxed mb-8", className)}>
    {children}
  </p>
);

export const Caption = ({ children, className }: TypographyProps) => (
  <p className={cn("text-gray-700 dark:text-white text-xs mt-2 leading-relaxed mb-8 font-semibold text-center", className)}>
    {children}
  </p>
);
