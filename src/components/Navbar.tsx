import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const location = useLocation(); 
  
    return (
      <nav className="bg-gray-900 text-white py-4 h-[120px] navbar">
        <div className="container mx-auto flex flex-col items-center navbar-container">
          
          <div className="text-3xl font-bold mb-4 z-20">
            <h1>Hanse-Fliesenlegern</h1>
          </div>
  
          
          <div className="flex space-x-8 navbar-links">
            
            {location.pathname === '/' ? (
              
              <>
                <a href="#startseite" className="hover:text-yellow-500 transition duration-300 z-20">Startseite</a>
                <a href="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300 z-20">Unsere Arbeiten</a>
                <a href="#statistiken" className="hover:text-yellow-500 transition duration-300 z-20">Statistiken</a>
                <a href="#bewertungen" className="hover:text-yellow-500 transition duration-300 z-20">Bewertungen</a>
                <a href="#kontakte" className="hover:text-yellow-500 transition duration-300 z-20">Kontakte</a>
              </>
            ) : (
              
              <>
                <Link to="/" className="hover:text-yellow-500 transition duration-300 z-20">Startseite</Link>
                <Link to="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300 z-20">Unsere Arbeiten</Link>
                <Link to="#statistiken" className="hover:text-yellow-500 transition duration-300 z-20">Statistiken</Link>
                <Link to="#bewertungen" className="hover:text-yellow-500 transition duration-300 z-20">Bewertungen</Link>
                <Link to="#kontakte" className="hover:text-yellow-500 transition duration-300 z-20">Kontakte</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;