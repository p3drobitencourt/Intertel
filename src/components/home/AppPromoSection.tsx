import React from "react";
import { Smartphone } from "lucide-react";

export default function AppPromoSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32 relative z-10" id="app-promo">
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
                href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300"
              >
                <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                </svg>
                <div className="text-left leading-none">
                  <p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Disponível no</p>
                  <p className="text-base font-bold">Google Play</p>
                </div>
              </a>
              <a
                href="https://apps.apple.com/br/app/intertel-telecom/id1618099722"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300"
              >
                <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                </svg>
                <div className="text-left leading-none">
                  <p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Baixar na</p>
                  <p className="text-base font-bold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: App Assets overlapping layout */}
          <div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center -translate-y-16 md:-translate-y-24 lg:-translate-y-32">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            {/* Image 1: Fatura/Pix (Back/Slightly lower right) */}
            <div className="absolute right-0 sm:right-4 top-1/4 w-44 sm:w-56 aspect-[1/2.05] rounded-[2rem] overflow-hidden border-[8px] border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 group bg-slate-900">
              <img
                src="/app-tela1.png"
                alt="Pagamento de Fatura via PIX"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Image 2: Inicio (Front/Slightly higher left) */}
            <div className="absolute left-0 sm:left-4 bottom-1/4 w-48 sm:w-64 aspect-[1/2.05] rounded-[2rem] overflow-hidden border-[8px] border-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 group bg-slate-900">
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
