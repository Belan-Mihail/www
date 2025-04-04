import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Modal.css";
import { div } from "framer-motion/client";

const MiniModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Время жизни согласия в миллисекундах (1 день = 24 * 60 * 60 * 1000)
  const consentExpiryTime = 24 * 60 * 60 * 1000;

  // Show modal only if it hasn't been dismissed or if consent has expired
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const consentDate = localStorage.getItem("cookieConsentDate");

    if (!cookieConsent || !consentDate) {
      // Показать модальное окно, если согласие не было дано или дата согласия не сохранена
      setIsVisible(true);
    } else {
      // Проверка, не истек ли срок действия согласия
      const currentTime = new Date().getTime();
      const consentTime = parseInt(consentDate, 10);

      if (currentTime - consentTime > consentExpiryTime) {
        // Если прошло больше чем 24 часа, показываем модальное окно
        setIsVisible(true);
      }
    }
  }, [location.pathname]); // Проверяем согласие при изменении пути (перехватываем любые изменения пути)

  const acceptCookies = () => {
    const currentTime = new Date().getTime();
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "true"); // Сохраняем согласие
    localStorage.setItem("cookieConsentDate", currentTime.toString()); // Сохраняем дату согласия
  };

  return (
    <div className={`fixed bottom-10 left-10 z-50 p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer transition-transform duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <button
        onClick={acceptCookies}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition duration-300 fixed bottom-10 left-10 z-50"
      >
        Cookie Akzeptieren
      </button>
    </div>
  );
};

export default MiniModal;
