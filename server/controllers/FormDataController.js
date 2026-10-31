const { Adopt, Inquiry } = require('../models');

// Controller functions for fetching form data 
async function getAdoptData(req, res) {
  try {
    const adoptData = await Adopt.find();
    res.status(200).json(adoptData);
  } catch (error) {
    console.error('Error fetching Adoption Form data:', error);
    console.error(error.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

async function getInquiryData(req, res) {
  try {
    const inquiryData = await Inquiry.find();
    res.status(200).json(inquiryData);
  } catch (error) {
    console.error('Error fetching Inquiry Form data:', error);
    console.error(error.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal server error', message: error.message });

  }
}

// Controller functions for submitting form data
async function submitAdoptData(req, res) {
  try {
    const formData = req.body.formData;
    const newAdoptData = new Adopt({
      dogName: formData.nameOfDog,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phone,
      email: formData.email,
      signature: formData.signature,
      date: formData.date,
    });

    await newAdoptData.save();
    res.status(201).json({ message: 'Adoption form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting adoption form data:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

async function submitInquiryData(req, res) {
  try {
    const formData = req.body.formData;
    const newInquiryData = new Inquiry({
      fullName: formData.fullName,
      email: formData.email,
      dogName: formData.dogName,
      message: formData.message,
    });

    await newInquiryData.save();
    res.status(201).json({ message: 'Inquiry form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting inquiry form data:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

module.exports = {
  getAdoptData,
  getInquiryData,
  submitAdoptData,
  submitInquiryData,
};