import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'EstateHaven — Premium Real Estate',
    template: '%s | EstateHaven',
  },
  description: 'Discover exceptional properties with EstateHaven. Luxury homes, penthouses, villas, and more — expertly curated for discerning buyers.',
  keywords: ['real estate', 'luxury homes', 'property for sale', 'property for rent'],
  openGraph: {
    title: 'EstateHaven — Premium Real Estate',
    description: 'Discover exceptional properties with EstateHaven.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
