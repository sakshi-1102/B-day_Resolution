import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroVideo autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </HeroVideo>
        <HeroContent>
          <h1>Unlock Your Future with Expert Astrological Guidance</h1>
          <p>Discover the wonders of astrology and embark on a journey of self-discovery.</p>
          <CTAButton to="/login">Get Started</CTAButton>
        </HeroContent>
      </HeroSection>
      <IntroSection>
        <h1>Welcome to AstroApp</h1>
        <p>Discover the wonders of astrology and embark on a journey of self-discovery.</p>
      </IntroSection>
      <ZodiacGrid>
        {zodiacSigns.map((sign, index) => (
          <ZodiacItem key={index}>
            <ZodiacImage src={sign.image} alt={sign.name} />
            <ZodiacName>{sign.name}</ZodiacName>
            <ZodiacDate>{sign.date}</ZodiacDate>
          </ZodiacItem>
        ))}
      </ZodiacGrid>
      {/* <Slider /> */}
      <MainFeatures>
        <Feature>
          <h2>Talk to Astrologer by Phone</h2>
          <p>Get personalized guidance directly from our expert astrologers over the phone.</p>
          <FeatureLink to="/talk-to-astrologer-by-phone">Learn More</FeatureLink>
        </Feature>
        <Feature>
          <h2>Chat with Astrologer</h2>
          <p>Chat with our astrologers anytime for quick answers to your questions.</p>
          <FeatureLink to="/chat-with-astrologer">Learn More</FeatureLink>
        </Feature>
        <Feature>
          <h2>Manual Reports</h2>
          <p>Receive detailed manual reports on various aspects of your life.</p>
          <FeatureLink to="/manual-report">Learn More</FeatureLink>
        </Feature>
        <Feature>
          <h2>Online Meeting with Astrologer</h2>
          <p>Schedule an online meeting with our astrologers for in-depth guidance.</p>
          <FeatureLink to="/online-meeting-with-astrologer">Learn More</FeatureLink>
        </Feature>
      </MainFeatures>
      <TestimonialsSection>
        <h2>Testimonials</h2>
        <Testimonial>
          <p>"AstroApp's services have provided me with incredible insights and guidance!"</p>
          <p>- Satisfied Customer</p>
        </Testimonial>
        <Testimonial>
          <p>"The manual report was detailed and accurate. Highly recommend!"</p>
          <p>- Happy Client</p>
        </Testimonial>
      </TestimonialsSection>
      <DailyUpdatesSection>
        <h2>Daily Updates</h2>
        <DailyUpdate>
          <p>Aries: Today is a great day for new beginnings!</p>
        </DailyUpdate>
        <DailyUpdate>
          <p>Taurus: Focus on self-care and relaxation today.</p>
        </DailyUpdate>
        {/* Add daily updates for other signs */}
      </DailyUpdatesSection>
      <BlogHighlightsSection>
        <h2>Blog Highlights</h2>
        <BlogHighlight>
          <h3>Understanding Your Zodiac Sign</h3>
          <p>Learn about the traits and characteristics of your zodiac sign.</p>
          <BlogLink to="/blogs">Read More</BlogLink>
        </BlogHighlight>
        <BlogHighlight>
          <h3>Astrology and Relationships</h3>
          <p>Discover how astrology can influence your relationships.</p>
          <BlogLink to="/blogs">Read More</BlogLink>
        </BlogHighlight>
      </BlogHighlightsSection>
    </Container>
  );
};

// Sample data for zodiac signs
const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19', image: '/aries.png' },
  { name: 'Taurus', date: 'Apr 20 - May 20', image: '/taurus.png' },
  { name: 'Gemini', date: 'May 21 - June 20', image: '/gemini.png' },
  { name: 'Cancer', date: 'June 21 - July 22', image: '/cancer.png' },
  { name: 'Leo', date: 'July 23 - Aug 22', image: '/leo.png' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22', image: '/virgo.png' },
  { name: 'Libra', date: 'Sep 23 - Oct 22', image: '/libra.png' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21', image: '/scorpio.png' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', image: '/sagittarius.png' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', image: '/capricorn.png' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', image: '/aquarius.png' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20', image: '/pisces.png' },
];

// Styled Components
const Container = styled.div`
  background-color: #2b0f3e;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

const HeroVideo = styled.video`
  width: 50%;
  border-radius: 10px;
`;

const HeroContent = styled.div`
  width: 50%;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const CTAButton = styled(Link)`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #d35400;
  }
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.8rem;
    color: #dcdcdc;
  }
`;

const ZodiacGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 items per row */
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); /* 4 items per row for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 items per row for smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* 2 items per row for extra small screens */
  }
`;

const ZodiacItem = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #3c1a57;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ZodiacImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ZodiacName = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const ZodiacDate = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #e67e22;
`;

const MainFeatures = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #dcdcdc;
    margin-bottom: 20px;
  }
`;

const Feature = styled.div`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #472668;
  }
`;

const FeatureLink = styled(Link)`
  color: #e67e22;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #d35400;
  }
`;

const TestimonialsSection = styled.section`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Testimonial = styled.div`
  background-color: #472668;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.1rem;
    color: #dcdcdc;
  }
`;

const DailyUpdatesSection = styled.section`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const DailyUpdate = styled.div`
  background-color: #472668;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.1rem;
    color: #dcdcdc;
  }
`;

const BlogHighlightsSection = styled.section`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const BlogHighlight = styled.div`
  background-color: #472668;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #dcdcdc;
    margin-bottom: 20px;
  }
`;

const BlogLink = styled(Link)`
  color: #e67e22;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #d35400;
  }
`;

export default Home;
