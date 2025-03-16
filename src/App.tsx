import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import Impressium from './pages/Impressium';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressium />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
