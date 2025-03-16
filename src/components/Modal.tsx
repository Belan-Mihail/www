import React, { useState, useEffect } from "react";
import './Modal.css';

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show modal only if it hasn't been dismissed
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "true"); // Store consent in localStorage
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
            Durch Klicken auf „Akzeptieren“ stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
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
