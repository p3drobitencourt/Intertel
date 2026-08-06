
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Briefcase, MessageSquare, Globe, Shield, Layers, Users, Check,
  ChevronDown, User, MapPin, Search, ArrowRight, Instagram, Facebook, Cpu, CheckCircle2
} from 'lucide-react';

export default function Empresas() {
  const [b2bName, setB2bName] = useState("");
  const [b2bCompany, setB2bCompany] = useState("");
  const [b2bEmail, setB2bEmail] = useState("");
  const [b2bPhone, setB2bPhone] = useState("");
  const [b2bSolution, setB2bSolution] = useState("dedicado");

  const handleB2bSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!b2bName || !b2bCompany || !b2bEmail || !b2bPhone) return;
    
    const msg = `Olá! Gostaria de falar com um consultor técnico sobre soluções empresariais.\n\n*Nome:* ${b2bName}\n*Empresa:* ${b2bCompany}\n*E-mail:* ${b2bEmail}\n*WhatsApp:* ${b2bPhone}\n*Necessidade:* ${b2bSolution}`;
    window.open(`https://api.whatsapp.com/send/?phone=5535999042885&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`, "_blank", "noopener,noreferrer");
    
    setB2bName("");
    setB2bCompany("");
    setB2bEmail("");
    setB2bPhone("");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <main>
        <section className="py-16 md:py-20 bg-[#F8FAFC] dark:bg-slate-900 relative z-10" id="planos-empresariais">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-slate-900 dark:text-white relative overflow-hidden" id="para-empresas">
              
              {/* Subtle engineering lines for high tech B2B feel */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
              
              <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Soluções Corporativas
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.15]" id="b2b-title">
                  Intertel Empresas: A infraestrutura que garante a <span className="text-blue-600 dark:text-blue-400">continuidade do seu negócio.</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                  Conectividade de missão crítica, IP Dedicado e estabilidade inegociável para empresas que não podem parar.
                </p>
              </div>

              {/* Grid 2x2 of Corporate Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16" id="b2b-benefits-grid">
                
                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-amber-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 border border-amber-200 dark:border-amber-800/50 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <Globe className="w-8 h-8 text-amber-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-3">IP Dedicado e Fixo</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    Ideal para servidores locais, sistemas de câmeras de segurança e acesso remoto (VPN) sem interrupções.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-amber-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 border border-amber-200 dark:border-amber-800/50 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <Shield className="w-8 h-8 text-amber-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-3">SLA de 99,9% e Suporte VIP</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    Garantia contratual de disponibilidade e tempo de resposta técnico prioritário em até 4 horas.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-amber-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 border border-amber-200 dark:border-amber-800/50 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-8 h-8 text-amber-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-3">Interligação LAN-to-LAN</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    Conecte matriz e filiais de forma transparente na camada 2, com total segurança e tráfego simétrico.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-amber-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 border border-amber-200 dark:border-amber-800/50 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <Cpu className="w-8 h-8 text-amber-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-3">Banda 100% Simétrica</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    A mesma velocidade para download e upload, essencial para backups em nuvem e videoconferências em alta definição.
                  </p>
                </div>

              </div>

              {/* Planos Empresariais Cards */}
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display">Planos Corporativos</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Escolha a velocidade ideal para o tamanho do seu negócio.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {[
                    { speed: "200", name: "Empresarial 200M", desc: "Ideal para pequenos escritórios que precisam de estabilidade e rapidez." },
                    { speed: "400", name: "Empresarial 400M", desc: "Perfeito para médias empresas com uso intenso de sistemas em nuvem." },
                    { speed: "800", name: "Empresarial 800M", desc: "A máxima performance para quem não pode ter gargalos de rede." }
                  ].map((plan, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Briefcase className="w-24 h-24 text-slate-900 dark:text-white" />
                      </div>
                      
                      <div className="relative z-10 flex-grow">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[40px]">{plan.desc}</p>
                        
                        <div className="my-6">
                          <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                            <span className="text-5xl font-black font-display tracking-tighter">{plan.speed}</span>
                            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Mega + Wi-Fi</span>
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mt-1">Sob Consulta</p>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {["SLA de 4 horas", "Garantia de banda", "Simetria de banda", "Suporte VIP 24/7"].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="relative z-10 mt-auto">
                        <a href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+saber+os+valores+do+Plano+Empresarial&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-2xl font-bold transition-all duration-300 bg-slate-100 text-slate-900 hover:bg-amber-500 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-amber-500 shadow-sm hover:shadow-lg">
                          Consultar Valor
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate CTA Banner */}
              <div className="text-center bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-800 dark:to-slate-900 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-2xl md:text-4xl font-black text-white font-display mb-8">
                    Pronto para evoluir a conectividade da sua empresa?
                  </h3>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5535999042885&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+executivo+de+contas+sobre+planos+B2B&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#F4B000] text-slate-900 px-10 py-5 rounded-full text-lg md:text-xl font-black uppercase tracking-wider hover:bg-amber-400 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
                  >
                    Falar com um Executivo de Contas
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
