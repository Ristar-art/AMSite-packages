import Navbar from './Navbar';
import Footer from './Footer';
import React, { useEffect, useRef } from 'react';

export default function Layout({ children }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    contentRef.current.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <div className='relative flex flex-col max-w-[1200px] mx-auto text-sm sm:text-base min-h-screen'>
      <Navbar />
      <div ref={contentRef} className='content'>
        {children}
      </div>
      <Footer />
      <button
        className='fixed bottom-5 right-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>

      </button>
    </div>
  );
}
