
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // NOTE: I'm assuming your website domain is www.prospeera.com
  // If this is not correct, please update it here.
  const baseUrl = 'https://www.prospeera.com';

  const staticPages = [
    '', // Homepage
    '/about',
    '/services',
    '/case-studies',
    '/contact',
  ];

  const urls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: page === '' ? 1.0 : 0.8,
  }));

  return urls;
}
