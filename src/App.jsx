import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Farmers from './pages/Farmers';
import PoorAndMarginalized from './pages/PoorAndMarginalized';
import WomenAndChildren from './pages/WomenAndChildren';
import SeniorCitizens from './pages/SeniorCitizens';
import Workers from './pages/Workers';
import ScStTribal from './pages/ScStTribal';
import DisasterAndVictims from './pages/DisasterAndVictims';
import HowToApply from './pages/HowToApply';
import Resources from './pages/Resources';

// Phase 2 New Pages
import Students from './pages/Students';
import DisabilityRights from './pages/DisabilityRights';
import LgbtqRights from './pages/LgbtqRights';
import CyberSafety from './pages/CyberSafety';
import ConsumerRights from './pages/ConsumerRights';
import RtiGuide from './pages/RtiGuide';
import FindDlsa from './pages/FindDlsa';
import SuccessStories from './pages/SuccessStories';
import RightsCard from './pages/RightsCard';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/poor-and-marginalized" element={<PoorAndMarginalized />} />
        <Route path="/women-and-children" element={<WomenAndChildren />} />
        <Route path="/senior-citizens" element={<SeniorCitizens />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/sc-st-tribal" element={<ScStTribal />} />
        <Route path="/disaster-and-victims" element={<DisasterAndVictims />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/resources" element={<Resources />} />

        {/* Phase 2 Routes */}
        <Route path="/students" element={<Students />} />
        <Route path="/disability-rights" element={<DisabilityRights />} />
        <Route path="/lgbtq-rights" element={<LgbtqRights />} />
        <Route path="/cyber-safety" element={<CyberSafety />} />
        <Route path="/consumer-rights" element={<ConsumerRights />} />
        <Route path="/rti-guide" element={<RtiGuide />} />
        <Route path="/find-dlsa" element={<FindDlsa />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/rights-card" element={<RightsCard />} />
        <Route path="/rights-card/:section" element={<RightsCard />} />
      </Routes>
    </Layout>
  );
}
