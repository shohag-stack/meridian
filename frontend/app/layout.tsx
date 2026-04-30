import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import SmoothScrollWrapper from "@/components/animation/LenisWrapper";
import RaysoCta from "@/components/RaysoCta";

export const metadata: Metadata = {
  title: {
    default: "EstateHaven — Premium Real Estate",
    template: "%s | EstateHaven",
  },
  description:
    "Discover exceptional properties with EstateHaven. Luxury homes, penthouses, villas, and more — expertly curated for discerning buyers.",
  keywords: [
    "real estate",
    "luxury homes",
    "property for sale",
    "property for rent",
  ],
  openGraph: {
    title: "EstateHaven — Premium Real Estate",
    description: "Discover exceptional properties with EstateHaven.",
    type: "website",
  },
};

const brico_grotesque = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${brico_grotesque.variable}`}>
        <RaysoCta />
        <Navbar />
        <main>
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </main>

        <Footer />
      </body>
    </html>
  );
}
