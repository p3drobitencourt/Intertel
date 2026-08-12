import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Globe, Shield, Layers, ArrowRight, CheckCircle2
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import FaqSection from '../components/home/FaqSection';

export default function Empresas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <SEO 
        title="Intertel Empresas | Soluções Corporativas de Internet"
        description="Conectividade de missão crítica para sua empresa no Sul de Minas. IP Dedicado, LAN-to-LAN e banda simétrica com SLA garantido."
        canonical="https://interteltelecom.net.br/empresas"
      />
      <main className="bg-white dark:bg-slate-950">
        {/* Corporate Hero Section */}
        <section className="relative bg-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
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
                Conectividade de missão crítica, IP Dedicado e estabilidade inegociável para empresas no Sul de Minas que não podem parar. Atendimento consultivo para negócios de todos os portes.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+solu%C3%A7%C3%B5es+corporativas&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Falar com consultor <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções Section */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
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
        <section className="py-12 md:py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
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
                    {["SLA de 4 horas", "Garantia de banda", "Simetria de banda", "Suporte VIP 24/7"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={`https://api.whatsapp.com/send/?phone=5535999042885&text=${encodeURIComponent(`Olá, gostaria de falar com um consultor sobre o plano ${plan.name} (Empresarial)`)}&type=phone_number&app_absent=0`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full py-3.5 text-center rounded-xl font-bold transition-all duration-300 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Falar com consultor
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection 
          category="empresas" 
          onContactSupport={() => window.open('https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+solu%C3%A7%C3%B5es+corporativas&type=phone_number&app_absent=0', '_blank')}
        />

        {/* Seção Institucional de Contato */}
        <section className="py-16 md:py-20 bg-blue-950 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-white font-display mb-4">
                Pronto para elevar a conectividade da sua empresa?
              </h2>
              <p className="text-lg text-blue-100">
                Agende uma reunião com nossos especialistas em redes corporativas e descubra a solução ideal para o seu negócio.
              </p>
            </div>
            <div className="shrink-0">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+sobre+solu%C3%A7%C3%B5es+corporativas&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              >
                Agendar Reunião <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
