import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Стили для toast уведомлений
import "./ContactForm.css"; // Ваши стили для компонента
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    feedback: "",
    consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка на пустые поля и капчу
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.feedback || !formData.consent) {
      toast.error("Alle Felder müssen ausgefüllt und das Kontrollkästchen muss angekreuzt sein!");
      return;
    }

    // Отправка данных через EmailJS
    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      feedback: formData.feedback,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully', response);
        toast.success("Ihre Nachricht wurde gesendet!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          feedback: "",
          consent: false,
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error("Beim Senden der Nachricht ist ein Fehler aufgetreten.");
      });
  };

  return (
    <div id="kontakte" className="contact-section">
      <ToastContainer 
        position="bottom-left" 
        autoClose={2000} 
        hideProgressBar={true} 
        newestOnTop={true} 
        closeOnClick={true} 
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <h2 className="main-heading text-white text-4xl font-semibold text-center mb-10">
        Kontaktieren Sie uns
      </h2>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstname" className="label">
            Ihr Vorname
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="text-input"
            value={formData.firstname}
            onChange={handleInputChange}
            required
            placeholder="Geben Sie Ihren Vorname ein"
          />

          <label htmlFor="lastname" className="label">
            Ihr Nachname
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="text-input"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            placeholder="Geben Sie Ihren Nachname ein"
          />

          <label htmlFor="email" className="label">
            Ihre E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="text-input"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Geben Sie Ihre E-Mail ein"
          />

          <label htmlFor="feedback" className="label">
            Ihr Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            className="text-input"
            value={formData.feedback}
            onChange={handleInputChange}
            required
            placeholder="Geben Sie Ihr Feedback ein"
          />

          <div className="consent-section">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              required
              className="consent-checkbox"
            />
            <label htmlFor="consent" className="consent-label">
              Ich stimme der{" "}
              <Link className="hover:text-yellow-500 transition duration-300 underline hover:no-underline" to="/datenschutz">
                Verarbeitung meiner Daten
              </Link>{" "}
              zu
            </label>
          </div>

          <div className="flex justify-center buttons">
            <button
              type="submit"
              className="submit-btn bg-yellow-500 hover:bg-yellow-600"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
