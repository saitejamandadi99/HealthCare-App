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
        setError('Failed to fetch doctors: ' + error.message);
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
    <div className="container py-4">
      <h1 className="text-center mb-3">Welcome to the HealthCare Portal</h1>
      <p className="text-center mb-4">Search and schedule appointments for free.</p>

      <div className="mb-4 d-flex justify-content-center">
        <input
          type="search"
          onChange={e => setSearchField(e.target.value)}
          placeholder="Search doctor by name"
          className="form-control w-50"
        />
      </div>

      {error && <p className="text-danger text-center">{error}</p>}
      {successMessage && <p className="text-success text-center">{successMessage}</p>}

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <>
          {filteredDoctors.length === 0 ? (
            <p className="text-center">No doctors found</p>
          ) : (
            <div className="row">
              {filteredDoctors.map(doctor => (
                <div key={doctor.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LandingPage;
