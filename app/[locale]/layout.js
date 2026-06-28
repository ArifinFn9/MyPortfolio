import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const meta = messages.metadata;

  return {
    metadataBase: new URL('https://arifinfn9.vercel.app'),
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      url: 'https://arifinfn9.vercel.app',
      siteName: locale === 'id' ? 'Portofolio Arifin' : 'Arifin Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white antialiased selection:bg-white/30 selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <AnimatedBackground />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
