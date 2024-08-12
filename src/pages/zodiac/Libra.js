import React from 'react';
import styled from 'styled-components';

const LibraPage = () => {
  return (
    <LibraContainer>
      <Header>
        <Title>Libra - The Scales</Title>
        <Subtitle>September 23 - October 22</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Libra</SectionTitle>
          <Description>
            Libra, the seventh sign of the zodiac, is ruled by Venus, the planet of love and beauty. Libras are known for their sense of balance, harmony, and fairness. They are diplomatic, charming, and have a strong sense of justice.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Libra Personality Traits</SectionTitle>
          <TraitsList>
            <li>Diplomatic and Fair-minded</li>
            <li>Charming and Sociable</li>
            <li>Idealistic and Artistic</li>
            <li>Good at Balancing Relationships</li>
            <li>Strong Sense of Justice</li>
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
                <td>Aquarius</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Taurus</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Capricorn</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Libra</SectionTitle>
          <Description>
            This year promises growth and balance for Libras. Focus on enhancing personal relationships and pursuing creative endeavors. Embrace opportunities for partnership and diplomacy, as they will lead to significant personal and professional benefits.
          </Description>
        </Section>
      </Content>
    </LibraContainer>
  );
};

const LibraContainer = styled.div`
  background-color: #f0f4f8;
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
    background-color: #f9e5e5;
  }
`;

export default LibraPage;
