import React from 'react';
import styled from 'styled-components';

const CareerCounseling = () => {
  return (
    <CareerCounselingPage>
      <Header>
        <Title>Career Counseling</Title>
        <Description>Explore your potential and find the right career path with our personalized astrological counseling.</Description>
      </Header>

      <CounselingSection>
        <CounselingImage src="your-counseling-image-url" alt="Career Counseling" />
        <CounselingDetails>
          <h2>Why Career Counseling?</h2>
          <p>Astrological career counseling helps you align your professional life with your natural talents and planetary influences. Discover the career path that is best suited to your zodiac sign and life goals.</p>
          <p>Our counseling sessions are tailored to your unique birth chart, providing insights into your strengths, challenges, and the best timing for career changes.</p>
        </CounselingDetails>
      </CounselingSection>

      <CounselingTypes>
        <h2>Types of Career Counseling</h2>
        <CounselingType>
          <h3>Astrological Career Mapping</h3>
          <p>Using your birth chart, we map out potential career paths that align with your natural abilities and planetary influences.</p>
        </CounselingType>
        <CounselingType>
          <h3>Timing and Opportunities</h3>
          <p>Learn the most favorable periods for making career moves, starting new ventures, or seeking promotions based on astrological transits.</p>
        </CounselingType>
        <CounselingType>
          <h3>Personalized Career Guidance</h3>
          <p>Receive one-on-one guidance to help you navigate career challenges and make informed decisions that resonate with your astrological profile.</p>
        </CounselingType>
      </CounselingTypes>

      <CallToAction>
        <h2>Get Your Career Counseling Session</h2>
        <p>Empower your career decisions with our expert astrological counseling. Discover the path that aligns with your destiny.</p>
        <CTAButton>Book Your Session</CTAButton>
      </CallToAction>
    </CareerCounselingPage>
  );
};

const CareerCounselingPage = styled.div`
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

const CounselingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CounselingImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const CounselingDetails = styled.div`
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

const CounselingTypes = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const CounselingType = styled.div`
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

export default CareerCounseling;
