import React from "react";
import "./ContactForm.css"; // Импортируем стили

const ContactForm: React.FC = () => {
  return (
    <section className="contact-form">
      <div className="overlay">
        <div className="content">
          <h2>Kontaktieren Sie uns</h2>
          <form method="POST" action="#" id="feedback-form">
            <label htmlFor="yname" className="label">Ihr Name</label>
            <input
              type="text"
              id="yname"
              name="user_name"
              required
              placeholder="Geben Sie Ihren Namen ein"
              className="text-input"
            />
            <label htmlFor="yemail" className="label">Ihre E-Mail</label>
            <input
              type="email"
              id="yemail"
              name="user_email"
              required
              placeholder="Geben Sie Ihre E-Mail ein"
              className="text-input"
            />
            <label htmlFor="yfeedback" className="label">Ihr Feedback</label>
            <textarea
              id="yfeedback"
              name="user_feedback"
              required
              placeholder="Geben Sie Ihr Feedback ein"
              className="text-input"
            />
            <input
              type="radio"
              id="consent"
              name="user_consent"
              value="consent"
              checked
              required
            />
            <label htmlFor="consent" className="radio-label">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer persönlichen Daten zu
            </label>
            <input type="submit" id="btn" value="Absenden" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
