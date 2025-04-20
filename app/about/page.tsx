import { AboutSection } from '@/components/home/AboutSection';
import { HeroSection } from '@/components/about/HeroSection';
import { StorySection } from '@/components/about/StorySection';
import { OffersSection } from '@/components/about/OffersSection';

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <AboutSection />
      <OffersSection />
    </>
  );
}