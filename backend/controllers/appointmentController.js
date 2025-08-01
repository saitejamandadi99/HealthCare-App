let appointments = []

const bookAppointment = (req, res) =>{
    try {
        const {name, doctorId, date} = req.body;
    if (!name || !doctorId || !date){
        res.status(400).json({message:'All fields are required'}); //400 = bad request code
        return;
    }
    res.status(201).json({message:'Appointment booked successfully', appointment :{name,doctorId, date}})

    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'}); //500 = server error code
    }
}

 module.exports =  bookAppointment;