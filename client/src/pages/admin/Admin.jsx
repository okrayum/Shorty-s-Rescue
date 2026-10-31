import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [adoptData, setAdoptData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);

  useEffect(() => {
    // Fetch adoption data
    axios.get('http://localhost:4000/forms/adoption')
      .then(response => setAdoptData(response.data))
      .catch(error => console.error('Error fetching adoption data:', error));

    // Fetch inquiry data
    axios.get('http://localhost:4000/forms/inquiry')
      .then(response => setInquiryData(response.data))
      .catch(error => console.error('Error fetching inquiry data:', error));
  }, []);

  return (
    <div className="adminWholePage">
      <h1 className='welcomeTitle'>Welcome Admin!</h1>
      <div className='adoptSection'>
        <h2>Adoption Data:</h2>
        <div className='adoptRow'>
          {adoptData.map((data, index) => (
            <div className='adoptCard' key={index}>
              <p>Dog Name: {data.dogName}</p>
              <p>First Name:{data.firstName}</p>
              <p>Last Name:{data.lastName}</p>
              <p>Phone Number:{data.phoneNumber}</p>
              <p>Email:{data.email}</p>
              <p>Date:{data.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='inquirySection'>
        <h2>Inquiry Data:</h2>
        <div className='inquiryRow'>
          {inquiryData.map((data, index) => (
            <div className='inquiryCard' key={index}>
              <p>Full Name:{data.fullName}</p>
              <p>Email:{data.email}</p>
              <p>Dog:{data.dogName}</p>
              <p>Message:{data.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;