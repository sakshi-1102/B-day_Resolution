import React from 'react';
import styled from 'styled-components';

const ScorpioPage = () => {
  return (
    <ScorpioContainer>
      <Header>
        <Title>Scorpio - The Scorpion</Title>
        <Subtitle>October 23 - November 21</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Scorpio</SectionTitle>
          <Description>
            Scorpio is the eighth sign of the zodiac, ruled by Pluto, the planet of transformation and rebirth. Individuals born under Scorpio are known for their intensity, passion, and resourcefulness. They are deeply emotional and have a strong desire to uncover the truth.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Scorpio Personality Traits</SectionTitle>
          <TraitsList>
            <li>Intense and Passionate</li>
            <li>Resourceful and Determined</li>
            <li>Deeply Emotional and Intuitive</li>
            <li>Secretive and Mysterious</li>
            <li>Brave and Resilient</li>
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
                <td>Cancer</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Pisces</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Taurus</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Leo</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Scorpio</SectionTitle>
          <Description>
            This year, Scorpio will experience significant transformations and growth. Embrace the changes and use your innate resilience to navigate through challenges. Your intense focus and determination will lead to personal and professional achievements. Stay open to new opportunities and trust your intuition.
          </Description>
        </Section>
      </Content>
    </ScorpioContainer>
  );
};

const ScorpioContainer = styled.div`
  background-color: #e8f5e9;
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
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #b2dfdb;
  }
`;

export default ScorpioPage;
