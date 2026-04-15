import ELearningHero from '../components/elearning/ELearningHero';
import EdTechTrustBar from '../components/elearning/EdTechTrustBar';
import StudentJourney from '../components/elearning/StudentJourney';
import FeatureGrid from '../components/elearning/FeatureGrid';
import UseCaseShowcase from '../components/elearning/UseCaseShowcase';
import ELearningCTA from '../components/elearning/ELearningCTA';

export default function ELearning() {
  return (
    <div className="bg-white">
      <ELearningHero />
      <EdTechTrustBar />
      <StudentJourney />
      <FeatureGrid />
      <UseCaseShowcase />
      <ELearningCTA />
    </div>
  );
}
