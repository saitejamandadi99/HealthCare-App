'use client'

import {useState, useEffect,useMemo} from 'react';
import axios from 'axios';

const LandingPage = () =>{
  const [doctorsList , setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const[searchField, setSearchField] = useState('');
  const [error, setError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  useEffect(()=>{
    const fetchDoctors = async () =>{
      const url = 'http://localhost:5000/api/doctors';
      setLoading(true);
      try {
        const response = await axios.get(url)
        console.log(response.data);
        if (response.data && response.data.doctorsList){
          setDoctorsList(response.data.doctorsList);
          setLoading(false);
          setSuccessMessage(response.data.message || 'Doctors fetched successfully');
        }
        
      } catch (error) {
        setError('Failed to fetch doctors', error.message);
        
      }
      finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  },[]);
  const filteredDoctors = useMemo(() => {
    return doctorsList.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [doctorsList, searchField]);
  return(
    <div>
      <h1>Welcome to the home page of the application</h1>
      <p>check the doctors available and schedule the appointments for free of cost</p>
      <div>
        <input type='search' onChange={e=>setSearchField(e.target.value)} placeholder='search a doctor name' />
        
      </div>
      {filteredDoctors.length > 0 && (
        filteredDoctors.map(doctor=>(
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default LandingPage;