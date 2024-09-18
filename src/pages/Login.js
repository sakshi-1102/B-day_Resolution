import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    const userData = { email, password };

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/'); // Redirect to home page
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <RegisterLink>
          Don't have an account? <StyledLink to="/register">Register here</StyledLink>
        </RegisterLink>
        <ForgotPasswordLink>
          <StyledLink to="/forgot-password">Forgot Password?</StyledLink>
        </ForgotPasswordLink>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 450px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #e67e22;
    box-shadow: 0 0 8px rgba(230, 126, 34, 0.1);
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #e67e22;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d35400;
    box-shadow: 0 8px 16px rgba(211, 84, 0, 0.3);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const RegisterLink = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #e67e22;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordLink = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export default Login;
