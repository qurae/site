import type { Metadata } from "next";
import "@/src/app/globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "Qurae",
  description: "Something new is emerging from the University of Nottingham, led by the team that has delivered programmes with the NHS, Health Data Research UK, DARE UK, and the NIHR Nottingham Biomedical Research Centre.",
  icons: {
    icon: "./icons/favicon.ico",
    apple: "./icons/apple-icon.png",
  },
  openGraph: {
    title: "Qurae",
    description: "Something new is emerging from the University of Nottingham, led by the team that has delivered programmes with the NHS, Health Data Research UK, DARE UK, and the NIHR Nottingham Biomedical Research Centre.",
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
      <body className={`antialiased bg-white dark:bg-[#0f172a]`} suppressHydrationWarning>
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
