/// <reference types="vite/client" />

type IntertelAnalyticsEvent = {
  event: string;
  tracking_id?: string;
  page_path?: string;
  page_title?: string;
} | {
  'gtm.start': number;
  event: string;
};

interface Window {
  dataLayer: IntertelAnalyticsEvent[];
  __INTERTEL_ANALYTICS_INITIALIZED?: boolean;
}
