import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmc-ui-635390037922.us-central1.run.app"),
  title: "Business Model Canvas Town | AI-Powered Strategy Platform",
  description: "Expert-Level Strategy Guidance, Now Accessible to Everyone.",
  keywords: ["business model canvas", "AI strategy", "startup tools", "business planning", "gamified learning", "AI agents"],
  authors: [{ name: "Terresa Pan" }],
  creator: "Terresa Pan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bmc-intro.vercel.app",
    siteName: "Business Model Canvas Town",
    title: "Business Model Canvas Town | AI-Powered Strategy Platform",
    description: "Expert-Level Strategy Guidance, Now Accessible to Everyone.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Business Model Canvas Town - AI-Powered Strategy Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Model Canvas Town | AI-Powered Strategy Platform",
    description: "Expert-Level Strategy Guidance, Now Accessible to Everyone.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${pressStart2P.variable} antialiased bg-brand-dark text-slate-200 selection:bg-fuchsia-500 selection:text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
