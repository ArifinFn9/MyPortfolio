import { getMessages } from 'next-intl/server';

export async function getPageMetadata(locale, path, titleKey) {
  const messages = await getMessages();
  const meta = messages.metadata;
  
  const pageTitle = titleKey ? messages.navbar[titleKey] : null;
  const title = pageTitle ? `${pageTitle} | ${meta.title}` : meta.title;

  return {
    title,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        id: `/id${path}`,
        en: `/en${path}`,
        'x-default': path === '' ? '/' : path,
      },
    },
    openGraph: {
      title,
      url: `https://njenz.vercel.app/${locale}${path}`,
    },
  };
}
