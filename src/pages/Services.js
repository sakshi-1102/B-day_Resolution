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

const plans = [
  {
    name: 'Star',
    price: '30$',
    features: ['Personal Life Advice', 'Forecast For Month'],
    unavailable: ['Natal Chart', 'Forecast For Year'],
  },
  {
    name: 'Sky',
    price: '50$',
    features: ['Personal Life Advice', 'Forecast For Month', 'Natal Chart'],
    unavailable: ['Forecast For Year'],
  },
  {
    name: 'Space',
    price: '80$',
    features: ['Personal Life Advice', 'Forecast For Month', 'Natal Chart', 'Forecast For Year'],
  },
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
      <PricingSection>
        <PricingTitle>Our Pricing Plans</PricingTitle>
        <PlansGrid>
          {plans.map((plan, index) => (
            <PlanCard key={index}>
              <PlanHeader>{plan.name}</PlanHeader>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanDetails>
                {plan.features.map((feature, i) => (
                  <Feature key={i}>{feature}</Feature>
                ))}
                {plan.unavailable &&
                  plan.unavailable.map((feature, i) => (
                    <UnavailableFeature key={i}>{feature}</UnavailableFeature>
                  ))}
              </PlanDetails>
              <GetStartedButton>Get Started</GetStartedButton>
            </PlanCard>
          ))}
        </PlansGrid>
      </PricingSection>
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
  margin-bottom: 2rem;
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
  color: #ff2400;
  margin-bottom: 1rem;
  padding: 10px; /* Add padding to the icon */
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const PricingSection = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
`;

const PricingTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

const PlansGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const PlanCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const PlanHeader = styled.h2`
  font-size: 1.5rem;
  color: #ff2400;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PlanDetails = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

const Feature = styled.p`
  font-size: 1rem;
  color: #333;
`;

const UnavailableFeature = styled.p`
  font-size: 1rem;
  color: #ccc;
  text-decoration: line-through;
`;

const GetStartedButton = styled.button`
  background: #ff2400;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #333;
  }
`;

export default Services;
