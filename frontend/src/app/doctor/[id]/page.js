'use client';
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const DoctorPage = () =>{
    const {id} = useParams()
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(()=>{
        const fetchDoctorDetails = async () =>{
            try {
                setLoading(true)
                const url = `http://localhost:5000/api/doctors/${id}`
                const response = await axios.get(url);
                if(response.data && response.data.doctorDetails){
                    setDoctorDetails(response.data.doctorDetails)
                }
            } catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false)
            }
        }
        fetchDoctorDetails();   
    },[])
    return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Doctor Details</h1>
      {doctorDetails ? (
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Name:</strong> {doctorDetails.name}</p>
          <p><strong>Specialization:</strong> {doctorDetails.specialization}</p>
          <img src={doctorDetails.image} alt={doctorDetails.name} className="w-32 h-32 rounded-full mb-2" />
          <p><strong>Availability:</strong> {doctorDetails.availability}</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Schedule Appointment    
          </button>
        </div>
      ) : (
        <p>No doctor found</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default DoctorPage;