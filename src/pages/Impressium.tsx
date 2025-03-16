
import './Impressum.css'; // Создаем отдельный CSS для Impressum, если нужно

const Impressium = () => {
  return (
    <div className="flex bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
      {/* Внутренний контейнер с фоном bg-gray-900, без ховер эффекта */}
      <div
        className="w-full p-8 flex flex-col justify-center space-y-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-xl"
        style={{
          background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)',
        }}
      >
        {/* Заголовок страницы */}
        <h2 className="text-4xl font-semibold text-center text-gradient">Impressum</h2>

        {/* Контактная информация */}
        <div className="space-y-4">
          <p className="text-2xl">
            <strong>Hanse-Fliesenleger</strong>
            <br />
            Clemens-Schulz-Straße 29
            <br />
            Deutschland
          </p>
          <p className="text-2xl">
            <strong>Telefon:</strong> +49 157 81461757
          </p>
          <p className="text-2xl">
            <strong>E-Mail:</strong> [wird noch ergänzt]
          </p>
          <p className="text-2xl">
            <strong>St.Nr.:</strong> 43/762/02386
          </p>
          <p className="text-2xl">
            <strong>HRB:</strong> 187350
          </p>
        </div>

        {/* Раздел с правовыми пунктами */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">Haftungsausschluss:</h3>
          <p className="text-xl">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>

          <h3 className="text-2xl font-semibold mt-4">Urheberrecht:</h3>
          <p className="text-xl">
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressium;
