import React from 'react';
import styled from 'styled-components';

const PaidService = () => {
  return (
    <PaidServicePage>
      <Header>
        <Title>Paid Services</Title>
        <Description>Explore our premium astrology services tailored to provide you with personalized insights and guidance.</Description>
      </Header>

      <ServiceSection>
        <Service>
          <ServiceIcon src="your-service-icon-url-1" alt="Service Icon 1" />
          <ServiceDetails>
            <h3>Personal Horoscope</h3>
            <p>Get a detailed analysis of your birth chart with personalized predictions and advice.</p>
            <ServicePrice>$50</ServicePrice>
            <CTAButton>Order Now</CTAButton>
          </ServiceDetails>
        </Service>

        <Service>
          <ServiceIcon src="your-service-icon-url-2" alt="Service Icon 2" />
          <ServiceDetails>
            <h3>Career Consultation</h3>
            <p>Receive expert guidance on your career path and future opportunities.</p>
            <ServicePrice>$75</ServicePrice>
            <CTAButton>Book Now</CTAButton>
          </ServiceDetails>
        </Service>

        <Service>
          <ServiceIcon src="your-service-icon-url-3" alt="Service Icon 3" />
          <ServiceDetails>
            <h3>Relationship Advice</h3>
            <p>Understand your relationship dynamics and find harmony in your personal life.</p>
            <ServicePrice>$60</ServicePrice>
            <CTAButton>Get Advice</CTAButton>
          </ServiceDetails>
        </Service>

        <Service>
          <ServiceIcon src="your-service-icon-url-4" alt="Service Icon 4" />
          <ServiceDetails>
            <h3>Health Forecast</h3>
            <p>Learn about your health prospects and how to maintain well-being.</p>
            <ServicePrice>$55</ServicePrice>
            <CTAButton>Discover Now</CTAButton>
          </ServiceDetails>
        </Service>
      </ServiceSection>

      <CallToAction>
        <h2>Start Your Journey Today</h2>
        <p>Unlock the mysteries of your life with our expert astrology services. Get personalized guidance and support to help you navigate your life's path with confidence.</p>
        <CTAButton>Explore All Services</CTAButton>
      </CallToAction>
    </PaidServicePage>
  );
};

const PaidServicePage = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #e67e22;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 0.5rem;
`;

const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Service = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 80px;
  margin-bottom: 1rem;
`;

const ServiceDetails = styled.div`

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const ServicePrice = styled.p`
  font-size: 1.5rem;
  color: #e67e22;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.button`
  background-color: #e67e22;
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    color: #e67e22;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

export default PaidService;
