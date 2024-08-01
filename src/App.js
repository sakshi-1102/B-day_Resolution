import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import AskQuestion from './pages/AskQuestion';
import AstroSageMatrimony from './pages/AstroSageMatrimony';
import AstroSageTv from './pages/AstroSageTv';
import BabyName from './pages/BabyName';
import BirthChart from './pages/BirthChart';
import CareerCounselling from './pages/CareerCounselling';
import CelebrityHoroscope from './pages/CelebrityHoroscope';
import Contact from './pages/Contact';
import GocharPhal from './pages/GocharPhal';
import Home from './pages/Home';
import HoroscopeMatching from './pages/HoroscopeMatching';
import LifeReport from './pages/LifeReport';
import PaidServices from './pages/PaidServices';
import Services from './pages/Services';
import YearAnalysis from './pages/YearAnalysis';

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
        
        {/* Add routes for other service components here... */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
