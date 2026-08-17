import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { initAnalytics, pushToDataLayer } from './analytics';

describe('Analytics Utils', () => {
  beforeEach(() => {
    // Reset global state
    window.dataLayer = [];
    window.__INTERTEL_ANALYTICS_INITIALIZED = false;
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    vi.stubEnv('VITE_GTM_ID', '');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('initializes analytics and creates script when GTM ID is valid', () => {
    vi.stubEnv('VITE_GTM_ID', 'GTM-TEST1234');
    
    initAnalytics();

    expect(window.__INTERTEL_ANALYTICS_INITIALIZED).toBe(true);
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(1);
    expect(scripts[0].src).toBe('https://www.googletagmanager.com/gtm.js?id=GTM-TEST1234');
    
    expect(window.dataLayer.length).toBe(1);
    expect(window.dataLayer[0].event).toBe('gtm.js');
  });

  it('does not create script when GTM ID is invalid', () => {
    vi.stubEnv('VITE_GTM_ID', 'INVALID-ID'); // should be GTM-...
    
    initAnalytics();

    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(0);
  });

  it('pushes custom events to dataLayer', () => {
    pushToDataLayer({ event: 'intertel_cta_click', tracking_id: 'CTA_TEST' });
    expect(window.dataLayer[0]).toEqual({ event: 'intertel_cta_click', tracking_id: 'CTA_TEST' });
  });

  it('is idempotent and prevents double initialization', () => {
    vi.stubEnv('VITE_GTM_ID', 'GTM-TEST1234');
    
    initAnalytics();
    initAnalytics(); // Second call

    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(1); // Only one script should exist
  });
});
