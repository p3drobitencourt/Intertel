import { describe, it, expect } from 'vitest';
import { company } from './company';

describe('Company SSOT Config', () => {
  it('contains the basic required structures', () => {
    expect(company).toBeDefined();
    expect(company.name).toBe('Intertel Telecom');
    expect(company.whatsappUrl).toContain('https://api.whatsapp.com');
  });

  it('contains the correct address structure and mapsLink', () => {
    expect(company.address).toBeDefined();
    expect(company.address.street).toBeDefined();
    expect(company.address.mapsLink).toBeDefined();
    expect(company.address.mapsLink).toContain('google.com/maps/dir');
  });

  it('contains schemaIds for SEO', () => {
    expect(company.schemaIds).toBeDefined();
    expect(company.schemaIds.organization).toBeDefined();
    expect(company.schemaIds.localBusiness).toBeDefined();
    expect(company.schemaIds.website).toBeDefined();
  });

  it('contains serviceAreas', () => {
    expect(company.serviceAreas).toBeInstanceOf(Array);
    expect(company.serviceAreas.length).toBeGreaterThan(0);
  });
});
