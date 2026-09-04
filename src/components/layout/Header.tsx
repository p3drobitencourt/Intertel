import React, { useState, useEffect } from'react';
import { Link, useLocation } from'react-router-dom';
import { getWhatsappLink } from'../../utils/whatsapp';
import { ChevronDown, Menu, X, User, Phone } from'lucide-react';

export default function Header() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 const location = useLocation();

 const handleDropdownKeyDown = (e: React.KeyboardEvent, menu: string) => {
 if (e.key ==='Escape') {
 setActiveDropdown(null);
 const triggerButton = e.currentTarget.querySelector('button');
 if (triggerButton) (triggerButton as HTMLElement).focus();
 }
 };

 const handleMobileMenuKeyDown = (e: React.KeyboardEvent) => {
 if (e.key ==='Escape') {
 setIsMobileMenuOpen(false);
 document.getElementById('btn-hamburger')?.focus();
 return;
 }

 if (e.key ==='Tab') {
 const menu = e.currentTarget;
 const focusable = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
 if (focusable.length === 0) return;

 const first = focusable[0];
 const last = focusable[focusable.length - 1];

 if (e.shiftKey && document.activeElement === first) {
 last.focus();
 e.preventDefault();
 } else if (!e.shiftKey && document.activeElement === last) {
 first.focus();
 e.preventDefault();
 }
 }
 };

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-200 ${isScrolled ?'bg-white shadow-md py-2' :'bg-white shadow-sm'}`}>
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
 
 {/* Logo */}
 <Link to="/" className="flex items-center justify-start bg-transparent focus:outline-none shrink-0 h-14 md:h-16 w-36 md:w-48 relative overflow-hidden" id="nav-logo">
 <img src="/logo-ui.webp" alt="Intertel Telecom" width="400" height="400" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none h-auto object-contain mix-blend-multiply" />
 </Link>

 {/* Desktop Navigation Links */}
 <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-xs xl:text-[13px] font-semibold z-50 whitespace-nowrap">
 <>
 <Link to="/" className="text-slate-600 hover:text-amber-500 transition-colors py-2 font-medium">
 Início
 </Link>
 
 {/* Plano Residencial Dropdown */}
 <div 
 className="relative group"
 onMouseEnter={() => setActiveDropdown('residenciais')}
 onMouseLeave={() => setActiveDropdown(null)}
 onFocus={() => setActiveDropdown('residenciais')}
 onBlur={(e) => {
 if (!e.currentTarget.contains(e.relatedTarget)) {
 setActiveDropdown(null);
 }
 }}
 onKeyDown={(e) => handleDropdownKeyDown(e,'residenciais')}
 >
 <button 
 className="flex items-center gap-1 text-slate-600 hover:text-amber-500 focus:outline-none focus:text-amber-500 font-medium transition-colors py-2 cursor-pointer select-none"
 aria-haspopup="true"
 aria-expanded={activeDropdown ==='residenciais'}
 >
 Internet <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${activeDropdown ==='residenciais' ?'rotate-180' :''}`} aria-hidden="true" />
 </button>
 <div className={`absolute top-[100%] left-0 pt-2 transition-all z-50 ${activeDropdown ==='residenciais' ?'opacity-100 visible' :'opacity-0 invisible'}`}>
 <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
 <Link to="/fibra" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Internet Fibra
 </Link>
 <Link to="/radio" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Internet via Rádio
 </Link>
 </div>
 </div>
 </div>

 {/* Solucoes Dropdown */}
 <div 
 className="relative group"
 onMouseEnter={() => setActiveDropdown('solucoes')}
 onMouseLeave={() => setActiveDropdown(null)}
 onFocus={() => setActiveDropdown('solucoes')}
 onBlur={(e) => {
 if (!e.currentTarget.contains(e.relatedTarget)) {
 setActiveDropdown(null);
 }
 }}
 onKeyDown={(e) => handleDropdownKeyDown(e,'solucoes')}
 >
 <button 
 className="flex items-center gap-1 text-slate-600 hover:text-amber-500 focus:outline-none focus:text-amber-500 font-medium transition-colors py-2 cursor-pointer select-none"
 aria-haspopup="true"
 aria-expanded={activeDropdown ==='solucoes'}
 >
 Soluções <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${activeDropdown ==='solucoes' ?'rotate-180' :''}`} aria-hidden="true" />
 </button>
 <div className={`absolute top-[100%] left-0 pt-2 transition-all z-50 ${activeDropdown ==='solucoes' ?'opacity-100 visible' :'opacity-0 invisible'}`}>
 <div className="w-56 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
 <Link to="/solucoes#tv" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 TV por Assinatura
 </Link>
 <Link to="/solucoes#cameras" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Câmeras de Segurança
 </Link>
 <Link to="/solucoes#nobreak" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Nobreak Residencial
 </Link>
 </div>
 </div>
 </div>

 {/* Plano Empresa Dropdown */}
 <div 
 className="relative group"
 onMouseEnter={() => setActiveDropdown('empresas')}
 onMouseLeave={() => setActiveDropdown(null)}
 onFocus={() => setActiveDropdown('empresas')}
 onBlur={(e) => {
 if (!e.currentTarget.contains(e.relatedTarget)) {
 setActiveDropdown(null);
 }
 }}
 onKeyDown={(e) => handleDropdownKeyDown(e,'empresas')}
 >
 <button 
 className="flex items-center gap-1 text-slate-600 hover:text-amber-500 focus:outline-none focus:text-amber-500 font-medium transition-colors py-2 cursor-pointer select-none"
 aria-haspopup="true"
 aria-expanded={activeDropdown ==='empresas'}
 >
 Plano Empresa <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${activeDropdown ==='empresas' ?'rotate-180' :''}`} aria-hidden="true" />
 </button>
 <div className={`absolute top-[100%] left-0 pt-2 transition-all z-50 ${activeDropdown ==='empresas' ?'opacity-100 visible' :'opacity-0 invisible'}`}>
 <div className="w-56 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
 <Link to="/empresas" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Soluções Empresariais
 </Link>
 <Link to="/dedicado" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Link Dedicado
 </Link>
 <Link to="/lan2lan" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 focus:bg-slate-50 focus:text-amber-500 font-medium transition-colors outline-none">
 Interligação LAN-to-LAN
 </Link>
 </div>
 </div>
 </div>

 <Link to="/app" className="text-slate-600 hover:text-amber-500 transition-colors py-2 font-medium">
 App Intertel
 </Link>
 <Link to="/contrato" className="text-slate-600 hover:text-amber-500 transition-colors py-2 font-medium">
 Contrato
 </Link>
 <a 
 href={getWhatsappLink()} 
 target="_blank" 
 rel="noopener noreferrer"
 className="ml-2 flex items-center gap-1.5 px-3 py-1.5 bg-green-50/80 text-green-700 hover:bg-green-100 hover:text-green-800 border border-green-200 rounded-full font-bold text-sm transition-colors shadow-sm"
 title="Falar pelo WhatsApp"
 >
 <span className="relative flex h-2 w-2 mr-0.5">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
 </span>
 35 9904-2885
 </a>
 </>
 </nav>

 {/* Customer Portal CTA Right */}
 <div className="hidden lg:flex items-center gap-2 shrink-0">
 <a
 href="https://intertel.sgplocal.com.br/accounts/central/login"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-1.5 px-3 h-10 text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] transition-all duration-300 hover:-translate-y-1"
 id="btn-customer-area"
 >
 <User className="w-3.5 h-3.5" />
 <span className="hidden lg:inline">Área do Cliente</span>
 <span className="lg:hidden">Área Cliente</span>
 </a>
 <Link
 to="/contrato"
 className="flex items-center gap-1.5 px-4 h-10 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-white bg-blue-950 hover:bg-blue-900 rounded-full shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500 whitespace-nowrap"
 id="btn-nav-hire"
 >
 <Phone className="w-3.5 h-3.5" />
 Assinar Já
 </Link>
 </div>

 {/* Mobile Sandwich Button */}
 <div className="lg:hidden flex items-center gap-3">
 <button
 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
 className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-all"
 aria-label="Toggle Menu"
 aria-expanded={isMobileMenuOpen}
 aria-controls="mobile-menu"
 id="btn-hamburger"
 >
 {isMobileMenuOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
 </button>
 </div>
 </div>

 {/* Mobile Navigation Drawer */}
 {isMobileMenuOpen && (
 <div 
 id="mobile-menu" 
 onKeyDown={handleMobileMenuKeyDown}
 className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-4 duration-200"
 >
 <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
 <>
 <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">Início</Link>
 <div className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Internet</div>
 <Link to="/fibra" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Internet Fibra</Link>
 <Link to="/radio" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Internet via Rádio</Link>
 
 <div className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">Soluções</div>
 <Link to="/solucoes#tv" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">TV por Assinatura</Link>
 <Link to="/solucoes#cameras" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Câmeras de Segurança</Link>
 <Link to="/solucoes#nobreak" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Nobreak Residencial</Link> 
 <div className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">Plano Empresa</div>
 <Link to="/empresas" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Soluções Empresariais</Link>
 <Link to="/dedicado" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Link Dedicado</Link>
 <Link to="/lan2lan" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all ml-2 border-l-2 border-slate-100">Interligação LAN-to-LAN</Link>
 
 <div className="h-px bg-slate-200 my-2 mx-4" />
 
 <Link to="/app" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">App Intertel</Link>
 <Link to="/contrato" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">Contrato</Link>
 <a 
 href={getWhatsappLink()} 
 target="_blank" 
 rel="noopener noreferrer"
 onClick={() => setIsMobileMenuOpen(false)}
 className="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-sm"
 >
 <span className="relative flex h-2.5 w-2.5">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
 </span>
 35 9904-2885
 </a>
 </>
 <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
 <a href="https://intertel.sgplocal.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl transition-all">
 <User className="w-5 h-5" /> Central do Assinante
 </a>
 <Link to="/contrato" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-xl shadow-md active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-amber-500">
 <Phone className="w-5 h-5" /> Assinar Já
 </Link>
 </div>
 </div>
 </div>
 )}
 </header>
 );
}
