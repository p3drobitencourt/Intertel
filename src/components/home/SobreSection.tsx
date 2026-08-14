import React from "react";

export default function SobreSection() {
  return (
    <section className="py-6 md:py-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 relative z-10" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Sobre a <span className="text-blue-600 dark:text-blue-400 dark:text-blue-500 dark:text-blue-400">Intertel</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
            <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fundada no ano de 2018 no Município de São João da Mata no sul de Minas Gerais, a Intertel Telecom é um provedor de internet que investe em inovação e tecnologia para levar a seus clientes conexão de internet com estabilidade e qualidade.
            </p>
            <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Reconhecida como uma das melhores empresas de fornecimento de internet de sua região através da sua forma de trabalho, compromisso e comprometimento juntamente de um corpo técnico capacitado e bem treinado.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative p-8 bg-zinc-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center aspect-[16/9] lg:aspect-auto lg:h-full">
              <img 
                src="/logo-principal.png" 
                alt="Intertel Telecom"
                width="1600"
                height="1600"
                loading="lazy" 
                className="w-full h-auto max-w-[280px] object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-3 dark:rounded-xl dark:shadow-sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
