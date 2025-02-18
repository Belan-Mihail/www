import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); 
  
    return (
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          
          <div className="text-3xl font-bold mb-4">
            <span>Логотип</span>
          </div>
  
          
          <div className="flex space-x-8">
            
            {location.pathname === '/' ? (
              
              <>
                <a href="#startseite" className="hover:text-yellow-500 transition duration-300">Startseite</a>
                <a href="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300">Unsere Arbeiten</a>
                <a href="#statistiken" className="hover:text-yellow-500 transition duration-300">Statistiken</a>
                <a href="#bewertungen" className="hover:text-yellow-500 transition duration-300">Bewertungen</a>
                <a href="#kontakte" className="hover:text-yellow-500 transition duration-300">Kontakte</a>
              </>
            ) : (
              
              <>
                <Link to="/" className="hover:text-yellow-500 transition duration-300">Главная</Link>
                <Link to="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300">Unsere Arbeiten</Link>
                <Link to="#statistiken" className="hover:text-yellow-500 transition duration-300">Statistiken</Link>
                <Link to="#bewertungen" className="hover:text-yellow-500 transition duration-300">Bewertungen</Link>
                <Link to="#kontakte" className="hover:text-yellow-500 transition duration-300">Kontakte</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;