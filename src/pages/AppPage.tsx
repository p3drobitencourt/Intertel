import React, { useEffect } from 'react';
import { Smartphone, FileText, Headphones } from 'lucide-react';
import { BebancaIcon, BeeducaIcon, bebancaSva, beducaSva } from './Home';

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const appScreenshots = [
    "/app-tela1.png",
    "/app-tela2.png",
    "/app-tela3.png"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden text-slate-900 dark:text-white pt-20 md:pt-24">
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900 relative z-10 min-h-[80vh] flex items-center" id="app-intertel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/icone-app.png" alt="App Minha Intertel" className="w-16 h-16 rounded-2xl shadow-lg bg-white p-1" />
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                    <Smartphone className="w-5 h-5" /> App Minha Intertel
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Sua conexão na <br className="hidden md:block" /> <span className="text-blue-600 dark:text-blue-400">palma da mão.</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium max-w-lg leading-relaxed">
                  Gerencie sua internet de forma rápida, fácil e 100% digital. Baixe agora o <strong className="text-slate-900 dark:text-white">App Minha Intertel</strong> e tenha controle total.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">2ª Via de Boletos</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Acesse suas faturas e pague direto do seu celular com segurança.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Suporte Rápido</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Abra chamados técnicos e acompanhe o status em tempo real.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center">
                <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-8 py-4.5 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <svg className="w-8 h-8 fill-white shrink-0" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                  </svg>
                  <div className="text-left leading-tight mt-0.5">
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-0.5">Baixar no</p>
                    <p className="text-base font-black tracking-tight text-white">Google Play</p>
                  </div>
                </a>
                <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-8 py-4.5 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <svg className="w-8 h-8 fill-white shrink-0" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                  </svg>
                  <div className="text-left leading-tight mt-0.5">
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-0.5">Baixar na</p>
                    <p className="text-base font-black tracking-tight text-white">App Store</p>
                  </div>
                </a>

                <div className="hidden lg:flex items-center gap-3 lg:ml-4 bg-white dark:bg-slate-800 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                  <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                    <img src="/qrcode.png" alt="QR Code App Intertel" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-xs pr-2">
                    <p className="font-bold text-slate-800 dark:text-slate-200">Acesse Fácil</p>
                    <p className="text-slate-500 dark:text-slate-400">Escaneie o QR Code</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                  Como acessar seus benefícios
                </h3>

                <div className="space-y-4">
                  {/* Passo 1 */}
                  <div className="flex gap-4 items-start p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200 dark:border-blue-800">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Baixe o App</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">Faça o download nas lojas oficiais clicando nos botões acima.</p>
                    </div>
                  </div>

                  {/* Passo 2 */}
                  <div className="flex gap-4 items-start p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg shrink-0 border border-blue-200 dark:border-blue-800">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Faça Login</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">No campo de acesso, digite apenas o <strong className="text-slate-900 dark:text-slate-200">CPF do titular</strong> do plano.</p>
                    </div>
                  </div>

                  {/* Passo 3 */}
                  <div className="flex gap-4 items-start p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-[#F4B000] text-slate-900 flex items-center justify-center font-black text-lg shrink-0 shadow-lg shadow-amber-500/20 border border-amber-300">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Aproveite os serviços extras!</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                        Para acessar serviços como <a href={bebancaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mx-1 text-amber-600 dark:text-amber-500 font-bold hover:underline"><span className="w-3.5 h-3.5"><BebancaIcon /></span> Bebanca</a> e <a href={beducaSva.linkAndroid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mx-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><span className="w-3.5 h-3.5"><BeeducaIcon /></span> Beduca</a>, selecione <strong>Intertel Telecom</strong> como provedor e use os mesmos dados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 mt-12 md:mt-0">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full" />
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8">
                <div className="flex gap-6 sm:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...appScreenshots, ...appScreenshots].map((src, idx) => (
                    <div key={idx} className="relative w-[180px] sm:w-[220px] shrink-0 hover:-translate-y-4 transition-transform duration-500">
                      <img
                        src={src}
                        alt={`Tela do App Intertel ${idx + 1}`}
                        className="w-full h-auto aspect-[9/19.5] rounded-[2rem] shadow-2xl border-4 border-slate-900/10 dark:border-slate-700/50 object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
