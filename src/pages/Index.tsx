import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HumAInsSection } from "@/components/sections/HumAInsSection";
import { ZaiSection } from "@/components/sections/ZaiSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onSectionClick={scrollToSection} />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <HumAInsSection />
        <ZaiSection />
        <ComparisonSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
