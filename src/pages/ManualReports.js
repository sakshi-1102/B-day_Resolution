import React, { useState } from 'react';
import styled from 'styled-components';

const ManualReports = () => {
  const [name, setName] = useState(''); // Fixed the typo here
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      birthDate,
      birthTime,
      birthPlace,
      message,
    });
    setSubmitted(true);
  };

  return (
    <Container>
      <h1>Request a Manual Astrology Report</h1>
      {submitted ? (
        <ThankYouMessage>
          Thank you for your request! We will get back to you soon.
        </ThankYouMessage>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Label>
          <Label>
            Date of Birth:
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </Label>
          <Label>
            Time of Birth:
            <Input
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              required
            />
          </Label>
          <Label>
            Place of Birth:
            <Input
              type="text"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              required
            />
          </Label>
          <Label>
            Additional Message:
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #2b0f3e;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #e67e22;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  resize: none;
`;

const Button = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #d35400;
  }
`;

const ThankYouMessage = styled.div`
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #e67e22;
`;

export default ManualReports;
