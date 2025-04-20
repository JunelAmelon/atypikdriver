import { DriverHeroSection } from '@/components/offers/drivers/HeroSection';
import { NeedsSection } from '@/components/offers/drivers/NeedsSection';
import { OfferSection } from '@/components/offers/drivers/OfferSection';
import { WhyUsSection } from '@/components/offers/WhyUsSection';

export default function DriverOfferPage() {
  return (
    <>
      <DriverHeroSection />
      <NeedsSection />
      <OfferSection />
      <WhyUsSection />
    </>
  );
}