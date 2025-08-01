const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Welcome to the HealthCare App Api');
})

app.listen(5000, ()=>{
    console.log('Server is running on the port http://localhost:5000');
});

