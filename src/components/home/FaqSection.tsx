import React, { useState } from "react";
import { ChevronUp, ChevronDown, MessageSquare } from "lucide-react";

interface FaqSectionProps {
  onContactSupport: () => void;
  category?: 'geral' | 'fibra' | 'empresas';
}

export default function FaqSection({ onContactSupport, category = 'geral' }: FaqSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const allFaqItems = [
    {
      categories: ['geral', 'fibra'],
      q: "A instalação da internet é realmente gratuita?",
      a: "Sim, absolutamente! A Intertel Telecom oferece instalação e ativação 100% gratuita para todas as contratações residenciais, independentemente do plano selecionado. Nossa equipe cuida de toda a fiação externa e configuração interna sem custo adicional."
    },
    {
      categories: ['geral', 'fibra'],
      q: "O que significa 'Equipamentos Wi-Fi Grátis em Comodato'?",
      a: "O regime de comodato significa que a Intertel empresta o roteador Wi-Fi (incluindo tecnologia de ponta) para você usar gratuitamente durante todo o período em que for nosso cliente. Não há nenhuma taxa de aluguel ou custo adicional pelo equipamento. Ao cancelar o serviço, basta devolver o aparelho."
    },
    {
      categories: ['geral', 'fibra', 'empresas'],
      q: "Como funciona a Simetria Absoluta de Banda?",
      a: "Simetria absoluta significa que você terá a mesma velocidade para Download (baixar arquivos, assistir vídeos) e Upload (enviar arquivos, fazer vídeo-chamadas, lives). Isso garante uma experiência de navegação muito mais rápida e estável, sem gargalos na hora de enviar conteúdos para a internet."
    },
    {
      categories: ['geral', 'fibra'],
      q: "A rede é realmente 100% Fibra Óptica?",
      a: "Sim! Nossa rede é 100% fibra óptica de ponta a ponta (FTTH - Fiber to the Home). Isso significa que a fibra óptica vai da nossa central diretamente para dentro da sua casa, sem passar por cabos de cobre antigos. Isso garante o máximo de velocidade, baixíssima latência para jogos online e imunidade a interferências elétricas e climáticas."
    },
    {
      categories: ['geral', 'fibra'],
      q: "Como funcionam os aplicativos de serviços inclusos (Bebanca e Beduca)?",
      a: "Nossos planos acompanham o Bebanca (app de notícias e biblioteca de livros) e Beduca (vídeo aulas para aperfeiçoamento técnico). Para utilizá-los, basta baixar o aplicativo correspondente na sua loja de aplicativos, selecionar a Intertel Telecom como provedor e fazer o login utilizando o seu CPF."
    },
    {
      categories: ['geral', 'fibra', 'empresas'],
      q: "Existe alguma taxa oculta ou limite de franquia mensal?",
      a: "Nenhum! Na Intertel você tem tráfego de dados verdadeiramente ilimitado, sem redução de velocidade ou franquia mensal. O preço contratado é exatamente o valor fixo cobrado em sua fatura mensal."
    },
    {
      categories: ['geral', 'fibra'],
      q: "Qual é o tempo médio para ativação e instalação física?",
      a: "Após a consulta de viabilidade bem-sucedida e assinatura digital do contrato, nossa equipe técnica agenda e realiza a instalação em sua casa no prazo máximo de até 24 a 48 horas úteis."
    },
    {
      categories: ['empresas'],
      q: "O Link Dedicado tem SLA garantido?",
      a: "Sim, nossos planos corporativos e de Link Dedicado contam com SLA de 4 horas para resposta técnica e reparo, assegurado em contrato, garantindo a continuidade das operações da sua empresa."
    },
    {
      categories: ['empresas'],
      q: "A Intertel fornece IP Fixo para empresas?",
      a: "Sim, fornecemos IPs Fixos e Trânsito IP com sessão BGP nativa para provedores e corporações que necessitam hospedar sistemas, servidores ou criar conexões seguras VPN / Lan-to-Lan."
    }
  ];

  const faqItems = allFaqItems.filter(item => item.categories.includes(category));

  return (
    <section className="py-6 md:py-5 bg-zinc-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 relative z-10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="block text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] font-bold mb-2">DÚVIDAS FREQUENTES</span>
          <h2 className="text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            FAQ Intertel • Tire Suas Dúvidas
          </h2>
          <p className="text-slate-600 dark:text-slate-200 text-sm">
            As principais perguntas dos nossos assinantes resolvidas de forma rápida e clara.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-7 h-7 text-blue-500 dark:text-blue-400 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-slate-600 dark:text-slate-300 dark:text-slate-200 shrink-0" aria-hidden="true" />
                  )}
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    aria-labelledby={`faq-button-${idx}`}
                    role="region"
                    className="px-6 pb-6 text-slate-600 dark:text-slate-200 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-4 animate-in fade-in slide-in-from-top-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick FAQ CTA */}
        <div className="mt-6 text-center p-6 bg-slate-100/20 dark:bg-slate-900/20 rounded-2xl border border-slate-300 dark:border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Não encontrou a resposta que procurava?</h4>
            <p className="text-slate-600 dark:text-slate-200 text-xs">Fale diretamente com nossa ouvidoria e equipe de suporte pelo WhatsApp.</p>
          </div>
          <button
            onClick={onContactSupport}
            id="CTA_WHATSAPP_SUPORTE_FAQ"
            data-tracking="CTA_WHATSAPP_SUPORTE"
            className="w-full sm:w-auto h-11 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] shadow-sm active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            Solicitar atendimento pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
