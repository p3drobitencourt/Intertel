import React from"react";
import { Check, Wifi, Zap, Star, User } from"lucide-react";

export default function VantagensSection() {
 return (
 <section className="py-6 md:py-5 bg-zinc-50 border-t border-slate-200 relative z-10" id="vantagens">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
 <h2 className="text-xs font-mono text-blue-600 uppercase tracking-[0.25em] font-bold">VANTAGENS EXCLUSIVAS</h2>
 <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">
 Por que a Intertel é uma boa escolha?
 </h1>
 <p className="text-slate-600 text-sm sm:text-base">
 Desenvolvemos conexões pensando em desempenho bruto, estabilidade e a melhor experiência para você.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all text-center space-y-4">
 <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
 <Check className="w-7 h-7" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 font-display">Simetria Absoluta de Banda</h3>
 <p className="text-slate-600 text-sm leading-relaxed">
 Navegue com velocidade idêntica tanto para downloads quanto para uploads. Envie arquivos pesados, faça lives em 4K e reuniões virtuais sem nenhuma perda de qualidade.
 </p>
 </div>

 <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all text-center space-y-4">
 <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
 <Wifi className="w-7 h-7" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 font-display">Equipamentos Wi-Fi Grátis</h3>
 <p className="text-slate-600 text-sm leading-relaxed">
 A empresa garante o uso em comodato durante todo o período que o cliente está com nossa empresa garantindo maior estabilidade, alcance ampliado e muito mais dispositivos conectados simultaneamente sem travamentos.
 </p>
 </div>

 <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all text-center space-y-4">
 <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
 <Zap className="w-7 h-7" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 font-display">Rede 100% Fibra Óptica</h3>
 <p className="text-slate-600 text-sm leading-relaxed">
 Sua conexão vai da nossa central direto para dentro da sua casa, sem interferências externas, garantindo o máximo de velocidade, baixíssima latência para jogos e altíssima confiabilidade.
 </p>
 </div>
 </div>

 {/* Testimonial Section */}
 <div className="mt-6 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-sm relative hover:shadow-md transition-shadow">
 <div className="relative shrink-0">
 <div className="w-14 h-14 rounded-full border-4 border-slate-300 bg-slate-100 flex items-center justify-center shadow-xl">
 <User className="w-7 h-7 text-slate-400" />
 </div>
 <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg text-slate-950">
 <Star className="w-5 h-5 text-slate-900 fill-slate-950" />
 </div>
 </div>
 <div className="space-y-4 text-center md:text-left mt-2 md:mt-0">
 <div className="flex justify-center md:justify-start gap-1">
 {[1, 2, 3, 4, 5].map((s) => (
 <Star key={s} className="w-5 h-5 text-amber-500 fill-amber-500" />
 ))}
 </div>
 <blockquote className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
"A estabilidade da conexão da Intertel superou minhas expectativas. Consigo trabalhar em home office sem quedas, e o Wi-Fi cobre muito bem todos os ambientes da minha casa. Recomendo o serviço!"
 </blockquote>
 <div>
 <p className="font-bold text-slate-900 text-sm">Cliente Intertel</p>
 <p className="text-xs text-slate-600">Assinante Residencial</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
