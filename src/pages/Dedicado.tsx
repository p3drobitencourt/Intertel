import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Network, Shield, Zap, Server, BarChart3, Clock, ChevronRight, ChevronDown, User } from 'lucide-react';

export default function Dedicado() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Network className="w-4 h-4" />
              Exclusivo para Provedores
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Link Dedicado de <span className="text-amber-500">Alta Performance</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Trânsito IP premium para ISPs e grandes corporações. Rotas otimizadas, redundância de backbone e estabilidade absoluta para o seu AS.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+tenho+interesse+em+Link+Dedicado+para+provedor&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300"
              >
                Falar com Engenheiro <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">Por que escolher o Trânsito IP Intertel?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Nossa infraestrutura foi desenhada para não falhar. Conheça os diferenciais que garantem a entrega máxima para os seus clientes finais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              { icon: Zap, title: "Latência Mínima", desc: "Rotas otimizadas para os principais CDNs e PTTs do Brasil (IX.br), garantindo o menor tempo de resposta." },
              { icon: Shield, title: "Proteção DDoS", desc: "Mitigação inteligente de ataques em múltiplas camadas para manter sua rede sempre disponível e limpa." },
              { icon: Server, title: "Sessão BGP", desc: "Suporte completo a IPv4 e IPv6, anúncio dos seus prefixos com total transparência de roteamento." },
              { icon: BarChart3, title: "Banda 100% Garantida", desc: "Sem overbooking. Entregamos exatamente a capacidade contratada, 24 horas por dia, 7 dias por semana." },
              { icon: Network, title: "Dupla Abordagem", desc: "Projetos em anel óptico com redundância física e lógica para garantir o SLA de 99,9% em contrato." },
              { icon: Clock, title: "NOC 24x7x365", desc: "Monitoramento proativo e atendimento de Nível 3 direto e sem burocracia para resolução imediata." }
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
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Pronto para elevar o nível do seu ISP?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Agende uma reunião técnica com nossa equipe de engenharia e descubra como podemos escalar a capacidade do seu provedor.</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+agendar+uma+reuni%C3%A3o+sobre+Link+Dedicado&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-blue-950 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 dark:hover:bg-slate-100 hover:shadow-xl transition-all duration-300"
          >
            Agendar Reunião Técnica
          </a>
        </div>
      </section>
    </div>
  );
}
