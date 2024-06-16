import React, { useState } from 'react';
import axios from 'axios';

const RideBookingForm = ({ rideOfferId }) => {
  const [seatsBooked, setSeatsBooked] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/book-ride',
        {
          rideOfferId,
          seatsBooked
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSuccess('Ride booked successfully!');
        setError('');
      } else {
        setError('Failed to book ride');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error booking ride:', error);
      setError('An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Book Ride</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="seatsBooked" className="block text-gray-700">
            Seats to Book
          </label>
          <input
            type="number"
            id="seatsBooked"
            value={seatsBooked}
            onChange={(e) => setSeatsBooked(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Ride
        </button>
      </form>
    </div>
  );
};

const RideBookingPage = ({ rideOfferId }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">
        <RideBookingForm rideOfferId={rideOfferId} />
      </div>
    </div>
  );
};

export default RideBookingPage;