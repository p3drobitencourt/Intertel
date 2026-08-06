import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-300 dark:border-slate-900/80 relative z-10 pt-8 pb-6 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-4 pb-6 border-b border-slate-300 dark:border-slate-900/80">

            {/* Footer Col 1: About */}
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="inline-block hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300" aria-label="Home">
                <img src="/logo-principal.png" alt="Intertel Telecom" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:backdrop-blur-md dark:p-1.5 dark:rounded-lg dark:shadow-sm" />
              </Link>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Operadora de Telecomunicações mineira focada no fornecimento de internet em ultravelocidade 100% fibra óptica com tecnologia Wi-Fi e alta redundância. Conectando pessoas e corporações com solidez técnica.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-200">
                <span>CNPJ: 30.607.069/0001-49</span>
              </div>
            </div>

            {/* Footer Col 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Ligações Rápidas</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 dark:text-slate-200">
                <li><Link to="/#sobre" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sobre a Intertel</Link></li>
                <li><Link to="/fibra" className="hover:text-slate-900 dark:hover:text-white transition-colors">Planos Residenciais</Link></li>
                <li><Link to="/empresas" className="hover:text-slate-900 dark:hover:text-white transition-colors">Intertel Empresas</Link></li>
                <li><Link to="/#vantagens" className="hover:text-slate-900 dark:hover:text-white transition-colors">Nossas Vantagens</Link></li>
                <li><Link to="/app" className="hover:text-slate-900 dark:hover:text-white transition-colors">Aplicativo Assinante</Link></li>
              </ul>
            </div>

            {/* Footer Col 3: Support / Ombudsperson */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Atendimento & Ouvidoria</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <div>
                    <p className="text-slate-600 dark:text-slate-200 font-bold">(35) 99904-2885</p>
                    <p className="text-[10px]">WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:noc@interteltelecom.net.br', '_blank'); }} className="text-slate-600 dark:text-slate-200 font-bold hover:text-blue-600 dark:hover:text-amber-400 hover:underline break-all">noc@interteltelecom.net.br</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:financeiro@interteltelecom.net.br', '_blank'); }} className="text-slate-600 dark:text-slate-200 font-bold hover:text-blue-600 dark:hover:text-amber-400 hover:underline break-all">financeiro@interteltelecom.net.br</a>
                    <p className="text-[10px]">E-mails</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <div>
                    <p className="text-slate-600 dark:text-slate-200">São João da Mata - MG</p>
                    <p className="text-[10px]">Rua Maria Onilia Vieira, 249, Centro</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Footer Col 4: Social / Institutional Logos */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest font-display">Horário de Atendimento</h4>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Callcenter:</p>
                  <p>Seg a Sáb: 08h às 20h</p>
                  <p>Domingos e Feriados: 08h às 17h</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Presencial:</p>
                  <p>Seg a Sex: 08h às 17h</p>

                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 w-fit hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group">
                  <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                    <img src="/qrcode.png" alt="QR Code App Intertel" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="text-xs pr-2">
                    <p className="font-bold text-slate-800 dark:text-slate-200">Fale no WhatsApp</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px]">Escaneie para iniciar chat</p>
                  </div>
                </div>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-slate-800 hover:bg-[#25D366] hover:text-white text-slate-600 dark:text-slate-300 dark:text-slate-200 flex items-center justify-center transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Transparency */}
        <div className="pt-8 pb-6 border-b border-slate-300 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest font-display">Transparência Institucional</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Acesse nossos documentos públicos e contratos padrão aprovados pela ANATEL.</p>
          </div>
          <a
            href="contrato.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 font-bold transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <FileText className="w-5 h-5" />
            Visualizar Contrato Padrão
          </a>
        </div>

        {/* Legal Notice & Authour details */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-600 dark:text-slate-200 gap-4">
          <div>
            <p>© {new Date().getFullYear()} Intertel Telecom. Todos os direitos reservados.</p>
            <p className="mt-1">Regulamentado pela ANATEL • CNPJ: 30.607.069/0001-49 • São João da Mata, MG</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:underline">Contratos e Termos</a>
            <span>•</span>
            <a href="#" className="hover:underline">Ouvidoria ANATEL</a>
          </div>
        </div>

      </div>
    </footer>

    {/* Floating WhatsApp Button */}
    <a 
      href="https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      <Phone className="w-8 h-8 fill-current" />
    </a>
    </>
  );
}
