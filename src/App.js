import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import AstrologyAndRelationships from './pages/AstrologyAndRelationships';
import ChatWithAstrologer from './pages/ChatWithAstrologer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login'; // Import the Login page
import ManualReports from './pages/ManualReports';
import OnlineMeetingWithAstrologer from './pages/OnlineMeetingWithAstrologer';
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
import TalkToAstrologerByPhone from './pages/TalkToAstrologerByPhone';
import Aquarius from './pages/zodiac/Aquarius';
import Aries from './pages/zodiac/Aries';
import Cancer from './pages/zodiac/Cancer';
import Capricorn from './pages/zodiac/Capricorn';
import Gemini from './pages/zodiac/Gemini';
import Leo from './pages/zodiac/Leo';
import Libra from './pages/zodiac/Libra';
import Pisces from './pages/zodiac/Pisces';
import Sagittarius from './pages/zodiac/Sagittarius';
import Scorpio from './pages/zodiac/Scorpio';
import Taurus from './pages/zodiac/Taurus';
import UnderstandZodiac from './pages/zodiac/UnderstandZodiac';
import Virgo from './pages/zodiac/Virgo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/birth-chart" element={<BirthChart />} />
        <Route path="/horoscope-matching" element={<HoroscopeMatching />} />
        <Route path="/astro-sage-matrimony" element={<AstroSageMatrimony />} />
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
        <Route path="/online-meeting-with-astrologer" element={<OnlineMeetingWithAstrologer />} />
        <Route path="/aries" element={<Aries />} />
        <Route path="/manual-reports" element={<ManualReports />} />
        <Route path="/taurus" element={<Taurus />} />
        <Route path="/gemini" element={<Gemini />} />
        <Route path="/cancer" element={<Cancer />} />
        <Route path="/leo" element={<Leo />} />
        <Route path="/virgo" element={<Virgo />} />
        <Route path="/libra" element={<Libra />} />
        <Route path="/scorpio" element={<Scorpio />} />
        <Route path="/sagittarius" element={<Sagittarius />} />
        <Route path="/capricorn" element={<Capricorn />} />
        <Route path="/aquarius" element={<Aquarius />} />
        <Route path="/pisces" element={<Pisces />} />
        <Route path="/Understand-Zodiac" element={<UnderstandZodiac />} />
        <Route path="/astrology-and-relationships" element={<AstrologyAndRelationships />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
