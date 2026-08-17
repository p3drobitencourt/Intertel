import React, { useEffect } from'react';
import { Smartphone, Download, User, CreditCard, Wrench, Shield, ChevronRight, Apple, Play, FileText, Headphones } from'lucide-react';
import { BebancaIcon, BeeducaIcon, bebancaSva, beducaSva } from'../data/plans';
import SEO from'../components/seo/SEO';

import { company } from'../config/company';

export default function AppPage() {
 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 const appScreenshots = [
"/app-tela1.webp",
"/app-tela2.webp",
"/app-tela3.webp"
 ];

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

  {/* Benefícios (Movidos para a coluna esquerda) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="flex items-start gap-3">
  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
  <FileText className="w-5 h-5 text-blue-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-sm">Faturas e PIX</h4>
  <p className="text-xs text-slate-600 mt-0.5">Pague contas com rapidez, sem complicação.</p>
  </div>
  </div>
  
  <div className="flex items-start gap-3">
  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-sm">Desbloqueio</h4>
  <p className="text-xs text-slate-600 mt-0.5">Libere sua conexão instantaneamente.</p>
  </div>
  </div>

  <div className="flex items-start gap-3">
  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-sm">Consumo</h4>
  <p className="text-xs text-slate-600 mt-0.5">Acompanhe seus dados de forma transparente.</p>
  </div>
  </div>

  <div className="flex items-start gap-3">
  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
  <Headphones className="w-5 h-5 text-purple-600" />
  </div>
  <div>
  <h4 className="font-bold text-slate-900 text-sm">Suporte</h4>
  <p className="text-xs text-slate-600 mt-0.5">Abra chamados direto pelo app.</p>
  </div>
  </div>
  </div>

  {/* CTAs */}
  <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
  <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noopener noreferrer" id="CTA_GOOGLE_PLAY_APP" data-tracking="CTA_GOOGLE_PLAY" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-7 py-3.5 rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 w-full sm:w-auto shrink-0">
  <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
  </svg>
  <div className="text-left leading-tight">
  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">Disponível no</p>
  <p className="text-sm font-black tracking-tight text-white">Google Play</p>
  </div>
  </a>
  <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noopener noreferrer" id="CTA_APP_STORE_APP" data-tracking="CTA_APP_STORE" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-7 py-3.5 rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 w-full sm:w-auto shrink-0">
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.05 20.28c-.98.74-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 13.25 3.51 5.96 9.05 5.68c1.23.05 2.22.61 2.92.61.71 0 1.99-.71 3.42-.6 1.48.05 2.76.67 3.55 1.79-3.08 1.83-2.59 5.86.51 7.15-.69 2.05-1.52 4.1-2.4 5.65zm-4.74-15.11c-.04-2.45 1.95-4.52 4.39-4.66.19 2.62-2.14 4.69-4.39 4.66z"/>
  </svg>
  <div className="text-left leading-tight">
  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">Baixar na</p>
  <p className="text-sm font-black tracking-tight text-white">App Store</p>
  </div>
  </a>
  </div>
  </div>

  {/* COLUNA DIREITA: Visual Depth Stack Showcase */}
  <div className="w-full lg:w-[55%] relative flex justify-center items-center mt-8 lg:mt-0 min-h-[500px] sm:min-h-[600px] xl:min-h-[700px]">
  
  {/* Magnetic Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/15 blur-[120px] rounded-full -z-20 pointer-events-none" />

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

 {/* 4. Como acessar (Passos) */}
 <div className="pt-10 mt-10 border-t border-slate-200">
 <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
 Como acessar seus benefícios
 </h3>

 <div className="space-y-4">
 {/* Passo 1 */}
 <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
 <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200">1</div>
 <div>
 <h4 className="font-bold text-slate-900 text-lg">Baixe o App</h4>
 <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Faça o download nas lojas oficiais clicando nos botões acima.</p>
 </div>
 </div>

 {/* Passo 2 */}
 <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
 <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200">2</div>
 <div>
 <h4 className="font-bold text-slate-900 text-lg">Faça Login</h4>
 <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">No campo de acesso, digite apenas o <strong className="text-slate-900">CPF do titular</strong> do plano.</p>
 </div>
 </div>

 {/* Passo 3 */}
 <div className="flex gap-4 items-start p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
 <div className="w-14 h-14 rounded-full bg-[#F4B000] text-slate-900 flex items-center justify-center font-black text-lg shrink-0 shadow-lg shadow-amber-500/20 border border-amber-300">3</div>
 <div>
 <h4 className="font-bold text-slate-900 text-base">Aproveite os serviços extras!</h4>
 <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
 <a href={bebancaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-amber-200/50 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group">
 <div className="w-10 h-10 rounded-lg shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center">
 <BebancaIcon />
 </div>
 <div>
 <h5 className="font-bold text-slate-900 text-sm leading-none mb-1">Bebanca</h5>
 <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold leading-none">Jornais e Revistas</p>
 </div>
 </a>
 <a href={beducaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-200/50 hover:border-blue-400 shadow-sm hover:shadow-md transition-all group">
 <div className="w-10 h-10 rounded-lg shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center">
 <BeeducaIcon />
 </div>
 <div>
 <h5 className="font-bold text-slate-900 text-sm leading-none mb-1">Beduca</h5>
 <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold leading-none">Cursos Online</p>
 </div>
 </a>
 </div>
 <p className="text-sm text-slate-700 mt-4 leading-relaxed">
 Selecione <strong>Intertel Telecom</strong> como provedor nos aplicativos e use o <strong>CPF do titular</strong>.
 </p>
 </div>
 </div>
 </div>
 
 </div>
 </section>
 </div>
 );
}
