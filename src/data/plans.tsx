import React, { ReactNode } from "react";

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
  name: "Bebanca",
  icon: <BebancaIcon />,
  bg: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30",
  linkApple: "https://apps.apple.com/br/app/bebanca/id1349933503",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca"
};

export const beducaSva: Sva = {
  name: "Beduca",
  icon: <BeeducaIcon />,
  bg: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
  linkApple: "https://apps.apple.com/br/app/beeduca/id6477542668",
  linkAndroid: "https://play.google.com/store/apps/details?id=com.bebanca.ensina"
};

export const radioPlansData: Plan[] = [
  {
    id: "plan-radio-10m",
    name: "Plano Rádio 10M",
    speed: "10 Mega",
    priceMonthly: 69.90,
    priceYearlyMonthly: 69.90,
    isPopular: false,
    description: "Conexão de entrada via rádio para regiões rurais.",
    features: [
      "Velocidade de Download: 10 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-radio-15m",
    name: "Plano Rádio 15M",
    speed: "15 Mega",
    priceMonthly: 89.90,
    priceYearlyMonthly: 89.90,
    isPopular: true,
    description: "Ideal para navegação diária e redes sociais em áreas rurais.",
    features: [
      "Velocidade de Download: 15 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-radio-20m",
    name: "Plano Rádio 20M",
    speed: "20 Mega",
    priceMonthly: 109.90,
    priceYearlyMonthly: 109.90,
    isPopular: false,
    description: "Máxima performance via rádio.",
    features: [
      "Velocidade de Download: 20 Mbps",
      "Roteador Wi-Fi Grátis",
      "Suporte Técnico Especializado",
    ],
    svas: [bebancaSva, beducaSva]
  }
];

export const plansData: Plan[] = [
  {
    id: "plan-300m",
    name: "Plano Conexão Inicial",
    speed: "300 Mega",
    priceMonthly: 79.90,
    priceYearlyMonthly: 79.90,
    isPopular: false,
    description: "Ideal para navegação diária, redes sociais e streaming em qualidade padrão.",
    features: [
      "Velocidade de Download: 300 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Digital",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-500m",
    name: "Plano Conexão Família",
    speed: "500 Mega",
    priceMonthly: 89.90,
    priceYearlyMonthly: 89.90,
    isPopular: false,
    description: "Perfeito para múltiplos dispositivos, home office e streaming em HD para toda a família.",
    features: [
      "Velocidade de Download: 500 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Premium",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-600m",
    name: "Plano Ultra Performance",
    speed: "600 Mega",
    priceMonthly: 99.90,
    priceYearlyMonthly: 99.90,
    isPopular: true,
    description: "A melhor experiência para alta demanda, jogos online estáveis e streaming 4K.",
    features: [
      "Velocidade de Download: 600 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Prioritário",
    ],
    svas: [bebancaSva, beducaSva]
  },
  {
    id: "plan-900m",
    name: "Plano Gamer",
    speed: "900 Mega",
    priceMonthly: 119.90,
    priceYearlyMonthly: 119.90,
    isPopular: false,
    description: "Desempenho máximo para gamers, baixa latência e streaming 4K/8K sem interrupções.",
    features: [
      "Velocidade de Download: 900 Mbps",
      "Simetria de Conexão",
      "Roteador Wi-Fi Grátis",
      "Sem Taxa de Instalação",
      "Suporte Técnico Prioritário",
    ],
    svas: [bebancaSva, beducaSva]
  }
];
