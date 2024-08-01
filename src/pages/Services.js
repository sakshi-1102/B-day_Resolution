import React from 'react';
import { FaBaby, FaCalendarCheck, FaFileInvoiceDollar, FaHeart, FaLifeRing, FaMapMarkedAlt, FaQuestionCircle, FaRegChartBar, FaStar, FaTv, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const services = [
  { path: '/birth-chart', icon: <FaRegChartBar />, title: 'Kundli (Birth Chart)' },
  { path: '/horoscope-matching', icon: <FaHeart />, title: 'Horoscope Matching' },
  { path: '/matrimony', icon: <FaUserFriends />, title: 'AstroSage Matrimony' },
  { path: '/ask-question', icon: <FaQuestionCircle />, title: 'Ask a Question' },
  { path: '/career-counselling', icon: <FaFileInvoiceDollar />, title: 'Career Counselling' },
  { path: '/paid-services', icon: <FaFileInvoiceDollar />, title: 'Paid Services' },
  { path: '/year-analysis', icon: <FaCalendarCheck />, title: 'Year Analysis (Varshphal)' },
  { path: '/baby-name', icon: <FaBaby />, title: 'Baby Name Suggestion' },
  { path: '/transit-report', icon: <FaMapMarkedAlt />, title: 'Gochar Phal (Transit Report)' },
  { path: '/life-report', icon: <FaLifeRing />, title: 'Life Report' },
  { path: '/celebrity-horoscope', icon: <FaStar />, title: 'Celebrity Horoscope' },
  { path: '/tv', icon: <FaTv />, title: 'AstroSage TV' }
];

const Services = () => {
  return (
    <ServicesPage>
      <Title>Free Horoscope and Astrology Services</Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <Link to={service.path} key={index} style={{ textDecoration: 'none' }}>
            <ServiceCard>
              <Icon>{service.icon}</Icon>
              <CardTitle>{service.title}</CardTitle>
            </ServiceCard>
          </Link>
        ))}
      </ServicesGrid>
    </ServicesPage>
  );
};

const ServicesPage = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #4b0082;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export default Services;
