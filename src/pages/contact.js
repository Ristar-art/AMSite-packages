import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      surname: '',
      email: '',
      message: ''
    });
  };
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto flex">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-semibold mb-4">Send A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block mb-2">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <div>
            <Link to="#" className="block mb-2 text-blue-500">
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </Link>
            <Link to="#" className="block mb-2 text-blue-500">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </Link>
            <Link to="#" className="block mb-2 text-blue-500">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}