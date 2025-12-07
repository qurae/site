import type { Metadata } from "next";
import "@/src/app/globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "Qurae",
  description: "Bridging technology and healthcare to unlock global federated research.",
  icons: {
    icon: "./icons/favicon.ico",
    apple: "./icons/apple-icon.png",
  },
  openGraph: {
    title: "Qurae",
    description: "Bridging technology and healthcare to unlock global federated research.",
    images: "https://qurae.co.uk/images/og-image.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0f172a]`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
