import { company } from'../config/company';

export const getWhatsappLink = (plan: any = null, serviceContext?: string) => {
 let msg ="Olá! Gostaria de falar com um atendente sobre os planos de internet.";
 
 if (serviceContext) {
 msg =`Olá! Tenho interesse em ${serviceContext}.`;
 }
 
 if (plan && plan.name) {
 const contextStr = serviceContext ?` de ${serviceContext}` :' da Intertel';
 msg =`Olá! Tenho interesse no plano ${plan.name}${contextStr}.`;
 }
 
 const encodedMsg = encodeURIComponent(msg);
 return`${company.whatsappUrl}&text=${encodedMsg}&type=phone_number&app_absent=0`;
};

export const startOnboarding = (plan: any = null, serviceContext?: string) => {
 window.open(getWhatsappLink(plan, serviceContext),"_blank","noopener,noreferrer");
};
