import React, { useEffect, useState } from 'react';
import { FileText, Download, Shield, Info } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Contrato() {
  const [hasPdf, setHasPdf] = useState<boolean | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Verifica se o arquivo contrato.pdf está disponível na rota pública
    fetch('/contrato.pdf', { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          setHasPdf(true);
        } else {
          setHasPdf(false);
        }
      })
      .catch(() => {
        setHasPdf(false);
      });
  }, []);

  return (
    <>
      <SEO 
        title="Contratos e Termos | Intertel Telecom"
        description="Acesse os contratos padrão e termos de uso dos serviços da Intertel Telecom."
        canonical="https://interteltelecom.net.br/contrato"
      />
      <div className="min-h-[calc(100vh-6rem)] bg-zinc-50 dark:bg-slate-900 font-sans pt-10 md:pt-16 pb-20 selection:bg-amber-500/30 selection:text-amber-900 text-slate-900 dark:text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-4">
              Contratos e Termos
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Transparência e compromisso em primeiro lugar. Acesse nossos termos de uso e os modelos de contratos de prestação de serviços.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-10 transition-all hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Contrato de Prestação de Serviços (Padrão)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Documento oficial descrevendo os direitos e deveres na prestação do serviço de conexão à internet, SLAs, manutenções e condições comerciais gerais.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  {hasPdf === null ? (
                    <div className="h-12 flex items-center gap-3 text-slate-400 animate-pulse text-sm font-medium">
                      <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 border-t-transparent dark:border-t-transparent rounded-full animate-spin" />
                      Verificando disponibilidade do documento...
                    </div>
                  ) : hasPdf === true ? (
                    <a 
                      href="/contrato.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-amber-400 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                    >
                      <Download className="w-4 h-4" /> Baixar Contrato Padrão
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium">
                      <Info className="w-5 h-5 text-blue-500" />
                      Contrato padrão disponível em breve.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2 uppercase tracking-widest">Informação Importante</h4>
            <p className="text-sm text-blue-700 dark:text-blue-200/70 leading-relaxed">
              O contrato padrão serve como referência para os termos de uso gerais. O contrato assinado e válido para a sua assinatura pode conter condições comerciais específicas e está sempre disponível por meio do nosso aplicativo ou solicitando diretamente à Central de Atendimento.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
