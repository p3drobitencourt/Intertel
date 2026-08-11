import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialSection() {
  // Conteúdo provisório - será substituído por depoimentos reais posteriormente.
  const testimonials = [
    {
      name: "João Silva (Exemplo)",
      role: "Cliente Residencial",
      text: "[Conteúdo provisório] A internet é muito estável. Antes eu tinha problemas para jogar online, mas agora o ping é excelente e não cai. Recomendo muito.",
      stars: 5
    },
    {
      name: "Maria Fernanda (Exemplo)",
      role: "Cliente Residencial",
      text: "[Conteúdo provisório] Instalação rápida e suporte atencioso. Toda a minha família consegue assistir Netflix em telas diferentes sem travar a conexão.",
      stars: 5
    },
    {
      name: "Carlos Eduardo (Exemplo)",
      role: "Cliente Residencial",
      text: "[Conteúdo provisório] O roteador incluso tem um alcance muito bom. Consigo trabalhar em home office de qualquer lugar da casa com tranquilidade.",
      stars: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A satisfação de quem já confia na estabilidade da nossa rede.
          </p>
          <span className="inline-block mt-4 px-3 py-1 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold tracking-wider rounded-md border border-amber-200">
            Espaço Provisório para Depoimentos Reais
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 dark:text-slate-700" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
