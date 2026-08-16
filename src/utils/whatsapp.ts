import { company } from '../config/company';

export const startOnboarding = (plan: any = null, cepCode?: string) => {
  let msg = "Olá! Gostaria de falar com um atendente sobre os planos de internet.";
  
  if (plan && plan.name) {
    msg = `Olá! Tenho interesse no plano de ${plan.name} da Intertel.`;
  }
  
  const encodedMsg = encodeURIComponent(msg);
  window.open(
    `${company.whatsappUrl}&text=${encodedMsg}&type=phone_number&app_absent=0`, 
    "_blank", 
    "noopener,noreferrer"
  );
};
