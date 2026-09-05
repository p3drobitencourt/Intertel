import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BatteryCharging, Zap, Shield, Wifi, PowerOff } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { startOnboarding } from '../utils/whatsapp';
import { company } from '../config/company';

export default function Nobreak() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
      <SEO 
        title="Nobreak Residencial | Intertel"
        description="Não fique sem internet quando a luz acabar. Conheça as soluções de Nobreak da Intertel para manter seus equipamentos protegidos e conectados."
        canonical="https://interteltelecom.net.br/nobreak"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nobreak Residencial",
            "provider": { "@id": company.schemaIds.organization },
            "description": "Nobreak para proteção e autonomia de equipamentos de rede.",
            "url": "https://interteltelecom.net.br/nobreak"
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-10 lg:py-14">
        <picture className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero-nobreak.jpg"
            alt="Nobreak protegendo equipamentos de rede em home office"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/95 to-blue-950/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <BatteryCharging className="w-4 h-4" />
              Energia Protegida
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Não Deixe a Falta de Luz <span className="text-amber-500">Derrubar sua Conexão</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Garanta que sua casa ou escritório continuem online e seguros. Nossos Nobreaks protegem seus equipamentos contra surtos e garantem autonomia durante quedas de energia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#solucao-nobreak" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solucao-nobreak')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                Conhecer a Solução <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans/Solution Section */}
      <section className="py-16 md:py-20 bg-zinc-50 relative z-10" id="solucao-nobreak">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">
              Autonomia e Segurança em um só aparelho
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Perfeito para roteadores, ONUs e sistemas de segurança. Mantenha o que é essencial sempre funcionando.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Side (Treated via CSS) */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-500/20 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6 opacity-70 blur-lg"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
                <img 
                  src="/assets/hero-nobreak.jpg" 
                  alt="Nobreak Intertel"
                  loading="lazy"
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider mb-2">
                    <Shield className="w-3.5 h-3.5" /> Equipamento Homologado
                  </div>
                </div>
              </div>
            </div>

            {/* Card Side */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#F4B000] shadow-[0_10px_40px_rgb(244,176,0,0.15)] relative">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-amber-300">
                    Solução Definitiva
                  </span>
                </div>

                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <BatteryCharging className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Nobreak Residencial</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Proteja a vida útil dos seus eletrônicos e não interrompa sua navegação.
                </p>
                
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium">Continuidade da conexão durante apagões</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium">Proteção avançada contra oscilações e surtos elétricos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium">Redução drástica de risco de queima de roteadores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium">Maior segurança e vida útil para equipamentos de rede</span>
                  </li>
                </ul>
                
                <button
                  onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse na solução de Nobreak da Intertel.")}
                  className="w-full py-4 sm:py-5 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all shadow-[0_0_20px_rgba(244,176,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,176,0,0.5)]"
                >
                  Quero proteger minha conexão
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefícios e Explicação */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <PowerOff className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Continuidade</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mantenha seu roteador ligado por horas em quedas de energia. Trabalho e estudo não precisam parar.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Proteção de Surtos</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Filtra as oscilações da rede elétrica, evitando que descargas cheguem aos seus eletrônicos mais sensíveis.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Segurança Pessoal</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Indispensável para quem usa câmeras de segurança Wi-Fi, garantindo gravação contínua em qualquer cenário.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                <Wifi className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Preservação de Rede</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Desligamentos bruscos podem corromper as configurações de rede. O nobreak garante integridade dos dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-blue-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-black text-white font-display mb-6">
            Dúvidas sobre o Nobreak ideal para você?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale com nossos consultores. Explicaremos tudo o que você precisa saber sobre a nossa solução e como ela protege sua casa.
          </p>
          <button
            onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse na solução de Nobreak da Intertel e gostaria de mais detalhes.")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            Falar com um Consultor <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
