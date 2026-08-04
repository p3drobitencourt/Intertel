
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';

export default function Radio({ radioPlansData, billingCycle, startOnboarding }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
              <>
            <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 relative z-10" id="planos-radio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
                <h2 className="text-xs font-mono text-amber-500 uppercase tracking-[0.25em] font-bold">
                  TECNOLOGIA RURAL
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                  Planos Rádio
                </h1>
                <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
                  Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Todos os planos contam com suporte especializado da Intertel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 justify-center">
                {radioPlansData.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border transition-all duration-300 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500/50 ${
                      plan.isPopular 
                        ? "border-[#F4B000] ring-1 ring-[#F4B000] shadow-[0_8px_30px_rgb(244,176,0,0.15)] dark:shadow-[0_8px_30px_rgb(244,176,0,0.08)] md:-translate-y-4" 
                        : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1.5"
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-4 inset-x-0 flex justify-center">
                        <span className="bg-gradient-to-r from-[#F4B000] to-amber-400 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-amber-300">
                          <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS ASSINADO
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
                            {plan.svas.map((sva, idx) => (
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

                      <ul className="space-y-4 pt-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
                            <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${plan.isPopular ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button 
                        onClick={() => startOnboarding(plan)}
                        className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                          plan.isPopular
                            ? "bg-[#F4B000] hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95"
                            : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 active:scale-95"
                        }`}
                      >
                        Saber mais informações
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          </>
  );
}


