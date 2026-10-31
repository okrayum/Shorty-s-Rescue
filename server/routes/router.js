const router = require("express").Router();
const { formDataController }= require("../controllers");

// API endpoints for fetching data 
router.get('/forms/adoption', formDataController.getAdoptData);
router.get('/forms/inquiry', formDataController.getInquiryData);

// API endpoint for submitting data
router.post('/forms/adoption', formDataController.submitAdoptData);
router.post('/forms/inquiry', formDataController.submitInquiryData);

module.exports = router;