import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Lock, Activity, RefreshCw, Briefcase, ChevronRight, ChevronDown, User } from 'lucide-react';

export default function Lan2Lan() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      
      {/* COMPACT HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center justify-center bg-transparent group focus:outline-none transition-transform">
            <img src="/logo-principal.png" alt="Intertel Telecom" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-1.5 dark:rounded-lg dark:shadow-sm" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-4 text-sm font-semibold z-50">
            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">Início</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">
                Planos <ChevronDown className="w-5 h-5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link to="/fibra" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Planos Fibra</Link>
                <Link to="/radio" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Planos Rádio</Link>
                <Link to="/empresas" className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Planos Empresariais</Link>
              </div>
            </div>
            <Link to="/#vantagens" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 hidden lg:block">Vantagens</Link>
            <Link to="/app" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">App Intertel</Link>
            <Link to="/#faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2">FAQ</Link>
            <Link to="/#contato" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2 font-semibold text-amber-500 hover:text-amber-600">Contato</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://intertel.sgplocal.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 h-11 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] transition-all duration-300 hover:-translate-y-0.5">
              <User className="w-5 h-5" />
              2ª Via / Área do Cliente
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Início</Link>
              <Link to="/fibra" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Fibra</Link>
              <Link to="/radio" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Rádio</Link>
              <Link to="/empresas" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Planos Empresariais</Link>
              <Link to="/#vantagens" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Vantagens</Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">App Intertel</Link>
              <Link to="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">FAQ</Link>
              <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 rounded-xl transition-all">Contato</Link>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <a href="https://intertel.sgplocal.com.br/accounts/central/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <User className="w-5 h-5" /> Central do Assinante
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 dark:bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Layers className="w-4 h-4" />
              Interligação de Redes
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Conexão Transparente <br />
              <span className="text-blue-400">Ponto a Ponto (L2L)</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Interligue matriz e filiais na camada 2 do modelo OSI. A solução definitiva para centralização de servidores, backup remoto e comunicação segura sem passar pela internet pública.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+tenho+interesse+em+Interliga%C3%A7%C3%A3o+LAN-to-LAN&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                Falar com Consultor <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">Vantagens do LAN-to-LAN</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Nossa rede óptica foi estruturada para que as filiais da sua empresa funcionem como se estivessem na mesma sala da matriz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Segurança de Dados", desc: "Os dados não passam pela internet pública. A comunicação ocorre em um circuito virtual privado e totalmente isolado." },
              { icon: Activity, title: "Banda Simétrica", desc: "Mesma velocidade para download e upload, fundamental para replicação de banco de dados e sistemas ERP." },
              { icon: Lock, title: "Sem Limite de Tráfego", desc: "Transfira terabytes de dados sem franquia ou redução de velocidade no final do mês." },
              { icon: RefreshCw, title: "Transparência L2", desc: "Suporta passagem de VLANs (Q-in-Q) e qualquer protocolo de roteamento, como OSPF, BGP e EIGRP." },
              { icon: Layers, title: "Centralização", desc: "Reduza custos centralizando servidores, PABX IP, firewalls e storage em um único Data Center." },
              { icon: Briefcase, title: "SLA Corporativo", desc: "Garantia de 99,9% de disponibilidade com equipe técnica de plantão 24/7 para suporte especializado." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-blue-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Simplifique a estrutura da sua empresa</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Fale com um dos nossos consultores e descubra a viabilidade para interligar os pontos da sua empresa com fibra óptica.</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+solicitar+viabilidade+para+LAN-to-LAN&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            Solicitar Viabilidade
          </a>
        </div>
      </section>
    </div>
  );
}
