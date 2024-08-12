import React from 'react';
import styled from 'styled-components';

const GocharPhal = () => {
  return (
    <GocharPhalPage>
      <Header>
        <Title>Gochar Phal</Title>
        <Description>Explore the effects of planetary transits (Gochar) on your life and how they influence your destiny.</Description>
      </Header>

      <GocharSection>
        <GocharImage src="your-gochar-image-url" alt="Gochar Phal" />
        <GocharDetails>
          <h2>What is Gochar Phal?</h2>
          <p>Gochar Phal refers to the astrological predictions based on the transit of planets across different zodiac signs. These transits can have significant impacts on various aspects of your life, including career, relationships, health, and finances.</p>
          <p>Understanding Gochar Phal can help you prepare for upcoming challenges and take advantage of favorable periods.</p>
        </GocharDetails>
      </GocharSection>

      <TransitTypes>
        <h2>Major Planetary Transits</h2>
        <TransitType>
          <h3>Saturn Transit (Shani Gochar)</h3>
          <p>Saturn's transit is known for bringing significant challenges and opportunities for growth. It tests your patience, discipline, and resilience.</p>
        </TransitType>
        <TransitType>
          <h3>Jupiter Transit (Guru Gochar)</h3>
          <p>Jupiter's transit is often associated with expansion, growth, and abundance. It can bring positive changes in your career, education, and financial status.</p>
        </TransitType>
        <TransitType>
          <h3>Rahu-Ketu Transit</h3>
          <p>The transit of Rahu and Ketu can bring unexpected events, sudden changes, and karmic lessons that shape your life's direction.</p>
        </TransitType>
        <TransitType>
          <h3>Venus Transit (Shukra Gochar)</h3>
          <p>Venus' transit influences your relationships, love life, and financial matters, often bringing harmony and prosperity.</p>
        </TransitType>
      </TransitTypes>

      <CallToAction>
        <h2>Get Your Gochar Phal Predictions</h2>
        <p>Stay ahead of life's changes by understanding the effects of planetary transits on your horoscope. Get personalized Gochar Phal predictions today.</p>
        <CTAButton>Get My Predictions</CTAButton>
      </CallToAction>
    </GocharPhalPage>
  );
};

const GocharPhalPage = styled.div`
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

const GocharSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GocharImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const GocharDetails = styled.div`
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

const TransitTypes = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const TransitType = styled.div`
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

export default GocharPhal;
