
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-yellow-500 border-t-2">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Название компании */}
        <div className="text-3xl font-bold">
          <h1>
          {location.pathname === '/' ? (
            <a href="#startseite" className="hover:text-yellow-500 transition duration-300 z-20">Hanse-Fliesenlegern</a>
          ) : (
            <Link to="/" className="hover:text-yellow-500 transition duration-300">
            Hanse-Fliesenlegern
            </Link>
          )}
            
           </h1>
        </div>

        {/* Ссылки */}
        <div className="flex space-x-8">
          <Link to="/impressum" className="hover:text-yellow-500 transition duration-300 text-xl font-semibold">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-yellow-500 transition duration-300 text-xl font-semibold">
            Datenschutz
          </Link>
        </div>

        {/* Адрес и контактная информация */}
        <div className="text-center space-y-2">
          <p>Clemens-Schulz-Straße 29</p>
          <p>Email: <span className='text-yellow-500'>v.akimenko@tdk-bau.de</span></p>
          <p>+49 157 81461757</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


