import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { startOnboarding } from '../../utils/whatsapp';
import { Menu, X, Phone, User } from 'lucide-react';

export default function BusinessHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md py-2' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/empresas" className="flex items-center justify-start bg-transparent focus:outline-none shrink-0 overflow-hidden h-20 md:h-24" id="nav-logo-business">
          <img src="/logo-principal.png" alt="Intertel Telecom B2B" className="h-10 md:h-12 lg:h-14 w-auto max-w-none object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-slate-900 dark:p-1.5 dark:rounded-xl" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 lg:gap-6 text-sm font-semibold z-50 whitespace-nowrap">
          <Link to="/empresas" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
            Planos Empresariais
          </Link>
          <Link to="/dedicado" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
            Link Dedicado
          </Link>
          <Link to="/lan2lan" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
            LAN-to-LAN
          </Link>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>
          
          <Link to="/" className="flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors py-2">
            ← Voltar para Para Você (Residencial)
          </Link>
        </nav>

        {/* Customer Portal CTA Right */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://intertel.sgplocal.com.br/accounts/central/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 h-11 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] transition-all duration-300 hover:-translate-y-1"
            id="btn-customer-area"
          >
            <User className="w-5 h-5" />
            Central
          </a>
          <button
            onClick={() => startOnboarding()}
            className="flex items-center gap-2 px-6 h-11 text-xs font-bold uppercase tracking-wider text-white dark:text-slate-900 bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-full shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500"
            id="btn-nav-hire"
          >
            <Phone className="w-5 h-5" />
            Falar com consultor
          </button>
        </div>

        {/* Mobile Sandwich Button */}
        <div className="lg:hidden flex items-center gap-3">
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
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
            <Link to="/empresas" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Empresariais</Link>
            <Link to="/dedicado" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Link Dedicado (Provedores)</Link>
            <Link to="/lan2lan" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Interligação LAN-to-LAN</Link>
            
            <div className="h-px bg-slate-200 dark:bg-slate-700 my-1 mx-4" />
            
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              ← Voltar para Para Você (Residencial)
            </Link>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a href="https://intertel.sgplocal.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl transition-all">
                <User className="w-5 h-5" /> Área do Cliente
              </a>
              <button onClick={() => { setIsMobileMenuOpen(false); startOnboarding(); }} className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white dark:text-slate-900 bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-xl shadow-md active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-amber-500">
                <Phone className="w-5 h-5" /> Falar com consultor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
