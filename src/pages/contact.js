import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
export default function Contact({ data }) {
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
      <section className="hero w-full min-h-screen h-screen bg-cover bg-center" >
        <div className="container mx-auto p-4 flex items-center">
        <Img fluid={data.file.childImageSharp.fluid} className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2" style={{ transform: 'scale(1.1)' }} />

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
                className="w-full p-2 border rounded-md transition duration-300 focus:ring focus:border-customYellow text-customBlue"
                placeholder="Enter your name"
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
                className="w-full p-2 border rounded-md transition duration-300 focus:ring focus:border-customYellow text-customBlue"
                placeholder="Enter your surname"
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
                className="w-full p-2 border rounded-md transition duration-300 focus:ring focus:border-customYellow text-customBlue"
                placeholder="Enter your email"
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
                className="w-full p-2 border rounded-md transition duration-300 focus:ring focus:border-customYellow text-customBlue"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-customOrange hover:bg-customYellow text-white px-4 py-2 rounded-md transition duration-300">Submit</button>
          </form>
        </div>
        
      </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: {eq: "Logo.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
