import React, { useEffect } from'react';
import { Link } from'react-router-dom';
import SEO from'../components/seo/SEO';
import { ArrowRight, Check, Star, Radio as RadioIcon, ChevronDown } from'lucide-react';

import { company } from'../config/company';

export default function Radio({ radioPlansData, billingCycle, startOnboarding }: any) {
 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 return (
 <>
 <SEO 
 title="Internet Via Rádio para Zonas Rurais | Intertel Telecom"
 description="Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Planos com alta estabilidade e suporte técnico especializado da Intertel."
 canonical="https://interteltelecom.net.br/radio"
 schema={[
 {
"@context":"https://schema.org",
"@type":"Service",
"name":"Internet Via Rádio",
"provider": {"@id": company.schemaIds.organization },
"areaServed": {
"@type":"City",
"name":"São João da Mata"
 },
"description":"Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Planos com alta estabilidade.",
"url":"https://interteltelecom.net.br/radio"
 },
 {
"@context":"https://schema.org",
"@type":"WebPage",
"name":"Internet Via Rádio para Zonas Rurais | Intertel Telecom",
"description":"Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Planos com alta estabilidade e suporte técnico especializado da Intertel.",
"url":"https://interteltelecom.net.br/radio",
"isPartOf": {"@id": company.schemaIds.website }
 }
 ]}
 />
 {/* Hero Section */}
 <section className="relative overflow-hidden bg-blue-950 py-10 lg:py-14">
  <picture className="absolute inset-0 w-full h-full">
  <source media="(min-width: 1024px)" srcSet="/assets/hero-residential-1920.webp" />
  <source media="(min-width: 640px)" srcSet="/assets/hero-residential-1024.webp" />
  <img 
  src="/assets/hero-residential-640.webp"
  alt="Internet Rural Intertel Telecom"
  fetchPriority="high"
  loading="eager"
  className="w-full h-full object-cover object-[center_30%] opacity-20 mix-blend-overlay"
  />
  </picture>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/20"></div>
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
 <RadioIcon className="w-4 h-4" />
 Para Zonas Rurais e Sítios
 </div>
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
 Internet Via Rádio com <span className="text-amber-500">Alta Estabilidade</span>
 </h1>
 <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
 Nós levamos conexão aonde a fibra ainda não chega. Estrutura robusta para garantir que sua fazenda ou sítio continue sempre online.
 </p>
 <div className="flex flex-wrap gap-4">
 <a 
 href="#planos-radio" 
 onClick={(e) => {
 e.preventDefault();
 document.getElementById('planos-radio')?.scrollIntoView({ behavior:'smooth' });
 }}
 className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Ver Planos Disponíveis <ChevronDown className="w-5 h-5" />
 </a>
 </div>
 </div>
 </div>
 </section>



 {/* 3. RESIDENTIAL RADIO PLANS SECTION */}
 <section className="py-12 md:py-16 bg-zinc-50 relative z-10" id="planos-radio">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
 <span className="block text-xs font-mono text-amber-500 uppercase tracking-[0.25em] font-bold mb-2">
 TECNOLOGIA RURAL
 </span>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900">
 Planos Rádio
 </h2>
 <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
 Conexão de qualidade via rádio para áreas afastadas e zonas rurais. Todos os planos contam com suporte especializado da Intertel.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 justify-center items-stretch pt-10">
 {radioPlansData.map((plan: any) => (
 <div
 key={plan.id}
 className={`relative flex flex-col h-full bg-white rounded-2xl p-5 md:p-6 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/50 ${
 plan.isPopular 
 ?"border-[#F4B000] border-2 shadow-[0_10px_40px_rgb(244,176,0,0.2)] xl:scale-105 xl:z-10" 
 :"border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl"
 }`}
 >
 {plan.isPopular && (
 <div className="absolute -top-4 inset-x-0 flex justify-center">
 <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5">
 <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS ESCOLHIDO
 </span>
 </div>
 )}
 <div className="space-y-6">
 <div>
 <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">{plan.name}</h3>
 <div className="mt-4 flex items-baseline gap-1 text-slate-900">
 <span className="text-5xl font-black font-display tracking-tighter">{plan.speed}</span>
 <span className="text-sm font-bold text-slate-500">+ Wi-Fi</span>
 </div>
 </div>
 {/* Value Added Services */}
 {plan.svas && plan.svas.length > 0 && (
 <div className="pt-6 border-t border-slate-100">
 <p className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold mb-3">Serviços Digitais Inclusos:</p>
 <div className="flex flex-col gap-2">
 {plan.svas.map((sva: any, idx: number) => (
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

 <ul className="space-y-2 pt-4">
 {plan.features.map((feature: string, idx: number) => (
 <li key={idx} className="flex items-center gap-2.5 text-[13px] text-slate-700 font-medium">
 <div className={`rounded-full p-1 shrink-0 ${plan.isPopular ?'bg-amber-100 text-amber-600' :'bg-blue-50 text-blue-600'}`}>
 <Check className="w-3 h-3 stroke-[3]" />
 </div>
 <span className="leading-snug">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="mt-auto pt-5 border-t border-slate-100">
 <button 
 onClick={() => startOnboarding(plan,'Internet via Rádio')}
 aria-label={`Contratar plano ${plan.name}`}
 id={`CTA_PLANO_${plan.id.toUpperCase()}`}
 data-tracking="CTA_PLANO_RADIO"
 className={`w-full py-3.5 rounded-xl font-bold text-[13px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
 plan.isPopular
 ?"bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 :"bg-blue-950 hover:bg-blue-900 text-white active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 }`}
 >
 Quero este plano
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-12 md:py-16 bg-blue-950">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-black text-white font-display mb-6">
 Leve internet para onde você precisa
 </h2>
 <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
 Seja no sítio, na fazenda ou em áreas afastadas, nós temos a solução. Fale com um consultor e verifique a viabilidade.
 </p>
 <button 
 onClick={() => startOnboarding(null,'Internet via Rádio')}
 id="CTA_CONSULTAR_DISPONIBILIDADE_RADIO"
 data-tracking="CTA_CONSULTAR_DISPONIBILIDADE"
 className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Consultar Viabilidade <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </section>
 </>
 );
}
