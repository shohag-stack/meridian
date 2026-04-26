import HeroSection from '@/components/sections/HeroSection';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import { StatsSection, WhyUsSection } from '@/components/sections/WhyUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { BlogPreviewSection } from '@/components/sections/BlogAndCTA';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
