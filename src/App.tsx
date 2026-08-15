import React, { useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import BusinessLayout from './components/layout/BusinessLayout';
import Home from './pages/Home';
import { plansData, radioPlansData, bebancaSva, beducaSva } from './data/plans';
import { startOnboarding } from './utils/whatsapp';

const Empresas = lazy(() => import('./pages/Empresas'));
const Dedicado = lazy(() => import('./pages/Dedicado'));
const Lan2Lan = lazy(() => import('./pages/Lan2Lan'));
const Fibra = lazy(() => import('./pages/Fibra'));
const Radio = lazy(() => import('./pages/Radio'));
const AppPage = lazy(() => import('./pages/AppPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Contrato = lazy(() => import('./pages/Contrato'));

export default function App() {
  const location = useLocation();

  // Scroll to hash on page load or navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure the element is rendered and the page is ready
        const timeout = setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
        return () => clearTimeout(timeout);
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
          <Route path="/contrato" element={<Contrato />} />
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
