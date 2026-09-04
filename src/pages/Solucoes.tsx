import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Tv, Camera, BatteryCharging, Shield, Zap, MonitorPlay } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { company } from '../config/company';

export default function Solucoes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solucoes = [
    {
      id: "tv",
      title: "TV por Assinatura",
      icon: <Tv className="w-8 h-8 text-amber-500" />,
      description: "Mais de 100 canais em alta definição com esportes, filmes e entretenimento para toda a família.",
      features: [
        "Qualidade HD e 4K",
        "Grade completa de canais",
        "Ponto extra opcional",
        "Guia de programação inteligente"
      ],
      imgUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80"
    },
    {
      id: "cameras",
      title: "Câmeras de Segurança",
      icon: <Camera className="w-8 h-8 text-amber-500" />,
      description: "Monitoramento 24h em alta resolução. Proteja seu patrimônio e acompanhe tudo em tempo real pelo seu smartphone.",
      features: [
        "Acesso via Aplicativo",
        "Gravação em Nuvem",
        "Visão Noturna Avançada",
        "Instalação Especializada"
      ],
      imgUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
    },
    {
      id: "nobreak",
      title: "Nobreak Residencial",
      icon: <BatteryCharging className="w-8 h-8 text-amber-500" />,
      description: "Não fique sem internet quando a luz acabar. Nossos nobreaks garantem horas de autonomia para seu roteador.",
      features: [
        "Autonomia estendida",
        "Proteção contra surtos",
        "Design compacto",
        "Bateria de longa vida útil"
      ],
      imgUrl: "https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900">
      <SEO 
        title="Soluções Intertel | TV, Câmeras e Nobreak"
        description="Conheça nossas soluções completas de entretenimento e segurança. TV por assinatura, câmeras de monitoramento e nobreaks para manter você conectado."
        canonical="https://interteltelecom.net.br/solucoes"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-10 lg:py-14">
        <picture className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
            alt="Soluções Inteligentes Intertel"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              Soluções Completas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Mais <span className="text-amber-500">Conforto</span> e Segurança para Você
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Explore nossa linha de serviços avulsos de TV, Câmeras e Nobreaks. Contrate apenas o que você precisa, com a mesma qualidade e suporte técnico da Intertel.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      <section className="py-12 md:py-20 bg-zinc-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {solucoes.map((solucao, index) => (
            <div 
              key={solucao.id}
              id={solucao.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} scroll-mt-24`}
            >
              <div className="w-full lg:w-1/2 flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-amber-500/20 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                <img 
                  src={solucao.imgUrl} 
                  alt={solucao.title}
                  className="w-full h-80 sm:h-96 object-cover rounded-3xl shadow-xl relative z-10"
                />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-amber-100/50 shadow-sm">
                  {solucao.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900">
                  {solucao.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {solucao.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {solucao.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="rounded-full p-1 bg-amber-100 text-amber-600">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link
                    to="/contrato"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4B000] to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                  >
                    Quero contratar {solucao.title} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white font-display mb-6">
            Dúvidas sobre nossas soluções?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale agora mesmo com nossos especialistas. Estamos prontos para entender sua necessidade e recomendar a melhor opção.
          </p>
          <Link 
            to="/contrato"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
          >
            Falar com especialista <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
