import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Empresas from './pages/Empresas';
import Dedicado from './pages/Dedicado';
import Lan2Lan from './pages/Lan2Lan';

export default function App() {
  const location = useLocation();

  // Scroll to hash on page load or navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure the element is rendered and the page is ready
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-slate-900 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900 dark:text-white">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fibra" element={<Home />} />
          <Route path="/radio" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/dedicado" element={<Dedicado />} />
          <Route path="/lan2lan" element={<Lan2Lan />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
