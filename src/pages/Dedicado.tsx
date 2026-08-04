import React from 'react';
import { Network, Shield, Zap, Server, BarChart3, Clock, ChevronRight } from 'lucide-react';

export default function Dedicado() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 dark:bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent"></div>
        
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
              Trânsito IP premium para ISPs e grandes corporações. Rotas otimizadas, redundância de backbone e estabilidade absoluta para o seu AS.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+tenho+interesse+em+Link+Dedicado+para+provedor&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300"
              >
                Falar com Engenheiro <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative">
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
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Pronto para elevar o nível do seu ISP?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Agende uma reunião técnica com nossa equipe de engenharia e descubra como podemos escalar a capacidade do seu provedor.</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+agendar+uma+reuni%C3%A3o+sobre+Link+Dedicado&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-blue-950 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 dark:hover:bg-slate-100 hover:shadow-xl transition-all duration-300"
          >
            Agendar Reunião Técnica
          </a>
        </div>
      </section>
    </div>
  );
}
