import React from "react";
import { Check, ShieldCheck, Zap, HelpCircle } from "lucide-react";

export default function AppPromoSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden" id="app-promo">
      {/* Subtle Environmental Lighting (No neon/cyberpunk, just soft corporate glow) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display tracking-tight">
              Tenha a Intertel na palma da sua mão
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Consulte seus planos, acompanhe sua conexão, acesse suas faturas e resolva tudo pelo app.
            </p>

            {/* Clear, direct benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-blue-700" />
                </div>
                Meus planos
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-blue-700" />
                </div>
                Minhas faturas
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-blue-700" />
                </div>
                Pagamento
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-blue-700" />
                </div>
                Suporte
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a 
                href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="CTA_GOOGLE_PLAY_PROMO" 
                data-tracking="CTA_GOOGLE_PLAY" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95 shrink-0"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.09 19.98c-.12-.22-.19-.53-.19-.94V4.96c0-.41.07-.72.19-.94l11.45 11.45-11.45 4.51zm.69.41 12.02-4.73 1.98 1.98L5.75 20.4c-.39.22-.76.22-.97-.01zm12.71-6.71L6.04 3.23c-.39-.23-.76-.23-.97 0l12.42 10.45zm1.42 1.42-1.98-1.98 2.54-2.12c.48-.4.76-1.02.76-1.74s-.28-1.34-.76-1.74l-2.54-2.12 1.98-1.98c1.33.66 2.16 2.1 2.16 3.84 0 1.74-.83 3.18-2.16 3.84z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wider leading-none text-slate-300">Disponível no</span>
                  <span className="text-sm font-bold leading-tight">Google Play</span>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="CTA_APP_STORE_PROMO" 
                data-tracking="CTA_APP_STORE" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95 shrink-0"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.74-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 13.25 3.51 5.96 9.05 5.68c1.23.05 2.22.61 2.92.61.71 0 1.99-.71 3.42-.6 1.48.05 2.76.67 3.55 1.79-3.08 1.83-2.59 5.86.51 7.15-.69 2.05-1.52 4.1-2.4 5.65zm-4.74-15.11c-.04-2.45 1.95-4.52 4.39-4.66.19 2.62-2.14 4.69-4.39 4.66z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wider leading-none text-slate-300">Baixar na</span>
                  <span className="text-sm font-bold leading-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Fanned Smartphone Showcase */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Left Phone (Login) */}
            <div className="absolute left-[5%] sm:left-[10%] lg:left-[5%] top-1/2 -translate-y-[45%] w-[35%] max-w-[180px] z-10 -rotate-12 hover:-rotate-6 hover:-translate-y-[48%] transition-all duration-500 ease-out group">
              <img 
                src="/app-mockup-1-clean.webp" 
                alt="Tela de Login: Minha conta"
                className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] opacity-95 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute -left-4 sm:-left-8 top-1/4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Minha conta
              </div>
            </div>

            {/* Right Phone (Faturas) */}
            <div className="absolute right-[5%] sm:right-[10%] lg:right-[5%] top-1/2 -translate-y-[45%] w-[35%] max-w-[180px] z-10 rotate-12 hover:rotate-6 hover:-translate-y-[48%] transition-all duration-500 ease-out group">
              <img 
                src="/app-mockup-4-clean.webp" 
                alt="Tela de Faturas: Minhas faturas"
                className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] opacity-95 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute -right-4 sm:-right-8 top-1/4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Minhas faturas
              </div>
            </div>

            {/* Center Phone (Dashboard Principal) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] max-w-[240px] z-30 hover:-translate-y-[52%] transition-all duration-500 ease-out group">
              <img 
                src="/app-mockup-2-clean.webp" 
                alt="Tela Principal: Meus planos"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                fetchPriority="high"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-slate-100/50 text-sm font-bold text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Meus planos
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
