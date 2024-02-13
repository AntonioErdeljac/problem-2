"use client";

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

// Initial state with empty values
const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const Problem: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // TODO: Update formState with input changes
  };

  const validateForm = (): boolean => {
    // TODO: Implement basic validation for non-empty fields and a valid email format
    return true; // Placeholder return value
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // TODO: Optionally, clear form or handle submission
    } else {
      // TODO: Display validation error messages
      console.log('Validation failed');
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Thank you for contacting us, {formState.name}!</p>
          <p>Your message: {formState.message}</p>
        </div>
      )}
    </div>
  );
};

export default Problem;
