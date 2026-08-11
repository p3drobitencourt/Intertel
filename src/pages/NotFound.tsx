import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, ArrowLeft } from 'lucide-react';
import SEO from '../components/layout/SEO';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-zinc-50 dark:bg-slate-900 px-4 py-16">
      <SEO 
        title="Página não encontrada | Intertel Telecom"
        description="A página que você está procurando não existe ou foi movida."
      />
      <div className="text-center max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
            <AlertCircle className="w-32 h-32 text-blue-600 dark:text-blue-500 relative z-10" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-7xl font-black text-slate-900 dark:text-white font-display tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Página não encontrada
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Desculpe, a página que você está tentando acessar não existe, foi removida ou o endereço foi digitado incorretamente.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          
          <Link 
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
          >
            <Home className="w-4 h-4" /> Ir para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}
