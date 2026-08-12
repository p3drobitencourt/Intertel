import React from "react";

export default function MarqueeBanner() {
  // O conteúdo base repetido várias vezes para garantir que exceda a largura da maior tela (4K+)
  const baseContent = (
    <>
      <span className="mx-4 sm:mx-6">100% FIBRA ÓPTICA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">INSTALAÇÃO GRATUITA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">WI-FI GRÁTIS EM COMODATO</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">SIMETRIA ABSOLUTA DE BANDA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">SUPORTE HUMANIZADO</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">100% FIBRA ÓPTICA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">INSTALAÇÃO GRATUITA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">WI-FI GRÁTIS EM COMODATO</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">SIMETRIA ABSOLUTA DE BANDA</span><span className="opacity-50">•</span>
      <span className="mx-4 sm:mx-6">SUPORTE HUMANIZADO</span><span className="opacity-50">•</span>
    </>
  );

  return (
    <div className="relative w-full bg-[#F4B000] border-y border-amber-500/30 py-3 sm:py-3.5 z-30 overflow-hidden flex items-center shadow-md">
      {/* Container flex com w-max para acomodar todos os blocos alinhados */}
      <div className="flex w-max whitespace-nowrap motion-safe:animate-marquee hover:[animation-play-state:paused] items-center text-slate-950 font-black tracking-[0.2em] uppercase text-[10px] sm:text-[11px]">
        {/* Dois blocos idênticos garantem que o loop do transform: translateX(-50%) seja perfeito */}
        <div className="flex items-center shrink-0">{baseContent}{baseContent}</div>
        <div className="flex items-center shrink-0">{baseContent}{baseContent}</div>
      </div>
    </div>
  );
}
