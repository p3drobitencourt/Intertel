import React from"react";
import { MapPin, Headphones } from"lucide-react";
import { company } from"../../config/company";

export default function ContatoSection() {
 return (
 <section className="py-8 md:py-8 bg-zinc-50 relative z-10" id="contato">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Contato e Onde Estamos</h2>
 <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
 Venha nos visitar e conhecer de perto nossa infraestrutura ou fale conosco pelos canais abaixo.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
 <div className="col-span-1 space-y-6 flex flex-col">
 <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
 <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-5 text-blue-600 shadow-sm">
 <MapPin className="w-8 h-8" />
 </div>
 <h3 className="font-bold text-slate-900 text-lg mb-3">Endereço Matriz</h3>
 <p className="text-slate-600 text-sm leading-relaxed">
 {company.address.street.split(' -')[0]} - {company.address.street.split(' -')[1]}<br />
 {company.address.city} - {company.address.state}<br />
 CEP: {company.address.postalCode}, {company.address.country ==='BR' ?'Brasil' : company.address.country}
 </p>

 <h3 className="font-bold text-slate-900 text-lg mt-8 mb-3">Horário de Atendimento</h3>
 <div className="space-y-4">
 <div>
 <h4 className="text-sm font-bold text-slate-800">Presencial</h4>
 <p className="text-slate-600 text-xs mt-1">Segunda a Sexta: 08h às 17h</p>
 </div>
 <div>
 <h4 className="text-sm font-bold text-slate-800">Callcenter</h4>
 <p className="text-slate-600 text-xs mt-1">Segunda a Sexta: 08h às 20h</p>
 <p className="text-slate-600 text-xs">Sáb, Dom e Feriados: 08h às 17h</p>
 </div>
 </div>
 </div>

 <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
 <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-5 text-amber-600 shadow-sm">
 <Headphones className="w-8 h-8" />
 </div>
 <h3 className="font-bold text-slate-900 text-lg mb-3">Fale Conosco</h3>
 <div className="space-y-3">
 <p className="text-slate-600 text-sm flex items-start gap-2">
 <span className="font-semibold text-slate-800 shrink-0">WhatsApp:</span>
 <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{company.phoneDisplay}</a>
 </p>
 <p className="text-slate-600 text-sm flex items-start gap-2">
 <span className="font-semibold text-slate-800 shrink-0">Suporte:</span>
 <a href={`mailto:${company.email.noc}`} className="text-blue-600 hover:underline break-all">{company.email.noc}</a>
 </p>
 <p className="text-slate-600 text-sm flex items-start gap-2">
 <span className="font-semibold text-slate-800 shrink-0">Financeiro:</span>
 <a href={`mailto:${company.email.financeiro}`} className="text-blue-600 hover:underline break-all">{company.email.financeiro}</a>
 </p>
 </div>
 </div>
 </div>

 <div 
 className="col-span-1 md:col-span-2 flex h-full relative group cursor-pointer rounded-2xl overflow-hidden" 
 onClick={() => window.open(company.address.mapsLink, '_blank', 'noopener,noreferrer')}
 >
  <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
  <div className="bg-white text-blue-950 font-bold px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
  <MapPin className="w-5 h-5 text-amber-500" />
  Traçar Rota até a Intertel
  </div>
  </div>
  <iframe 
    title="Localização da Intertel Telecom no Google Maps"
    src={company.address.mapsEmbedLink}
    className="w-full h-full min-h-[300px] shadow-xl border-0 ring-1 ring-slate-900/5 relative z-0 pointer-events-none"
    allowFullScreen={true} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
 </div>
 </div>
 </div>
 </section>
 );
}
