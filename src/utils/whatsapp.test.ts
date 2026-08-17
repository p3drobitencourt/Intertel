import { describe, it, expect } from 'vitest';
import { getWhatsappLink } from './whatsapp';
import { company } from '../config/company';

describe('WhatsApp Utils', () => {
  it('generates a generic generic link when no context is provided', () => {
    const link = getWhatsappLink();
    expect(link).toContain(company.whatsappUrl);
    expect(link).toContain('Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20atendente');
  });

  it('generates a context-specific link when serviceContext is provided', () => {
    const link = getWhatsappLink(null, 'Internet Corporativa');
    expect(link).toContain('Internet%20Corporativa');
  });

  it('generates a plan-specific link when plan is provided', () => {
    const plan = { name: 'Intertel 300 Mega' };
    const link = getWhatsappLink(plan, 'Internet Fibra');
    expect(link).toContain('Intertel%20300%20Mega');
    expect(link).toContain('Internet%20Fibra');
  });

  it('uses the correct official phone number from company config', () => {
    const link = getWhatsappLink();
    expect(link).toContain('phone=5535999042885');
  });
});
