let appointments = [];
const doctors = require('../data/doctors');

const bookAppointment = (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const doctorId = req.params.id;
    const { name, email, date } = req.body;

    if (!name || !email || !date || !doctorId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const doctorExists = doctors.some(doc => doc.id === doctorId);
    if (!doctorExists) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const appointment = { name, email, doctorId, date };
    appointments.push(appointment);

    return res.status(201).json({
      message: 'Appointment booked successfully',
      appointment,
    });

  } catch (error) {
    console.error("Error booking appointment:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = bookAppointment;