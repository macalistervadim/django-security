// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    margin: '10px 0 5px',
  },
  input: {
    margin: '5px 0 15px',
    padding: '10px',
    width: '300px',
  },
  textarea: {
    margin: '5px 0 15px',
    padding: '10px',
    width: '300px',
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ContactForm;
