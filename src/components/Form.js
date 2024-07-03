import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./FormStyles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_mpomqdq',
      'template_uyxbm3i',
      formData,
      '318ahucfAM7BpY5CK'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your form has been submitted successfully!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('There was an error submitting your form. Please try again.');
    });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the Subject" required />
        <label>Message</label>
        <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
