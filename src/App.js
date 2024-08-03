import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ChatWithAstrologer from './pages/homepage/ChatWithAstrologer';
import ManualReports from './pages/homepage/ManualReports';
import OnlineMeetingWithAstro from './pages/homepage/OnlineMeetingWithAstro';
import TalkToAstrologerByPhone from './pages/homepage/TalkToAstrologerByPhone';
import Services from './pages/Services';
import AskQuestion from './pages/services/AskQuestion';
import AstroSageMatrimony from './pages/services/AstroSageMatrimony';
import AstroSageTv from './pages/services/AstroSageTv';
import BabyName from './pages/services/BabyName';
import BirthChart from './pages/services/BirthChart';
import CareerCounselling from './pages/services/CareerCounselling';
import CelebrityHoroscope from './pages/services/CelebrityHoroscope';
import GocharPhal from './pages/services/GocharPhal';
import HoroscopeMatching from './pages/services/HoroscopeMatching';
import LifeReport from './pages/services/LifeReport';
import PaidServices from './pages/services/PaidServices';
import YearAnalysis from './pages/services/YearAnalysis';
// Add imports for other service components here...

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/birth-chart" element={<BirthChart />} />
        <Route path="/horoscope-matching" element={<HoroscopeMatching />} />
        <Route path="/astrosage-matrimony" element={<AstroSageMatrimony />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/career-counselling" element={<CareerCounselling />} />
        <Route path="/paid-services" element={<PaidServices />} />
        <Route path="/year-analysis" element={<YearAnalysis />} />
        <Route path="/baby-name" element={<BabyName />} />
        <Route path="/gochar-phal" element={<GocharPhal />} />
        <Route path="/life-report" element={<LifeReport />} />
        <Route path="/celebrity-horoscope" element={<CelebrityHoroscope />} />
        <Route path="/astrosage-tv" element={<AstroSageTv />} />
        <Route path="/talk-to-astrologer-by-phone" element={<TalkToAstrologerByPhone />} />
        <Route path="/chat-with-astrologer" element={<ChatWithAstrologer />} />
        <Route path="/manual-reports" element={<ManualReports />} />
        <Route path="/online-meeting" element={<OnlineMeetingWithAstro />} />
        
        {/* Add routes for other service components here... */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
