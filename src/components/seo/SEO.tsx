import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export const DEFAULT_OG_IMAGE = 'https://interteltelecom.net.br/logo-principal.png';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  schema, 
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  imageWidth,
  imageHeight,
  imageAlt = 'Intertel Telecom',
  noindex = false
}: SEOProps) {
  const siteName = 'Intertel Telecom';
  // Keep title exactly as passed or append if it's already full?
  // The prompt says "title atual; se existe duplicidade; se está claro".
  // The previous implementation appended ` | Intertel Telecom` if we just passed the first part.
  // We'll keep the previous logic, but let's check if the title already includes Intertel Telecom to avoid "Intertel Telecom | Intertel Telecom | Intertel Telecom".
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      {!noindex ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
