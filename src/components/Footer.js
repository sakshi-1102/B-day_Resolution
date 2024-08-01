import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Astrologer</Logo>
        <FooterLinks>
          <FooterLink to="/about-us">About Us</FooterLink>
          <FooterLink to="/contact-us">Contact Us</FooterLink>
        </FooterLinks>
        <SocialMediaLinks>
          <SocialMediaLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</SocialMediaLink>
          <SocialMediaLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialMediaLink>
          <SocialMediaLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</SocialMediaLink>
        </SocialMediaLinks>
        <CopyrightText>&copy; {new Date().getFullYear()} Astrologer. All rights reserved.</CopyrightText>

      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem;
  background: linear-gradient(135deg, #3c1a57, #2c2c2c);
  color: #e67e22; /* Default text color */
  text-align: center;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.3);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #e67e22; /* Logo color */
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
`;

const FooterLink = styled(Link)`
  color: #e67e22; /* Link color */
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaLinks = styled.div`
  margin: 1rem 0;

  a {
    color: #e67e22; /* Social media link color */
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMediaLink = styled.a`
  color: #e67e22; /* Social media link color */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightText = styled.p`
  color: white; /* Specific color for the copyright text */
  font-size: 0.9rem;
`;

export default Footer;
