import React from 'react';
import { BebancaIcon, BeeducaIcon } from '../../data/plans';
import { ArrowRight, Wifi, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanBenefitsSection({ isRadio = false }: { isRadio?: boolean }) {
  const benefits = [
    {
      id: "conexao",
      name: isRadio ? "Internet Estável" : "Internet Ultra Fibra",
      icon: isRadio ? <Zap className="w-8 h-8" /> : <Wifi className="w-8 h-8" />,
      description: isRadio 
        ? "Conexão via rádio de alta performance para áreas rurais, garantindo estabilidade e alcance onde você precisa."
        : "Tecnologia 100% fibra óptica de ponta a ponta. Navegue com ultravelocidade e estabilidade, sem quedas ou lentidão.",
      bg: "bg-blue-50/50",
      iconBg: "bg-blue-100 text-blue-600",
      textColor: "text-blue-900"
    },
    {
      id: "beeduca",
      name: "InterEduca",
      icon: <BeeducaIcon />,
      description: "Plataforma completa de educação e cursos profissionalizantes online. Invista no seu futuro sem pagar nada a mais por isso.",
      bg: "bg-slate-100/50",
      iconBg: "bg-slate-200",
      textColor: "text-slate-900"
    },
    {
      id: "bebanca",
      name: "InterBanca",
      icon: <BebancaIcon />,
      description: "Tenha acesso a milhares de jornais e revistas digitais para ler quando e onde quiser. Informação de qualidade na palma da sua mão.",
      bg: "bg-amber-100/50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-900"
    },
    {
      id: "suporte",
      name: "Suporte VIP",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "Equipe técnica especializada pronta para atender você com agilidade e eficiência. Nosso compromisso é com a sua conexão.",
      bg: "bg-emerald-50/50",
      iconBg: "bg-emerald-100 text-emerald-600",
      textColor: "text-emerald-900"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 relative z-10">
      <div className="text-center space-y-3 mb-12">
        <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-900">
          Benefícios do Seu Plano
        </h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Muito além de uma conexão de internet. Aproveite serviços digitais e vantagens exclusivas pensadas para você e sua família.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div 
            key={benefit.id}
            className={`rounded-3xl p-6 flex flex-col h-full border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${benefit.bg}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${benefit.iconBg}`}>
              {benefit.icon}
            </div>
            
            <h4 className={`text-lg font-bold mb-3 ${benefit.textColor}`}>
              {benefit.name}
            </h4>
            
            <p className="text-slate-700 leading-relaxed mb-8 flex-grow text-[15px]">
              {benefit.description}
            </p>

            {(benefit.id === 'bebanca' || benefit.id === 'beeduca') && (
              <Link 
                to="/app"
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${benefit.textColor} hover:opacity-70`}
              >
                Conhecer Aplicativo <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
