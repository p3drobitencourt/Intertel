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
  if (gtmId) {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);
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
