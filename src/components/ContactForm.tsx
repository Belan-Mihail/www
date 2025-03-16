import React from "react";
import './ContactForm.css'; // Ваши стили для компонента

const ContactForm: React.FC = () => {
  return (
    <div id="kontakte" className="contact-section">
      {/* Заголовок для секции */}
      <h2 className="main-heading text-white text-4xl font-semibold text-center mb-10">
        Kontaktieren Sie uns
      </h2>

      {/* Контактная форма */}
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name" className="label">Ihr Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-input"
            required
            placeholder="Geben Sie Ihren Namen ein"
          />
          
          <label htmlFor="email" className="label">Ihre E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="text-input"
            required
            placeholder="Geben Sie Ihre E-Mail ein"
          />
          
          <label htmlFor="feedback" className="label">Ihr Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            className="text-input"
            required
            placeholder="Geben Sie Ihr Feedback ein"
          />

          <div className="consent-section">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="consent-checkbox"
            />
            <label htmlFor="consent" className="consent-label">
              Ich stimme der Verarbeitung meiner Daten zu
            </label>
          </div>

          <button type="submit" className="submit-btn bg-yellow-500 hover:bg-yellow-600">Absenden</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
