import React from 'react';
import styled from 'styled-components';

const LifeReports = () => {
  return (
    <LifeReportsPage>
      <Header>
        <Title>Life Reports</Title>
        <Description>Unlock the secrets of your life with our detailed astrological reports, offering personalized insights into your past, present, and future.</Description>
      </Header>

      <ReportSection>
        <ReportImage src="your-life-report-image-url" alt="Life Reports" />
        <ReportDetails>
          <h2>What Are Life Reports?</h2>
          <p>Life Reports provide a comprehensive analysis of your life based on your birth chart. These reports offer deep insights into various aspects of your life, including career, relationships, health, and finances.</p>
          <p>Our expert astrologers analyze the planetary positions and their influence on your life to deliver personalized predictions and guidance.</p>
        </ReportDetails>
      </ReportSection>

      <ReportTypes>
        <h2>Types of Life Reports</h2>
        <ReportType>
          <h3>Career Report</h3>
          <p>Discover your strengths, challenges, and potential career paths with our detailed career report.</p>
        </ReportType>
        <ReportType>
          <h3>Relationship Report</h3>
          <p>Understand the dynamics of your relationships and gain insights into how to foster strong, meaningful connections.</p>
        </ReportType>
        <ReportType>
          <h3>Health Report</h3>
          <p>Get a comprehensive analysis of your health and well-being based on your birth chart.</p>
        </ReportType>
        <ReportType>
          <h3>Finance Report</h3>
          <p>Gain insights into your financial prospects and learn how to manage your wealth effectively.</p>
        </ReportType>
      </ReportTypes>

      <CallToAction>
        <h2>Get Your Personalized Life Report</h2>
        <p>Embark on a journey of self-discovery with our personalized life reports. Get the guidance you need to navigate your life's path with confidence.</p>
        <CTAButton>Order Your Life Report</CTAButton>
      </CallToAction>
    </LifeReportsPage>
  );
};

const LifeReportsPage = styled.div`
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

const ReportSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ReportImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ReportDetails = styled.div`
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

const ReportTypes = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const ReportType = styled.div`
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

export default LifeReports;
