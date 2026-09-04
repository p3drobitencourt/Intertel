import React, { ReactNode } from"react";

export interface Sva {
 name: string;
 icon: ReactNode;
 bg: string;
 linkApple?: string;
 linkAndroid?: string;
}

export interface Plan {
 id: string;
 name: string;
 speed: string;
 priceMonthly: number;
 priceYearlyMonthly: number;
 isPopular: boolean;
 features: string[];
 svas: Sva[];
 description: string;
}

export const BebancaIcon = () => (
 <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
 <rect width="100" height="100" rx="20" fill="#facc15" />
 <rect x="25" y="25" width="35" height="15" fill="white" />
 <path d="M65 25 L80 32.5 L65 40 Z" fill="white" />
 <rect x="25" y="50" width="50" height="10" fill="white" />
 <rect x="25" y="65" width="50" height="10" fill="white" />
 </svg>
);

export const BeeducaIcon = () => (
 <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
 <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#334155" />
 <polygon points="50,25 70,35 50,45 30,35" fill="#10b981" />
 <polyline points="25,48 50,60 75,48" fill="none" stroke="#facc15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
 <polyline points="25,68 50,80 75,68" fill="none" stroke="#facc15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
 <path d="M72 45 L72 65" stroke="#334155" strokeWidth="4" />
 <circle cx="72" cy="70" r="5" fill="#334155" />
 </svg>
);

export const bebancaSva: Sva = {
 name:"InterBanca",
 icon: <BebancaIcon />,
 bg:"bg-amber-100 text-amber-700 border border-amber-200",
 linkApple:"https://apps.apple.com/br/app/bebanca/id1349933503",
 linkAndroid:"https://play.google.com/store/apps/details?id=com.bebanca"
};

export const beducaSva: Sva = {
 name:"InterEduca",
 icon: <BeeducaIcon />,
 bg:"bg-slate-100 text-slate-800 border border-slate-200",
 linkApple:"https://apps.apple.com/br/app/beeduca/id6477542668",
 linkAndroid:"https://play.google.com/store/apps/details?id=com.bebanca.ensina"
};

export const radioPlansData: Plan[] = [
 {
 id:"plan-radio-conecta",
 name:"Intertel Conecta",
 speed:"10 Mega",
 priceMonthly: 0,
 priceYearlyMonthly: 0,
 isPopular: false,
 description:"Conexão de entrada via rádio para regiões rurais.",
 features: [
  "Internet Estável via Rádio",
  "Roteador Wi-Fi Grátis",
  "InterEduca",
  "InterBanca",
  "Suporte Técnico Especializado",
 ],
 svas: [bebancaSva, beducaSva]
 },
 {
 id:"plan-radio-turbo",
 name:"Intertel Turbo",
 speed:"15 Mega",
 priceMonthly: 0,
 priceYearlyMonthly: 0,
 isPopular: true,
 description:"Ideal para navegação diária e redes sociais em áreas rurais.",
 features: [
  "Internet Estável via Rádio",
  "Roteador Wi-Fi Grátis",
  "InterEduca",
  "InterBanca",
  "Suporte Técnico Especializado",
 ],
 svas: [bebancaSva, beducaSva]
 },
 {
 id:"plan-radio-max",
 name:"Intertel Max",
 speed:"20 Mega",
 priceMonthly: 0,
 priceYearlyMonthly: 0,
 isPopular: false,
 description:"Máxima performance via rádio.",
 features: [
  "Internet Estável via Rádio",
  "Roteador Wi-Fi Grátis",
  "InterEduca",
  "InterBanca",
  "Suporte Técnico Especializado",
 ],
 svas: [bebancaSva, beducaSva]
 }
];

export const plansData: Plan[] = [
  {
    id: "plan-essencial",
    name: "Intertel Essencial",
    speed: "450 Mega",
    priceMonthly: 0,
    priceYearlyMonthly: 0,
    isPopular: false,
    description: "Ideal para navegação diária, redes sociais e streaming em qualidade padrão.",
    features: [
      "Internet 100% Fibra Óptica",
      "Roteador Wi-Fi Grátis",
      "InterEduca",
      "InterBanca",
      "Instalação Grátis",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-familia",
    name: "Intertel Família",
    speed: "600 Mega",
    priceMonthly: 0,
    priceYearlyMonthly: 0,
    isPopular: false,
    description: "Perfeito para múltiplos dispositivos, home office e streaming em HD para toda a família.",
    features: [
      "Internet 100% Fibra Óptica",
      "Roteador Wi-Fi Grátis",
      "InterEduca",
      "InterBanca",
      "Instalação Grátis",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-ultra",
    name: "Intertel Ultra",
    speed: "800 Mega",
    priceMonthly: 0,
    priceYearlyMonthly: 0,
    isPopular: true,
    description: "A melhor experiência para alta demanda, jogos online estáveis e streaming 4K.",
    features: [
      "Internet 100% Fibra Óptica",
      "Roteador Wi-Fi 6 Grátis",
      "InterEduca",
      "InterBanca",
      "Instalação Grátis",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-gamer",
    name: "Intertel Gamer",
    speed: "1 Giga",
    priceMonthly: 0,
    priceYearlyMonthly: 0,
    isPopular: false,
    description: "Desempenho máximo para gamers, baixa latência e streaming 4K/8K sem interrupções.",
    features: [
      "Internet 100% Fibra Óptica",
      "Roteador Wi-Fi 6 Grátis",
      "InterEduca",
      "InterBanca",
      "Instalação Grátis",
    ],
    svas: [bebancaSva, beducaSva]
  }
];
