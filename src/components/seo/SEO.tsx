import React from 'react';
import { Helmet } from 'react-helmet-async';
import { company } from '../../config/company';

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

export const DEFAULT_OG_IMAGE = 'https://interteltelecom.net.br/og-image.jpg';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  schema, 
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  imageWidth = '1200',
  imageHeight = '630',
  imageAlt = 'Intertel Telecom — Internet Fibra Óptica',
  noindex = false
}: SEOProps) {
  const siteName = 'Intertel Telecom';
  // Keep title exactly as passed or append if it's already full?
  // The prompt says "title atual; se existe duplicidade; se está claro".
  // The previous implementation appended ` | Intertel Telecom` if we just passed the first part.
  // We'll keep the previous logic, but let's check if the title already includes Intertel Telecom to avoid "Intertel Telecom | Intertel Telecom | Intertel Telecom".
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const GLOBAL_ORG_ID = company.schemaIds.organization;
  const GLOBAL_WEBSITE_ID = company.schemaIds.website;

  const baseSchemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": GLOBAL_ORG_ID,
      "name": company.name,
      "url": company.website,
      "logo": company.logo,
      "telephone": company.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": company.address.street,
        "addressLocality": company.address.city,
        "addressRegion": company.address.state,
        "postalCode": company.address.postalCode,
        "addressCountry": company.address.country
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": company.schemaIds.localBusiness,
      "name": company.name,
      "image": company.localBusinessImage,
      "url": company.website,
      "telephone": company.phone,
      "parentOrganization": { "@id": GLOBAL_ORG_ID },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": company.address.street,
        "addressLocality": company.address.city,
        "addressRegion": company.address.state,
        "postalCode": company.address.postalCode,
        "addressCountry": company.address.country
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": GLOBAL_WEBSITE_ID,
      "name": company.name,
      "url": company.website,
      "publisher": { "@id": GLOBAL_ORG_ID }
    }
  ];

  // If a canonical URL is provided, generate a BreadcrumbList based on its path.
  // We can derive the path from the canonical URL, assuming it starts with https://interteltelecom.net.br
  if (canonical && canonical !== "https://interteltelecom.net.br" && canonical !== "https://interteltelecom.net.br/") {
    try {
      const urlObj = new URL(canonical);
      const pathSegments = urlObj.pathname.split('/').filter(Boolean);
      
      if (pathSegments.length > 0) {
        const itemListElement = [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://interteltelecom.net.br"
          }
        ];

        let currentPath = "https://interteltelecom.net.br";
        pathSegments.forEach((segment, index) => {
          currentPath += `/${segment}`;
          
          // Format the name slightly better (capitalize first letter, replace hyphens)
          let formattedName = segment.replace(/-/g, ' ');
          formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
          
          // Custom overrides for specific paths
          if (segment === 'lan2lan') formattedName = 'Interligação LAN-to-LAN';
          if (segment === 'app') formattedName = 'App Intertel';
          
          itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": formattedName,
            "item": currentPath
          });
        });

        baseSchemas.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": itemListElement
        });
      }
    } catch (e) {
      // Ignore invalid URLs
    }
  }

  const userSchemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  
  // Clean user schemas of any Organization, LocalBusiness, WebSite if they match global to prevent duplicates
  const finalSchemas = [...baseSchemas, ...userSchemas.filter(s => {
    if (!s) return false;
    const type = (s as any)['@type'];
    return type !== 'Organization' && type !== 'LocalBusiness' && type !== 'WebSite';
  })];

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
      {!noindex && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchemas)}
        </script>
      )}
    </Helmet>
  );
}
