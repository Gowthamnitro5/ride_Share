import React, { useState } from 'react';
import axios from 'axios';

const RideOfferForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [seats, setSeats] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/ride-offer', {
        pickupLocation,
        destination,
        dateTime,
        seats,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Optionally, you can redirect the user to another page or show a success message
      alert('Ride offer created successfully!');
    } catch (error) {
      console.error('Error creating ride offer:', error);
      setError('Failed to create ride offer');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl text-center mb-6">Offer a Ride</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="pickupLocation" className="block text-gray-700">Pickup Location</label>
            <input
              type="text"
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700">Destination</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateTime" className="block text-gray-700">Date & Time</label>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="seats" className="block text-gray-700">Seats</label>
            <input
              type="number"
              id="seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Offer Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default RideOfferForm;
