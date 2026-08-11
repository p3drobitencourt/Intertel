import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Search } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
}

export default function HeroSection({ isDarkMode }: HeroSectionProps) {
  const navigate = useNavigate();
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: "Planos que\n",
      titleHighlight: "combinam com você.",
      subtitle: "A melhor conexão 100% fibra ótica com estabilidade e velocidade garantidas para a sua casa ou família.",
      badge: "CONEXÃO RESIDENCIAL",
      imageLight: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", // Glowing network / tech
      imageDark: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "Consultar Planos",
      type: "residential"
    },
    {
      title: "Baixe\n",
      titleHighlight: "nosso APP",
      subtitle: "e pague com mais facilidade. Tenha o controle da sua internet na palma da mão.",
      badge: "COMODIDADE #feitapravc",
      imageLight: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Sleek screen data
      imageDark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "",
      type: "app"
    },
    {
      title: "Soluções\n",
      titleHighlight: "Corporativas",
      subtitle: "IP Dedicado, Suporte Especializado e Monitoramento Proativo que não deixam sua empresa parar.",
      badge: "ALTA PERFORMANCE",
      imageLight: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop", // Datacenter
      imageDark: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
      textClass: "text-blue-950 dark:text-white",
      highlightClass: "text-white dark:text-amber-500 drop-shadow-md dark:drop-shadow-none",
      ctaText: "Falar com Consultor",
      type: "corporate"
    }
  ];

  const nextSlide = () => setHeroSlide((prev) => (prev + 1) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative w-full min-h-[50vh] lg:min-h-[380px] xl:min-h-[420px] flex flex-col justify-center overflow-hidden bg-blue-950 group" id="hero-section">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${heroSlide === idx ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={isDarkMode ? slide.imageDark : slide.imageLight}
              alt={slide.titleHighlight}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4B000] via-[#F4B000]/80 to-transparent dark:from-blue-950 dark:via-blue-950/80 dark:to-transparent" />
          </div>

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-30 flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className={`w-full ${slide.type === 'app' ? 'lg:w-1/2' : 'lg:w-2/3'} space-y-5 lg:space-y-6 text-left py-10 lg:py-0 pb-16 lg:pb-0`}>
              {slide.badge && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-blue-950/10 border border-blue-950/20 text-blue-950 dark:bg-white/10 dark:border-white/20 dark:text-white backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <Sparkles className="w-5 h-5 text-blue-950 dark:text-amber-500" />
                  {slide.badge}
                </div>
              )}

              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black font-display tracking-tight leading-[1.1] drop-shadow-sm dark:drop-shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 ${slide.textClass}`}>
                {slide.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== slide.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                <span className={`${slide.highlightClass} block mt-2`}>{slide.titleHighlight}</span>
              </h1>

              {slide.subtitle && (
                <p className={`text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-sm dark:drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ${slide.textClass === 'text-white' || slide.textClass === 'text-slate-900 dark:text-white' ? 'text-slate-700 dark:text-slate-200' : slide.textClass}`}>
                  {slide.subtitle}
                </p>
              )}

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full">
                {slide.ctaText && (
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        if (slide.type === 'corporate') {
                          window.open("https://api.whatsapp.com/send/?phone=5535999042885&text&type=phone_number&app_absent=0", "_blank", "noopener,noreferrer");
                        } else {
                          navigate("/fibra");
                        }
                      }}
                      aria-label={slide.ctaText}
                      className="h-14 px-10 rounded-full bg-blue-950 hover:bg-blue-900 dark:bg-slate-900 dark:hover:bg-slate-800 text-white font-black tracking-wide uppercase text-sm shadow-[0_10px_40px_rgba(23,37,84,0.3)] hover:shadow-[0_15px_50px_rgba(23,37,84,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 shrink-0 flex items-center justify-center gap-3 border border-blue-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                    >
                      {slide.type === 'corporate' ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                        </svg>
                      ) : (
                        <Search className="w-5 h-5" />
                      )}
                      {slide.ctaText}
                    </button>
                  </div>
                )}

                {slide.type === 'app' && (
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="https://play.google.com/store/apps/details?id=br.com.appdoprovedor.intertel&hl=pt_BR" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-950 px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-950">
                      <svg className="w-8 h-8 fill-blue-950 shrink-0" viewBox="0 0 512 512">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.7 60.7 60.8 60.8 57.9-33.4c15-8.8 25-23.9 25-41.3 0-17.4-10-32.5-25-41.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                      </svg>
                      <div className="text-left leading-tight mt-0.5">
                        <p className="text-[10px] font-bold text-blue-950/70 uppercase tracking-widest mb-0.5">Baixar no</p>
                        <p className="text-base font-black tracking-tight text-blue-950">Google Play</p>
                      </div>
                    </a>
                    <a href="https://apps.apple.com/br/app/intertel-telecom/id1618099722" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-950 px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-950">
                      <svg className="w-8 h-8 fill-blue-950 shrink-0" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.1-77.5-19.1-38.2 0-77.5 21.4-97.5 56.5-40.4 71-10.4 175.7 28.7 232.5 19.1 27.5 41.5 58.2 71.3 57.1 29-1.1 40-18.5 75.1-18.5 35 0 45 18.5 75.1 18.5 30.1 1.1 50.4-27.5 69.5-55.1 22.2-32.2 31.2-63.5 31.5-65.1-1.1-.3-60.6-23.2-61.1-92.7zM281.9 83.3c15-18.5 25.8-44.2 23-70.1-23.2 1-51.4 15.5-68.1 35-14.4 16.7-27.2 42.7-24 68.3 25.8 2 52.8-14.7 69.1-33.2z" />
                      </svg>
                      <div className="text-left leading-tight mt-0.5">
                        <p className="text-[10px] font-bold text-blue-950/70 uppercase tracking-widest mb-0.5">Baixar na</p>
                        <p className="text-base font-black tracking-tight text-blue-950">App Store</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Optional Right Side Content (App Preview) */}
            {slide.type === 'app' && (
              <div className="w-full lg:w-1/2 h-full items-center justify-center lg:justify-end hidden sm:flex pt-10 lg:pt-0 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                {/* Removed broken app-preview.png as background image already has a phone */}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
