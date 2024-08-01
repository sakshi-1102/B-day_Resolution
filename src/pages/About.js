import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPage>
      <Title>About Us</Title>
      <Introduction>
        <p>Welcome to our Astrology Service! We are a team of dedicated and experienced astrologers committed to providing you with accurate and insightful astrological readings.</p>
      </Introduction>
      
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <p>Our mission is to guide and support individuals on their life journey through the wisdom of astrology. We aim to help you understand your past, navigate your present, and plan for your future.</p>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <img src="https://via.placeholder.com/150" alt="Astrologer 1" />
            <h3>Astrologer 1</h3>
            <p>With over 20 years of experience, Astrologer 1 specializes in Vedic astrology and horoscope matching.</p>
          </TeamMember>
          <TeamMember>
            <img src="https://via.placeholder.com/150" alt="Astrologer 2" />
            <h3>Astrologer 2</h3>
            <p>Astrologer 2 is an expert in Western astrology and has a keen interest in numerology.</p>
          </TeamMember>
          {/* Add more team members as needed */}
        </TeamGrid>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactInfo>
          <p>Email: contact@astrologyservice.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Astrology Street, Mystic City, Universe</p>
        </ContactInfo>
      </Section>
      
      <Section>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQSection>
          <FAQ>
            <Question>1. What services do you offer?</Question>
            <Answer>We offer a variety of astrology services including horoscope readings, birth chart analysis, love compatibility, and more.</Answer>
          </FAQ>
          <FAQ>
            <Question>2. How can I book a consultation?</Question>
            <Answer>You can book a consultation through our website or by contacting us directly via email or phone.</Answer>
          </FAQ>
          <FAQ>
            <Question>3. Do you offer online readings?</Question>
            <Answer>Yes, we offer both in-person and online readings to cater to our clients' needs.</Answer>
          </FAQ>
        </FAQSection>
      </Section>
    </AboutPage>
  );
};

const AboutPage = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #333;
`;

const Introduction = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;

  img {
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;

  p {
    margin: 0.5rem 0;
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

export default About;
