import React, { useEffect } from'react';
import { Layers, ShieldCheck, Lock, Activity, RefreshCw, Briefcase, ChevronRight } from'lucide-react';
import { getWhatsappLink } from'../utils/whatsapp';
import SEO from'../components/seo/SEO';

import { company } from'../config/company';

export default function Lan2Lan() {
 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 return (
 <>
 <SEO 
 title="Interligação LAN-to-LAN | Intertel Telecom"
 description="Conecte matriz e filiais de forma transparente na camada 2 (L2L). Tráfego simétrico, total segurança e latência mínima com a Intertel Telecom."
 canonical="https://interteltelecom.net.br/lan2lan"
 schema={[
 {
"@context":"https://schema.org",
"@type":"Service",
"name":"Interligação LAN-to-LAN (L2L)",
"provider": {"@id": company.schemaIds.organization },
"areaServed": {
"@type":"City",
"name":"São João da Mata"
 },
"description":"Conecte matriz e filiais de forma transparente na camada 2 (L2L). Tráfego simétrico, total segurança e latência mínima.",
"url":"https://interteltelecom.net.br/lan2lan"
 },
 {
"@context":"https://schema.org",
"@type":"WebPage",
"name":"Interligação LAN-to-LAN | Intertel Telecom",
"description":"Conecte matriz e filiais de forma transparente na camada 2 (L2L). Tráfego simétrico, total segurança e latência mínima com a Intertel Telecom.",
"url":"https://interteltelecom.net.br/lan2lan",
"isPartOf": {"@id": company.schemaIds.website }
 }
 ]}
 />
 {/* Hero Section */}
 <section className="relative overflow-hidden bg-slate-900 py-10 lg:py-14">
 <img 
 src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop"
 srcSet="
 https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=640&auto=format&fit=crop 640w,
 https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1024&auto=format&fit=crop 1024w,
 https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1920&auto=format&fit=crop 1920w
"
 sizes="100vw"
 alt=""
 fetchPriority="high"
 loading="eager"
 className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
 <Layers className="w-4 h-4" />
 Interligação de Redes
 </div>
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
 Conexão Transparente <br />
 <span className="text-blue-400">Ponto a Ponto (L2L)</span>
 </h1>
 <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
 Interligue sua matriz e filiais na camada 2 (L2) com segurança total. A solução ideal para redes corporativas que precisam centralizar servidores e sistemas sem tráfego na internet pública.
 </p>
 <div className="flex flex-wrap gap-4">
 <a 
 href={getWhatsappLink(null,'Interligação LAN-to-LAN')} 
 target="_blank" 
 rel="noopener noreferrer"
 id="CTA_LAN2LAN_CONSULTOR_HERO"
 data-tracking="CTA_EMPRESARIAL_CONSULTOR"
 className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Falar com consultor <ChevronRight className="w-5 h-5" />
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Context / Application Section */}
 <section className="py-12 md:py-16 bg-slate-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-6">
 A solução ideal para integrar seu negócio
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed mb-8">
 Empresas com múltiplas filiais enfrentam o desafio de manter sistemas sincronizados e dados seguros. Com nossa Interligação LAN-to-LAN (Camada 2), você unifica todas as suas unidades em uma única rede privada de alta velocidade, reduzindo custos operacionais e simplificando a gestão de TI.
 </p>
 </div>
 </div>
 </section>

 {/* Benefits Section */}
 <section className="py-12 md:py-16 bg-white relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="text-3xl font-black text-slate-900 font-display mb-4">Vantagens do LAN-to-LAN</h2>
 <p className="text-slate-600 text-lg">Nossa rede óptica foi estruturada para que as filiais da sua empresa funcionem como se estivessem na mesma sala da matriz.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
 { icon: ShieldCheck, title:"Segurança de Dados", desc:"Os dados não passam pela internet pública. A comunicação ocorre em um circuito virtual privado e totalmente isolado." },
 { icon: Activity, title:"Banda Simétrica", desc:"Mesma velocidade para download e upload, fundamental para replicação de banco de dados e sistemas ERP." },
 { icon: Lock, title:"Sem Limite de Tráfego", desc:"Transfira terabytes de dados sem franquia ou redução de velocidade no final do mês." },
 { icon: RefreshCw, title:"Transparência L2", desc:"Suporta passagem de VLANs (Q-in-Q) e qualquer protocolo de roteamento, como OSPF, BGP e EIGRP." },
 { icon: Layers, title:"Centralização", desc:"Reduza custos centralizando servidores, PABX IP, firewalls e storage em um único Data Center." },
 { icon: Briefcase, title:"SLA Corporativo", desc:"Garantia de 99,9% de disponibilidade com equipe técnica de plantão 24/7 para suporte especializado." }
 ].map((item, idx) => (
 <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
 <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 transition-colors duration-300">
 <item.icon className="w-7 h-7 text-blue-600" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Seção Institucional de Contato */}
 <section className="py-16 md:py-20 bg-blue-950 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="max-w-2xl">
 <h2 className="text-3xl font-black text-white font-display mb-4">
 Simplifique a estrutura da sua empresa
 </h2>
 <p className="text-lg text-blue-100">
 Fale com um dos nossos consultores e descubra a viabilidade para interligar os pontos da sua empresa com fibra óptica.
 </p>
 </div>
 <div className="shrink-0">
 <a 
 href={getWhatsappLink(null,'Interligação LAN-to-LAN')} 
 target="_blank" 
 rel="noopener noreferrer"
 id="CTA_LAN2LAN_REUNIAO"
 data-tracking="CTA_EMPRESARIAL_REUNIAO"
 className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
 >
 Solicitar Projeto <ChevronRight className="w-5 h-5" />
 </a>
 </div>
 </div>
 </section>
 </>
 );
}
