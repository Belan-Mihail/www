import React from "react";
import { motion } from "framer-motion";

const ActionOrder: React.FC = () => {
  return (
    <div id="zusammenarbeit" className="bg-[#0f172a] text-white py-10 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Vorgang der Aktion</h2>

      {/* Контейнер для карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Первый квадратик */}
        <motion.div
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          transition={{
            duration: 0.5, // Время анимации
            delay: 0, // Задержка для первого квадратика
          }}
          className="flex flex-col items-center p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">📞</div>
          <h3 className="mt-4 text-lg font-semibold">Erster Kontakt</h3>
          <p className="text-center text-sm">Ihr Anruf, Anfrage, E-Mail</p>
        </motion.div>

        {/* Второй квадратик */}
        <motion.div
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          transition={{
            duration: 0.5, // Время анимации
            delay: 0.5, // Задержка 0.5 секунд для второго квадратика
          }}
          className="flex flex-col items-center p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">🗣️</div>
          <h3 className="mt-4 text-lg font-semibold text-center">Fachberatung und Vor-Ort-Besichtigung</h3>
          <p className="text-center text-sm">Klärung der Rahmenbedingungen und Erstellung eines Angebots</p>
        </motion.div>

        {/* Третий квадратик */}
        <motion.div
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          transition={{
            duration: 0.5, // Время анимации
            delay: 1, // Задержка 1 секунда для третьего квадратика
          }}
          className="flex flex-col items-center p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
        >
          <div className="icon text-4xl">📑</div>
          <h3 className="mt-4 text-lg font-semibold">Vertragsabschluss</h3>
          <p className="text-center text-sm">Beginn der Arbeiten</p>
        </motion.div>

        {/* Четвертый квадратик */}
        <motion.div
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0 }} // Начальный размер и прозрачность
          transition={{
            duration: 0.5, // Время анимации
            delay: 1.5, // Задержка 1.5 секунд для четвертого квадратика
          }}
          className="flex flex-col items-center p-6 border border-white rounded-lg shadow-lg bg-opacity-80 hover:bg-[#425174]"
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
