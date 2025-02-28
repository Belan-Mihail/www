import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ActionOrder: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Секция появляется через 500ms после рендеринга
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500); // Появление секции через 500ms

    return () => clearTimeout(timeout); // Очищаем таймер при размонтировании
  }, []);

  return (
    <div className="bg-[#0f172a] text-white py-10 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Ablauf der Aktion</h2>

      <div className="flex justify-around gap-8">
        {/* Первый квадратик */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0, // Плавное увеличение до нормального размера
          }}
          transition={{
            delay: 0, // Для первого квадратика без задержки
            duration: 0.5, // Время анимации
          }}
          className="flex flex-col items-center w-1/4 p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">📞</div>
          <h3 className="mt-4 text-lg font-semibold">Erster Kontakt</h3>
          <p className="text-center text-sm">Ihr Anruf, Anfrage, E-Mail</p>
        </motion.div>

        {/* Второй квадратик */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0, // Плавное увеличение до нормального размера
          }}
          transition={{
            delay: 0.5, // Для второго квадратика задержка 0.5 секунд
            duration: 0.5, // Время анимации
          }}
          className="flex flex-col items-center w-1/4 p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">🗣️</div>
          <h3 className="mt-4 text-lg font-semibold">Beratung/Besuch des Spezialisten</h3>
          <p className="text-center text-sm">Besprechung der Bedingungen/Kostenschätzung</p>
        </motion.div>

        {/* Третий квадратик */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0, // Плавное увеличение до нормального размера
          }}
          transition={{
            delay: 1, // Для третьего квадратика задержка 1 секунда
            duration: 0.5, // Время анимации
          }}
          className="flex flex-col items-center w-1/4 p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">📑</div>
          <h3 className="mt-4 text-lg font-semibold">Vertragsabschluss</h3>
          <p className="text-center text-sm">Beginn der Arbeiten</p>
        </motion.div>

        {/* Четвертый квадратик */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0, // Плавное увеличение до нормального размера
          }}
          transition={{
            delay: 1.5, // Для четвертого квадратика задержка 1.5 секунды
            duration: 0.5, // Время анимации
          }}
          className="flex flex-col items-center w-1/4 p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">🏆</div>
          <h3 className="mt-4 text-lg font-semibold">Ergebnis</h3>
          <p className="text-center text-sm">Das Ihre Erwartungen übertrifft</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionOrder;
