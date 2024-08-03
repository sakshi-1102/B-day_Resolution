import React from 'react';
import styled from 'styled-components';

const BabyName = () => {
  return (
    <BabyNamePage>
      <Title>Baby Name Suggestions</Title>
      <Introduction>
        Welcome to our Baby Name Suggestions page! Here, you can find the perfect name for your baby based on astrology and numerology.
      </Introduction>
      
      <ServiceInfo>
        <h2>How It Works</h2>
        <p>Our baby name suggestion service helps you choose a name that resonates with your child's horoscope. Here's how it works:</p>
        <ul>
          <li>Enter your baby's birth details.</li>
          <li>Our system analyzes the horoscope and numerology.</li>
          <li>Receive a list of suitable names.</li>
        </ul>
      </ServiceInfo>
      
      <FAQSection>
        <h2>Frequently Asked Questions</h2>
        <FAQ>
          <Question>1. How are the names suggested?</Question>
          <Answer>We use a combination of astrological and numerological analysis to suggest names that are likely to bring good fortune and success to your child.</Answer>
        </FAQ>
        <FAQ>
          <Question>2. Can I get suggestions for both boys and girls?</Question>
          <Answer>Yes, we provide name suggestions for both boys and girls based on the birth details you provide.</Answer>
        </FAQ>
        <FAQ>
          <Question>3. Are the names culturally appropriate?</Question>
          <Answer>We offer names from various cultures and traditions. You can filter the suggestions based on your preference.</Answer>
        </FAQ>
      </FAQSection>
    </BabyNamePage>
  );
};

const BabyNamePage = styled.div`
  padding: 2rem;
  text-align: left;
  background: #f9f9f9;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #333;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ServiceInfo = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const FAQSection = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const FAQ = styled.div`
  margin-bottom: 1.5rem;
`;

const Question = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  margin-bottom: 0;
`;

export default BabyName;
