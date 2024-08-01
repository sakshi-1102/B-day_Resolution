import React from 'react';
import styled from 'styled-components';

const AskQuestion = () => {
  return (
    <AskQuestionPage>
      <Title>Ask a Question</Title>
      <Introduction>
        Do you have a question about your future, career, relationships, or any other aspect of life? Our expert astrologers are here to provide you with accurate and insightful answers. Simply ask your question and get a detailed analysis based on your horoscope.
      </Introduction>
      
      <ServiceInfo>
        <h2>How It Works</h2>
        <p>Our 'Ask a Question' service allows you to get personalized answers to your specific questions. Here's how it works:</p>
        <ul>
          <li>Submit your question along with your birth details.</li>
          <li>Our expert astrologers analyze your horoscope.</li>
          <li>Receive a detailed and personalized answer.</li>
        </ul>
      </ServiceInfo>
      
      <FAQSection>
        <h2>Frequently Asked Questions</h2>
        <FAQ>
          <Question>1. How accurate are the answers?</Question>
          <Answer>Our astrologers have years of experience and provide answers based on thorough analysis of your horoscope, ensuring high accuracy.</Answer>
        </FAQ>
        <FAQ>
          <Question>2. How long does it take to get an answer?</Question>
          <Answer>Usually, you will receive your answer within 24 to 48 hours after submitting your question and birth details.</Answer>
        </FAQ>
        <FAQ>
          <Question>3. Can I ask about any topic?</Question>
          <Answer>Yes, you can ask questions about various topics, including career, relationships, health, finance, and more.</Answer>
        </FAQ>
        <FAQ>
          <Question>4. Is my information kept confidential?</Question>
          <Answer>Absolutely. We maintain strict confidentiality and ensure that your personal information is secure.</Answer>
        </FAQ>
      </FAQSection>
    </AskQuestionPage>
  );
};

const AskQuestionPage = styled.div`
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

export default AskQuestion;
