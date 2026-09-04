import { company } from'../config/company';

export const getWhatsappLink = (plan: any = null, serviceContext?: string, customMessage?: string) => {
  let msg = customMessage || "Olá! Gostaria de falar com um atendente sobre os planos de internet.";
 
  if (!customMessage && serviceContext) {
    msg = `Olá! Tenho interesse em ${serviceContext}.`;
  }
 
  if (!customMessage && plan && plan.name) {
    const contextStr = serviceContext ? ` de ${serviceContext}` : ' da Intertel';
    msg = `Olá! Tenho interesse no plano ${plan.name}${contextStr}.`;
  }
 
 const encodedMsg = encodeURIComponent(msg);
 return`${company.whatsappUrl}&text=${encodedMsg}&type=phone_number&app_absent=0`;
};

export const startOnboarding = (plan: any = null, serviceContext?: string, customMessage?: string) => {
  window.open(getWhatsappLink(plan, serviceContext, customMessage), "_blank", "noopener,noreferrer");
};
