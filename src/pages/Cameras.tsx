import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Camera, Smartphone, Cloud, Moon, Wrench, ShieldCheck } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { startOnboarding } from '../utils/whatsapp';
import { company } from '../config/company';

export default function Cameras() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
      <SEO 
        title="Câmeras de Segurança | Intertel"
        description="Monitoramento 24h em alta resolução. Proteja seu patrimônio e acompanhe tudo em tempo real pelo seu smartphone com a Intertel."
        canonical="https://interteltelecom.net.br/cameras"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Câmeras de Segurança",
            "provider": { "@id": company.schemaIds.organization },
            "description": "Solução de monitoramento 24h com acesso via aplicativo e gravação em nuvem.",
            "url": "https://interteltelecom.net.br/cameras"
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-10 lg:py-14">
        <picture className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero-cameras.jpg"
            alt="Câmera de segurança monitorando residência moderna"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[center_30%] opacity-25 mix-blend-overlay"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Camera className="w-4 h-4" />
              Segurança e Monitoramento
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Proteja seu Patrimônio <span className="text-amber-500">24 horas</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Monitore sua casa ou empresa em alta resolução e acompanhe tudo em tempo real direto da palma da sua mão com as Câmeras Intertel.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#solucao-cameras" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solucao-cameras')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                Conhecer Solução <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans/Solution Section */}
      <section className="py-16 md:py-20 bg-zinc-50 relative z-10" id="solucao-cameras">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">
              Tranquilidade que acompanha você
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Equipamentos de alta tecnologia aliados à confiabilidade da nossa infraestrutura. Solução inteligente, fácil de usar e sempre disponível.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="order-1 lg:order-2 relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[4/3] lg:aspect-square">
              <img 
                src="/assets/hero-cameras.jpg" 
                alt="Solução de câmeras de segurança da Intertel" 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Card Column */}
            <div className="order-2 lg:order-1 w-full max-w-lg mx-auto lg:max-w-none">
              <div className="bg-white rounded-3xl p-8 border-2 border-[#F4B000] shadow-[0_10px_40px_rgb(244,176,0,0.15)] transition-all duration-300 flex flex-col h-full group relative hover:scale-105 z-10">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-amber-300">
                    Mais Segurança
                  </span>
                </div>

                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Câmeras de Segurança</h3>
                <p className="text-slate-500 mb-8 min-h-[48px]">
                  Monitoramento completo para residências e comércios com alta qualidade visual.
                </p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Acesso via Aplicativo</strong> celular e tablet</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Gravação em Nuvem</strong> segura</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Visão Noturna</strong> Avançada</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Instalação Especializada</strong> Intertel</span>
                  </li>
                </ul>
                
                <button
                  onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse na solução de Câmeras da Intertel.")}
                  className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all shadow-[0_0_15px_rgba(244,176,0,0.4)] group-hover:-translate-y-0.5"
                >
                  Solicitar Cotação
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefícios e Explicação */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Acesso pelo Celular</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Abra o aplicativo a qualquer momento de qualquer lugar do mundo e veja sua câmera ao vivo.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Gravação em Nuvem</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                As imagens são salvas de forma blindada em servidores remotos contra roubo do equipamento.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Moon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Visão Noturna</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sensores infravermelhos que garantem total nitidez mesmo em ambientes sem nenhuma luz.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Instalação Intertel</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tudo feito por nossa equipe técnica, garantindo cabeamento perfeito e total funcionamento.
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
            Deseja mais segurança para seu patrimônio?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale com nossos consultores para um orçamento sob medida para sua residência ou empresa.
          </p>
          <button
            onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse na solução de Câmeras da Intertel e gostaria de mais informações.")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            Falar com um Consultor <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
