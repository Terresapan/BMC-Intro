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
  title: "Business Model Canvas Town | AI-Powered Strategy Platform",
  description: "Transform business strategy into an adventure. Join BMC Town where AI agents like Steven Segments and Victor Value help you build robust business models in an immersive pixel-art world.",
  keywords: ["business model canvas", "AI strategy", "startup tools", "business planning", "gamified learning", "AI agents"],
  authors: [{ name: "Terresa Pan" }],
  creator: "Terresa Pan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bmc-town.vercel.app",
    siteName: "Business Model Canvas Town",
    title: "BMC Town | Where Strategy Becomes Adventure",
    description: "Stop staring at static templates. Enter Business Model Canvas Town, where AI agents help you build robust business strategies in an immersive pixel-art world.",
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
    title: "BMC Town | AI-Powered Business Strategy",
    description: "Transform business strategy into an adventure with AI agents in a pixel-art world.",
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
