import React, { useState, useEffect, useRef, FormEvent, ReactNode } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Radio from "./pages/Radio";
import Fibra from "./pages/Fibra";
import EmpresasPage from "./pages/Empresas";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Menu,
  ArrowRight,
  Search,
  Phone,
  Shield,
  Wifi,
  Tv,
  Cpu,
  Layers,
  Zap,
  Smartphone,
  MessageSquare,
  Clock,
  Globe,
  Building,
  Star,
  User,
  MapPin,
  CreditCard,
  Lock,
  FileText,
  Headphones,
  Send,
  HeartPulse,
  Sparkles,
  Briefcase,
  Share2,
  Mail,
  Instagram,
  Sun,
  Moon,
  BookOpen,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

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

const bebancaSva: Sva = {
  name: "Bebanca",
  icon: <BebancaIcon />,
  bg: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30",
  linkApple: "https://apps.apple.com/br/app/bebanca/id1349933503",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca"
};

const beducaSva: Sva = {
  name: "Beduca",
  icon: <BeeducaIcon />,
  bg: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
  linkApple: "https://apps.apple.com/br/app/beeduca/id6477542668",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca.ensina"
};

const radioPlansData: Plan[] = [
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

const plansData: Plan[] = [
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
    name: "Plano Gammer",
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

import Dedicado from "./pages/Dedicado";
import Lan2Lan from "./pages/Lan2Lan";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isEmpresas = location.pathname === "/empresas" || location.pathname === "/dedicado" || location.pathname === "/lan2lan";
  // Navigation & UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [planType, setPlanType] = useState<"fibra" | "radio">("fibra");

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero Carousel State
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: "Planos que\n",
      titleHighlight: "combinam com você.",
      subtitle: "A melhor conexão 100% fibra ótica com estabilidade e velocidade garantidas para a sua casa ou família.",
      badge: "CONEXÃO RESIDENCIAL",
      imageLight: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", // Glowing network / tech
      imageDark: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "Consultar Planos",
      type: "residential"
    },
    {
      title: "Baixe\n",
      titleHighlight: "nosso APP",
      subtitle: "e pague com mais facilidade. Tenha o controle da sua internet na palma da mão.",
      badge: "COMODIDADE #feitapravc",
      imageLight: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Sleek screen data
      imageDark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "",
      type: "app"
    },
    {
      title: "Soluções\n",
      titleHighlight: "Corporativas",
      subtitle: "IP Dedicado, Suporte Especializado e Monitoramento Proativo que não deixam sua empresa parar.",
      badge: "ALTA PERFORMANCE",
      imageLight: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop", // Datacenter
      imageDark: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "Falar com Consultor",
      type: "corporate"
    }
  ];

  const nextSlide = () => setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  // Interactive Smartphone App Showcase States
  const [activeAppTab, setActiveAppTab] = useState<"invoice" | "support" | "speed">("invoice");

  // Active FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Corporate Lead Form States

  // Plans Tab State

  const appScreenshots = [
    "/app-tela1.png",
    "/app-tela2.png",
    "/app-tela3.png"
  ];


  // Open WhatsApp Onboarding Chat
  const startOnboarding = (plan: Plan | null = null, cepCode?: string) => {
    window.open("https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0", "_blank", "noopener,noreferrer");
  };

  // Handle B2B Submission
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">

      {/* BACKGROUND FIBER OVERLAY GLOWS */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-900/15 via-purple-900/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* 1. STICKY NAVBAR */}
      {!isEmpresas && (
        <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md py-2' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center justify-center bg-transparent group focus:outline-none transition-all duration-300" id="nav-logo">
              <img src="/logo-principal.png" alt="Intertel Telecom" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-4 text-sm font-semibold z-50">
              <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
                Início
              </Link>
              {/* Planos Dropdown */}
              <details className="relative group">
                <summary className="list-none flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 cursor-pointer [&::-webkit-details-marker]:hidden select-none">
                  Planos <ChevronDown className="w-5 h-5 opacity-70 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                  <Link to="/fibra" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Planos Fibra
                  </Link>
                  <Link to="/radio" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Planos Rádio
                  </Link>
                </div>
              </details>

              {/* Soluções Corporativas Dropdown */}
              <details className="relative group">
                <summary className="list-none flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 cursor-pointer [&::-webkit-details-marker]:hidden select-none">
                  Para Empresas <ChevronDown className="w-5 h-5 opacity-70 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                  <Link to="/empresas" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Planos Empresariais
                  </Link>
                  <Link to="/dedicado" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Link Dedicado (Provedores)
                  </Link>
                  <Link to="/lan2lan" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Interligação LAN-to-LAN
                  </Link>
                </div>
              </details>
              <Link to="/#vantagens" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 hidden lg:block">
                Vantagens
              </Link>
              <Link to="/app" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
                App Intertel
              </Link>
              <Link to="/#faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
                FAQ
              </Link>
              <Link to="/#contato" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 font-semibold text-amber-500 hover:text-amber-600">
                Contato
              </Link>
            </nav>

            {/* Customer Portal CTA Right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://intertel.sgplocal.com.br/accounts/central/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 h-11 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] transition-all duration-300 hover:-translate-y-1"
                id="btn-customer-area"
              >
                <User className="w-5 h-5" />
                2ª Via / Área do Cliente
              </a>
              <button
                onClick={() => startOnboarding(null)}
                className="flex items-center gap-2 px-6 h-11 text-xs font-bold uppercase tracking-wider text-white dark:text-slate-900 bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-full shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
                id="btn-nav-hire"
              >
                <Phone className="w-5 h-5" />
                Assinar Já
              </button>
            </div>

            {/* Mobile Sandwich Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-all"
                aria-label="Toggle Menu"
                id="btn-hamburger"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200">
              <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Início</Link>
                <Link to="/fibra" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Fibra</Link>
                <Link to="/radio" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Rádio</Link>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-1 mx-4" />
                <div className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Para Empresas</div>
                <Link to="/empresas" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Empresariais</Link>
                <Link to="/dedicado" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Link Dedicado (Provedores)</Link>
                <Link to="/lan2lan" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Interligação LAN-to-LAN</Link>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-1 mx-4" />
                <Link to="/#vantagens" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Vantagens</Link>
                <Link to="/app" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">App Intertel</Link>
                <Link to="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Perguntas Frequentes (FAQ)</Link>
                <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 rounded-xl transition-all">Contato</Link>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                  <a href="https://intertel.sgplocal.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <User className="w-5 h-5" /> Central do Assinante
                  </a>
                  <button onClick={() => { setIsMobileMenuOpen(false); startOnboarding(null); }} className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white dark:text-slate-900 bg-blue-950 dark:bg-amber-500 rounded-xl shadow-md">
                    <Phone className="w-5 h-5" /> Assinar Já
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      {/* Main Pages Content via React Router Location */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Static Centered Banner */}
            <div className="relative w-full bg-[#F4B000] border-b border-amber-500 py-3 z-30 shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center items-center text-slate-900 font-black tracking-[0.15em] uppercase text-[10px] sm:text-[11px] gap-x-3 sm:gap-x-4 gap-y-2 text-center">
                  <span>100% FIBRA ÓPTICA</span>
                  <span className="hidden sm:inline">•</span>
                  <span>INSTALAÇÃO GRATUITA</span>
                  <span className="hidden sm:inline">•</span>
                  <span>WI-FI GRÁTIS EM COMODATO</span>
                  <span className="hidden md:inline">•</span>
                  <span>SIMETRIA ABSOLUTA DE BANDA</span>
                  <span className="hidden sm:inline">•</span>
                  <span>SUPORTE HUMANIZADO</span>
                </div>
              </div>
            </div>

            {/* 2. HERO SECTION (CAROUSEL) */}
            <section className="relative w-full min-h-[50vh] lg:min-h-[380px] xl:min-h-[420px] flex flex-col justify-center overflow-hidden bg-blue-950 group" id="hero-section">

              {heroSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${heroSlide === idx ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={isDarkMode ? slide.imageDark : slide.imageLight}
                      alt={slide.titleHighlight}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F4B000] via-[#F4B000]/80 to-transparent dark:from-blue-950 dark:via-blue-950/80 dark:to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-30 flex flex-col lg:flex-row items-center justify-between">

                    {/* Text Content */}
                    <div className={`w-full ${slide.type === 'app' ? 'lg:w-1/2' : 'lg:w-2/3'} space-y-5 lg:space-y-6 text-left py-6 lg:py-0`}>
                      {slide.badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-blue-950/10 border border-blue-950/20 text-blue-950 dark:bg-white/10 dark:border-white/20 dark:text-white backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                          <Sparkles className="w-5 h-5 text-blue-950 dark:text-amber-500" />
                          {slide.badge}
                        </div>
                      )}

                      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black font-display tracking-tight leading-[1.1] drop-shadow-sm dark:drop-shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 ${slide.textClass}`}>
                        {slide.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== slide.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                        <span className={`${slide.highlightClass} block mt-2`}>{slide.titleHighlight}</span>
                      </h1>

                      {slide.subtitle && (
                        <p className={`text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-sm dark:drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ${slide.textClass === 'text-white' || slide.textClass === 'text-slate-900 dark:text-white' ? 'text-slate-700 dark:text-slate-200' : slide.textClass}`}>
                          {slide.subtitle}
                        </p>
                      )}

                      {/* CTAs */}
                      <div className="pt-4 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full">
                        {slide.ctaText && (
                          <form
                            className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
                            onSubmit={(e) => {
                              e.preventDefault();
                              navigate("/fibra");
                            }}
                          >
                            <div className="relative flex-grow">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                              <input
                                type="text"
                                placeholder="Digite seu CEP para consultar cobertura"
                                className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-white/20 dark:border-slate-700 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white font-semibold focus:outline-none focus:border-[#F4B000] dark:focus:border-[#F4B000] transition-colors shadow-lg placeholder:text-slate-500 text-base"
                                maxLength={9}
                                onChange={(e) => {
                                  let value = e.target.value.replace(/\D/g, '');
                                  if (value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
                                  e.target.value = value;
                                }}
                              />
                            </div>
                            <button
                              type="submit"
                              className="h-14 px-8 rounded-full bg-[#F4B000] hover:bg-amber-400 text-slate-900 font-black tracking-wide uppercase text-sm shadow-[0_0_20px_rgba(244,176,0,0.3)] hover:shadow-[0_0_30px_rgba(244,176,0,0.5)] transition-all hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2"
                            >
                              <Search className="w-5 h-5" />
                              Consultar Cobertura
                            </button>
                          </form>
                        )}

                        {slide.type === 'app' && (
                          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-950 px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                              <svg className="w-8 h-8 fill-blue-950 shrink-0" viewBox="0 0 512 512">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                              </svg>
                              <div className="text-left leading-tight mt-0.5">
                                <p className="text-[10px] font-bold text-blue-950/70 uppercase tracking-widest mb-0.5">Baixar no</p>
                                <p className="text-base font-black tracking-tight text-blue-950">Google Play</p>
                              </div>
                            </a>
                            <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-950 px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                              <svg className="w-8 h-8 fill-blue-950 shrink-0" viewBox="0 0 384 512">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                              </svg>
                              <div className="text-left leading-tight mt-0.5">
                                <p className="text-[10px] font-bold text-blue-950/70 uppercase tracking-widest mb-0.5">Baixar na</p>
                                <p className="text-base font-black tracking-tight text-blue-950">App Store</p>
                              </div>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Optional Right Side Content (App Preview) */}
                    {slide.type === 'app' && (
                      <div className="w-full lg:w-1/2 h-full items-center justify-center lg:justify-end hidden sm:flex pt-10 lg:pt-0 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                        {/* Removed broken app-preview.png as background image already has a phone */}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="absolute inset-x-0 bottom-8 z-40 flex justify-center items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-slate-900/10 hover:bg-slate-900/30 backdrop-blur-md flex items-center justify-center text-slate-900 dark:text-white transition-colors border border-slate-900/20 dark:border-white/20 opacity-0 group-hover:opacity-100 hidden sm:flex"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="flex gap-3 bg-white/40 dark:bg-slate-900/50 backdrop-blur-md px-5 py-3 rounded-full border border-white/50 dark:border-white/10 shadow-lg">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroSlide(idx)}
                      className={`transition-all duration-300 rounded-full shadow-sm ${heroSlide === idx ? 'bg-blue-950 dark:bg-amber-500 w-12 h-3' : 'bg-blue-950/40 hover:bg-blue-950/60 dark:bg-white/40 dark:hover:bg-white/80 w-3 h-3'}`}
                      aria-label={`Ir para slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-slate-900/10 hover:bg-slate-900/30 backdrop-blur-md flex items-center justify-center text-slate-900 dark:text-white transition-colors border border-slate-900/20 dark:border-white/20 opacity-0 group-hover:opacity-100 hidden sm:flex"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </section>



            {/* 5. APP PROMO SECTION (Portal do Assinante) */}
            <section className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32 relative z-10 overflow-hidden" id="app-promo">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                  {/* Left Column: Value Proposition */}
                  <div className="space-y-8 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                      <Smartphone className="w-4 h-4" />
                      App Intertel
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight font-display tracking-tight">
                      Resolva tudo sem precisar ligar no suporte.
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      Sua conexão na palma da mão. Com o app Intertel Telecom, você tem total autonomia para gerenciar sua internet. Pague faturas com PIX, acompanhe seu consumo diário e utilize o recurso de promessa de pagamento para liberar sua conexão em um clique.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300"
                      >
                        <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 512 512">
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                        </svg>
                        <div className="text-left leading-none">
                          <p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Disponível no</p>
                          <p className="text-base font-bold">Google Play</p>
                        </div>
                      </a>
                      <a
                        href="https://apps.apple.com/br/app/intertel-telecom/id1618099722"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300"
                      >
                        <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 384 512">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                        </svg>
                        <div className="text-left leading-none">
                          <p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Baixar na</p>
                          <p className="text-base font-bold">App Store</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: App Assets overlapping layout */}
                  <div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center">
                    {/* Decorative background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

                    {/* Image 1: Fatura/Pix (Back/Slightly lower right) */}
                    <img
                      src="./appfatura.png"
                      alt="Pagamento de Fatura via PIX"
                      loading="lazy"
                      className="absolute right-0 sm:right-4 top-1/4 w-44 sm:w-56 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-slate-800 dark:border-slate-700 rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10"
                    />

                    {/* Image 2: Inicio (Front/Slightly higher left) */}
                    <img
                      src="./appinicio.png"
                      alt="Dashboard Principal do App"
                      loading="lazy"
                      className="absolute left-0 sm:left-4 bottom-1/4 w-48 sm:w-64 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-slate-900 dark:border-slate-800 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20"
                    />
                  </div>

                </div>
              </div>
            </section>

            {/* ADDITIONAL BENEFITS SECTION: WHY INTERTEL? (Vantagens) */}
            <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 border-t border-slate-200 relative z-10" id="vantagens">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
                  <h2 className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] font-bold">VANTAGENS EXCLUSIVAS</h2>
                  <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                    Por que a Intertel é uma boa escolha?
                  </h1>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    Desenvolvemos conexões pensando em desempenho bruto, estabilidade e a melhor experiência para você.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Simetria Absoluta de Banda</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Navegue com velocidade idêntica tanto para downloads quanto para uploads. Envie arquivos pesados, faça lives em 4K e reuniões virtuais sem nenhuma perda de qualidade.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
                      <Wifi className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Equipamentos Wi-Fi Grátis</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      A empresa garante o uso em comodato durante todo o período que o cliente está com nossa empresa garantindo maior estabilidade, alcance ampliado e muito mais dispositivos conectados simultaneamente sem travamentos.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
                      <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Rede 100% Fibra Óptica</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Sua conexão vai da nossa central direto para dentro da sua casa, sem interferências externas, garantindo o máximo de velocidade, baixíssima latência para jogos e altíssima confiabilidade.
                    </p>
                  </div>

                </div>

                {/* Testimonial Section */}
                <div className="mt-6 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-sm">
                  <div className="relative shrink-0">
                    <img
                      src="https://picsum.photos/seed/interteluser/160/160"
                      alt="Foto de Cliente da Intertel"
                      className="w-24 h-24 rounded-full border-4 border-slate-300 object-cover shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg text-slate-950">
                      <Star className="w-5 h-5 text-slate-900 dark:text-white fill-slate-950" />
                    </div>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed">
                      "Contratei o plano de 700 Mega da Intertel Telecom e estou impressionado. A latência para jogos competitivos reduziu para menos de 5ms e nunca mais tive quedas de conexão trabalhando em home office. O roteador Wi-Fi cobre meu apartamento inteiro!"
                    </blockquote>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">Rodrigo Mendes Salles</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Desenvolvedor Sênior - São João da Mata, MG</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQ SECTION (PERGUNTA FREQUENTES - ACCORDION) */}
            <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 relative z-10" id="faq">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
                  <h2 className="text-xs font-mono text-blue-600 dark:text-blue-400 dark:text-blue-500 dark:text-blue-400 uppercase tracking-[0.25em] font-bold">DÚVIDAS FREQUENTES</h2>
                  <h1 className="text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                    FAQ Intertel • Tire Suas Dúvidas
                  </h1>
                  <p className="text-slate-600 dark:text-slate-200 text-sm">
                    As principais perguntas dos nossos assinantes resolvidas de forma rápida e clara.
                  </p>
                </div>

                {/* Interactive Accordion */}
                <div className="space-y-4">

                  {[
                    {
                      q: "A instalação da internet é realmente gratuita?",
                      a: "Sim, absolutamente! A Intertel Telecom oferece instalação e ativação 100% gratuita para todas as contratações residenciais, independentemente do plano selecionado. Nossa equipe cuida de toda a fiação externa e configuração interna sem custo adicional."
                    },
                    {
                      q: "O que significa 'Equipamentos Wi-Fi Grátis em Comodato'?",
                      a: "O regime de comodato significa que a Intertel empresta o roteador Wi-Fi (incluindo tecnologia de ponta) para você usar gratuitamente durante todo o período em que for nosso cliente. Não há nenhuma taxa de aluguel ou custo adicional pelo equipamento. Ao cancelar o serviço, basta devolver o aparelho."
                    },
                    {
                      q: "Como funciona a Simetria Absoluta de Banda?",
                      a: "Simetria absoluta significa que você terá a mesma velocidade para Download (baixar arquivos, assistir vídeos) e Upload (enviar arquivos, fazer vídeo-chamadas, lives). Isso garante uma experiência de navegação muito mais rápida e estável, sem gargalos na hora de enviar conteúdos para a internet."
                    },
                    {
                      q: "A rede é realmente 100% Fibra Óptica?",
                      a: "Sim! Nossa rede é 100% fibra óptica de ponta a ponta (FTTH - Fiber to the Home). Isso significa que a fibra óptica vai da nossa central diretamente para dentro da sua casa, sem passar por cabos de cobre antigos. Isso garante o máximo de velocidade, baixíssima latência para jogos online e imunidade a interferências elétricas e climáticas."
                    },
                    {
                      q: "Como funcionam os aplicativos de serviços inclusos (Bebanca e Beduca)?",
                      a: "Nossos planos acompanham o Bebanca (app de notícias e biblioteca de livros) e Beduca (vídeo aulas para aperfeiçoamento técnico). Para utilizá-los, basta baixar o aplicativo correspondente na sua loja de aplicativos, selecionar a Intertel Telecom como provedor e fazer o login utilizando o seu CPF."
                    },
                    {
                      q: "Existe alguma taxa oculta ou limite de franquia mensal?",
                      a: "Nenhum! Na Intertel você tem tráfego de dados verdadeiramente ilimitado, sem redução de velocidade ou franquia mensal. O preço contratado é exatamente o valor fixo cobrado em sua fatura mensal."
                    },
                    {
                      q: "Qual é o tempo médio para ativação e instalação física?",
                      a: "Após a consulta de viabilidade bem-sucedida e assinatura digital do contrato, nossa equipe técnica agenda e realiza a instalação em sua casa no prazo máximo de até 24 a 48 horas úteis."
                    }
                  ].map((item, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display">
                            {item.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-7 h-7 text-blue-500 dark:text-blue-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-7 h-7 text-slate-600 dark:text-slate-300 dark:text-slate-200 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 text-slate-600 dark:text-slate-200 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-4 animate-in fade-in slide-in-from-top-1">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}

                </div>

                {/* Quick FAQ CTA */}
                <div className="mt-6 text-center p-6 bg-slate-100/20 dark:bg-slate-900/20 rounded-2xl border border-slate-300 dark:border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Não encontrou a resposta que procurava?</h4>
                    <p className="text-slate-600 dark:text-slate-200 text-xs">Fale diretamente com nossa ouvidoria e equipe de suporte pelo WhatsApp.</p>
                  </div>
                  <button
                    onClick={() => startOnboarding(null)}
                    className="w-full sm:w-auto h-11 px-5 bg-zinc-50 dark:bg-slate-800 border border-slate-300 hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    Chamar no WhatsApp
                  </button>
                </div>

              </div>
            </section>

            {/* 5.5 SOBRE SECTION */}
            <section className="py-6 md:py-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 relative z-10" id="sobre">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
                  <div className="flex-1 space-y-5 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                      Sobre a <span className="text-blue-600 dark:text-blue-400 dark:text-blue-500 dark:text-blue-400">Intertel</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
                    <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      Fundada no ano de 2018 no Município de São João da Mata no sul de Minas Gerais, a Intertel Telecom é um provedor de internet que investe em inovação e tecnologia para levar a seus clientes conexão de internet com estabilidade e qualidade.
                    </p>
                    <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      Reconhecida como uma das melhores empresas de fornecimento de internet de sua região através da sua forma de trabalho, compromisso e comprometimento juntamente de um corpo técnico capacitado e bem treinado.
                    </p>
                  </div>

                  <div className="flex-1 w-full max-w-md lg:max-w-none">
                    <div className="relative p-8 bg-zinc-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 flex items-center justify-center aspect-[16/9] lg:aspect-auto lg:h-full">
                      <img 
                        src="/logo-principal.png" 
                        alt="Intertel Telecom Logo" 
                        loading="lazy" 
                        width="300" 
                        height="100" 
                        className="w-full h-auto max-w-[280px] object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-3 dark:rounded-xl dark:shadow-sm" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.6 ONDE ESTAMOS SECTION */}
            <section className="py-8 md:py-8 bg-zinc-50 dark:bg-slate-800 relative z-10" id="contato">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">Contato e Onde Estamos</h2>
                  <p className="text-slate-600 dark:text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
                    Venha nos visitar e conhecer de perto nossa infraestrutura ou fale conosco pelos canais abaixo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  <div className="col-span-1 space-y-6 flex flex-col">
                    <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
                      <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 shadow-sm">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Endereço Matriz</h3>
                      <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed">
                        Rua Maria Onilia Vieira, 249 - Centro<br />
                        São João da Mata - MG<br />
                        CEP: 37568-000, Brasil
                      </p>

                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mt-8 mb-3">Horário de Atendimento</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Callcenter</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">Segunda a Sábado: 08h às 20h</p>
                          <p className="text-slate-600 dark:text-slate-300 text-xs">Domingos e Feriados: 08h às 17h</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Presencial</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">Segunda a Sexta: 08h às 17h</p>

                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-5 text-amber-600 shadow-sm">
                        <Headphones className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Fale Conosco</h3>
                      <div className="space-y-3">
                        <p className="text-slate-600 dark:text-slate-200 text-sm flex items-start gap-2">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 shrink-0">WhatsApp:</span>
                          <a href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">(35) 99904-2885</a>
                        </p>
                        <p className="text-slate-600 dark:text-slate-200 text-sm flex items-start gap-2">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 shrink-0">Suporte:</span>
                          <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:noc@interteltelecom.net.br', '_blank'); }} className="text-blue-600 hover:underline break-all">noc@interteltelecom.net.br</a>
                        </p>
                        <p className="text-slate-600 dark:text-slate-200 text-sm flex items-start gap-2">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 shrink-0">Financeiro:</span>
                          <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:financeiro@interteltelecom.net.br', '_blank'); }} className="text-blue-600 hover:underline break-all">financeiro@interteltelecom.net.br</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex h-full">
                    <iframe
                      title="Mapa de Localização da Intertel Telecom"
                      src="https://maps.google.com/maps?q=Rua+Maria+Onilia+Vieira,+249,+S%C3%A3o+Jo%C3%A3o+da+Mata+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full min-h-[300px] rounded-2xl shadow-xl border-0 ring-1 ring-slate-900/5"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

          </>
        } />
        <Route path="/fibra" element={<Fibra plansData={plansData} billingCycle={billingCycle} startOnboarding={startOnboarding} bebancaSva={bebancaSva} beducaSva={beducaSva} />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/radio" element={<Radio radioPlansData={radioPlansData} billingCycle={billingCycle} startOnboarding={startOnboarding} />} />

        <Route path="/app" element={
          <section className="py-6 md:py-8 bg-white dark:bg-slate-900 relative z-10 min-h-[60vh] flex items-center" id="app-intertel">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img src="/icone-app.png" alt="App Minha Intertel" className="w-16 h-16 rounded-2xl shadow-lg" />
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                        <Smartphone className="w-5 h-5" /> App Minha Intertel
                      </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                      Sua conexão na <br className="hidden md:block" /> <span className="text-blue-600 dark:text-blue-400">palma da mão.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-lg leading-relaxed">
                      Gerencie sua internet de forma rápida, fácil e 100% digital. Baixe agora o <strong className="text-slate-900 dark:text-white">App Minha Intertel</strong> e tenha controle total.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-colors">
                      <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">2ª Via de Boletos</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Acesse suas faturas e pague direto do seu celular com segurança.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-colors">
                      <div className="w-16 h-16 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <Headphones className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Suporte Rápido</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Abra chamados técnicos e acompanhe o status em tempo real.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
                    <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-8 py-4.5 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      <svg className="w-8 h-8 fill-white shrink-0" viewBox="0 0 512 512">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                      </svg>
                      <div className="text-left leading-tight mt-0.5">
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-0.5">Baixar no</p>
                        <p className="text-base font-black tracking-tight text-white">Google Play</p>
                      </div>
                    </a>
                    <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-8 py-4.5 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      <svg className="w-8 h-8 fill-white shrink-0" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                      </svg>
                      <div className="text-left leading-tight mt-0.5">
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-0.5">Baixar na</p>
                        <p className="text-base font-black tracking-tight text-white">App Store</p>
                      </div>
                    </a>

                    <div className="hidden md:flex items-center gap-3 lg:ml-4 bg-white dark:bg-slate-800 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                      <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                        <img src="/qrcode.png" alt="QR Code App Intertel" className="w-14 h-14 object-contain" />
                      </div>
                      <div className="text-xs pr-2">
                        <p className="font-bold text-slate-800 dark:text-slate-200">Acesse Fácil</p>
                        <p className="text-slate-500 dark:text-slate-400">Escaneie o QR Code</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                      Como acessar seus benefícios
                    </h3>

                    <div className="space-y-3">
                      {/* Passo 1 */}
                      <div className="flex gap-4 items-start p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200 dark:border-blue-800">1</div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">Baixe o App</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Faça o download nas lojas oficiais clicando nos botões acima.</p>
                        </div>
                      </div>

                      {/* Passo 2 */}
                      <div className="flex gap-4 items-start p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200 dark:border-blue-800">2</div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">Faça Login</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">No campo de acesso, digite apenas o <strong className="text-slate-900 dark:text-slate-200">CPF do titular</strong> do plano.</p>
                        </div>
                      </div>

                      {/* Passo 3 */}
                      <div className="flex gap-4 items-start p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-[#F4B000] text-slate-900 flex items-center justify-center font-black text-lg shrink-0 shadow-lg shadow-amber-500/20 border border-amber-300">3</div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">Aproveite os serviços extras!</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                            Para acessar serviços como <a href={bebancaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mx-1 text-amber-600 dark:text-amber-500 font-bold hover:underline"><span className="w-3.5 h-3.5"><BebancaIcon /></span> Bebanca</a> e <a href={beducaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mx-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><span className="w-3.5 h-3.5"><BeeducaIcon /></span> Beduca</a>, selecione <strong>Intertel Telecom</strong> como provedor e use os mesmos dados.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 mt-8 md:mt-0">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full scale-75" />
                  <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-4 sm:gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
                      {[...appScreenshots, ...appScreenshots].map((src, idx) => (
                        <div key={idx} className="relative w-[140px] sm:w-[180px] shrink-0 hover:-translate-y-2 transition-transform duration-300">
                          <img
                            src={src}
                            alt={`Tela do App Intertel ${idx + 1}`}
                            className="w-full h-auto aspect-[9/19.5] rounded-[1.5rem] shadow-2xl border border-slate-200 dark:border-slate-700 object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        } />
        <Route path="/dedicado" element={<Dedicado />} />
        <Route path="/lan2lan" element={<Lan2Lan />} />
      </Routes>

      {/* 6. INSTITUTIONAL FOOTER */}
      {!isEmpresas && (
        <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-300 dark:border-slate-900/80 relative z-10 pt-8 pb-6 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-4 pb-6 border-b border-slate-300 dark:border-slate-900/80">

              {/* Footer Col 1: About */}
              <div className="lg:col-span-4 space-y-5">
                <Link to="/" className="inline-block hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300" aria-label="Home">
                  <img src="/logo-principal.png" alt="Intertel Telecom" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-1.5 dark:rounded-lg dark:shadow-sm" />
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Operadora de Telecomunicações mineira focada no fornecimento de internet em ultravelocidade 100% fibra óptica com tecnologia Wi-Fi e alta redundância. Conectando pessoas e corporações com solidez técnica.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-200">
                  <span>CNPJ: 30.607.069/0001-49</span>
                </div>
              </div>

              {/* Footer Col 2: Quick Links */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Ligações Rápidas</h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 dark:text-slate-200">
                  <li><Link to="/#sobre" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sobre a Intertel</Link></li>
                  <li><Link to="/fibra" className="hover:text-slate-900 dark:hover:text-white transition-colors">Planos Residenciais</Link></li>
                  <li><Link to="/empresas" className="hover:text-slate-900 dark:hover:text-white transition-colors">Intertel Empresas</Link></li>
                  <li><Link to="/#vantagens" className="hover:text-slate-900 dark:hover:text-white transition-colors">Nossas Vantagens</Link></li>
                  <li><Link to="/app" className="hover:text-slate-900 dark:hover:text-white transition-colors">Aplicativo Assinante</Link></li>
                </ul>
              </div>

              {/* Footer Col 3: Support / Ombudsperson */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Atendimento & Ouvidoria</h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Phone className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <div>
                      <p className="text-slate-600 dark:text-slate-200 font-bold">(35) 99904-2885</p>
                      <p className="text-[10px]">WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:noc@interteltelecom.net.br', '_blank'); }} className="text-slate-600 dark:text-slate-200 font-bold hover:text-blue-600 dark:hover:text-amber-400 hover:underline break-all">noc@interteltelecom.net.br</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:financeiro@interteltelecom.net.br', '_blank'); }} className="text-slate-600 dark:text-slate-200 font-bold hover:text-blue-600 dark:hover:text-amber-400 hover:underline break-all">financeiro@interteltelecom.net.br</a>
                      <p className="text-[10px]">E-mails</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <div>
                      <p className="text-slate-600 dark:text-slate-200">São João da Mata - MG</p>
                      <p className="text-[10px]">Rua Maria Onilia Vieira, 249, Centro</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Footer Col 4: Social / Institutional Logos */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Horário de Atendimento</h4>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Callcenter:</p>
                    <p>Seg a Sáb: 08h às 20h</p>
                    <p>Domingos e Feriados: 08h às 17h</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Presencial:</p>
                    <p>Seg a Sex: 08h às 17h</p>

                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 bg-zinc-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 w-fit hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group">
                    <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                      <img src="/qrcode.png" alt="QR Code App Intertel" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-xs pr-2">
                      <p className="font-bold text-slate-800 dark:text-slate-200">Fale no WhatsApp</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[10px]">Escaneie para iniciar chat</p>
                    </div>
                  </div>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-[#25D366] hover:text-white text-slate-600 dark:text-slate-300 dark:text-slate-200 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Institutional Transparency */}
          <div className="pt-8 pb-6 border-b border-slate-300 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Transparência Institucional</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Acesse nossos documentos públicos e contratos padrão aprovados pela ANATEL.</p>
            </div>
            <a
              href="contrato.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 font-bold transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <FileText className="w-5 h-5" />
              Visualizar Contrato Padrão
            </a>
          </div>

          {/* Legal Notice & Authour details */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-600 dark:text-slate-200 gap-4">
            <div>
              <p>© {new Date().getFullYear()} Intertel Telecom. Todos os direitos reservados.</p>
              <p className="mt-1">Regulamentado pela ANATEL • CNPJ: 30.607.069/0001-49 • São João da Mata, MG</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Políticas de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:underline">Contratos e Termos</a>
              <span>•</span>
              <a href="#" className="hover:underline">Ouvidoria ANATEL</a>
            </div>
          </div>

        </div>
        </div>
      </footer>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <Phone className="w-8 h-8 fill-current" />
      </a>

    </div>
  );
}

