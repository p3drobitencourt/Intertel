import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, FileText, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 relative z-10 pt-16 pb-8 font-sans mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">

            {/* Col 1: About & Social */}
            <div className="space-y-6">
              <Link to="/" className="inline-block" aria-label="Home">
                <img src="/logo-principal.png" alt="Intertel Telecom" className="h-16 md:h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-2 dark:rounded-xl dark:shadow-sm" />
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pr-4">
                Operadora de Telecomunicações mineira focada no fornecimento de internet em ultravelocidade 100% fibra óptica com tecnologia Wi-Fi e alta redundância.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Links Rápidos</h4>
              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li><Link to="/#sobre" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Sobre a Intertel</Link></li>
                <li><Link to="/fibra" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Planos Residenciais</Link></li>
                <li><Link to="/empresas" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Intertel Empresas</Link></li>
                <li><Link to="/#vantagens" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Nossas Vantagens</Link></li>
                <li><Link to="/app" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Aplicativo Assinante</Link></li>
              </ul>
            </div>

            {/* Col 3: Support */}
            <div className="space-y-6">
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
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Seg a Sáb: 08h às 20h</p>
                    <p className="text-xs mt-0.5">Dom e Feriados: 08h às 17h</p>
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

            {/* Col 4: QR Code */}
            <div className="space-y-6">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Fale no WhatsApp</h4>
              
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-700/50 flex flex-col items-center text-center gap-4 w-fit shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  <img src="/qrcode.png" alt="QR Code WhatsApp" className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Escaneie o QR Code</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Para iniciar o chat agora</p>
                </div>
              </div>
            </div>

          </div>

          {/* Institutional Transparency */}
          <div className="pt-8 pb-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display text-center md:text-left">Transparência Institucional</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 text-center md:text-left">Acesse nossos documentos públicos e contratos padrão aprovados pela ANATEL.</p>
            </div>
            <a
              href="contrato.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:border-blue-900 hover:text-blue-900 dark:hover:border-amber-400 dark:hover:text-amber-400 font-bold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FileText className="w-5 h-5" />
              Visualizar Contrato Padrão
            </a>
          </div>

          {/* Legal Notice & Author details */}
          <div className="pt-8 flex flex-col lg:flex-row justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 gap-4 text-center lg:text-left">
            <div>
              <p>© {new Date().getFullYear()} Intertel Telecom. Todos os direitos reservados.</p>
              <p className="mt-1">Regulamentado pela ANATEL • CNPJ: 30.607.069/0001-49</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 font-medium">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Políticas de Privacidade</a>
              <span className="opacity-40">•</span>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contratos e Termos</a>
              <span className="opacity-40">•</span>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Ouvidoria ANATEL</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <Phone className="w-7 h-7 fill-current" />
      </a>
    </>
  );
}
