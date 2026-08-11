
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Briefcase, MessageSquare, Globe, Shield, Layers, Users, Check,
  ChevronDown, User, MapPin, Search, ArrowRight, Instagram, Facebook, Cpu, CheckCircle2
} from 'lucide-react';

export default function Empresas() {
  const [b2bName, setB2bName] = useState("");
  const [b2bCompany, setB2bCompany] = useState("");
  const [b2bEmail, setB2bEmail] = useState("");
  const [b2bPhone, setB2bPhone] = useState("");
  const [b2bSolution, setB2bSolution] = useState("dedicado");

  const handleB2bSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!b2bName || !b2bCompany || !b2bEmail || !b2bPhone) return;
    
    const msg = `Olá! Gostaria de falar com um consultor técnico sobre soluções empresariais.\n\n*Nome:* ${b2bName}\n*Empresa:* ${b2bCompany}\n*E-mail:* ${b2bEmail}\n*WhatsApp:* ${b2bPhone}\n*Necessidade:* ${b2bSolution}`;
    window.open(`https://api.whatsapp.com/send/?phone=5535999042885&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`, "_blank", "noopener,noreferrer");
    
    setB2bName("");
    setB2bCompany("");
    setB2bEmail("");
    setB2bPhone("");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <main className="bg-white dark:bg-slate-950">
        {/* Corporate Hero Section */}
        <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
              alt="Ambiente Corporativo"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Briefcase className="w-4 h-4" />
                Soluções Corporativas
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
                A infraestrutura que garante a <span className="text-blue-400">continuidade do seu negócio</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Conectividade de missão crítica, Trânsito IP e LAN-to-LAN. Estabilidade inegociável para empresas que não podem parar.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+solu%C3%A7%C3%B5es+corporativas&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none"
                >
                  Falar com consultor <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">
                Nossas Soluções Especializadas
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Arquitetura de rede desenhada para alta disponibilidade, segurança e performance corporativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Link Dedicado Provedores */}
              <Link to="/dedicado" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Globe className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Trânsito IP (Provedores)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                  Link dedicado de alta performance para ISPs. Sessão BGP, rotas otimizadas, proteção DDoS e SLA garantido em contrato.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Ver detalhes da solução <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              {/* LAN to LAN */}
              <Link to="/lan2lan" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Interligação LAN-to-LAN
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                  Conecte matriz e filiais na camada 2 de forma transparente, isolada da internet pública e com banda 100% simétrica.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Ver detalhes da solução <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              {/* Internet Corporativa */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Internet Corporativa
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                  Planos sob medida com IP fixo para empresas que necessitam de estabilidade, suporte técnico VIP e respostas rápidas.
                </p>
                <a href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+saber+mais+sobre+Internet+Corporativa&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Consultar viabilidade <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Plans Overview (Refined) */}
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display">
                Planos Corporativos
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Infraestrutura dimensionada para o tamanho da sua operação.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { speed: "200", name: "Empresarial 200M", desc: "Para pequenos escritórios que precisam de estabilidade e rapidez." },
                { speed: "400", name: "Empresarial 400M", desc: "Para médias empresas com uso intenso de sistemas em nuvem." },
                { speed: "800", name: "Empresarial 800M", desc: "A máxima performance corporativa para quem não tem margem para gargalos." }
              ].map((plan, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col h-full">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[40px]">{plan.desc}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                      <span className="text-5xl font-black font-display tracking-tighter">{plan.speed}</span>
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Mega + Wi-Fi</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2">
                      Sob Consulta Comercial
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {["SLA corporativo", "Garantia de banda", "Suporte prioritário 24/7"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+o+plano+empresarial&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full py-3.5 text-center rounded-xl font-bold transition-all duration-300 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 focus:outline-none"
                  >
                    Falar com consultor
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate CTA Banner (Clean/Professional) */}
        <section className="py-16 md:py-24 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white font-display mb-6">
              Pronto para elevar a conectividade da sua empresa?
            </h3>
            <p className="text-lg text-slate-400 mb-10">
              Agende uma reunião com nossos especialistas em redes corporativas.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+solu%C3%A7%C3%B5es+corporativas&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none"
            >
              Falar com consultor
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
