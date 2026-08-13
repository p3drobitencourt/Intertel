import React from "react";
import { Smartphone } from "lucide-react";

export default function AppPromoSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-12 sm:py-16 relative z-10" id="app-promo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition */}
          <div className="space-y-6 max-w-xl">
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

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 items-center">
              <a
                href="/app"
                className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 sm:px-8 py-3 sm:py-[0.875rem] rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white font-bold shrink-0"
              >
                Conhecer o App
              </a>
              
              <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noreferrer" id="CTA_GOOGLE_PLAY_PROMO" data-tracking="CTA_GOOGLE_PLAY" className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0">
                 <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.09 19.98c-.12-.22-.19-.53-.19-.94V4.96c0-.41.07-.72.19-.94l11.45 11.45-11.45 4.51zm.69.41 12.02-4.73 1.98 1.98L5.75 20.4c-.39.22-.76.22-.97-.01zm12.71-6.71L6.04 3.23c-.39-.23-.76-.23-.97 0l12.42 10.45zm1.42 1.42-1.98-1.98 2.54-2.12c.48-.4.76-1.02.76-1.74s-.28-1.34-.76-1.74l-2.54-2.12 1.98-1.98c1.33.66 2.16 2.1 2.16 3.84 0 1.74-.83 3.18-2.16 3.84z"/>
                 </svg>
                 <div className="flex flex-col items-start">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider leading-none text-slate-300">Disponível no</span>
                    <span className="text-xs sm:text-sm font-bold leading-tight">Google Play</span>
                 </div>
              </a>
              <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noreferrer" id="CTA_APP_STORE_PROMO" data-tracking="CTA_APP_STORE" className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0">
                 <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.74-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 13.25 3.51 5.96 9.05 5.68c1.23.05 2.22.61 2.92.61.71 0 1.99-.71 3.42-.6 1.48.05 2.76.67 3.55 1.79-3.08 1.83-2.59 5.86.51 7.15-.69 2.05-1.52 4.1-2.4 5.65zm-4.74-15.11c-.04-2.45 1.95-4.52 4.39-4.66.19 2.62-2.14 4.69-4.39 4.66z"/>
                 </svg>
                 <div className="flex flex-col items-start">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider leading-none text-slate-300">Baixar na</span>
                    <span className="text-xs sm:text-sm font-bold leading-tight">App Store</span>
                 </div>
              </a>
            </div>
          </div>

          {/* Right Column: App Assets overlapping layout */}
          <div className="relative w-full py-8 lg:py-0 flex items-center justify-center mt-12 lg:mt-0">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] mx-auto pt-10 sm:pt-16">
              {/* Celular 2: Trás (Faturas) */}
              <div className="absolute top-0 right-0 w-[65%] rounded-3xl sm:rounded-[2rem] border-[3px] sm:border-[4px] border-slate-900 shadow-xl dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-10 bg-slate-900 overflow-hidden transform rotate-6 origin-bottom-right">
                <img
                  src="/app-tela2.png"
                  alt="Faturas do App"
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>

              {/* Celular 1: Frente (Dashboard) */}
              <div className="relative w-[75%] rounded-3xl sm:rounded-[2rem] border-[4px] sm:border-[5px] border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-20 bg-slate-900 overflow-hidden transition-transform duration-500 hover:-translate-y-3">
                <img
                  src="/app-tela1.png"
                  alt="Dashboard Principal do App"
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
