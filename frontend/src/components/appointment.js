import {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Appointment = ({doctor}) =>{
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value,});
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');
        try {
            const url = `http://localhost:5000/api/appointments/${doctor.id}`;
            const response = await axios.post(url, formData);
            if(response.data && response.data.message){
                setSuccessMessage(response.data.message);
            }
            setFormData({}); // Reset form data after successful submission
        } catch (error) {
            setError('Failed to book appointment: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

     

    return(
        <form onSubmit={handleSubmit}>
            <input required type='text' name = 'name' placeholder='enter the name of the patient' onChange={handleChange} value={formData.name} />
            <input required type='email' name = 'email' placeholder='enter the email of the patient' onChange={handleChange} value={formData.email} />
            <input required type = 'date' name = 'date' placeholder='select the date for appointment' onChange={handleChange} value={formData.date} />
            <button type='submit'>Book Appointment</button>
            {error && <p className="error" style={{color:'red'}}>{error}</p>}
            {successMessage && <p className="success" style={{color:'green'}}>{successMessage}</p>}
            <button onClick={() => router.push('/')}>Go Back</button>
        </form>
    )
}

export default Appointment;