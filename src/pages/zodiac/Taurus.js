import React from 'react';
import styled from 'styled-components';

const TaurusPage = () => {
  return (
    <TaurusContainer>
      <Header>
        <Title>Taurus - The Bull</Title>
        <Subtitle>April 20 - May 20</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Taurus</SectionTitle>
          <Description>
            Taurus is the second sign of the zodiac, and it is ruled by Venus, the planet of love and beauty. Taurus individuals are known for their determination, reliability, and love for the finer things in life. As an Earth sign, Taurus is grounded, practical, and values stability.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Taurus Personality Traits</SectionTitle>
          <TraitsList>
            <li>Reliable and Dependable</li>
            <li>Patient and Persistent</li>
            <li>Loves Comfort and Luxury</li>
            <li>Stubborn and Resistant to Change</li>
            <li>Loyal and Trustworthy</li>
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
                <td>Virgo</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Capricorn</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Cancer</td>
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
          <SectionTitle>Yearly Horoscope for Taurus</SectionTitle>
          <Description>
            The year ahead is promising for Taurus. With the support of Venus, you'll find new opportunities for growth in both your personal and professional life. Expect financial gains and a stronger focus on relationships.
          </Description>
        </Section>
      </Content>
    </TaurusContainer>
  );
};

const TaurusContainer = styled.div`
  background-color: #f9f9f9;
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

export default TaurusPage;
