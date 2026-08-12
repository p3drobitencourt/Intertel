import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, FileText, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 relative z-10 pt-16 pb-8 font-sans mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">

            {/* Col 1: About & Social */}
            <div className="space-y-6 lg:col-span-3">
              <Link to="/" className="inline-block" aria-label="Home">
                <img src="/logo-principal.png" alt="Intertel Telecom" loading="lazy" className="h-14 md:h-16 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-slate-900 dark:p-1.5 dark:rounded-xl" />
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pr-4">
                Operadora de Telecomunicações mineira focada no fornecimento de internet em ultravelocidade 100% fibra óptica com tecnologia Wi-Fi e alta redundância.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Instagram Oficial */}
                <a 
                  href="https://www.instagram.com/interteltelecom/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Intertel"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Instagram className="w-5 h-5" />
                </a>  
                <a 
                  href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp da Intertel"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-6 lg:col-span-2">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Links Rápidos</h4>
              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li><Link to="/#sobre" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Sobre a Intertel</Link></li>
                <li><Link to="/fibra" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Planos Residenciais</Link></li>
                <li><Link to="/empresas" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Intertel Empresas</Link></li>
                <li><Link to="/#vantagens" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Nossas Vantagens</Link></li>
                <li><Link to="/app" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Aplicativo Assinante</Link></li>
              </ul>
            </div>

            {/* Coluna 3 - Institucional */}
            <div className="md:col-span-1 lg:col-span-2">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display mb-6">Institucional</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/contrato" 
                    className="text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 inline-block text-sm"
                  >
                    Contratos e Termos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Support */}
            <div className="space-y-6 lg:col-span-3">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Atendimento</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">(35) 99904-2885</p>
                    <p className="text-xs mt-0.5">WhatsApp e Ligação</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1.5">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Presencial</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Seg a Sex: 08h às 17h</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Callcenter</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Seg a Sex: 08h às 20h</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Sáb, Dom e Feriados: 08h às 17h</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:noc@interteltelecom.net.br" className="hover:text-amber-500 transition-colors truncate">noc@interteltelecom.net.br</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">São João da Mata - MG</p>
                    <p className="text-xs mt-0.5 leading-relaxed">Rua Maria Onilia Vieira, 249</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 5: QR Code */}
            <div className="space-y-6 lg:col-span-2">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Fale no WhatsApp</h4>
              
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-700/50 flex flex-col items-center text-center gap-4 w-fit shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  <img src="/qrcode.png" alt="QR Code WhatsApp" loading="lazy" className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Escaneie o QR Code</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Para iniciar o chat agora</p>
                </div>
              </div>
            </div>

          </div>

          {/* Legal Notice & Author details */}
          <div className="pt-8 flex flex-col lg:flex-row justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 gap-4 text-center lg:text-left">
            <div>
              <p>© {new Date().getFullYear()} Intertel Telecom. Todos os direitos reservados.</p>
              <p className="mt-1">Regulamentado pela ANATEL • CNPJ: 30.607.069/0001-49</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#25D366] group"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping opacity-25"></span>
        <Phone className="w-7 h-7 fill-current" />
      </a>
    </>
  );
}
