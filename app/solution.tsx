"use client";

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const Solution: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = (): boolean => {
    // Check for non-empty fields
    if (!formState.name || !formState.email || !formState.message) {
      setError('All fields are required.');
      return false;
    }
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError(null); // Clear any previous errors
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Optionally, clear form here or handle the submission (e.g., send data to an API)
      // setFormState(initialState); // Uncomment to clear form upon successful submission
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Thank you for contacting us, {formState.name}!</p>
          <p>Your message: {formState.message}</p>
          {/* Button to reset the form and allow another submission */}
          <button onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      )}
    </div>
  );
};

export default Solution;
