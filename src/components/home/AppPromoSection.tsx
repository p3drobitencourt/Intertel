import React from "react";
import { Link } from "react-router-dom";
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
              O controle da sua conexão na palma da mão
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Consulte seus planos, acompanhe o consumo, acesse faturas e resolva tudo pelo App Intertel.
            </p>

            {/* Clear, direct benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-blue-700" strokeWidth={3} />
                </div>
                Meus planos
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-blue-700" strokeWidth={3} />
                </div>
                Minhas faturas
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-blue-700" strokeWidth={3} />
                </div>
                Pagamentos via PIX
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-blue-700" strokeWidth={3} />
                </div>
                Suporte ágil
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
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95 shrink-0"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
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
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95 shrink-0"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
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
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
            
            {/* Left Phone (Login) */}
            <div className="absolute left-[2%] sm:left-[8%] lg:left-[2%] top-1/2 -translate-y-[45%] w-[35%] max-w-[190px] z-10 -rotate-12 hover:-rotate-6 hover:-translate-y-[48%] transition-all duration-500 ease-out group">
              <img 
                src="/app-tela1.png" 
                alt="Tela de Login: Minha conta"
                className="w-full h-auto rounded-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] opacity-95 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <Link to="/app" className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-200/50 text-[10px] sm:text-xs font-bold text-slate-700 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap hover:bg-white hover:text-amber-500 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Minhas contas
              </Link>
            </div>

            {/* Right Phone (Faturas) */}
            <div className="absolute right-[2%] sm:right-[8%] lg:right-[2%] top-1/2 -translate-y-[45%] w-[35%] max-w-[190px] z-10 rotate-12 hover:rotate-6 hover:-translate-y-[48%] transition-all duration-500 ease-out group">
              <img 
                src="/app-tela3.png" 
                alt="Tela de Faturas: Minhas faturas"
                className="w-full h-auto rounded-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] opacity-95 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <Link to="/app" className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-200/50 text-[10px] sm:text-xs font-bold text-slate-700 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap hover:bg-white hover:text-amber-500 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Minhas faturas
              </Link>
            </div>

            {/* Center Phone (Dashboard Principal) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[48%] w-[45%] max-w-[260px] z-30 hover:-translate-y-[52%] transition-all duration-500 ease-out group scale-105">
              <img 
                src="/app-tela2.png" 
                alt="Tela Principal: Meus planos"
                className="w-full h-auto rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
                fetchPriority="high"
              />
              <Link to="/fibra" className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-xl shadow-blue-900/10 border border-slate-100 text-xs sm:text-sm font-bold text-blue-700 opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:bg-blue-50 hover:text-blue-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Meus planos
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
