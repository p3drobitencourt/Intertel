import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import BusinessLayout from './components/layout/BusinessLayout';
import Home, { plansData, radioPlansData, bebancaSva, beducaSva } from './pages/Home';
import Empresas from './pages/Empresas';
import Dedicado from './pages/Dedicado';
import Lan2Lan from './pages/Lan2Lan';
import Fibra from './pages/Fibra';
import Radio from './pages/Radio';
import AppPage from './pages/AppPage';
import NotFound from './pages/NotFound';
import { startOnboarding } from './utils/whatsapp';

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
      <Routes>
        {/* B2C Layout (Main) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fibra" element={<Fibra plansData={plansData} billingCycle="monthly" startOnboarding={startOnboarding} bebancaSva={bebancaSva} beducaSva={beducaSva} />} />
          <Route path="/radio" element={<Radio radioPlansData={radioPlansData} billingCycle="monthly" startOnboarding={startOnboarding} />} />
          <Route path="/app" element={<AppPage />} />
        </Route>

        {/* B2B Layout (Business) */}
        <Route element={<BusinessLayout />}>
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/dedicado" element={<Dedicado />} />
          <Route path="/lan2lan" element={<Lan2Lan />} />
        </Route>
        
        {/* 404 Fallback */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
