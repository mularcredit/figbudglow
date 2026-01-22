import Hero from '../components/home/Hero';
import KeyFeatures from '../components/home/KeyFeatures';
import EnterpriseSuite from '../components/home/EnterpriseSuite';
import SmartTracking from '../components/home/SmartTracking';
import ExclusiveOpportunities from '../components/home/ExclusiveOpportunities';
import PaymentSystems from '../components/home/PaymentSystems';
import HomeCompliance from '../components/home/HomeCompliance';
import HomeCTA from '../components/home/HomeCTA';
import GlowBackground from '../components/GlowBackground';

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-sans">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <GlowBackground />
      </div>

      <div className="relative z-10">
        <Hero />
        <ExclusiveOpportunities />
        <KeyFeatures />
        <EnterpriseSuite />
        <SmartTracking />
        <PaymentSystems />
        <HomeCompliance />
        <HomeCTA />
      </div>
    </div>
  );
};

export default Home;