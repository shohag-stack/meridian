import HeroSection from '@/components/sections/HeroSection';
import Accommodations from '@/components/sections/Accomodations';
import Facilities from '@/components/ui/Facilities';
import Features from '@/components/ui/Features';
import Blogs from '@/components/sections/Blogs';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Accommodations />
      <Facilities />
      <Features />
      <Blogs />
    </>
  );
}
