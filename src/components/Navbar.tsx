import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import ToTop from './ToTop'; // Импортируем компонент ToTop

const Navbar = () => {
  const location = useLocation();

  // Устанавливаем высоту навбара в зависимости от текущего пути
  const navbarHeight = location.pathname === '/' ? 'h-[120px]' : 'h-[40px]';

  return (
    <>
      {/* Навигация */}
      <nav
        id="startseite"
        className={`bg-gray-900 text-white py-4 ${navbarHeight} navbar`}
      >
        <div className="container mx-auto flex flex-col items-center navbar-container">
          <div className="text-3xl font-bold mb-4 z-20">
            <h1>
              {location.pathname === '/' ? (
                'Hanse-Fliesenlegern'
              ) : (
                <Link to="/" className="text-white hover:text-yellow-500 transition duration-300">
                  Hanse-Fliesenlegern
                </Link>
              )}
            </h1>
          </div>

          {/* Ссылки на главной странице */}
          {location.pathname === '/' && (
            <div className="flex space-x-8 navbar-links">
              <a href="#unsere-arbeiten" className="hover:text-yellow-500 transition duration-300 z-20">
                Unsere Arbeiten
              </a>
              <a href="#zusammenarbeit" className="hover:text-yellow-500 transition duration-300 z-20">
                Zusammenarbeit
              </a>
              <a href="#kontakte" className="hover:text-yellow-500 transition duration-300 z-20">
                Kontakte
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Добавляем компонент ToTop для прокрутки вверх */}
      <ToTop />
    </>
  );
};

export default Navbar;
