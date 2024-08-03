import React from 'react';
import styled from 'styled-components';

const TalkToAstrologerByPhone = () => {
  return (
    <Container>
      <h1>Talk to Astrologer by Phone</h1>
      <p>Get personalized guidance directly from our expert astrologers over the phone.</p>
      <CallToAction>
        <h2>How It Works</h2>
        <p>To talk to an astrologer by phone, simply follow these steps:</p>
        <ol>
          <li>Select the astrologer you wish to consult.</li>
          <li>Schedule a convenient time for your call.</li>
          <li>Receive personalized guidance over the phone.</li>
        </ol>
      </CallToAction>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #2b0f3e;
  color: white;
  min-height: 100vh;
`;

const CallToAction = styled.div`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: #dcdcdc;
  }

  ol {
    margin-left: 20px;

    li {
      margin-bottom: 10px;
      font-size: 1.1rem;
      color: #dcdcdc;
    }
  }
`;

export default TalkToAstrologerByPhone;
