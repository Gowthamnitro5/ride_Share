import React, { useState, useEffect } from 'react';
import axios from 'axios';

// RideRequestForm Component
const RideRequestForm = ({ handleSubmit, error }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [seats, setSeats] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl text-center mb-6">Make a Ride Request</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={(e) => handleSubmit(e, pickupLocation, destination, dateTime, seats)}>
        <div className="mb-4">
          <label htmlFor="pickupLocation" className="block text-gray-700">
            Pickup Location
          </label>
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
          <label htmlFor="destination" className="block text-gray-700">
            Destination
          </label>
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
          <label htmlFor="dateTime" className="block text-gray-700">
            Date & Time
          </label>
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
          <label htmlFor="seats" className="block text-gray-700">
            Seats
          </label>
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
          Request Ride
        </button>
      </form>
    </div>
  );
};

// RideOffers Component
const RideOffers = ({ rideOffers, error }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Available Ride Offers</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 gap-4">
        {rideOffers.map((offer) => (
          <div key={offer.id} className="bg-white p-4 rounded-md shadow">
            <p>
              <strong>Pickup Location:</strong> {offer.pickup_location}
            </p>
            <p>
              <strong>Destination:</strong> {offer.destination}
            </p>
            <p>
              <strong>Date & Time:</strong> {offer.date_time}
            </p>
            <p>
              <strong>Available Seats:</strong> {offer.seats}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const RideRequest = () => {
  const [error, setError] = useState('');
  const [rideOffers, setRideOffers] = useState([]);

  const handleSubmit = async (e, pickupLocation, destination, dateTime, seats) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/ride-request', {
        pickupLocation,
        destination,
        dateTime,
        seats
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // Handle successful ride request
      } else {
        setError('Failed to create ride request');
      }
    } catch (error) {
      console.error('Error creating ride request:', error);
      setError('An error occurred');
    }
  };

  useEffect(() => {
    const fetchRideOffers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/ride-offers', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRideOffers(response.data);
      } catch (error) {
        console.error('Error fetching ride offers:', error);
        setError('Failed to fetch ride offers');
      }
    };

    fetchRideOffers();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        <RideRequestForm handleSubmit={handleSubmit} error={error} />
        <RideOffers rideOffers={rideOffers} error={error} />
      </div>
    </div>
  );
};

export default RideRequest;