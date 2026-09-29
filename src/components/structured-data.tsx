import { business } from '@/data/business';
import { treatments } from '@/data/treatments';
import { displayBrandName, isConfigured } from '@/lib/config';
import { getSiteUrl } from '@/lib/site-url';

export function StructuredData() {
  const siteUrl = getSiteUrl();
  const brandReady = business.brandName !== 'BRAND NAME' && isConfigured(business.brandName);

  if (!siteUrl || !brandReady) return null;

  const brand = displayBrandName(business.brandName);
  const addressReady = isConfigured(business.address) && isConfigured(business.city) && isConfigured(business.state);

  const graph = [
    {
      '@type': 'WebSite',
      '@id': new URL('/#website', siteUrl).toString(),
      url: siteUrl.toString(),
      name: brand,
      description: business.tagline,
    },
    {
      '@type': 'DaySpa',
      '@id': new URL('/#business', siteUrl).toString(),
      name: brand,
      url: siteUrl.toString(),
      description: business.tagline,
      ...(isConfigured(business.phone) ? { telephone: business.phone } : {}),
      ...(isConfigured(business.email) ? { email: business.email } : {}),
      ...(addressReady ? {
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address,
          addressLocality: business.city,
          addressRegion: business.state,
          ...(isConfigured(business.postalCode) ? { postalCode: business.postalCode } : {}),
          addressCountry: business.country,
        },
      } : {}),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Spa therapies',
        itemListElement: treatments.map(treatment => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: treatment.name,
            description: treatment.shortDescription,
            url: new URL(`/therapies/${treatment.slug}/`, siteUrl).toString(),
          },
        })),
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
