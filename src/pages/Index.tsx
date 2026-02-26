import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import SpecialistSection from "@/components/landing/SpecialistSection";
import BonusSection from "@/components/landing/BonusSection";
import OfferSection from "@/components/landing/OfferSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import StickyFooter from "@/components/landing/StickyFooter";
import ProgressBar from "@/components/landing/ProgressBar";

const Index = () => {
  return (
    <main className="min-h-screen pb-20">
      <ProgressBar />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <SpecialistSection />
      <BonusSection />
      <OfferSection />
      <SocialProofSection />
      <GuaranteeSection />
      <FAQSection />
      <StickyFooter />
    </main>
  );
};

export default Index;
