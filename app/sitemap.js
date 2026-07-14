import { projects } from '@/data/projects';

export default async function sitemap() {
  const baseUrl = 'https://njenz.vercel.app';
  const locales = ['id', 'en'];

  // Main pages of your portfolio
  const routes = ['', '/about', '/skills', '/experience', '/projects', '/contact'];
  const sitemapEntries = [];

  // Generate sitemap for static pages in both locales
  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  // Generate sitemap for dynamic project detail pages
  projects.forEach((project) => {
    if (project.hasDetails) {
      locales.forEach((locale) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/projects/${project.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    }
  });

  return sitemapEntries;
}
