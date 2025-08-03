'use client'

import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import DoctorCard from '@/components/doctorCard';

const LandingPage = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const url = 'http://localhost:5000/api/doctors';
      setLoading(true);
      try {
        const response = await axios.get(url);
        if (response.data && response.data.doctorsList) {
          setDoctorsList(response.data.doctorsList);
          setSuccessMessage(response.data.message || 'Doctors fetched successfully');
        }
      } catch (error) {
        setError('Failed to fetch doctors');
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctorsList.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [doctorsList, searchField]);

  return (
    <div className="container mt-4">
      <h1 className="mb-3 text-center">Welcome to the HealthCare App</h1>
      <p className="text-center">Check the doctors available and schedule the appointments for free of cost</p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="search"
            className="form-control"
            onChange={e => setSearchField(e.target.value)}
            placeholder="Search doctor by name"
          />
        </div>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}
      {successMessage && <p className="text-success text-center">{successMessage}</p>}

      <div className="row">
        {filteredDoctors.length === 0 ? (
          <p className="text-center">No doctors found</p>
        ) : (
          filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;
