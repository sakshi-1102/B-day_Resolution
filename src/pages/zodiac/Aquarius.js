import React from 'react';
import styled from 'styled-components';

const AquariusPage = () => {
  return (
    <AquariusContainer>
      <Header>
        <Title>Aquarius - The Water Bearer</Title>
        <Subtitle>January 20 - February 18</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Aquarius</SectionTitle>
          <Description>
            Aquarius is the eleventh sign of the zodiac, ruled by Uranus, the planet of innovation and change. Aquarians are known for their independent, intellectual, and humanitarian nature. They are forward-thinkers who love to explore new ideas and are often seen as visionaries.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Aquarius Personality Traits</SectionTitle>
          <TraitsList>
            <li>Innovative and Original</li>
            <li>Intellectual and Analytical</li>
            <li>Humanitarian and Altruistic</li>
            <li>Independent and Freedom-Loving</li>
            <li>Unpredictable and Eccentric</li>
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
                <td>Gemini</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Libra</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Sagittarius</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Taurus</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Aquarius</SectionTitle>
          <Description>
            The year ahead brings a wave of change and excitement for Aquarius. With Uranus's influence, expect breakthroughs in your career and personal life. Embrace new opportunities, and don’t be afraid to challenge the status quo.
          </Description>
        </Section>
      </Content>
    </AquariusContainer>
  );
};

const AquariusContainer = styled.div`
  background-color: #f0f8ff;
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

export default AquariusPage;
