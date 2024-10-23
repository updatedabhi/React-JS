import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [em, setEm] = useState('');
  const [ps, setPs] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setEm(formData.email);
    setPs(formData.password);
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>Email: {em}</p>
      <p>Password: {ps}</p>
    </div>
  );
}
