import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    
    <div className='layout max-w-[1200px] mx-auto'>
          <Navbar />
          <div className='content'>
              { children }
          </div>
          <footer>
              <p>Copyright 2024 Atlegile Marketing Solution</p>
          </footer>
      </div>

  )
}
