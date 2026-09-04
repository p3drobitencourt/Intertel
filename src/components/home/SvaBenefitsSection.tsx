import React from 'react';
import { BebancaIcon, BeeducaIcon } from '../../data/plans';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SvaBenefitsSection() {
  const benefits = [
    {
      id: "bebanca",
      name: "Bebanca",
      icon: <BebancaIcon />,
      description: "Tenha acesso a milhares de jornais e revistas digitais para ler quando e onde quiser. Informação de qualidade na palma da sua mão.",
      bg: "bg-amber-100/50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-900"
    },
    {
      id: "beeduca",
      name: "Beeduca",
      icon: <BeeducaIcon />,
      description: "Plataforma completa de educação e cursos profissionalizantes online. Invista no seu futuro sem pagar nada a mais por isso.",
      bg: "bg-slate-100/50",
      iconBg: "bg-slate-200",
      textColor: "text-slate-900"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 relative z-10">
      <div className="text-center space-y-3 mb-10">
        <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-900">
          Serviços Inclusos no Plano
        </h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Além de ultravelocidade, você ganha acesso exclusivo a serviços digitais de educação e informação.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <div 
            key={benefit.id}
            className={`rounded-3xl p-6 md:p-8 flex flex-col h-full border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${benefit.bg}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${benefit.iconBg}`}>
              {benefit.icon}
            </div>
            
            <h4 className={`text-xl font-bold mb-3 ${benefit.textColor}`}>
              {benefit.name}
            </h4>
            
            <p className="text-slate-700 leading-relaxed mb-8 flex-grow">
              {benefit.description}
            </p>

            <Link 
              to="/app"
              className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${benefit.textColor} hover:opacity-70`}
            >
              Conhecer Aplicativo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
