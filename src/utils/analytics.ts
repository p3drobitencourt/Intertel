export const pushToDataLayer = (payload: IntertelAnalyticsEvent) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

export const initAnalytics = () => {
  if (typeof window === 'undefined' || window.__INTERTEL_ANALYTICS_INITIALIZED) return;
  window.__INTERTEL_ANALYTICS_INITIALIZED = true;

  window.dataLayer = window.dataLayer || [];

  const gtmId = import.meta.env.VITE_GTM_ID;
  if (gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target || !target.closest) return;

    const trackingElement = target.closest('[data-tracking]');
    if (trackingElement) {
      const trackingId = trackingElement.getAttribute('data-tracking');
      if (trackingId) {
        pushToDataLayer({
          event: 'intertel_cta_click',
          tracking_id: trackingId,
        });
      }
    }
  });
};
