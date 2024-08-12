import React from 'react';
import styled from 'styled-components';

const BirthChart = () => {
  return (
    <BirthChartPage>
      <Header>
        <Title>Kundli (Birth Chart)</Title>
        <Description>Your Kundli, or birth chart, is a cosmic map that reveals your personality, strengths, challenges, and life path.</Description>
      </Header>

      <ChartSection>
        <ChartImage src="your-chart-image-url" alt="Kundli Birth Chart" />
        <ChartDetails>
          <h2>What is a Kundli?</h2>
          <p>A Kundli, or horoscope, is an astrological chart that represents the positions of the planets at the time of your birth. It is used to understand various aspects of your life, including your career, relationships, and health.</p>
          <p>The Kundli is divided into 12 houses, each representing different areas of life. The placement of planets in these houses provides insights into your past, present, and future.</p>
        </ChartDetails>
      </ChartSection>

      <KundliTypes>
        <h2>Types of Kundli</h2>
        <KundliType>
          <h3>Janam Kundli</h3>
          <p>The Janam Kundli is a natal chart prepared at the time of your birth. It is the most commonly used chart in Vedic astrology.</p>
        </KundliType>
        <KundliType>
          <h3>Lagna Kundli</h3>
          <p>The Lagna Kundli is created based on your ascendant, or rising sign. It provides insights into your physical appearance, temperament, and personality.</p>
        </KundliType>
        <KundliType>
          <h3>Chandra Kundli</h3>
          <p>The Chandra Kundli is based on the position of the Moon at the time of your birth. It is often used to understand your emotional makeup and mental state.</p>
        </KundliType>
        <KundliType>
          <h3>Dasha Kundli</h3>
          <p>The Dasha Kundli is used to analyze the planetary periods (Dashas) and their effects on different aspects of your life over time.</p>
        </KundliType>
      </KundliTypes>

      <CallToAction>
        <h2>Get Your Detailed Kundli Analysis</h2>
        <p>Unlock the secrets of your Kundli with our detailed analysis. Get personalized insights and predictions to guide you on your life journey.</p>
        <CTAButton>Get Your Kundli</CTAButton>
      </CallToAction>
    </BirthChartPage>
  );
};

const BirthChartPage = styled.div`
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

const ChartSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChartImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ChartDetails = styled.div`
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

const KundliTypes = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const KundliType = styled.div`
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

export default BirthChart;
