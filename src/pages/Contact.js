import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const Contact = () => {
  return (
    <ContactPage>
      <Container>
        <FormSection>
          <ContactForm>
            <h1>Contact Us</h1>
            <p>Have a question or need assistance? Reach out to us through the form below.</p>
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={Yup.object({
                name: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                message: Yup.string().required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(`Message sent:\n${JSON.stringify(values, null, 2)}`);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormGroup>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="message">Message</label>
                    <Field name="message" as="textarea" rows="4" />
                    <ErrorMessage name="message" component="div" />
                  </FormGroup>
                  <SubmitButton type="submit" disabled={isSubmitting}>Send Message</SubmitButton>
                </Form>
              )}
            </Formik>
          </ContactForm>
        </FormSection>
        <DetailsSection>
          <ContactDetails>
            <h2>Get in Touch</h2>
            <p>Phone: +91 1234567890</p>
            <p>Email: info@astrology.com</p>
            <p>Address: 123 Astrology Street, Mystic Town</p>
            <h2>Office Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </ContactDetails>
        </DetailsSection>
      </Container>
    </ContactPage>
  );
};

// Styled Components
const ContactPage = styled.div`
  padding: 3rem 1rem;
  background: #f4f4f9;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  flex: 2;
  min-width: 300px;
  margin-right: 20px;
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    margin-bottom: 1rem;
    color: #282c34;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }
`;

const DetailsSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-left: 0;
  }
`;

const ContactDetails = styled.div`
  background: #282c34;
  padding: 2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
    outline: none;
  }

  input:focus, textarea:focus {
    border-color: #282c34;
  }

  div {
    color: red;
    margin-top: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #282c34;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #1f1f1f;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export default Contact;
