import React from 'react';
import styled from 'styled-components';

const CapricornPage = () => {
  return (
    <CapricornContainer>
      <Header>
        <Title>Capricorn - The Sea Goat</Title>
        <Subtitle>December 22 - January 19</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Capricorn</SectionTitle>
          <Description>
            Capricorn, the tenth sign of the zodiac, is ruled by Saturn and is known for its ambition, discipline, and strong work ethic. Capricorns are practical, grounded, and determined to achieve their goals. They value stability, tradition, and are natural leaders who often succeed in their careers.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Capricorn Personality Traits</SectionTitle>
          <TraitsList>
            <li>Ambitious and Determined</li>
            <li>Disciplined and Responsible</li>
            <li>Practical and Grounded</li>
            <li>Loyal and Reliable</li>
            <li>Patient and Strategic</li>
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
                <td>Taurus</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Virgo</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Pisces</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Aries</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Capricorn</SectionTitle>
          <Description>
            This year brings opportunities for professional growth and financial stability for Capricorns. Focus on long-term goals and strategic planning. Personal relationships may require patience and understanding, but overall, it's a year of progress and achievement.
          </Description>
        </Section>
      </Content>
    </CapricornContainer>
  );
};

const CapricornContainer = styled.div`
  background-color: #f0f0f0;
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

export default CapricornPage;
