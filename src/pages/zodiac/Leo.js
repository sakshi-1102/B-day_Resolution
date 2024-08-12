import React from 'react';
import styled from 'styled-components';

const LeoPage = () => {
  return (
    <LeoContainer>
      <Header>
        <Title>Leo - The Lion</Title>
        <Subtitle>July 23 - August 22</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Leo</SectionTitle>
          <Description>
            Leo, the fifth sign of the zodiac, is ruled by the Sun and is known for its boldness, confidence, and leadership qualities. Leos are natural-born leaders who thrive in the spotlight. They are passionate, generous, and have a magnetic personality that draws people towards them.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Leo Personality Traits</SectionTitle>
          <TraitsList>
            <li>Confident and Charismatic</li>
            <li>Generous and Warm-hearted</li>
            <li>Natural Leader</li>
            <li>Passionate and Enthusiastic</li>
            <li>Creative and Artistic</li>
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
                <td>Aries</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Sagittarius</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Taurus</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Scorpio</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Leo</SectionTitle>
          <Description>
            The year ahead is promising for Leos, with opportunities for personal growth and creative expression. Embrace challenges with confidence, as they will lead to significant achievements. Focus on maintaining strong relationships and pursuing your passions.
          </Description>
        </Section>
      </Content>
    </LeoContainer>
  );
};

const LeoContainer = styled.div`
  background-color: #fff8e1;
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
    background-color: #fff3e0;
  }
`;

export default LeoPage;
