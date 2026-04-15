import MarketingHero from '../components/marketing/MarketingHero';
import MarketingTrustBar from '../components/marketing/MarketingTrustBar';
import LeadJourney from '../components/marketing/LeadJourney';
import MarketingFeatureGrid from '../components/marketing/MarketingFeatureGrid';
import MarketingCTA from '../components/marketing/MarketingCTA';

export default function MarketingAgency() {
  return (
    <div className="bg-white">
      <MarketingHero />
      <MarketingTrustBar />
      <LeadJourney />
      <MarketingFeatureGrid />
      <MarketingCTA />
    </div>
  );
}
