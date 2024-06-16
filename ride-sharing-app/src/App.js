import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Register from './components/Register';
import Profile from './components/Profile';
import RideRequest from './components/RideRequest';
import RideOffers from './components/RideOffers';
import RideBookingPage from './components/Booking'; // Import the Booking component
import RatingAndReview from './components/RatingAndReview'; // Import the RatingAndReview component
import './index.css';
import LandingPage from './components/LandingPage';
import RideMatchingPage from './components/RideMatching';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ride-request" element={<RideRequest />} />
          <Route path="/ride-offers" element={<RideOffers />} />
          <Route path="/ride-match" element={<RideMatchingPage />} />
          <Route path="/book-ride/:offerId" element={<RideBookingPage />} /> {/* Add route for booking */}
          <Route path="/rate-ride/:offerId" element={<RatingAndReview />} /> {/* Add route for rating and review */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
