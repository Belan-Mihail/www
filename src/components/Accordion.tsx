import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaChevronUp } from "react-icons/fa"; // Иконки плюса и стрелки

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия и закрытия аккордеона
  const [rotate, setRotate] = useState(false); // Состояние для анимации вращения иконки
  const [visibleSentences, setVisibleSentences] = useState<number[]>([]); // Индексы предложений, которые должны быть видны
  const sentencesContainerRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер предложений

  // Список предложений
  const sentences = [
    "Als kleines Unternehmen legen wir großen Wert auf einen individuellen Ansatz für jeden Kunden.",
    "Wir arbeiten stets mit höchster Sorgfalt, um langfristige Kundenbeziehungen zu fördern.",
    "Unsere Preise stehen in keinem Verhältnis zur außergewöhnlichen Qualität unserer Arbeit.",
    "Wir halten uns strikt an vereinbarte Fristen und Absprachen.",
    "Wir bieten eine persönliche Beratung sowie maßgeschneiderte Lösungen für jeden Auftrag.",
  ];

  // Функция для переключения состояния аккордеона
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Функция для включения поворота
  const triggerRotate = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false); // Останавливаем анимацию поворота через 1 секунду
    }, 1000); // Анимация будет длиться 1 секунда
  };

  // Запускаем поворот каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(triggerRotate, 5000); // Каждые 5 секунд
    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, []);

  // Моделируем появление предложений по очереди
  useEffect(() => {
    if (isOpen) {
      // Прокручиваем страницу вниз, чтобы увидеть блок с предложениями
      if (sentencesContainerRef.current) {
        sentencesContainerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // Начало прокрутки
        });
      }

      let index = 0;
      setVisibleSentences([index]); // Сразу показываем первое предложение
      const interval = setInterval(() => {
        if (index < sentences.length - 1) {
          index++;
          setVisibleSentences((prev) => [...prev, index]);
        } else {
          clearInterval(interval); // Останавливаем интервал, как только все предложения показаны
        }
      }, 1000); // Каждое новое предложение появляется через 500 мс
      return () => clearInterval(interval); // Очищаем интервал при размонтировании
    } else {
      setVisibleSentences([]); // Очистка состояния при закрытии аккордеона
    }
  }, [isOpen]);

  return (
    <div className="bg-[#0f172a] text-white py-10 px-8">
      <div className="flex items-center justify-center gap-4 border-2 border-white rounded-lg p-6 w-max mx-auto">
        {/* Кнопка для открытия/закрытия аккордеона */}
        <motion.button
          onClick={toggleAccordion}
          whileTap={{ scale: 0.9 }} // Эффект нажатия
          className={`w-16 h-16 flex items-center justify-center ${
            isOpen ? "bg-[#425174]" : "bg-orange-500"
          } text-white text-4xl font-bold rounded-full hover:bg-[#2c3b4f]`}
        >
          {/* Если аккордеон открыт, показываем стрелку вверх, иначе плюс */}
          {isOpen ? (
            <FaChevronUp size={32} /> // Стрелка вверх
          ) : (
            <motion.div
              className={`transition-transform duration-1000 ${rotate ? "rotate-360" : ""}`}
            >
              <FaPlus size={32} /> {/* Плюс для открытия */}
            </motion.div>
          )}
        </motion.button>

        {/* Заголовок */}
        <h2 className="text-4xl font-semibold">Warum es vorteilhaft ist, mit uns zusammenzuarbeiten</h2>
      </div>

      {/* Скрытый список предложений, который разворачивается */}
      {isOpen && (
        <div
          ref={sentencesContainerRef} // Привязка контейнера предложений к рефу
          className="flex flex-col items-center text-lg space-y-2 mt-4 w-full max-w-3xl mx-auto"
        >
          {/* Контейнер для предложений */}
          <div className="w-full flex flex-col items-start space-y-2 text-2xl">
            {/* Маппинг предложений */}
            {sentences.map((sentence, index) => (
              <motion.p
                key={index}
                className="text-left mb-4"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: visibleSentences.includes(index) ? 1 : 0, // Показать предложение, если его индекс в visibleSentences
                }}
                transition={{
                  opacity: { duration: 0.5 }, // Плавный переход
                }}
              >
                {/* Порядковый номер + текст предложения */}
                {`${index + 1}. ${sentence}`}
              </motion.p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
