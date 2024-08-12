import React from 'react';
import styled from 'styled-components';

const YearAnalysis = () => {
  return (
    <YearAnalysisContainer>
      <Header>
        <Title>Yearly Horoscope Analysis</Title>
        <Subtitle>Unlock the Secrets of Your Year Ahead</Subtitle>
      </Header>
      <FormContainer>
        <FormTitle>Enter Your Birth Details</FormTitle>
        <Form>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" placeholder="Your Name" />

          <Label htmlFor="birth-date">Date of Birth:</Label>
          <Input type="date" id="birth-date" />

          <Label htmlFor="zodiac-sign">Zodiac Sign:</Label>
          <Select id="zodiac-sign">
            <option value="">Select Your Sign</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </Select>

          <SubmitButton type="submit">Get Your Analysis</SubmitButton>
        </Form>
      </FormContainer>
    </YearAnalysisContainer>
  );
};

// Styled components
const YearAnalysisContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #e67e22;
  font-size: 32px;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  color: #333;
  font-size: 18px;
`;

const FormContainer = styled.div`
  padding: 10px;
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #e67e22;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

export default YearAnalysis;
