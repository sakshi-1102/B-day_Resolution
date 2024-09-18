import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const userData = { name, email, password, rememberMe };

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
        navigate('/login'); // Redirect to login after successful registration
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Create Your Account</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordContainer>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ShowPasswordCheckbox>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </ShowPasswordCheckbox>
        </PasswordContainer>
        <RememberMeCheckbox>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember Me
        </RememberMeCheckbox>
        <Button type="submit">Sign Up</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  padding: 20px;
`;

const RegisterForm = styled.form`
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

const PasswordContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const ShowPasswordCheckbox = styled.label`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.25rem;
  }
`;

const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #333;

  input {
    margin-right: 0.25rem;
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

export default Register;
