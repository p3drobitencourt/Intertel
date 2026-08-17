import React from "react";
import { Smartphone, ShieldCheck, Zap, HelpCircle } from "lucide-react";

export default function AppPromoSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden" id="app-promo">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              App Intertel
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight font-display tracking-tight">
              Tenha a Intertel na <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">palma da sua mão</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Autonomia total para gerenciar sua conexão. Tudo que você precisa, disponível 24 horas por dia, direto no seu celular.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Consultar e Pagar Faturas</h4>
                  <p className="text-slate-600 text-sm">Acesse 2ª via e pague rapidamente via Pix Copia e Cola.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-100 p-1 rounded-full text-amber-700 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Promessa de Pagamento</h4>
                  <p className="text-slate-600 text-sm">Libere sua conexão imediatamente com apenas um clique.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-700 shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Suporte e Serviços</h4>
                  <p className="text-slate-600 text-sm">Acompanhe seu consumo e abra chamados técnicos.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="CTA_GOOGLE_PLAY_PROMO" 
                data-tracking="CTA_GOOGLE_PLAY" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 shrink-0"
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
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 shrink-0"
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

          {/* Right Column: 3-Phone Commercial Composition */}
          <div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center mt-8 lg:mt-0 perspective-1000">
            
            {/* Left Phone (Login) */}
            <div className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-[40%] max-w-[200px] z-10 -rotate-6 sm:-rotate-12 transform-gpu transition-transform hover:-translate-y-2 hover:-rotate-3 duration-500">
              <img 
                src="/app-mockup-1.webp" 
                alt="Tela de Login do App Intertel"
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

            {/* Right Phone (Faturas) */}
            <div className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-[40%] max-w-[200px] z-10 rotate-6 sm:rotate-12 transform-gpu transition-transform hover:-translate-y-2 hover:rotate-3 duration-500">
              <img 
                src="/app-mockup-4.webp" 
                alt="Tela de Faturas do App Intertel"
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

            {/* Center Phone (Dashboard Principal) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] max-w-[280px] z-30 transform-gpu transition-transform hover:-translate-y-4 duration-500">
              <img 
                src="/app-mockup-2.webp" 
                alt="Tela Principal do App Intertel"
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
                fetchPriority="high"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
