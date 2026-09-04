import React from"react";

export default function MarqueeBanner() {
 const features = [
"100% FIBRA ÓPTICA",
"INSTALAÇÃO GRATUITA",
"WI-FI GRÁTIS EM COMODATO",
"SIMETRIA ABSOLUTA DE BANDA",
"SUPORTE HUMANIZADO"
 ];

 // Repetir o conteúdo algumas vezes para garantir que o segmento seja mais largo que uma tela 4K
 // Assim, um único segmento cobrirá a tela toda. O Segmento B entra na sequência sem gaps.
 const segment = [...features, ...features, ...features, ...features, ...features];

 const SegmentRenderer = () => (
 <div className="flex items-center shrink-0">
 {segment.map((text, i) => (
 <React.Fragment key={i}>
 <span className="mx-4 sm:mx-6">{text}</span>
 <span className="opacity-50">•</span>
 </React.Fragment>
 ))}
 </div>
 );

 return (
 <div className="overflow-hidden flex whitespace-nowrap w-full relative bg-[#F4B000] border-y border-amber-500/30 py-3 sm:py-3.5 z-30 items-center shadow-md">
 <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] items-center text-slate-950 font-black tracking-[0.2em] uppercase text-[10px] sm:text-[11px]">
 <SegmentRenderer />
 <SegmentRenderer />
 </div>
 </div>
 );
}
