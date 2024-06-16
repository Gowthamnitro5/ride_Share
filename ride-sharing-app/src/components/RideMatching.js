import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// RideMatchCard Component
const RideMatchCard = ({ match, handleBookRide }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <p>
        <strong>Pickup Location:</strong> {match.pickup_location}
      </p>
      <p>
        <strong>Destination:</strong> {match.destination}
      </p>
      <p>
        <strong>Date & Time:</strong> {match.date_time}
      </p>
      <p>
        <strong>Seats Needed:</strong> {match.seats}
      </p>
      <p>
        <strong>Available Seats:</strong> {match.available_seats}
      </p>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
        onClick={() => handleBookRide(match)}
      >
        Book Ride
      </button>
    </div>
  );
};

// RideMatches Component
const RideMatches = () => {
  const [error, setError] = useState('');
  const [rideMatches, setRideMatches] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRideOffer, setSelectedRideOffer] = useState(null);

  useEffect(() => {
    const fetchRideMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/match-rides', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRideMatches(response.data);
      } catch (error) {
        console.error('Error fetching ride matches:', error);
        setError('Failed to fetch ride matches');
      }
    };

    fetchRideMatches();
  }, []);

  const handleBookRide = (rideOffer) => {
    setSelectedRideOffer(rideOffer);
    setShowBookingForm(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Ride Matches</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 gap-4">
        {rideMatches.map((match) => (
          <RideMatchCard
            key={uuidv4()} // Generate a unique key for each RideMatchCard
            match={match}
            handleBookRide={handleBookRide}
          />
        ))}
      </div>
      {showBookingForm && (
        <RideBookingForm rideOffer={selectedRideOffer} setShowBookingForm={setShowBookingForm} />
      )}
    </div>
  );
};

const RideBookingForm = ({ rideOffer, setShowBookingForm }) => {
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
          rideOfferId: rideOffer.id,
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
        <button
          type="button"
          className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mt-4"
          onClick={() => setShowBookingForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

const RideMatchingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl w-full px-4">
        <RideMatches />
      </div>
    </div>
  );
};

export default RideMatchingPage;
