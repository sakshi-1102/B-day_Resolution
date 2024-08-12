import React from 'react';
import styled from 'styled-components';

const AstroSageTv = () => {
  return (
    <AstroSageTvPage>
      <Title>AstroSage TV</Title>
      <Introduction>
        Welcome to AstroSage TV! Dive into our collection of astrology videos and gain deeper insights into your zodiac signs, horoscopes, and more.
      </Introduction>
      
      <VideoSection>
        <VideoContainer>
          <VideoTitle>Understanding Your Zodiac</VideoTitle>
          <VideoFrame 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Understanding Your Zodiac"
            allowFullScreen
          />
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>Weekly Horoscope Predictions</VideoTitle>
          <VideoFrame 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Weekly Horoscope Predictions"
            allowFullScreen
          />
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>Astrology Basics for Beginners</VideoTitle>
          <VideoFrame 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Astrology Basics for Beginners"
            allowFullScreen
          />
        </VideoContainer>
      </VideoSection>
    </AstroSageTvPage>
  );
};

const AstroSageTvPage = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #e67e22;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VideoTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border: none;
  border-radius: 10px;
`;

export default AstroSageTv;
