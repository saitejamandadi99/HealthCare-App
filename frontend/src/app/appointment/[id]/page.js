'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '@/components/loader'; 

const Appointment = () => {
  const { id } = useParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });
  const [loading, setLoading] = useState(false); // For form submission
  const [initialLoading, setInitialLoading] = useState(true); // For doctor fetch
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/doctors/${id}`);
        setDoctor(res.data.doctorDetails);
      } catch (err) {
        setError('Doctor not found');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const res = await axios.post(`http://localhost:5000/api/appointments/${id}`, formData);
      setSuccessMessage(res.data.message || 'Appointment booked successfully!');
      setFormData({ name: '', email: '', date: '' });
    } catch (err) {
      setError('Failed to book appointment: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Book Appointment with {doctor?.name}</h2>
      <p className="mb-4">Specialization: {doctor?.specialization}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          required
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Patient Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          required
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className={`py-2 rounded bg-blue-600 text-black hover:bg-blue-700 flex justify-center items-center`}
        >
          {loading ? <Loader small /> : 'Book Appointment'}
        </button>

        {error && <p className="text-red-600">{error}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <button
          type="button"
          onClick={() => router.push('/')}
          className="bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Appointment;
