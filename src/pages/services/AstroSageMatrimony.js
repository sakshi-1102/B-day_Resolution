import React from 'react';

const AstroSageMatrimony = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Ask a Question</h1>
        <p style={styles.subtitle}>Discover Insights from Your Birth Chart</p>
      </div>
      <div style={styles.content}>
        <p style={styles.description}>
          Enter your birth details below and ask your question to get personalized astrological insights.
        </p>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input style={styles.input} type="text" id="name" placeholder="Your Name" />

          <label style={styles.label} htmlFor="birth-date">Date of Birth:</label>
          <input style={styles.input} type="date" id="birth-date" />

          <label style={styles.label} htmlFor="question">Your Question:</label>
          <textarea style={styles.textarea} id="question" placeholder="What do you want to know?" />

          <button style={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#e67e22',
    fontSize: '32px',
    marginBottom: '5px',
  },
  subtitle: {
    color: '#333',
    fontSize: '18px',
  },
  content: {
    padding: '10px',
  },
  description: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    color: '#333',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#e67e22',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#d35400',
  }
};

export default AstroSageMatrimony;
