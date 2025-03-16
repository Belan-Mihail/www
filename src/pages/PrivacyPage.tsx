
import './Impressum.css'; // Создаем отдельный CSS для Impressum, если нужно

const PrivacyPage = () => {
  return (
    <div className=" flex bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
      {/* Внутренний контейнер с фоном bg-gray-900, без ховер эффекта */}
      <div
        className="w-full p-8 flex flex-col justify-center space-y-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-xl"
        style={{
          background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)',
        }}
      >
        {/* Заголовок страницы */}
        <h2 className="text-4xl font-semibold text-center text-gradient">Datenschutzerklärung</h2>

        {/* Раздел 1 - Allgemeine Hinweise */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">1. Allgemeine Hinweise</h3>
          <p className="text-xl">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>

        {/* Раздел 2 - Verantwortliche Stelle */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">2. Verantwortliche Stelle</h3>
          <p className="text-xl">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-2xl">
            <strong>Hanse-Fliesenleger</strong><br />
            Clemens-Schulz-Straße 29<br />
            +49 157 81461757<br />
            E-Mail: [wird noch ergänzt]
          </p>
        </div>

        {/* Раздел 3 - Erhebung und Verarbeitung personenbezogener Daten */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
          <p className="text-xl">
            Wir erheben und verarbeiten Ihre personenbezogenen Daten nur, soweit dies erforderlich ist, um Ihnen unsere Website und Dienstleistungen bereitzustellen. Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können.
          </p>
        </div>

        {/* Раздел 4 - Zwecke der Datenverarbeitung */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">4. Zwecke der Datenverarbeitung</h3>
          <ul className="list-disc pl-5 text-xl space-y-2">
            <li>Zur Bereitstellung und Optimierung unserer Website</li>
            <li>Zur Bearbeitung von Anfragen und Aufträgen</li>
            <li>Zur Erfüllung gesetzlicher Verpflichtungen</li>
            <li>Für Marketingzwecke (nur mit Ihrer Einwilligung)</li>
          </ul>
        </div>

        {/* Раздел 5 - Cookies */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">5. Cookies</h3>
          <p className="text-xl">
            Unsere Website verwendet Cookies, um bestimmte Funktionen bereitzustellen und die Nutzererfahrung zu verbessern. Sie können die Speicherung von Cookies in den Browsereinstellungen einschränken oder deaktivieren.
          </p>
        </div>

        {/* Раздел 6 - Weitergabe von Daten an Dritte */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">6. Weitergabe von Daten an Dritte</h3>
          <p className="text-xl">
            Eine Weitergabe Ihrer Daten erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben.
          </p>
        </div>

        {/* Раздел 7 - Speicherdauer */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">7. Speicherdauer</h3>
          <p className="text-xl">
            Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
          </p>
        </div>

        {/* Раздел 8 - Ihre Rechte */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">8. Ihre Rechte</h3>
          <ul className="list-disc pl-5 text-xl space-y-2">
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung oder Einschränkung der Verarbeitung Ihrer Daten</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
            <li>Datentransfer (sofern anwendbar)</li>
          </ul>
          <p className="text-xl">
            Zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren.
          </p>
        </div>

        {/* Раздел 9 - Änderungen der Datenschutzerklärung */}
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold">9. Änderungen der Datenschutzerklärung</h3>
          <p className="text-xl">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche Anforderungen oder neue Funktionen unserer Website anzupassen. Bitte informieren Sie sich regelmäßig über den aktuellen Stand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
