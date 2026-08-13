import React, { useEffect } from 'react';
import { Layers, ShieldCheck, Lock, Activity, RefreshCw, Briefcase, ChevronRight } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Lan2Lan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Interligação LAN-to-LAN | Intertel Telecom"
        description="Conecte matriz e filiais de forma transparente na camada 2 (L2L). Tráfego simétrico, total segurança e latência mínima."
        canonical="https://interteltelecom.net.br/lan2lan"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 py-10 lg:py-14">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Layers className="w-4 h-4" />
              Interligação de Redes
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
              Conexão Transparente <br />
              <span className="text-blue-400">Ponto a Ponto (L2L)</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Interligue sua matriz e filiais na camada 2 (L2) com segurança total. A solução ideal para redes corporativas que precisam centralizar servidores e sistemas sem tráfego na internet pública.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+tenho+interesse+em+Interliga%C3%A7%C3%A3o+LAN-to-LAN&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                id="CTA_LAN2LAN_CONSULTOR_HERO"
                data-tracking="CTA_EMPRESARIAL_CONSULTOR"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
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
              A solução ideal para integrar seu negócio
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Empresas com múltiplas filiais enfrentam o desafio de manter sistemas sincronizados e dados seguros. Com nossa Interligação LAN-to-LAN (Camada 2), você unifica todas as suas unidades em uma única rede privada de alta velocidade, reduzindo custos operacionais e simplificando a gestão de TI.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mb-4">Vantagens do LAN-to-LAN</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Nossa rede óptica foi estruturada para que as filiais da sua empresa funcionem como se estivessem na mesma sala da matriz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Segurança de Dados", desc: "Os dados não passam pela internet pública. A comunicação ocorre em um circuito virtual privado e totalmente isolado." },
              { icon: Activity, title: "Banda Simétrica", desc: "Mesma velocidade para download e upload, fundamental para replicação de banco de dados e sistemas ERP." },
              { icon: Lock, title: "Sem Limite de Tráfego", desc: "Transfira terabytes de dados sem franquia ou redução de velocidade no final do mês." },
              { icon: RefreshCw, title: "Transparência L2", desc: "Suporta passagem de VLANs (Q-in-Q) e qualquer protocolo de roteamento, como OSPF, BGP e EIGRP." },
              { icon: Layers, title: "Centralização", desc: "Reduza custos centralizando servidores, PABX IP, firewalls e storage em um único Data Center." },
              { icon: Briefcase, title: "SLA Corporativo", desc: "Garantia de 99,9% de disponibilidade com equipe técnica de plantão 24/7 para suporte especializado." }
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
              Simplifique a estrutura da sua empresa
            </h2>
            <p className="text-lg text-blue-100">
              Fale com um dos nossos consultores e descubra a viabilidade para interligar os pontos da sua empresa com fibra óptica.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+quero+falar+com+um+consultor+sobre+viabilidade+para+LAN-to-LAN&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noreferrer"
              id="CTA_LAN2LAN_REUNIAO"
              data-tracking="CTA_EMPRESARIAL_REUNIAO"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              Solicitar Projeto <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
