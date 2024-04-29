import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FiHome, FiTag, FiInfo, FiMail, FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar p-4 rounded-tl rounded-tr rounded-bl rounded-br ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src='/Logo.png' alt="Logo" className="h-12" />
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" icon={<FiHome />} text="Home" />
            <NavLink to="/pricing" icon={<FiTag />} text="Pricing" />
            <NavLink to="/about" icon={<FiInfo />} text="About" />
          </div>
          <div className="md:hidden">
            <button
              className="text-customOrange focus:outline-none"
              onClick={toggleMenu}
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <NavLink to="/contact" icon={<FiMail />} text="Contact" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto py-4">
            <NavLink to="/" icon={<FiHome />} text="Home" toggleMenu={toggleMenu} />
            <NavLink to="/pricing" icon={<FiTag />} text="Pricing" toggleMenu={toggleMenu} />
            <NavLink to="/about" icon={<FiInfo />} text="About" toggleMenu={toggleMenu} />
            <NavLink to="/contact" icon={<FiMail />} text="Contact" toggleMenu={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, icon, text, toggleMenu }) {
  return (
    <Link
      to={to}
      className="block text-customOrange hover:text-white-600 hover:shadow-md flex items-center transition duration-300 transform hover:-translate-y-1"
      onClick={toggleMenu}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
}
