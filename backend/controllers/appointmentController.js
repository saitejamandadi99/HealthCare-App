let appointments = []
const doctors = require('../data/doctors');
const bookAppointment = (req, res) =>{
    try {
        console.log("Request Body:", req.body);
        const {name, doctorId, date} = req.body;
    if (!name || !doctorId || !date){
       return res.status(400).json({message:'All fields are required'}); //400 = bad request code
        
    }
    const doctorExists = doctors.some(doc => doc.id === doctorId);
    if (!doctorExists) {
    return res.status(404).json({ message: 'Doctor not found' });
    }
    appointments.push({ name, doctorId, date });    
    return res.status(201).json({message:'Appointment booked successfully', appointment :{name,doctorId, date}})

    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error'}); //500 = server error code
    }
}

 module.exports =  bookAppointment;