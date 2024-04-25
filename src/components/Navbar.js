import { Link } from 'gatsby';
import React from 'react';
// import Logo from '../assets/Logo.png';
import { FiHome, FiTag , FiInfo, FiMail } from 'react-icons/fi';
export default function Navbar() {
  return (
    <nav className="bg-customBlue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src='/Logo.png' alt="Logo" className="h-12" />
        </Link>
        <div className="flex-grow text-center flex justify-center">
          <Link to="/" className="text-customOrange hover:text-white-600 hover:shadow-md flex items-center transition duration-300 transform hover:-translate-y-1">
            <FiHome className="mr-2" />
            Home
          </Link>
          <span className="mx-4">|</span>
          <Link to="/pricing" className="text-customYellow hover:text-white-600 hover:shadow-md flex items-center transition duration-300 transform hover:-translate-y-1">
            <FiTag className="mr-2" />
            Pricing
          </Link>
          <span className="mx-4">|</span>
          <Link to="/about" className="text-customOrange hover:text-white-600 hover:shadow-md flex items-center transition duration-300 transform hover:-translate-y-1">
            <FiInfo className="mr-2" />
            About
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/contact" className="text-customYellow hover:text-white-600 hover:shadow-md flex items-center transition duration-300 transform hover:-translate-y-1">
            <FiMail className="mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}