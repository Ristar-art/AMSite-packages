import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className=" p-4 rounded-tl rounded-tr rounded-bl rounded-br text-customYellow relative">
      <div className="absolute inset-y-0 right-4 flex items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 w-8 h-8 bg-customOrange rounded-full flex items-center justify-center hover:bg-yellow-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-customBlue" />
        </a>
        <a
          href="https://www.facebook.com/your-facebook-page"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 w-8 h-8 bg-customOrange rounded-full flex items-center justify-center hover:bg-yellow-400 transition duration-300 "        >
          <FontAwesomeIcon icon={faFacebookF} className="text-customBlue" />
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Atlegile Marketing Solutions</p>
      </div>
    </footer>
  );
};
export default Footer;