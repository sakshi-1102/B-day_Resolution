import React from 'react';
import styled from 'styled-components';

const AriesPage = () => {
  return (
    <AriesContainer>
      <Header>
        <Title>Aries - The Ram</Title>
        <Subtitle>March 21 - April 19</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Aries</SectionTitle>
          <Description>
            Aries is the first sign of the zodiac, and those born under this sign often see themselves as pioneers, ready to take on challenges with enthusiasm. Aries are natural leaders, driven by their fiery energy and desire to be the first in everything they do.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Aries Personality Traits</SectionTitle>
          <TraitsList>
            <li>Bold and Ambitious</li>
            <li>Energetic and Confident</li>
            <li>Passionate and Determined</li>
            <li>Independent and Dynamic</li>
            <li>Adventurous and Courageous</li>
          </TraitsList>
        </Section>

        <Section>
          <SectionTitle>Compatibility with Other Signs</SectionTitle>
          <CompatibilityTable>
            <thead>
              <tr>
                <th>Sign</th>
                <th>Compatibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leo</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Sagittarius</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Libra</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Cancer</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Aries</SectionTitle>
          <Description>
            This year, Aries natives will find themselves driven to achieve their goals with renewed energy. Challenges will arise, but your determination and courage will help you overcome them. Embrace new opportunities and lead with confidence.
          </Description>
        </Section>
      </Content>
    </AriesContainer>
  );
};

// Styled Components
const AriesContainer = styled.div`
  background-color: #fffbf0;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #e67e22;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #d35400;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e67e22;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const TraitsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }
`;

const CompatibilityTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-size: 1.1rem;
  }

  th {
    background-color: #fce4d6;
    color: #333;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export default AriesPage;
