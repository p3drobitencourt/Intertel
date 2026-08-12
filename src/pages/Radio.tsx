import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { ArrowRight, Check, Star, Radio as RadioIcon, ChevronDown } from 'lucide-react';

export default function Radio({ radioPlansData, billingCycle, startOnboarding }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
              <>
      <SEO 
        title="Internet Via Rádio para Zonas Rurais | Intertel Telecom"
        description="Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Planos com alta estabilidade e suporte técnico especializado da Intertel."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 dark:bg-slate-950 py-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <RadioIcon className="w-4 h-4" />
              Para Zonas Rurais e Sítios
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Internet Via Rádio com <span className="text-amber-500">Alta Estabilidade</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Nós levamos conexão aonde a fibra ainda não chega. Estrutura robusta para garantir que sua fazenda ou sítio continue sempre online.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#planos-radio" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('planos-radio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              >
                Ver Planos Disponíveis <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SEO 
        title="Internet via Rádio | Planos Rurais"
        description="Internet via rádio para áreas rurais com alta estabilidade. Cobertura estendida para onde você precisar."
        canonical="https://interteltelecom.net.br/radio"
      />

      {/* 3. RESIDENTIAL RADIO PLANS SECTION */}
      <section className="py-12 md:py-16 bg-zinc-50 dark:bg-slate-800 relative z-10" id="planos-radio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
                <span className="block text-xs font-mono text-amber-500 uppercase tracking-[0.25em] font-bold mb-2">
                  TECNOLOGIA RURAL
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                  Planos Rádio
                </h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
                  Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Todos os planos contam com suporte especializado da Intertel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 justify-center pt-10">
                {radioPlansData.map((plan: any) => (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/50 ${
                      plan.isPopular 
                        ? "border-[#F4B000] border-2 shadow-[0_10px_40px_rgb(244,176,0,0.2)] dark:shadow-[0_10px_40px_rgb(244,176,0,0.15)] xl:scale-105 xl:z-10" 
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-xl"
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-4 inset-x-0 flex justify-center">
                        <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS ESCOLHIDO
                        </span>
                      </div>
                    )}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline gap-1 text-slate-900 dark:text-white">
                          <span className="text-5xl font-black font-display tracking-tighter">{plan.speed}</span>
                          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">+ Wi-Fi</span>
                        </div>
                      </div>
                      {/* Value Added Services */}
                      {plan.svas && plan.svas.length > 0 && (
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold mb-3">Serviços Digitais Inclusos:</p>
                          <div className="flex flex-col gap-2">
                            {plan.svas.map((sva: any, idx: number) => (
                              <Link 
                                key={idx}
                                to="/app"
                                className={`group relative flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-semibold ${sva.bg} hover:brightness-110 transition-all border border-transparent hover:border-current/20`}
                              >
                                <div className="flex items-center gap-2">
                                  <span>{sva.name}</span>
                                  <span>{sva.icon}</span>
                                </div>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                  Acesse para saber mais <ArrowRight className="w-3 h-3" />
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <ul className="space-y-3 pt-5">
                        {plan.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-slate-200 font-medium">
                            <div className={`rounded-full p-1 shrink-0 ${plan.isPopular ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                      <button 
                        onClick={() => startOnboarding(plan)}
                        aria-label={`Contratar plano ${plan.name}`}
                        className={`w-full py-3.5 rounded-xl font-bold text-[13px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                          plan.isPopular
                            ? "bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                            : "bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-900 active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                        }`}
                      >
                        Quero este plano
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-12 md:py-16 bg-blue-950 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-black text-white font-display mb-6">
                Leve internet para onde você precisa
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Seja no sítio, na fazenda ou em áreas afastadas, nós temos a solução. Fale com um consultor e verifique a viabilidade.
              </p>
              <button 
                onClick={() => startOnboarding(null)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              >
                Consultar Viabilidade <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>
          </>
  );
}
