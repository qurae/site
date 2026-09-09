import type { Metadata } from "next";
import "@/src/app/globals.css";

export const metadata: Metadata = {
  title: "Qurae",
  description: "Connecting national strategy to local delivery. We turn healthcare data into trusted, AI-ready assets without adding headcount.",
  icons: {
    icon: "./icons/favicon.ico",
    apple: "./icons/apple-icon.png",
  },
  openGraph: {
    title: "Qurae",
    description: "Connecting national strategy to local delivery. We turn healthcare data into trusted, AI-ready assets without adding headcount.",
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
      <body className="antialiased bg-[#0f172a]">{children}</body>
    </html>
  );
}
