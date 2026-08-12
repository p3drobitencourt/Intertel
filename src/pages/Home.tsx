import React, { useState, useEffect, ReactNode } from "react";
import { startOnboarding } from "../utils/whatsapp";
import { useLocation } from "react-router-dom";
import SEO from "../components/layout/SEO";

// Import Extracted Sections
import MarqueeBanner from "../components/home/MarqueeBanner";
import HeroSection from "../components/home/HeroSection";
import AppPromoSection from "../components/home/AppPromoSection";
import VantagensSection from "../components/home/VantagensSection";
import FaqSection from "../components/home/FaqSection";
import SobreSection from "../components/home/SobreSection";
import ContatoSection from "../components/home/ContatoSection";

// Plans Data
interface Sva {
  name: string;
  icon: ReactNode;
  bg: string;
  linkApple?: string;
  linkAndroid?: string;
}

interface Plan {
  id: string;
  name: string;
  speed: string;
  priceMonthly: number;
  priceYearlyMonthly: number;
  isPopular: boolean;
  features: string[];
  svas: Sva[];
  description: string;
}

export const BebancaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
    <rect width="100" height="100" rx="20" fill="#facc15" />
    <rect x="25" y="25" width="35" height="15" fill="white" />
    <path d="M65 25 L80 32.5 L65 40 Z" fill="white" />
    <rect x="25" y="50" width="50" height="10" fill="white" />
    <rect x="25" y="65" width="50" height="10" fill="white" />
  </svg>
);

export const BeeducaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
    <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#334155" />
    <polygon points="50,25 70,35 50,45 30,35" fill="#10b981" />
    <polyline points="25,48 50,60 75,48" fill="none" stroke="#facc15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="25,68 50,80 75,68" fill="none" stroke="#facc15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M72 45 L72 65" stroke="#334155" strokeWidth="4" />
    <circle cx="72" cy="70" r="5" fill="#334155" />
  </svg>
);

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

export const bebancaSva: Sva = {
  name: "Bebanca",
  icon: <BebancaIcon />,
  bg: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30",
  linkApple: "https://apps.apple.com/br/app/bebanca/id1349933503",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca"
};

export const beducaSva: Sva = {
  name: "Beduca",
  icon: <BeeducaIcon />,
  bg: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
  linkApple: "https://apps.apple.com/br/app/beeduca/id6477542668",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca.ensina"
};

export const radioPlansData: Plan[] = [
  {
    id: "plan-radio-10m",
    name: "Plano Rádio 10M",
    speed: "10 Mega",
    priceMonthly: 69.90,
    priceYearlyMonthly: 69.90,
    isPopular: false,
    description: "Conexão de entrada via rádio para regiões rurais.",
    features: [
      "Velocidade de Download: 10 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-radio-15m",
    name: "Plano Rádio 15M",
    speed: "15 Mega",
    priceMonthly: 89.90,
    priceYearlyMonthly: 89.90,
    isPopular: true,
    description: "Ideal para navegação diária e redes sociais em áreas rurais.",
    features: [
      "Velocidade de Download: 15 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-radio-20m",
    name: "Plano Rádio 20M",
    speed: "20 Mega",
    priceMonthly: 109.90,
    priceYearlyMonthly: 109.90,
    isPopular: false,
    description: "Máxima performance via rádio.",
    features: [
      "Velocidade de Download: 20 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  }
];

export const plansData: Plan[] = [
  {
    id: "plan-300m",
    name: "Plano Conexão Inicial",
    speed: "300 Mega",
    priceMonthly: 79.90,
    priceYearlyMonthly: 79.90,
    isPopular: false,
    description: "Ideal para navegação diária, redes sociais e streaming em qualidade padrão.",
    features: [
      "Velocidade de Download: 300 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Digital",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-500m",
    name: "Plano Conexão Família",
    speed: "500 Mega",
    priceMonthly: 89.90,
    priceYearlyMonthly: 89.90,
    isPopular: false,
    description: "Perfeito para múltiplos dispositivos, home office e streaming em HD para toda a família.",
    features: [
      "Velocidade de Download: 500 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Premium",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-600m",
    name: "Plano Ultra Performance",
    speed: "600 Mega",
    priceMonthly: 99.90,
    priceYearlyMonthly: 99.90,
    isPopular: true,
    description: "A melhor experiência para alta demanda, jogos online estáveis e streaming 4K.",
    features: [
      "Velocidade de Download: 600 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Prioritário",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-900m",
    name: "Plano Gamer",
    speed: "900 Mega",
    priceMonthly: 119.90,
    priceYearlyMonthly: 119.90,
    isPopular: false,
    description: "Desempenho máximo para gamers, baixa latência e streaming 4K/8K sem interrupções.",
    features: [
      "Velocidade de Download: 900 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Prioritário",
    ],
    svas: [bebancaSva, beducaSva]
  }
];

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
      
      {/* CTA Final da Home */}
      <section className="py-16 md:py-20 bg-blue-950 dark:bg-slate-950">
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
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              Falar com especialista
            </button>
          </div>
        </div>
      </section>

      {/* Local SEO Section - Área de Atendimento */}
      <section className="py-12 bg-zinc-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Área de Atendimento</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            Atendemos clientes residenciais e empresariais em localidades selecionadas da região, incluindo <strong>São João da Mata</strong>, <strong>Carvalhópolis</strong>, <strong>Paiolinho</strong>, <strong>Turvolândia</strong> e <strong>Machado (área rural)</strong>, mediante disponibilidade técnica.
          </p>
        </div>
      </section>

      <ContatoSection />
    </>
  );
}
