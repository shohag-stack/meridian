import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display, Italiana, Inter} from "next/font/google";
import SmoothScrollWrapper from "@/components/animation/LenisWrapper";
import RaysoCta from "@/components/RaysoCta";
import { Weight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    default: "Meridian — Premium Restaurant nextjs Template",
    template: "%s | Meridian",
  },
  description:
    "Discover exceptional restaurants with Meridian. Fine dining, unique experiences, and more — expertly curated for discerning diners.",
  keywords: [
    "restaurants",
    "fine dining",
    "culinary experiences",
    "food and beverage",
  ],
  openGraph: {
    title: "Meridian — Premium Restaurant",
    description: "Make your vaccation memorable with Meridian. Book your table now!",
    type: "website",
  },
};

const italiana = Italiana({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
})

const playfair_Display = Playfair_Display({
  variable: "--font-display",
  weight: "500",
  subsets: ["latin"],
})

const inter = Inter({
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
      <body className={`${playfair_Display.variable} ${italiana.variable} ${inter.variable}`}>
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
