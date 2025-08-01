const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/', (req, res)=>{
    res.send('Welcome to the HealthCare App Api');
})

app.use('/api', require('./routers/doctorRoutes'));
app.use('/api', require('./routers/appointmentRoutes'));

app.listen(5000, ()=>{
    console.log('Server is running on the port http://localhost:5000');
});
