import HealthcareHero from '../components/healthcare/HealthcareHero';
import HealthcareTrustBar from '../components/healthcare/HealthcareTrustBar';
import PatientJourney from '../components/healthcare/PatientJourney';
import HealthcareFeatureGrid from '../components/healthcare/HealthcareFeatureGrid';
import HealthcareCTA from '../components/healthcare/HealthcareCTA';

export default function Healthcare() {
  return (
    <div className="bg-white">
      <HealthcareHero />
      <HealthcareTrustBar />
      <PatientJourney />
      <HealthcareFeatureGrid />
      <HealthcareCTA />
    </div>
  );
}
