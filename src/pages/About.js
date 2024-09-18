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
            <img src="/Astro1.jpg" alt="Astrologer 1" />
            <h3>Astrologer 1</h3>
            <p>With over 20 years of experience, Astrologer 1 specializes in Vedic astrology and horoscope matching.</p>
          </TeamMember>
          <TeamMember>
            <img src="/Astro2.jpg" alt="Astrologer 2" />
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
  color: #e67e22;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Introduction = styled.div`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #666;
`;

const Section = styled.div`
  margin-bottom: 3rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #e67e22;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 200px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 4px solid #e67e22;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
  color: #666;

  p {
    margin: 0.5rem 0;
  }

  p:first-child {
    font-weight: bold;
  }
`;

const FAQSection = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #e67e22;
    font-weight: 600;
  }
`;

const FAQ = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Question = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #333;
`;

const Answer = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  color: #555;
`;

export default About;
