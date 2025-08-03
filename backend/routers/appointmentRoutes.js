const express = require('express');
const bookAppointment = require('../controllers/appointmentController');
const router = express.Router();

router.post('/appointments/:id', bookAppointment);

module.exports = router;