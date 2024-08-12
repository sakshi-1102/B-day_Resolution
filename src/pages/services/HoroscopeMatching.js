import React from 'react';
import styled from 'styled-components';

const HoroscopeMatching = () => {
  return (
    <HoroscopeMatchingPage>
      <Header>
        <Title>Horoscope Matching</Title>
        <Description>Explore the ancient science of horoscope matching to find your perfect life partner.</Description>
      </Header>

      <MatchingSection>
        <MatchingImage src="your-matching-image-url" alt="Horoscope Matching" />
        <MatchingDetails>
          <h2>What is Horoscope Matching?</h2>
          <p>Horoscope matching, also known as Kundli matching, is a Vedic astrology tradition used to analyze the compatibility of two individuals in marriage. It helps to ensure a harmonious and successful married life.</p>
          <p>In Vedic astrology, the process of matching horoscopes is called "Ashtakoot Milan," where eight different aspects of the couple's horoscopes are compared. Each aspect is given a certain number of points, and the total score indicates the compatibility level.</p>
        </MatchingDetails>
      </MatchingSection>

      <MatchingFactors>
        <h2>Key Factors in Horoscope Matching</h2>
        <Factor>
          <h3>Guna Milan</h3>
          <p>Guna Milan refers to the matching of attributes in both horoscopes. It involves analyzing factors like mental compatibility, health, wealth, and family life.</p>
        </Factor>
        <Factor>
          <h3>Mangal Dosha</h3>
          <p>One of the most important factors is Mangal Dosha, caused by the planet Mars. If present, it can affect the married life, and remedies are often suggested to mitigate its effects.</p>
        </Factor>
        <Factor>
          <h3>Navamsa Chart</h3>
          <p>The Navamsa chart is a crucial divisional chart in Vedic astrology used to assess marital harmony and the strength of planets affecting married life.</p>
        </Factor>
      </MatchingFactors>

      <CallToAction>
        <h2>Get Your Horoscope Matching Report</h2>
        <p>Ensure a prosperous and happy married life by getting your detailed horoscope matching report from our experts.</p>
        <CTAButton>Get My Report</CTAButton>
      </CallToAction>
    </HoroscopeMatchingPage>
  );
};

const HoroscopeMatchingPage = styled.div`
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

const MatchingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MatchingImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const MatchingDetails = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const MatchingFactors = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const Factor = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.8rem;
    color: #e67e22;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
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

export default HoroscopeMatching;
