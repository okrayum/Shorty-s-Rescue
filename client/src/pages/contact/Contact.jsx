import React from 'react';
import InquiryForm from '../../components/InquiryForm';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content-div'>
        <div className='title-contact'>
          <h1>Contact Us</h1>
        </div>
        <p>Have a question about one of our dogs or the adoption process? We would love to hear from you. Send us a message using the form and we will get back to you as soon as we can. Our primary goal is to ensure that every individual or family has the opportunity to provide a loving home for our animals, so please do not hesitate to reach out.</p>
        <div className='contact-address-div'>
          <p>Visit us:<br />
            Shorty's Rescue<br />
            555 W Shorty Dr<br />
            Anyplace, AZ 88888
          </p>
        </div>
      </div>
      <InquiryForm />
    </div>
  )
}

export default Contact
