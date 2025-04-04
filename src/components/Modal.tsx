import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Modal.css';

const Modal = () => {
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
    isVisible && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          <h2 className="modal-header font-semibold text-center text-white">Cookie-Hinweis</h2>
          <p className=" modal-text  text-center text-white mt-4">
            Wir verwenden Cookies
            <br />
            Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzungserfahrung zu bieten. Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen, die Website zu verbessern und Ihre Benutzererfahrung zu optimieren.
          </p>
          <p className=" modal-text text-center text-white mt-4">
            Durch Klicken auf „Akzeptieren“ stimmen Sie der <Link to="/datenschutz" className="text-yellow-400 hover:text-yellow-500 transition duration-100 font-normal">Verwendung von Cookies</Link> zu. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
          </p>
          <div className="text-center mt-6">
            <button onClick={acceptCookies} className="accept-button bg-yellow-500 hover:bg-yellow-600">Akzeptieren</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
