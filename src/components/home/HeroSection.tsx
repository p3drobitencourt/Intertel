import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Search, Building2, Smartphone, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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
      ctaText: "Conhecer o App",
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
      ctaText: "Conhecer Soluções",
      type: "corporate"
    }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  const nextSlide = () => setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (idx: number) => setHeroSlide(idx);

  const isAutoPlayPaused = isHovered || isFocused || isManuallyPaused;

  useEffect(() => {
    if (isAutoPlayPaused) return;

    let timer: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (!timer) {
        timer = setInterval(() => {
          setHeroSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
      }
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    if (!document.hidden) {
      startTimer();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopTimer();
    };
  }, [isAutoPlayPaused, heroSlides.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <section 
      className="relative w-full min-h-[70vh] py-12 lg:py-16 flex flex-col justify-center overflow-hidden bg-blue-950 group outline-none" 
      id="hero-section"
      aria-roledescription="carousel"
      aria-label="Destaques"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
    >
      <div 
        aria-live={isAutoPlayPaused ? "polite" : "off"}
        aria-atomic="false"
        className="relative w-full h-full"
      >
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} de ${heroSlides.length}`}
            aria-hidden={heroSlide !== idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${heroSlide === idx ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
          >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={isDarkMode ? slide.imageDark : slide.imageLight}
              srcSet={`
                ${(isDarkMode ? slide.imageDark : slide.imageLight).replace('w=2000', 'w=640')} 640w,
                ${(isDarkMode ? slide.imageDark : slide.imageLight).replace('w=2000', 'w=1024')} 1024w,
                ${(isDarkMode ? slide.imageDark : slide.imageLight).replace('w=2000', 'w=1920')} 1920w
              `}
              sizes="100vw"
              alt={slide.titleHighlight}
              className="w-full h-full object-cover object-center"
              {...(idx === 0 ? { fetchPriority: "high", loading: "eager" } : { loading: "lazy" })}
            />
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4B000] via-[#F4B000]/80 to-transparent dark:from-blue-950 dark:via-blue-950/80 dark:to-transparent" />
          </div>

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-30 flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className={`w-full ${slide.type === 'app' ? 'lg:w-1/2' : 'lg:w-2/3'} space-y-5 lg:space-y-6 text-left`}>
              {slide.badge && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-blue-950/10 border border-blue-950/20 text-blue-950 dark:bg-white/10 dark:border-white/20 dark:text-white backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <Sparkles className="w-5 h-5 text-blue-950 dark:text-amber-500" aria-hidden="true" />
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
                          navigate("/empresas");
                        } else if (slide.type === 'app') {
                          document.getElementById('app-promo')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate("/fibra");
                        }
                      }}
                      aria-label={slide.ctaText}
                      id={`CTA_HERO_${slide.type.toUpperCase()}`}
                      data-tracking={`CTA_HERO_${slide.type.toUpperCase()}`}
                      className="h-14 px-10 rounded-full bg-blue-950 hover:bg-blue-900 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-900 font-black tracking-wide uppercase text-sm shadow-[0_10px_40px_rgba(23,37,84,0.3)] hover:shadow-[0_15px_50px_rgba(23,37,84,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 shrink-0 flex items-center justify-center gap-3 border border-blue-900/50 dark:border-amber-400/50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                    >
                      {slide.type === 'corporate' ? (
                        <Building2 className="w-5 h-5" aria-hidden="true" />
                      ) : slide.type === 'app' ? (
                        <Smartphone className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <Search className="w-5 h-5" aria-hidden="true" />
                      )}
                      {slide.ctaText}
                    </button>
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
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 lg:gap-4 bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 dark:border-white/5 shadow-xl">
        <button 
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="text-white hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full p-1 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
        </button>
        
        <div className="flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Mostrar slide ${idx + 1}`}
              aria-current={heroSlide === idx ? "true" : "false"}
              className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${heroSlide === idx ? 'bg-amber-500 w-6 lg:w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          aria-label="Próximo slide"
          className="text-white hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full p-1 transition-colors"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
        </button>

        <div className="w-[1px] h-5 bg-white/20 mx-1" aria-hidden="true" />

        <button
          onClick={() => setIsManuallyPaused(!isManuallyPaused)}
          aria-label={isManuallyPaused ? "Retomar apresentação" : "Pausar apresentação"}
          className="text-white hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full p-1 transition-colors"
        >
          {isManuallyPaused ? (
            <Play className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
          ) : (
            <Pause className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
