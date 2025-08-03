'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import Loader from '@/components/loader'; 

const DoctorPage = () => {
  const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:5000/api/doctors/${id}`;
        const response = await axios.get(url);
        if (response.data && response.data.doctorDetails) {
          setDoctorDetails(response.data.doctorDetails);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorDetails();
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Doctor Details</h1>

      {loading && <Loader />}

      {doctorDetails ? (
        <div className="card p-4">
          <div className="row g-3">
            <div className="col-md-4 text-center">
              <img
                src={doctorDetails.image}
                alt={doctorDetails.name}
                className="img-fluid rounded-circle"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <div className="col-md-8">
              <h3>{doctorDetails.name}</h3>
              <p><strong>Specialization:</strong> {doctorDetails.specialization}</p>
              <p><strong>Availability:</strong> {doctorDetails.availability}</p>
              <Link href={`/appointment/${doctorDetails.id}`} passHref>
                <button className="btn btn-success mt-3">
                  Schedule Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        !loading && <div className="alert alert-warning">No doctor found</div>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default DoctorPage;
