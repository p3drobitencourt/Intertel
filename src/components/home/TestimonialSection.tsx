import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
  {
  name: "João Silva",
  role: "Cliente Residencial",
  text: "A internet é muito estável. Antes eu tinha problemas para jogar online, mas agora o ping é excelente e não cai. Recomendo muito.",
  stars: 5
  },
  {
  name: "Maria Fernanda",
  role: "Cliente Residencial",
  text: "Instalação rápida e atendimento atencioso. Toda a minha família consegue assistir Netflix em telas diferentes sem travar a conexão.",
  stars: 5
  },
  {
  name: "Carlos Eduardo",
  role: "Cliente Residencial",
  text: "O roteador incluso tem um alcance muito bom. Consigo trabalhar em home office de qualquer lugar da casa com tranquilidade.",
  stars: 5
  }
  ];

  return (
  <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
  <h2 className="text-3xl font-black text-slate-900 font-display mb-4">
  O que dizem nossos clientes
  </h2>
  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
  A satisfação de quem já confia na estabilidade da nossa rede.
  </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {testimonials.map((t, idx) => (
  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 relative">
  <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
  <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">
  &quot;{t.text}&quot;
  </p>
  <div>
  <p className="font-bold text-slate-900">{t.name}</p>
  <p className="text-sm text-slate-500">{t.role}</p>
  </div>
  </div>
  ))}
  </div>
  </div>
  </section>
  );
}

