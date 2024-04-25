import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='layout max-w-[1200px] mx-auto'>
      <Navbar />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </div>
  );
}