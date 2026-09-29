import type { MetadataRoute } from 'next';
import { treatments } from '@/data/treatments';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const routes = [
    '/',
    '/our-story/',
    '/therapies/',
    '/experience/',
    '/gallery/',
    '/spa-guide/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/cancellation-policy/',
  ];

  const staticEntries = routes.map(route => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
    priority: route === '/' ? 1 : route === '/therapies/' || route === '/contact/' ? 0.9 : 0.7,
  }));

  const treatmentEntries = treatments.map(treatment => ({
    url: new URL(`/therapies/${treatment.slug}/`, siteUrl).toString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...treatmentEntries];
}
