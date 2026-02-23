import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Vyanta Global | Enterprise Big Data, AI & Data Engineering Services",

  description:
    "Vyanta Global is an enterprise data engineering and AI services company delivering big data solutions, data integration, data governance, AI & data security, metadata management, custom development, and Industry 4.0 services for BFSI, telecom, healthcare, logistics, and automation organizations.",

  keywords: [
    // Core Services
    "big data solutions",
    "data engineering services",
    "enterprise data engineering",
    "data integration services",
    "data governance solutions",
    "AI and data security",
    "metadata management",
    "custom software development",
    "Industry 4.0 solutions",

    // Technologies & Capabilities
    "cloud data platforms",
    "AI analytics",
    "machine learning data pipelines",
    "secure data architecture",
    "real-time data processing",
    "data modernization services",

    // Industry Verticals
    "BFSI data solutions",
    "telecom data analytics",
    "healthcare data engineering",
    "logistics and automation data",
    "supply chain analytics",

    // Commercial / Intent
    "enterprise AI services",
    "data consulting company",
    "AI-ready data platforms",
    "scalable data solutions",
  ],

  icons: {
    icon: "/favicon.ico", // main favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.vyantaglobal.com/",
  },

  openGraph: {
    title:
      "Vyanta Global | Enterprise Big Data, AI & Data Engineering Services",

    description:
      "Enterprise-grade big data, AI, data integration, governance, and security services helping BFSI, telecom, healthcare, logistics, and automation organizations build scalable, compliant, and AI-ready data platforms.",

    url: "https://www.vyantaglobal.com/",
    siteName: "Vyanta Global",

    images: [
      {
        url: "https://www.vyantaglobal.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Vyanta Global – Enterprise Big Data, AI & Data Engineering Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  category: "Technology / Data Engineering / Artificial Intelligence",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>

        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
