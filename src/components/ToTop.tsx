import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Иконка для кнопки "Вверх"

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для проверки прокрутки страницы
  const checkScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Показываем кнопку после 100px прокрутки
    } else {
      setIsVisible(false); // Скрываем кнопку, если прокрутка меньше 100px
    }
  };

  // Используем useEffect для отслеживания события прокрутки
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll); // Убираем обработчик при размонтировании
    };
  }, []);

  // Функция для прокрутки в верх страницы
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer transition-transform duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={24} />
    </div>
  );
};

export default ToTop;
