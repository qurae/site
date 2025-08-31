import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: TypographyProps) => (
  <p className={cn("text-black dark:text-white text-4xl leading-relaxed mb-6 font-light", className)}>
    {children}
  </p>
);

export const BodyText = ({ children, className }: TypographyProps) => (
  <p className={cn("text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8", className)}>
    {children}
  </p>
);

export const Caption = ({ children, className }: TypographyProps) => (
  <p className={cn("text-black dark:text-gray-300 text-xs mt-2 leading-relaxed mb-8 font-semibold text-center", className)}>
    {children}
  </p>
);
