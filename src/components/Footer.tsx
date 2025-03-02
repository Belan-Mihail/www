import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-yellow-500 border-t-2">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Название компании */}
        <div className="text-3xl font-bold">
          <h1>Hanse-Fliesenlegern</h1>
        </div>

        {/* Ссылки */}
        <div className="flex space-x-8">
          <Link to="/impressum" className="hover:text-yellow-500 transition duration-300">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-yellow-500 transition duration-300">
            Datenschutz
          </Link>
        </div>

        {/* Адрес и контактная информация */}
        <div className="text-center space-y-2">
          <p>Clemens-Schulz-Straße 29</p>
          <p>Email: Ewird noch ergänzt</p>
          <p>+49 157 81461757</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


