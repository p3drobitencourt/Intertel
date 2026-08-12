import React, { useEffect } from 'react';
import { Network, Shield, Zap, Server, BarChart3, Clock, ChevronRight } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Dedicado() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Link Dedicado de Alta Performance para Provedores (ISPs) | Intertel"
        description="Trânsito IP premium, SLA de 99,9%, proteção DDoS e banda 100% garantida. Conectividade de missão crítica para escalar o seu provedor."
        canonical="https://interteltelecom.net.br/dedicado"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 py-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Network className="w-4 h-4" />
              Exclusivo para Provedores
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Link Dedicado de <span className="text-amber-500">Alta Performance</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Trânsito IP premium para provedores (ISPs) e conectividade corporativa garantida. Estabilidade absoluta, rotas otimizadas e proteção ativa para o seu ASN.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+tenho+interesse+em+Link+Dedicado+para+provedor&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Falar com consultor <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Context / Application Section */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display mb-6">
              Por que seu provedor precisa de um Link Dedicado?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Provedores de internet não podem depender de conexões comuns. Você precisa de um trânsito IP robusto que suporte o alto tráfego dos seus clientes simultâneos sem gargalos, garantindo que a sua marca entregue a melhor experiência.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">Por que escolher o Trânsito IP Intertel?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Nossa infraestrutura foi desenhada para não falhar. Conheça os diferenciais que garantem a entrega máxima para os seus clientes finais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              { icon: Zap, title: "Latência Mínima", desc: "Rotas otimizadas para os principais CDNs e PTTs do Brasil (IX.br), garantindo o menor tempo de resposta." },
              { icon: Shield, title: "Proteção DDoS", desc: "Mitigação inteligente de ataques em múltiplas camadas para manter sua rede sempre disponível e limpa." },
              { icon: Server, title: "Sessão BGP", desc: "Suporte completo a IPv4 e IPv6, anúncio dos seus prefixos com total transparência de roteamento." },
              { icon: BarChart3, title: "Banda 100% Garantida", desc: "Sem overbooking. Entregamos exatamente a capacidade contratada, 24 horas por dia, 7 dias por semana." },
              { icon: Network, title: "Dupla Abordagem", desc: "Projetos em anel óptico com redundância física e lógica para garantir o SLA de 99,9% em contrato." },
              { icon: Clock, title: "NOC 24x7x365", desc: "Monitoramento proativo e atendimento de Nível 3 direto e sem burocracia para resolução imediata." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Institucional de Contato */}
      <section className="py-16 md:py-20 bg-blue-950 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-white font-display mb-4">
              Pronto para elevar o nível do seu ISP?
            </h2>
            <p className="text-lg text-blue-100">
              Agende uma reunião técnica com nossa equipe de engenharia e descubra como podemos escalar a capacidade do seu provedor.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+falar+com+um+consultor+sobre+Link+Dedicado&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              Agendar Reunião Técnica <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
