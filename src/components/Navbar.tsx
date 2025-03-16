import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import ToTop from './ToTop'; // Импортируем компонент ToTop

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Навигация */}
      <nav id='startseite' className="bg-gray-900 text-white py-4 h-[120px] navbar">
        <div className="container mx-auto flex flex-col items-center navbar-container">
          
          <div className="text-3xl font-bold mb-4 z-20">
            <h1>Hanse-Fliesenlegern</h1>
          </div>

          <div className="flex space-x-8 navbar-links">
            {location.pathname === '/' ? (
              <>
                <a href="#startseite" className="hover:text-yellow-500 transition duration-300 z-20">Startseite</a>
                <a href="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300 z-20">Unsere Arbeiten</a>
                <a href="#zusammenarbeit" className="hover:text-yellow-500 transition duration-300 z-20">Zusammenarbeit</a>
                <a href="#kontakte" className="hover:text-yellow-500 transition duration-300 z-20">Kontakte</a>
              </>
            ) : (
              <>
                <Link to="/" className="inline-block px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 z-20">Startseite</Link>
                
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Добавляем компонент ToTop для прокрутки вверх */}
      <ToTop />
    </>
  );
};

export default Navbar;
