import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const slides = [
  { image: '/slider.jpg', caption: 'Unlock the Secrets of Your Stars' },
  { image: '/slider2.jpg', caption: 'Discover Your True Self' },
  { image: '/slider4.jpg', caption: 'Navigate Your Future with Confidence' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      <Slide>
        <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
        <Caption>{slides[currentSlide].caption}</Caption>
      </Slide>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Caption = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background: none;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export default Slider;
