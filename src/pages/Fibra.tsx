import React, { useEffect } from'react';
import { Link } from'react-router-dom';
import { ArrowRight, Check, Star, Wifi, ChevronDown } from'lucide-react';
import FaqSection from'../components/home/FaqSection';
import PlanBenefitsSection from '../components/home/PlanBenefitsSection';
import SEO from'../components/seo/SEO';

import { company } from'../config/company';

export default function Fibra({ plansData, billingCycle, startOnboarding, bebancaSva, beducaSva }: any) {
 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 return (
 <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
 <SEO 
 title="Internet Fibra Óptica Residencial | Intertel Telecom"
 description="Conecte sua casa com planos 100% fibra óptica. Navegação, streaming e jogos sem travamentos. Conheça a Ultravelocidade Intertel."
 canonical="https://interteltelecom.net.br/fibra"
 schema={[
 {
"@context":"https://schema.org",
"@type":"Service",
"name":"Internet Fibra Óptica Residencial",
"provider": {"@id": company.schemaIds.organization },
"areaServed": {
"@type":"City",
"name":"São João da Mata"
 },
"description":"Conecte sua casa com planos 100% fibra óptica. Navegação, streaming e jogos sem travamentos.",
"url":"https://interteltelecom.net.br/fibra"
 },
 {
"@context":"https://schema.org",
"@type":"WebPage",
"name":"Internet Fibra Óptica Residencial | Intertel Telecom",
"description":"Conecte sua casa com planos 100% fibra óptica. Navegação, streaming e jogos sem travamentos. Conheça a Ultravelocidade Intertel.",
"url":"https://interteltelecom.net.br/fibra",
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
  alt="Família conectada com internet de alta velocidade"
  fetchPriority="high"
  loading="eager"
  className="w-full h-full object-cover object-[center_30%] opacity-20 mix-blend-overlay"
  />
  </picture>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/20"></div>
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
 <Wifi className="w-4 h-4" />
 100% Fibra Óptica
 </div>
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
 Planos Residenciais com <span className="text-amber-500">Ultravelocidade</span>
 </h1>
 <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
 Conecte toda a família com a verdadeira estabilidade. Tecnologia de ponta, roteadores modernos e streaming em 4K sem travamentos para a sua casa.
 </p>
 <div className="flex flex-wrap gap-4">
 <a 
 href="#planos-fibra" 
 onClick={(e) => {
 e.preventDefault();
 document.getElementById('planos-fibra')?.scrollIntoView({ behavior:'smooth' });
 }}
 className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Ver Planos Disponíveis <ChevronDown className="w-5 h-5" />
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* 3. RESIDENTIAL CONVERGENT PLANS SECTION */}
 <section className="py-12 md:py-16 bg-zinc-50 relative z-10" id="planos-fibra">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center space-y-4 max-w-3xl mx-auto">
 <span className="block text-xs font-mono text-blue-600 uppercase tracking-[0.25em] font-bold mb-2">
 TECNOLOGIA RESIDENCIAL
 </span>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900">
 Planos Fibra Cidade
 </h2>
 <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
 Selecione o plano ideal para suas necessidades na cidade. Todos contam com Wi-Fi grátis, sem taxa de instalação e aplicativos exclusivos.
 </p>

 {/* Note: the billing cycle toggle could be here, or we can just show the plans directly */}
 </div>

 <div className="relative mt-8">
 {/* Scroll indicator for mobile */}
 <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 xl:hidden flex flex-col items-center justify-center opacity-50">
 <svg className="w-6 h-6 motion-safe:animate-bounce-x text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
 </div>
 
 <div className="flex xl:grid xl:grid-cols-4 gap-4 xl:gap-6 justify-start xl:justify-center items-stretch overflow-x-auto xl:overflow-visible snap-x snap-mandatory pb-8 pt-10 px-4 -mx-4 hide-scrollbar">
 {plansData.map((plan: any, index: number) => {
 const isPopular = plan.isPopular;

 return (
 <div
 key={plan.id}
 className={`relative flex-none snap-center min-w-[85vw] sm:min-w-[320px] w-full max-w-sm xl:max-w-none xl:w-auto flex flex-col h-full justify-between bg-white rounded-2xl p-5 md:p-6 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/50 ${
 isPopular 
 ?"border-[#F4B000] border-2 shadow-[0_10px_40px_rgb(244,176,0,0.2)] xl:scale-105 xl:z-10" 
 :"border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl"
 }`}
 >
 {isPopular && (
 <div className="absolute -top-4 inset-x-0 flex justify-center">
 <span className="bg-gradient-to-r from-[#F4B000] to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5">
 <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS ESCOLHIDO
 </span>
 </div>
 )}
 
 <div className="mb-8 flex-grow">
 <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{plan.name}</h3>
 <div className="flex items-baseline mb-2">
 {(() => {
 const [value, unit] = plan.speed.split(' ');
 return (
 <>
 <span className="text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-none">{value}</span>
 <div className="flex flex-col ml-2 justify-end pb-1">
 <span className="text-lg font-bold text-slate-500 uppercase leading-none tracking-wider mb-1">{unit}</span>
 <span className="text-[11px] font-bold text-amber-500 uppercase bg-amber-50 px-2 py-0.5 rounded-full inline-block">+ Wi-Fi</span>
 </div>
 </>
 );
 })()}
 </div>
 <p className="text-sm text-slate-600 mt-4 leading-relaxed min-h-[40px] font-medium">{plan.description}</p>
 </div>
 
 <ul className="space-y-2 pt-4">
 {plan.features.map((feature: string, idx: number) => (
 <li key={idx} className="flex items-center gap-2.5 text-[13px] text-slate-700 font-medium">
 <div className={`rounded-full p-1 shrink-0 ${isPopular ?'bg-amber-100 text-amber-600' :'bg-blue-50 text-blue-600'}`}>
 <Check className="w-3 h-3 stroke-[3]" />
 </div>
 <span className="leading-snug">{feature}</span>
 </li>
 ))}
 </ul>
 
 <div className="mt-auto pt-5 border-t border-slate-100">
 <Link
 to="/contrato"
 aria-label={`Contratar plano ${plan.name}`}
 id={`CTA_PLANO_${plan.id.toUpperCase()}`}
 data-tracking="CTA_PLANO_RESIDENCIAL"
 className={`w-full py-4 rounded-xl font-bold text-[13px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 ${
 isPopular
 ?"bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-[0_0_15px_rgba(244,176,0,0.4)] hover:shadow-[0_0_25px_rgba(244,176,0,0.6)] hover:-translate-y-0.5 active:scale-95"
 :"bg-slate-900 hover:bg-slate-800 text-white active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-0.5"
 }`}
 >
 ASSINAR JÁ 
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 </section>

 <PlanBenefitsSection isRadio={false} />

 <FaqSection category="fibra" onContactSupport={() => startOnboarding(null,'Internet Fibra')} />

 {/* CTA Final */}
 <section className="py-12 md:py-16 bg-blue-950">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-black text-white font-display mb-6">
 Pronto para transformar sua conexão?
 </h2>
 <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
 Escolha a estabilidade que a sua casa merece. Converse agora com nossos especialistas e descubra a melhor opção para você.
 </p>
 <Link
 to="/contrato"
 id="CTA_CONSULTAR_DISPONIBILIDADE_FIBRA"
 data-tracking="CTA_CONSULTAR_DISPONIBILIDADE"
 className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Consultar disponibilidade <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </section>
 </div>
 );
}
