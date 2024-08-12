import React from 'react';
import styled from 'styled-components';

const GeminiPage = () => {
  return (
    <GeminiContainer>
      <Header>
        <Title>Gemini - The Twins</Title>
        <Subtitle>May 21 - June 20</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Gemini</SectionTitle>
          <Description>
            Gemini, the third sign of the zodiac, is ruled by Mercury and is known for its adaptability, curiosity, and communication skills. Geminis are social, energetic, and love to engage in intellectual conversations. They are versatile and can easily switch between different tasks and ideas.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Gemini Personality Traits</SectionTitle>
          <TraitsList>
            <li>Adaptable and Versatile</li>
            <li>Curious and Inquisitive</li>
            <li>Social and Outgoing</li>
            <li>Witty and Intellectual</li>
            <li>Energetic and Lively</li>
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
                <td>Libra</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Aquarius</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Sagittarius</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Pisces</td>
                <td>Low</td>
              </tr>
            </tbody>
          </CompatibilityTable>
        </Section>

        <Section>
          <SectionTitle>Yearly Horoscope for Gemini</SectionTitle>
          <Description>
            The year ahead is filled with opportunities for personal growth and intellectual development for Geminis. Embrace change and new experiences, as they will lead to significant progress. Focus on communication and relationships to ensure a successful and fulfilling year.
          </Description>
        </Section>
      </Content>
    </GeminiContainer>
  );
};

const GeminiContainer = styled.div`
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

export default GeminiPage;
