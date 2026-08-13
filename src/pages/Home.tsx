import React, { useState, useEffect, ReactNode } from "react";
import { startOnboarding } from "../utils/whatsapp";
import { useLocation } from "react-router-dom";
import SEO from '../components/seo/SEO';

// Import Extracted Sections
import MarqueeBanner from "../components/home/MarqueeBanner";
import HeroSection from "../components/home/HeroSection";
import AppPromoSection from "../components/home/AppPromoSection";
import VantagensSection from "../components/home/VantagensSection";
import FaqSection from "../components/home/FaqSection";
import SobreSection from "../components/home/SobreSection";
import ContatoSection from "../components/home/ContatoSection";
import TestimonialSection from "../components/home/TestimonialSection";

// Plans Data
import { Plan, Sva, BebancaIcon, BeeducaIcon, bebancaSva, beducaSva, radioPlansData, plansData } from "../data/plans";

const IntertelAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="icon-gradient" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect width="100" height="100" rx="22" fill="url(#icon-gradient)" />
    <g filter="url(#shadow)">
      <ellipse cx="58" cy="24" rx="6" ry="12" transform="rotate(55 58 24)" fill="white" />
      <path d="M 74 42 C 60 56, 45 68, 35 78 C 28 85, 20 80, 26 70 C 35 52, 55 40, 70 38 C 74 37, 77 39, 74 42 Z" fill="white" />
    </g>
  </svg>
);

export default function Home() {
  const location = useLocation();

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to hash on page load or navigation
  // Apply Theme Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  // The startOnboarding function is now imported from utils/whatsapp

  return (
    <>
      <SEO 
        title="Intertel Telecom | Internet Fibra Óptica e Soluções B2B"
        description="Conecte-se com a melhor ultravelocidade de ponta a ponta. Tecnologia Wi-Fi 6, planos 100% fibra óptica e suporte premium especializado."
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Intertel Telecom",
          "url": "https://interteltelecom.net.br",
          "logo": "https://interteltelecom.net.br/icone-app.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-35-99904-2885",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Maria Onilia Vieira, 249 - Centro",
            "addressLocality": "São João da Mata",
            "addressRegion": "MG",
            "postalCode": "37568-000",
            "addressCountry": "BR"
          }
        }}
      />

      {/* BACKGROUND FIBER OVERLAY GLOWS */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-900/15 via-purple-900/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      
      <MarqueeBanner />
      <HeroSection isDarkMode={isDarkMode} />
      <AppPromoSection />
      <VantagensSection />
      <FaqSection onContactSupport={() => startOnboarding(null)} />
      <SobreSection />
      <TestimonialSection />
      
      {/* CTA Final da Home */}
      <section className="py-12 md:py-16 bg-blue-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white font-display mb-6">
            Acelere sua internet hoje mesmo
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Escolha a estabilidade que a sua casa ou empresa merece. Nossos especialistas estão prontos para ajudar você a escolher o plano ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => startOnboarding(null)}
              id="CTA_CONSULTAR_DISPONIBILIDADE_HOME"
              data-tracking="CTA_CONSULTAR_DISPONIBILIDADE"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              Consultar disponibilidade
            </button>
          </div>
        </div>
      </section>

      {/* Local SEO Section - Área de Atendimento */}
      <section className="py-12 bg-zinc-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Atendemos sua região</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[ 'São João da Mata', 'Carvalhópolis', 'Paiolinho', 'Turvolândia', 'Machado (área rural)' ].map((cidade) => (
              <div key={cidade} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">{cidade}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-xs mt-6 max-w-lg mx-auto">
            Consulte a disponibilidade exata na sua região com nossos especialistas. Nossa rede 100% fibra óptica ou via rádio está em constante expansão.
          </p>
        </div>
      </section>

      <ContatoSection />
    </>
  );
}
