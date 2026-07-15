export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://njenz.vercel.app/sitemap.xml',
  }
}
