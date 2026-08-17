import React, { useEffect } from'react';
import { Smartphone, Download, User, CreditCard, Wrench, Shield, ChevronRight, Apple, Play, FileText, Headphones, Unlock, Activity } from'lucide-react';
import { BebancaIcon, BeeducaIcon, bebancaSva, beducaSva } from'../data/plans';
import SEO from'../components/seo/SEO';

import { company } from'../config/company';

export default function AppPage() {
 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 return (
 <div className="min-h-screen bg-white font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
 <SEO 
 title="App do Assinante | Intertel Telecom"
 description="Acesse faturas, acompanhe seu consumo e solicite suporte técnico direto pelo aplicativo do assinante da Intertel Telecom."
 canonical="https://interteltelecom.net.br/app"
 schema={[
 {
"@context":"https://schema.org",
"@type":"WebPage",
"name":"App do Assinante | Intertel Telecom",
"description":"Acesse faturas, acompanhe seu consumo e solicite suporte técnico direto pelo aplicativo do assinante da Intertel Telecom.",
"url":"https://interteltelecom.net.br/app",
"isPartOf": {"@id": company.schemaIds.website }
 }
 ]}
 />
 <section className="py-12 md:py-20 bg-white relative z-10 flex items-center min-h-[50vh]" id="app-intertel">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
  
  {/* COLUNA ESQUERDA: Textos, Benefícios e CTAs */}
  <div className="w-full lg:w-[45%] flex flex-col space-y-8">
  <div className="space-y-6">
  <div className="flex items-center gap-4">
  <img src="/icone-app.webp" alt="App Minha Intertel" width="215" height="204" className="w-16 h-16 rounded-2xl shadow-lg bg-white p-1" />
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
  <Smartphone className="w-5 h-5" /> App Minha Intertel
  </div>
  </div>
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-slate-900 leading-[1.1]">
  Resolva tudo sem <br className="hidden xl:block" /> <span className="text-blue-600">ligar no suporte.</span>
  </h1>
  <p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
  Tenha mais praticidade para cuidar dos seus serviços Intertel. Com o nosso aplicativo, você tem total autonomia para resolver as pendências do dia a dia sem filas de atendimento.
  </p>
  </div>

  {/* Benefícios (Refinados) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
  <div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
  <FileText className="w-6 h-6 text-blue-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-[15px] leading-tight">Faturas e PIX</h4>
  <p className="text-sm text-slate-600 mt-1 leading-relaxed">Pague contas com rapidez, sem complicação.</p>
  </div>
  </div>
  
  <div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm">
  <Unlock className="w-6 h-6 text-amber-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-[15px] leading-tight">Desbloqueio</h4>
  <p className="text-sm text-slate-600 mt-1 leading-relaxed">Libere sua conexão instantaneamente.</p>
  </div>
  </div>

  <div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
  <Activity className="w-6 h-6 text-emerald-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-[15px] leading-tight">Consumo</h4>
  <p className="text-sm text-slate-600 mt-1 leading-relaxed">Acompanhe seus dados de forma transparente.</p>
  </div>
  </div>

  <div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 shadow-sm">
  <Headphones className="w-6 h-6 text-purple-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-[15px] leading-tight">Suporte</h4>
  <p className="text-sm text-slate-600 mt-1 leading-relaxed">Abra chamados direto pelo app.</p>
  </div>
  </div>
  </div>

  {/* CTAs removidos da primeira dobra para focar a conversão no 'Como começar' */}
  </div>

  {/* COLUNA DIREITA: Visual Depth Stack Showcase */}
  <div className="w-full lg:w-[55%] relative flex justify-center items-center mt-8 lg:mt-0 min-h-[500px] sm:min-h-[600px] xl:min-h-[700px]">
  
  {/* Magnetic Glow (Subtle) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[100px] rounded-full -z-20 pointer-events-none" />

  {/* Depth Stack Container */}
  <div className="relative w-full max-w-lg h-[450px] sm:h-[550px] xl:h-[650px] flex items-center justify-center">
  
  {/* Left Back Phone (Login) */}
  <div className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-[45%] w-[45%] max-w-[200px] z-10 opacity-80 scale-90 -rotate-3 hover:opacity-100 hover:-translate-y-[48%] hover:-rotate-1 transition-all duration-700 ease-out">
    <img src="/app-tela1.png" alt="Tela de Login" className="w-full h-auto rounded-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]" loading="lazy" />
  </div>

  {/* Right Back Phone (Faturas) */}
  <div className="absolute right-[5%] sm:right-[10%] top-1/2 -translate-y-[45%] w-[45%] max-w-[200px] z-10 opacity-80 scale-90 rotate-3 hover:opacity-100 hover:-translate-y-[48%] hover:rotate-1 transition-all duration-700 ease-out">
    <img src="/app-tela3.png" alt="Tela de Faturas" className="w-full h-auto rounded-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]" loading="lazy" />
  </div>

  {/* Center Front Phone (Dashboard) */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] w-[55%] max-w-[250px] z-30 scale-100 hover:scale-105 hover:-translate-y-[52%] transition-transform duration-700 ease-out">
    <img src="/app-tela2.png" alt="Dashboard Principal" className="w-full h-auto rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]" fetchPriority="high" />
  </div>

  </div>
  </div>
 </div>
 </div>

  </section>

  {/* 4. Como começar (Passos) */}
  <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Como começar</h2>
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          Tenha sua Intertel sempre com você
        </h3>
        <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          O processo é simples. Baixe o aplicativo, entre na sua conta e gerencie todos os seus serviços de forma rápida e segura.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        {/* Desktop connecting line */}
        <div className="hidden md:block absolute top-[2.25rem] left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 -z-10" />

        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl font-black text-slate-900 mb-5 relative z-10 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
            01
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3">Baixe o aplicativo</h4>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-[280px]">Instale o app Intertel pela loja do seu celular e tenha o controle em suas mãos.</p>
          
          <div className="flex flex-col xl:flex-row gap-4 w-full max-w-[320px] xl:max-w-none mx-auto mt-4 justify-center items-center">
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel" 
              target="_blank" 
              rel="noopener noreferrer" 
              id="CTA_GOOGLE_PLAY_STEP1" 
              data-tracking="CTA_GOOGLE_PLAY" 
              className="flex flex-1 items-center justify-center gap-4 bg-slate-900 text-white px-5 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 w-full shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current shrink-0 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
              </svg>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Disponível no</span>
                <span className="text-[16px] font-black tracking-tight text-white">Google Play</span>
              </div>
            </a>
            <a 
              href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" 
              target="_blank" 
              rel="noopener noreferrer" 
              id="CTA_APP_STORE_STEP1" 
              data-tracking="CTA_APP_STORE" 
              className="flex flex-1 items-center justify-center gap-4 bg-slate-900 text-white px-5 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 w-full shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current shrink-0 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.74-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 13.25 3.51 5.96 9.05 5.68c1.23.05 2.22.61 2.92.61.71 0 1.99-.71 3.42-.6 1.48.05 2.76.67 3.55 1.79-3.08 1.83-2.59 5.86.51 7.15-.69 2.05-1.52 4.1-2.4 5.65zm-4.74-15.11c-.04-2.45 1.95-4.52 4.39-4.66.19 2.62-2.14 4.69-4.39 4.66z"/>
              </svg>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Baixar na</span>
                <span className="text-[16px] font-black tracking-tight text-white">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center group mt-8 md:mt-0">
          {/* Mobile connecting indicator */}
          <div className="md:hidden w-[2px] h-10 bg-gradient-to-b from-slate-200 to-slate-100 absolute -top-10 left-1/2 -translate-x-1/2" />

          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl font-black text-slate-900 mb-5 relative z-10 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
            02
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3">Acesse sua conta</h4>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-[280px]">Entre com seus dados para acessar seus serviços. O acesso é feito utilizando o <strong className="text-slate-900">CPF do titular</strong>.</p>
          
          <div className="w-full max-w-[160px] mx-auto mt-4 opacity-70 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10" />
            <img src="/app-tela1.png" alt="Tela de Login do App" className="w-full h-auto rounded-t-xl drop-shadow-xl" loading="lazy" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center group mt-8 md:mt-0">
          {/* Mobile connecting indicator */}
          <div className="md:hidden w-[2px] h-10 bg-gradient-to-b from-slate-200 to-slate-100 absolute -top-10 left-1/2 -translate-x-1/2" />

          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl font-black text-slate-900 mb-5 relative z-10 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
            03
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3">Tenha tudo na palma da mão</h4>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-[280px]">Consulte planos, faturas, pagamentos e suporte. Tudo organizado no mesmo lugar.</p>
          
          <div className="w-full max-w-[160px] mx-auto mt-4 opacity-70 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10" />
            <img src="/app-tela2.png" alt="Dashboard do App" className="w-full h-auto rounded-t-xl drop-shadow-xl" loading="lazy" />
          </div>
        </div>

      </div>

      {/* Serviços Adicionais Banner */}
      <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/40">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-slate-900 mb-2">Serviços adicionais</h4>
            <p className="text-slate-600">Aproveite os aplicativos extras incluídos no seu plano usando o CPF do titular.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href={bebancaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all bg-slate-50/50">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <BebancaIcon />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">Bebanca</h5>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Jornais e Revistas</p>
              </div>
            </a>
            <a href={beducaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all bg-slate-50/50">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <BeeducaIcon />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">Beduca</h5>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Cursos Online</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
 </div>
 );
}
