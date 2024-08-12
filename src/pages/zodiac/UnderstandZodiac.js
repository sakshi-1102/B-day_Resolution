import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const zodiacSigns = [
  { name: 'Aries', path: '/aries', dateRange: 'March 21 - April 19' },
  { name: 'Taurus', path: '/taurus', dateRange: 'April 20 - May 20' },
  { name: 'Gemini', path: '/gemini', dateRange: 'May 21 - June 20' },
  { name: 'Cancer', path: '/cancer', dateRange: 'June 21 - July 22' },
  { name: 'Leo', path: '/leo', dateRange: 'July 23 - August 22' },
  { name: 'Virgo', path: '/virgo', dateRange: 'August 23 - September 22' },
  { name: 'Libra', path: '/libra', dateRange: 'September 23 - October 22' },
  { name: 'Scorpio', path: '/scorpio', dateRange: 'October 23 - November 21' },
  { name: 'Sagittarius', path: '/sagittarius', dateRange: 'November 22 - December 21' },
  { name: 'Capricorn', path: '/capricorn', dateRange: 'December 22 - January 19' },
  { name: 'Aquarius', path: '/aquarius', dateRange: 'January 20 - February 18' },
  { name: 'Pisces', path: '/pisces', dateRange: 'February 19 - March 20' },
];

const UnderstandZodiac = () => {
  return (
    <ZodiacContainer>
      <Title>Understand Your Zodiac Sign</Title>
      <IntroText>
        Discover the characteristics, strengths, weaknesses, and much more about each zodiac sign.
        Click on a sign to explore in detail.
      </IntroText>
      <ZodiacGrid>
        {zodiacSigns.map((sign) => (
          <ZodiacCard key={sign.name}>
            <ZodiacLink to={sign.path}>
              <SignName>{sign.name}</SignName>
              <DateRange>{sign.dateRange}</DateRange>
            </ZodiacLink>
          </ZodiacCard>
        ))}
      </ZodiacGrid>
    </ZodiacContainer>
  );
};

const ZodiacContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #333;
`;

const IntroText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #555;
`;

const ZodiacGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ZodiacCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ZodiacLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SignName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #e67e22;
`;

const DateRange = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default UnderstandZodiac;
