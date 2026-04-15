import SupportHero from '../components/support/SupportHero';
import SupportTrustBar from '../components/support/SupportTrustBar';
import OmnichannelRouting from '../components/support/OmnichannelRouting';
import HumanTouchBalance from '../components/support/HumanTouchBalance';
import SmartQueryRouting from '../components/support/SmartQueryRouting';
import UnifiedInboxDashboard from '../components/support/UnifiedInboxDashboard';
import SupportFinalCTA from '../components/support/SupportFinalCTA';

export default function Support() {
  return (
    <div className="bg-white">
      <SupportHero />
      <SupportTrustBar />
      <OmnichannelRouting />
      <HumanTouchBalance />
      <SmartQueryRouting />
      <UnifiedInboxDashboard />
      <SupportFinalCTA />
    </div>
  );
}
