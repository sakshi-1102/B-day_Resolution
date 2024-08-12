import React, { useState } from 'react';
import styled from 'styled-components';

const ChatWithAstrologer = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');
      // Simulate astrologer response
      setTimeout(() => {
        const astrologerMessage = {
          text: 'Thank you for your message. How can I assist you today?',
          sender: 'astrologer',
        };
        setMessages((prevMessages) => [...prevMessages, astrologerMessage]);
      }, 1000);
    }
  };

  return (
    <Container>
      <h1>Chat with Astrologer</h1>
      <ChatContainer>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.text}
          </Message>
        ))}
      </ChatContainer>
      <Form onSubmit={handleSendMessage}>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button type="submit">Send</Button>
      </Form>
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

const ChatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #3c1a57;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 400px;
`;

const Message = styled.div`
  background-color: ${(props) => (props.sender === 'user' ? '#e67e22' : '#472668')};
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-self: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 5px 5px 0;

  &:hover {
    background-color: #d35400;
  }
`;

export default ChatWithAstrologer;
