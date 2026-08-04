import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { BebancaIcon, BeeducaIcon } from '../App';

export default function Fibra({ plansData, billingCycle, startOnboarding, bebancaSva, beducaSva }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-slate-900 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900 dark:text-white">
      {/* 3. RESIDENTIAL CONVERGENT PLANS SECTION */}
      <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 relative z-10" id="planos-fibra">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] font-bold">
              TECNOLOGIA RESIDENCIAL
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Planos Fibra Cidade
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Selecione o plano ideal para suas necessidades na cidade. Todos contam com Wi-Fi grátis, sem taxa de instalação e aplicativos exclusivos.
            </p>

            {/* Note: the billing cycle toggle could be here, or we can just show the plans directly */}
          </div>

          <div className="relative mt-8">
            {/* Scroll indicator for mobile */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 xl:hidden flex flex-col items-center justify-center opacity-50">
              <svg className="w-6 h-6 animate-bounce-x text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
            
            <div className="flex xl:grid xl:grid-cols-4 gap-4 xl:gap-6 justify-start xl:justify-center overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 hide-scrollbar">
                {plansData.map((plan: any, index: number) => {
                  const isPopular = index === 1;

                  return (
                    <div
                      key={plan.id}
                      className={`relative flex-none snap-center min-w-[85vw] sm:min-w-[320px] w-full max-w-sm xl:max-w-none xl:w-auto flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-6 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/50 ${
                        isPopular 
                          ? "border-[#F4B000] ring-1 ring-[#F4B000] shadow-[0_4px_20px_rgb(244,176,0,0.15)] dark:shadow-[0_4px_20px_rgb(244,176,0,0.08)] md:-translate-y-2" 
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                          <span className="bg-gradient-to-r from-[#F4B000] to-amber-400 text-slate-950 font-black text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-sm border border-amber-300 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-slate-950" /> MAIS VENDIDO
                          </span>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">{plan.name}</p>
                          <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                            <span className="text-4xl font-black font-display tracking-tighter">{plan.speed}</span>
                            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">+ Wi-Fi</span>
                          </div>
                          <p className="text-[13px] text-slate-600 dark:text-slate-400 mt-2 leading-relaxed min-h-[36px]">{plan.description}</p>
                        </div>
                        
                        {/* Value Added Services */}
                        {plan.svas && plan.svas.length > 0 && (
                          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold mb-2">Serviços Inclusos:</p>
                            <div className="flex flex-col gap-1.5">
                              {plan.svas.map((sva: any, idx: number) => (
                                <Link 
                                  key={idx}
                                  to="/app"
                                  className={`group/sva relative flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md text-[11px] font-semibold ${sva.bg} hover:brightness-110 transition-all border border-transparent hover:border-current/20`}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span>{sva.icon}</span>
                                    <span>{sva.name}</span>
                                  </div>
                                  <span className="opacity-0 group-hover/sva:opacity-100 transition-opacity text-[9px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                                    Acesse <ArrowRight className="w-2.5 h-2.5" />
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <ul className="space-y-2.5 pt-4">
                          {plan.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-600 dark:text-slate-300 font-medium">
                              <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isPopular ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button 
                          onClick={() => startOnboarding(plan)}
                          className={`w-full py-3 rounded-lg font-bold text-[13px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                            isPopular
                              ? "bg-[#F4B000] hover:bg-amber-400 text-slate-950 shadow-sm shadow-amber-500/20 active:scale-95"
                              : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 active:scale-95"
                          }`}
                        >
                          Saber mais informações
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}


