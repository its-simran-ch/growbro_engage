import HeroSection from '../components/HeroSection';
import UseCaseTabs from '../components/UseCaseTabs';
import AIAgentsSection from '../components/AIAgentsSection';
import HowItWorks from '../components/HowItWorks';
import IntegrationsSection from '../components/IntegrationsSection';
import TrustMetrics from '../components/TrustMetrics';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <UseCaseTabs />
      <AIAgentsSection />
      <HowItWorks />
      <IntegrationsSection />
      <TrustMetrics />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
