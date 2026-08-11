import React from "react";
import { Check, Wifi, Zap, Star } from "lucide-react";

export default function VantagensSection() {
  return (
    <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 border-t border-slate-200 relative z-10" id="vantagens">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] font-bold">VANTAGENS EXCLUSIVAS</h2>
          <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Por que a Intertel é uma boa escolha?
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Desenvolvemos conexões pensando em desempenho bruto, estabilidade e a melhor experiência para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Simetria Absoluta de Banda</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Navegue com velocidade idêntica tanto para downloads quanto para uploads. Envie arquivos pesados, faça lives em 4K e reuniões virtuais sem nenhuma perda de qualidade.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
              <Wifi className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Equipamentos Wi-Fi Grátis</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              A empresa garante o uso em comodato durante todo o período que o cliente está com nossa empresa garantindo maior estabilidade, alcance ampliado e muito mais dispositivos conectados simultaneamente sem travamentos.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1.5 transition-all text-center space-y-4">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Rede 100% Fibra Óptica</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Sua conexão vai da nossa central direto para dentro da sua casa, sem interferências externas, garantindo o máximo de velocidade, baixíssima latência para jogos e altíssima confiabilidade.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-6 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-sm">
          <div className="relative shrink-0">
            <img
              src="https://picsum.photos/seed/interteluser/160/160"
              alt="Foto de Cliente da Intertel"
              className="w-24 h-24 rounded-full border-4 border-slate-300 object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg text-slate-950">
              <Star className="w-5 h-5 text-slate-900 dark:text-white fill-slate-950" />
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <blockquote className="text-slate-700 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed">
              "Contratei o plano de 700 Mega da Intertel Telecom e estou impressionado. A latência para jogos competitivos reduziu para menos de 5ms e nunca mais tive quedas de conexão trabalhando em home office. O roteador Wi-Fi cobre meu apartamento inteiro!"
            </blockquote>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Rodrigo Mendes Salles</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Desenvolvedor Sênior - São João da Mata, MG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
