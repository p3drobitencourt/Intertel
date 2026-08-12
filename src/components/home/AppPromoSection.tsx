import React from "react";
import { Smartphone } from "lucide-react";

export default function AppPromoSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-20 relative z-10" id="app-promo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Value Proposition */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              App Intertel
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight font-display tracking-tight">
              Resolva tudo sem precisar ligar no suporte.
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Sua conexão na palma da mão. Com o app Intertel Telecom, você tem total autonomia para gerenciar sua internet. Pague faturas com PIX, acompanhe seu consumo diário e utilize o recurso de promessa de pagamento para liberar sua conexão em um clique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/app"
                className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white font-bold"
              >
                Conhecer todas as funções
              </a>
            </div>
          </div>

          {/* Right Column: App Assets overlapping layout */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            {/* Image: Inicio (Front/Slightly higher left) */}
            <div className="w-48 sm:w-64 aspect-[386/799] rounded-[2rem] overflow-hidden border-[8px] border-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20 group bg-slate-900">
              <img
                src="/app-tela2.png"
                alt="Dashboard Principal do App"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
