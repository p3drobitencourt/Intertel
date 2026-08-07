import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, User, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startOnboarding = () => {
    window.open("https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0", "_blank", "noopener,noreferrer");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md py-2' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center bg-transparent focus:outline-none" id="nav-logo">
          <img src="/logo-principal.png" alt="Intertel Telecom" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-sm font-semibold z-50">
          <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2">
            Início
          </Link>
          
          {/* Planos Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors py-2 cursor-pointer select-none">
              Planos Residenciais <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <Link to="/fibra" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors">
                  Planos Fibra
                </Link>
                <Link to="/radio" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors">
                  Planos Rádio
                </Link>
              </div>
            </div>
          </div>

          {/* Empresas Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors py-2 cursor-pointer select-none">
              Para Empresas <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <Link to="/empresas" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors">
                  Planos Empresariais
                </Link>
                <Link to="/dedicado" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors">
                  Link Dedicado (Provedores)
                </Link>
                <Link to="/lan2lan" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors">
                  Interligação LAN-to-LAN
                </Link>
              </div>
            </div>
          </div>

          <Link to="/#vantagens" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 hidden lg:block">
            Vantagens
          </Link>
          <Link to="/app" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 hidden lg:block">
            App Intertel
          </Link>
          <Link to="/#faq" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 hidden xl:block">
            FAQ
          </Link>
          <Link to="/#contato" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 font-semibold text-amber-500">
            Contato
          </Link>
        </nav>

        {/* Customer Portal CTA Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://intertel.sgplocal.com.br/accounts/central/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 h-11 text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] transition-all duration-300 hover:-translate-y-1"
            id="btn-customer-area"
          >
            <User className="w-4 h-4" />
            Área do Cliente
          </a>
          <a
            href="/contrato"
            className="flex items-center gap-2 px-5 h-11 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
          >
            Contrato Padrão
          </a>
          <button
            onClick={() => startOnboarding()}
            className="flex items-center gap-2 px-5 h-11 text-[11px] font-bold uppercase tracking-wider text-white dark:text-slate-900 bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-full shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
            id="btn-nav-hire"
          >
            <Phone className="w-4 h-4" />
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
              <button onClick={() => { setIsMobileMenuOpen(false); startOnboarding(); }} className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white dark:text-slate-900 bg-blue-950 dark:bg-amber-500 rounded-xl shadow-md">
                <Phone className="w-5 h-5" /> Assinar Já
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
