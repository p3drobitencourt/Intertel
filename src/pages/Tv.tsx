import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MonitorPlay, Tv as TvIcon, Film, Cast } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { startOnboarding } from '../utils/whatsapp';
import { company } from '../config/company';

export default function Tv() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
      <SEO 
        title="Intertel TV | A Evolução do Entretenimento"
        description="Assista a 187 canais, filmes e séries diretamente na sua Smart TV. Conheça as opções exclusivas para clientes Intertel."
        canonical="https://interteltelecom.net.br/tv"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Intertel TV",
            "provider": { "@id": company.schemaIds.organization },
            "description": "Serviço de TV via streaming com 187 canais, filmes e séries para clientes Intertel.",
            "url": "https://interteltelecom.net.br/tv"
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-10 lg:py-14">
        <picture className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero-tv.jpg"
            alt="Família reunida assistindo televisão juntos"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[center_40%] opacity-25 mix-blend-overlay"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <MonitorPlay className="w-4 h-4" />
              Para clientes Intertel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              O Melhor do <span className="text-amber-500">Entretenimento</span> na Sua Casa
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Transforme sua sala num verdadeiro cinema. Acesse 187 canais, filmes e séries diretamente na sua Smart TV, com planos sob medida para sua necessidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#planos-tv" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('planos-tv')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                Ver Opções de TV <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 md:py-20 bg-zinc-50 relative z-10" id="planos-tv">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">
              Escolha como quer assistir
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Seja direto na sua Smart TV compatível ou utilizando nosso equipamento, a diversão é garantida.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[4/3] lg:aspect-[4/5]">
              <img 
                src="/assets/hero-tv.jpg" 
                alt="Família reunida assistindo televisão juntos" 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Cards Column */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-6 items-stretch">
                
                {/* Card 1: TV App */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <TvIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Intertel TV App</h3>
                  <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                    A forma mais simples de assistir. Aplicativo instalado direto na sua Smart TV.
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>187 canais</strong> abertos e fechados</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>Catálogo de <strong>filmes e séries</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>Assista em até <strong>3 TVs</strong> simultaneamente</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>Exclusivo para TVs Smart compatíveis</span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse no plano de TV da Intertel.")}
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md group-hover:-translate-y-0.5"
                  >
                    Assinar TV App
                  </button>
                </div>

                {/* Card 2: TV + Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F4B000] shadow-[0_10px_30px_rgb(244,176,0,0.15)] sm:scale-105 z-10 transition-all duration-300 flex flex-col h-full group relative">
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-lg border border-amber-300">
                      Solução Completa
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Intertel TV + Box</h3>
                  <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                    Transforme qualquer TV em Smart. Inclui o equipamento Box comodato.
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>187 canais</strong> abertos e fechados</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Catálogo de <strong>filmes e séries</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Aparelho <strong>Box em comodato</strong> incluso</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Ideal para TVs antigas ou incompatíveis com o app</span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse no plano de TV da Intertel com Box.")}
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all shadow-[0_0_15px_rgba(244,176,0,0.4)] group-hover:-translate-y-0.5"
                  >
                    Assinar TV + Box
                  </button>
                </div>

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
                <TvIcon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">187 Canais</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Programação completa com esporte, notícias, infantis e variedades para toda a família.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Filmes e Séries</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Acesse um catálogo on-demand sempre atualizado, para assistir na hora que quiser.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Cast className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Até 3 Telas</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Liberdade para a família: assista em até 3 televisores simultaneamente sem travar.
              </p>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Smart TV ou Box</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Baixe o app na sua Smart TV compatível ou utilize nosso Box exclusivo sem custo de adesão.
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
            Tem dúvidas sobre qual escolher?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Não tem certeza se sua Smart TV é compatível com o aplicativo? Converse com nossa equipe pelo WhatsApp.
          </p>
          <button
            onClick={() => startOnboarding(null, undefined, "Olá! Tenho interesse no plano de TV da Intertel e gostaria de tirar algumas dúvidas.")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            Falar com um Consultor <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
