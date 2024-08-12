import React from 'react';
import styled from 'styled-components';

const AstrologyAndRelationships = () => {
  return (
    <PageContainer>
      <Title>Astrology and Relationships</Title>
      <Introduction>
        Astrology offers valuable insights into our relationships by revealing the dynamics between zodiac signs. Discover how different astrological signs interact and what that means for your love life, friendships, and family connections.
      </Introduction>
      
      <Section>
        <SubTitle>Love Compatibility</SubTitle>
        <Content>
          <p>Understanding love compatibility between different zodiac signs can help you navigate romantic relationships. Find out which signs are most compatible with yours, and learn how to enhance your romantic connections.</p>
          <List>
            <li>Aries and Leo - A fiery and passionate connection.</li>
            <li>Taurus and Cancer - A nurturing and supportive relationship.</li>
            <li>Gemini and Libra - A harmonious and intellectual bond.</li>
            {/* Add more compatibility descriptions here */}
          </List>
        </Content>
      </Section>
      
      <Section>
        <SubTitle>Friendship Dynamics</SubTitle>
        <Content>
          <p>Friendships can also be influenced by astrological signs. Some signs naturally complement each other, while others may require more understanding and patience.</p>
          <List>
            <li>Sagittarius and Aquarius - Adventurous and free-spirited friends.</li>
            <li>Virgo and Capricorn - Practical and dependable companionship.</li>
            <li>Scorpio and Pisces - Deep and intuitive understanding.</li>
            {/* Add more friendship dynamics descriptions here */}
          </List>
        </Content>
      </Section>
      
      <Section>
        <SubTitle>Family Relationships</SubTitle>
        <Content>
          <p>Astrology can provide insights into family dynamics, helping you understand the strengths and challenges in your relationships with parents, siblings, and children.</p>
          <List>
            <li>Leo and Cancer - A protective and loving family connection.</li>
            <li>Gemini and Virgo - Communication and intellectual exchange.</li>
            <li>Libra and Capricorn - Balance and structure in family life.</li>
            {/* Add more family relationship descriptions here */}
          </List>
        </Content>
      </Section>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #fafafa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #e67e22;
  margin-bottom: 1.5rem;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

export default AstrologyAndRelationships;
