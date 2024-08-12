import React from 'react';
import styled from 'styled-components';

const SagittariusPage = () => {
  return (
    <SagittariusContainer>
      <Header>
        <Title>Sagittarius - The Archer</Title>
        <Subtitle>November 22 - December 21</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Sagittarius</SectionTitle>
          <Description>
            Sagittarius is the ninth sign of the zodiac, ruled by Jupiter, the planet of expansion and exploration. Individuals born under Sagittarius are known for their adventurous spirit, optimism, and love for freedom. They are always eager to explore new horizons and seek out new experiences.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Sagittarius Personality Traits</SectionTitle>
          <TraitsList>
            <li>Adventurous and Energetic</li>
            <li>Optimistic and Enthusiastic</li>
            <li>Independent and Freedom-Loving</li>
            <li>Philosophical and Honest</li>
            <li>Curious and Open-Minded</li>
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
                <td>Leo</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Gemini</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Virgo</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Sagittarius</SectionTitle>
          <Description>
            This year promises exciting opportunities for Sagittarius. Embrace new adventures and trust your instincts. Your optimistic nature will attract positive experiences, and your adventurous spirit will lead you to meaningful growth. Stay open to new possibilities and be ready to explore the unknown.
          </Description>
        </Section>
      </Content>
    </SagittariusContainer>
  );
};

const SagittariusContainer = styled.div`
  background-color: #fce4ec;
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
    color: #880e4f;
  }

  tbody tr:nth-child(even) {
    background-color: #f8bbd0;
  }
`;

export default SagittariusPage;
