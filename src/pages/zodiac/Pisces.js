import React from 'react';
import styled from 'styled-components';

const PiscesPage = () => {
  return (
    <PiscesContainer>
      <Header>
        <Title>Pisces - The Fishes</Title>
        <Subtitle>February 19 - March 20</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Pisces</SectionTitle>
          <Description>
            Pisces is the twelfth and final sign of the zodiac, ruled by Neptune, the planet of dreams and intuition. Pisces individuals are known for their compassion, creativity, and deep emotional understanding. They are often empathetic and have a strong connection to their inner selves and the world around them.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Pisces Personality Traits</SectionTitle>
          <TraitsList>
            <li>Compassionate and Empathetic</li>
            <li>Creative and Artistic</li>
            <li>Intuitive and Sensitive</li>
            <li>Gentle and Adaptable</li>
            <li>Dreamy and Imaginative</li>
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
                <td>Scorpio</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Virgo</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Sagittarius</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Pisces</SectionTitle>
          <Description>
            This year brings a wave of transformation for Pisces. Embrace changes and focus on personal growth. Relationships and creativity will play a significant role, offering opportunities for deep connections and artistic expression. Trust your intuition and take time for self-reflection.
          </Description>
        </Section>
      </Content>
    </PiscesContainer>
  );
};

const PiscesContainer = styled.div`
  background-color: #e0f7fa;
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
    color: #004d40;
  }

  tbody tr:nth-child(even) {
    background-color: #b2dfdb;
  }
`;

export default PiscesPage;
