import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Стили для toast уведомлений
import "./ContactForm.css"; // Ваши стили для компонента

const ContactForm: React.FC = () => {
  // Состояние для полей формы
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    feedback: "",
    consent: false,
    captcha: "",
  });

  // Состояние для капчи
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [captchaAnswer, setCaptchaAnswer] = useState<number>(0);
  const [captchaInput, setCaptchaInput] = useState<string>("");

  // Генерация случайных чисел для капчи
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10); // Случайное число от 0 до 9
    const num2 = Math.floor(Math.random() * 10); // Случайное число от 0 до 9
    setNum1(num1);
    setNum2(num2);
    setCaptchaAnswer(num1 + num2); // Ответ капчи
  };

  // Обработчик изменения полей
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработчик изменения для чекбокса
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка на пустые поля и капчу
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.feedback || !formData.consent) {
      toast.error("Все поля должны быть заполнены и чекбокс должен быть отмечен!");
      return;
    }

    if (captchaInput !== captchaAnswer.toString()) {
      toast.error("Неверный ответ на капчу!");
      return;
    }

    // Если все прошло успешно, очистим форму и уведомим пользователя
    toast.success("Ваше сообщение отправлено!");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      feedback: "",
      consent: false,
      captcha: "",
    });
    setCaptchaInput(""); // Сброс капчи
    generateCaptcha(); // Генерация нового примера
  };

  // Обработчик кнопки отмены
  const handleCancel = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      feedback: "",
      consent: false,
      captcha: "",
    });
    setCaptchaInput(""); // Сброс капчи
  };

  // Инициализация капчи при первом рендере
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div id="kontakte" className="contact-section">
      {/* Toast контейнер должен быть наверху компонента */}
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
      
      {/* Заголовок для секции */}
      <h2 className="main-heading text-white text-4xl font-semibold text-center mb-10">
        Kontaktieren Sie uns
      </h2>

      {/* Контактная форма */}
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

          {/* Капча */}
          <div className="captcha-section">
            <label className="captcha-label text-white">
              Bitte lösen Sie diese Aufgabe: <span className="font-bold">{num1} + {num2} = ?</span>
            </label>
            <input
              type="text"
              className="captcha-input"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
              placeholder="Antwort"
            />
          </div>

          {/* Кнопки */}
          <div className="flex gap-2 justify-around buttons">
            <button
              type="submit"
              className="submit-btn bg-yellow-500 hover:bg-yellow-600"
            >
              Absenden
            </button>
            <button
              type="button"
              className="submit-btn bg-red-500 hover:bg-red-600"
              onClick={handleCancel}
            >
              Absagen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
