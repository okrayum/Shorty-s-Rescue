import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./InquiryForm.css";

const DOG_OPTIONS = ["Flower", "Blue", "Cocoa", "Sadie", "Riley", "Cheeki"];

const InquiryForm = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    dogName: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const delay = setTimeout(() => {
        setSubmitted(false);
      }, 50000); // "Thank You" msg duration
      return () => clearTimeout(delay);
    }
  }, [submitted]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
      const response = await axios.post(apiUrl + "/forms/inquiry", {
        formData,
      });
      console.log('Form submitted:', formData);
      console.log('Server Response:', response.data);
      resetForm();

    } catch (error) {
      console.error("Error submitting form data:", error)
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="inquiry-form">
      <h2>Adoption Inquiry</h2>
      <div className="form-group">
        <label htmlFor='fullName'>
          Full Name:
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='email'>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='dogName'>
          Dog You're Interested In:
          <select
            name="dogName"
            id="dogName"
            value={formData.dogName}
            onChange={handleInputChange}
            required>
            <option value="">Select a dog</option>
            {DOG_OPTIONS.map((dog) => (
              <option key={dog} value={dog}>{dog}</option>
            ))}
            <option value="General question">Just a general question</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='message'>
          Message:
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us a little about yourself and your question"
            rows="4"
            required />
        </label>
      </div>
      <div className="form-group submit-div">
        <button type="submit">Send Message</button>
        {submitted && <p className="thank-you-message">Thank You!</p>}
      </div>
    </form>
  );
}

export default InquiryForm;
