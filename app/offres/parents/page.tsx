import { ParentHeroSection } from '@/components/offers/parents/HeroSection';
import { ProblemSection } from '@/components/offers/parents/ProblemSection';
import { OfferSection } from '@/components/offers/parents/OfferSection';
import { WhyUsSection } from '@/components/offers/WhyUsSection';

export default function ParentOfferPage() {
  return (
    <>
      <ParentHeroSection />
      <ProblemSection />
      <OfferSection />
      <WhyUsSection />
    </>
  );
}