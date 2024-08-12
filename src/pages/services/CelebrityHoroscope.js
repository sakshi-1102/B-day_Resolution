import React from 'react';
import styled from 'styled-components';

const CelebrityHoroscope = () => {
  return (
    <CelebrityHoroscopePage>
      <Header>
        <Title>Celebrity Horoscope</Title>
        <Description>Discover the astrological insights and predictions for your favorite celebrities.</Description>
      </Header>

      <HoroscopeSection>
        <HoroscopeImage src="your-celebrity-image-url" alt="Celebrity Horoscope" />
        <HoroscopeDetails>
          <h2>What the Stars Say About Celebrities</h2>
          <p>Ever wondered how the stars influence the lives of your favorite celebrities? Our Celebrity Horoscope provides detailed astrological analyses, revealing their personality traits, career trajectories, and life challenges based on their birth charts.</p>
          <p>Explore how the planets have shaped the lives of stars from the entertainment, sports, and political arenas.</p>
        </HoroscopeDetails>
      </HoroscopeSection>

      <CelebrityExamples>
        <h2>Featured Celebrity Horoscopes</h2>
        <Celebrity>
          <h3>Celebrity Name 1</h3>
          <p>A deep dive into the astrological profile of [Celebrity Name 1], exploring their strengths, challenges, and life path as revealed by their birth chart.</p>
        </Celebrity>
        <Celebrity>
          <h3>Celebrity Name 2</h3>
          <p>An astrological analysis of [Celebrity Name 2], including insights into their career, relationships, and future prospects based on their horoscope.</p>
        </Celebrity>
        <Celebrity>
          <h3>Celebrity Name 3</h3>
          <p>Discover what the stars have to say about [Celebrity Name 3], from their early life to their rise to fame, through the lens of astrology.</p>
        </Celebrity>
      </CelebrityExamples>

      <CallToAction>
        <h2>Get Your Personalized Horoscope</h2>
        <p>Curious about what the stars have in store for you? Get your own personalized horoscope analysis today.</p>
        <CTAButton>Get My Horoscope</CTAButton>
      </CallToAction>
    </CelebrityHoroscopePage>
  );
};

const CelebrityHoroscopePage = styled.div`
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

const HoroscopeSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HoroscopeImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const HoroscopeDetails = styled.div`
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

const CelebrityExamples = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const Celebrity = styled.div`
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

export default CelebrityHoroscope;
