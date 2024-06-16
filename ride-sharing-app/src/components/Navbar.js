import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for a user icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RideShare</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <Link to="/ride-request" className="hover:text-gray-300">Ride Request</Link>
          <Link to="/ride-offers" className="hover:text-gray-300">Ride Offers</Link>
          <Link to="/ride-match" className="hover:text-gray-300">Ride Match</Link>
          <Link to="/book-ride/:offerId" className="hover:text-gray-300">Book Ride</Link>
          <Link to="/rate-ride/:offerId" className="hover:text-gray-300">Rate Ride</Link>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <FaUserCircle className="h-8 w-8" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </Link>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Home</Link>
          <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Register</Link>
          <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Profile</Link>
          <Link to="/ride-request" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Ride Request</Link>
          <Link to="/ride-offers" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Ride Offers</Link>
          <Link to="/ride-match" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Ride Match</Link>
          <Link to="/book-ride/:offerId" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Book Ride</Link>
          <Link to="/rate-ride/:offerId" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Rate Ride</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
