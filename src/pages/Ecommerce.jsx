import EcommerceHero from '../components/ecommerce/EcommerceHero';
import EcommerceTrustBar from '../components/ecommerce/EcommerceTrustBar';
import ShoppingJourney from '../components/ecommerce/ShoppingJourney';
import EcommerceFeatureGrid from '../components/ecommerce/EcommerceFeatureGrid';
import EcommerceCTA from '../components/ecommerce/EcommerceCTA';

export default function Ecommerce() {
  return (
    <div className="bg-white">
      <EcommerceHero />
      <EcommerceTrustBar />
      <ShoppingJourney />
      <EcommerceFeatureGrid />
      <EcommerceCTA />
    </div>
  );
}
