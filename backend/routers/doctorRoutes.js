const express = require('express');
const {getAllDoctorsList, getDoctorDetails} = require('../controllers/doctorControllers');
const router = express.Router();

router.get('/doctors', getAllDoctorsList);
router.get('/doctors/:id', getDoctorDetails);

module.exports = router;