import React from 'react';
import styled from 'styled-components';

const CancerPage = () => {
  return (
    <CancerContainer>
      <Header>
        <Title>Cancer - The Crab</Title>
        <Subtitle>June 21 - July 22</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionTitle>About Cancer</SectionTitle>
          <Description>
            Cancer, the fourth sign of the zodiac, is ruled by the Moon and is known for its deep emotional nature. Cancerians are nurturing, sensitive, and empathetic individuals who value family and home life. They are also highly intuitive and protective of their loved ones.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Cancer Personality Traits</SectionTitle>
          <TraitsList>
            <li>Emotional and Sensitive</li>
            <li>Loyal and Protective</li>
            <li>Intuitive and Empathetic</li>
            <li>Home and Family-Oriented</li>
            <li>Creative and Imaginative</li>
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
                <td>Pisces</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Scorpio</td>
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
          <SectionTitle>Yearly Horoscope for Cancer</SectionTitle>
          <Description>
            The upcoming year promises growth and emotional fulfillment for Cancerians. This is a time to focus on personal relationships and creative endeavors. Embrace the changes that come your way, and trust your intuition to guide you through any challenges.
          </Description>
        </Section>
      </Content>
    </CancerContainer>
  );
};

const CancerContainer = styled.div`
  background-color: #fffaf0;
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
    background-color: #ffe4e1;
    color: #333;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export default CancerPage;
